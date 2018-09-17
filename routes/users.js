var express = require('express');
var router = express.Router();
const {  User} = require('../db/schema')


// INDEX , SHOW ALL
router.get('/', (req, res) => {
  User.find()
    .then((users) => {
      res.render('users/index', { users })
    })
})

// SHOW, SHOW ONE
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('users/show', { user })
    })
})

// NEW , RENDER NEW FORM

// CREATE
router.post('/', (req, res) => {
  // const newUser = new User(req.body)
  // newUser.save()
  User.create(req.body)
    .then((user) => {
      res.send(user)
    })
})

// EDIT , RENDER EDIT FORM

// UPDATE

// DELETE

module.exports = router;