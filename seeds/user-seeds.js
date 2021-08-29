const { User } = require('../models');
const userData = [
  {
    username: "rileyale",
    email: "sal@hotmail.com",
    twitter: "lightfootcacti",
    github: "rileyale001111",
    password: "password12345"
  },
  {
    username: "rileyal1",
    email: "s1l@hotmail.com",
    twitter: "lightfootcacti",
    github: "rileyale00111",
    password: "password12345"
  },
  {
    username: "l11e",
    email: "11l@hotmail.com",
    twitter: "lightfootcacti",
    github: "rileyale00111",
    password: "password12345"
  },
  {
    username: "al1",
    email: "sl@mail.com",
    twitter: "lotcacti",
    github: "rile00111",
    password: "password12345"
  },
  {
    username: "yal11e",
    email: "11@hotmail.com",
    twitter: "ootcacti",
    github: "rile0111",
    password: "password12345"
  }]
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;