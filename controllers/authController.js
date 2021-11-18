const { User, Profile } = require('../models')
const bcrypt = require('bcryptjs')

class AuthController{
    static getLogin(req, res){
        console.log(req.session)
        res.render('login', {login: req.session.loginUser})
    }

    static postLogin(req, res){
        const { username, password } = req.body
        const myErr = []
        User.findOne({
            where: {
                username
            }
        })
        .then(result => {
            if (result) {
                if(bcrypt.compareSync(password, result.password)) {
                    req.session.loginUser = { 
                        username, 
                        ProfileId: result.ProfileId
                     }
                    res.redirect('/')
                } else {
                    throw myErr.push('Wrong Password')
                }
            } else {
                throw myErr.push('User Not Found')
            }
        })
        .catch(err => {
            res.send(myErr)
        })
    }
    static getLogout(req, res){
        req.session.destroy()
        res.redirect('/')
    }
    static getRegister(req, res){
        res.render('register', {login: req.session.loginUser})
    }
    static postRegister(req, res){
        const { username, password, firstName, lastName, age, residence } = req.body
        const newProfile = { firstName, lastName, age, residence }
        const myErr = []

        User.findOne({
            where: {
                username
            }
        })
        .then(result => {
            if (result) {
                throw myErr.push('Username already exist!')
            } else {
                return Profile.create(newProfile)
            }
        })
        .then(result2 => {
            return User.create({ 
                ProfileId: result2.id, 
                username, 
                password 
            })
        })
        .then(result3 => {
            req.session.loginUser = { username : result3.username, ProfileId: result3.ProfileId }
            res.redirect('/')
        })
        .catch(err => {
            res.send(myErr)
        })

    }
}

module.exports = AuthController