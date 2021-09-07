
const {Router} = require('express');
const router = new Router();
const User = require('../models/User.model');

//Get route => to display the signup form
router.get("/signup", (req, res) => {
  res.render("auth/signup")
})

router.get('/userProfile', (req, res)=>{
  res.render('users/user-profile')
  //User.findById(id)
})


//Post route => to process the data

const bcryptjs = require('bcryptjs');
const saltRounds = 10;

router.post("/signup", (req, res)=>{
  const {username, email, password} = req.body

  bcryptjs
  .genSalt(saltRounds)
  .then(salt => bcryptjs.hash(password, salt))
  .then(hashedPassword =>{
    return User.create({username, email, passwordHash: hashedPassword})
    .then(userFromDB => { 
      res.redirect('/userProfile')
    })
    .catch(error=> console.log('user was not created'))
  })
  .catch(error => console.log(error))
  
})

module.exports = router;
