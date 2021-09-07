
const {Router} = require('express');
const router = new Router();

//Get route => to display the signup form
router.get("/signup", (req, res) => {
  res.render("auth/signup")
})



//Post route => to process the data

const bcryptjs = require('bcryptjs');
const saltRounds = 10;

router.post("/signup", (req, res)=>{
  const {username, email, password} = req.body

  bcryptjs
  .genSalt(saltRounds)
  .then(salt => bcryptjs.hash(password, salt))
  
})

module.exports = router;
