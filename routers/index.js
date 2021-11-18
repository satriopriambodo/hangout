const express = require('express')
const router = express.Router()
const destination = require('./destinationRouter')
const cart = require('./cartRouter')
const profileRoute = require('./profileRoute')
const AuthController = require('../controllers/authController')
const loginCheck = require('../middlewares/loginCheck')

router.get('/register', AuthController.getRegister)
router.post('/register', AuthController.postRegister)
router.get('/login', AuthController.getLogin)
router.post('/login', AuthController.postLogin)
router.get('/logout', AuthController.getLogout)
router.use('/destinations',destination)
router.get('/', (req, res) => {
    // console.log(req.session)
    res.render('home', {login: req.session.loginUser})
})

router.use(loginCheck)
router.use('/profile', profileRoute)
router.use('/cart',cart)
router.get('/chat',(req,res)=>{
    res.render('chat', {login: req.session.loginUser})
})



module.exports = router