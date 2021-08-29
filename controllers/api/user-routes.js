const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password']}
    })
    .then(databaseUserData => res.json(databaseUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password']},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'post_content', 'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: User,
                    attributes: ['title']
                }
            }
        ]  
    })
    .then(databaseUserData => {
        if (!databaseUserData) {
            res.status(404).json({message: 'No user found with this id'});
            return;
        }
        res.json(databaseUserData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        twitter: req.body.twitter,
        github: req.body.github
    })
    .then(databaseUserData => {
        req.session.save(() => {
            req.session.user_id = databaseUserData.id;
            req.session.username = databaseUserData.username;
            req.session.twitter = databaseUserData.twitter;
            req.session.github = databaseUserData.github;
            req.session.loggedIn = true;

        res.json(databaseUserData);
    })
});
});
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(databaseUserData => {
        if (!databaseUserData) {
            res.status(400).json({message: 'No user found with this email'});
            return;
        }
     const validPassword = databaseUserData.checkPassword(req.body.password);
     if (!validPassword) {
         res.status(400).json({ message: 'Incorrect password!'});
         return;
     }
     req.session.save(() => {
         req.session.user_id = databaseUserData.id;
         req.session.username = databaseUserData.username;
         req.session.twitter = databaseUserData.twitter;
         req.session.github = databaseUserData.github;
         req.session.loggedIn = true;
         res.json({ user: databaseUserData, message: 'You are now logged in'});
     });
     });
    });
    router.post('/logout', (req, res) => {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        }
        else {
            res.status(404).end();
        }
    });
    router.put('/:id', withAuth, (req, res) => {
        User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(databaseUserData => {
            if (!databaseUserData[0]) {
                res.status(404).json({ message: 'no  user found with this id'});
                return;
            }
            res.json(databaseUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });




router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(databasePostData => {
        if (!databasePostData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        res.json(databasePostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
module.exports = router;
