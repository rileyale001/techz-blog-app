const {Post} = require('../models');
const postData = [
  {
    title: "Music Near Me",
    post_content: "A mobile app that will send you notifications whenever a concert is playing in your area.",
    user_id: 3
  },
  {
    title: "Music ih",
    post_content: "New mobile app that will send you notifications whenever a concert is playing in your area.",
    user_id: 1
  },
  {
    title: "Lighting Near",
    post_content: "New notifications whenever a concert is playing in your area.",
    user_id: 2
  },
  {
    title: "Near Me is playing",
    post_content: "New notifications whenever a concert is playing in your area.",
    user_id: 4
  },
  {
    title: "Lighting Near playing",
    post_content: "New notifications whenever a concert is playing in your area.",
    user_id: 5
  },]
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
