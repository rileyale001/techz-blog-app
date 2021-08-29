const {Comment} = require('../models');
const commentData = [
  {
    post_id: 5,
    comment_text: "A mobile phone is playing music too loud in your area.",
    user_id: 1
  },
  {
    post_id: 4,
    comment_text: "A mobile phone is playing music too loud in your area.",
    user_id: 1
  },
  {
    post_id: 4,
    comment_text: "A mobile phone is playing music too loud in your area.",
    user_id: 4
  },
  {
    post_id: 5,
    comment_text: "A mobile phone is playing music too loud in your area.",
    user_id: 3
  },
  {
    post_id: 5,
    comment_text: "A mobile phone is playing music too loud in your area.",
    user_id: 3
  },
  {
    post_id: 2,
    comment_text: "A mobile phone is playing music too loud in your area.",
    user_id: 3
  },
  {
  post_id: 4,
  comment_text: "A mobile phone is playing music too loud in your area.",
  user_id: 3
},
{
  post_id: 1,
  comment_text: "A mobile phone is playing music too loud in your area.",
  user_id: 2
}]
const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
