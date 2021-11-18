const { Profile, User } = require('../models')

class ProfileController {
    static getId(req, res) {
        const id = req.params.id
        Profile.findByPk(id, { include: [User] })
            .then(data => res.render('profileId', { data, login: req.session.loginUser }))
            .catch(err => res.send(err))
    }
    static getEdit(req, res) {
        const id = req.params.id
        Profile.findByPk(id, { include: [User] })
            .then(data => res.render('profileEdit', { data, login: req.session.loginUser }))
            .catch(err => res.send(err))
    }
    static postEdit(req, res) {
        const id = req.params.id
        const { firstName, lastName, age, residence } = req.body
        const newData = { id, firstName, lastName, age, residence }
        Profile.upsert(newData)
            .then(() => {
                res.redirect(`/profile/${id}`)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static getDelete(req, res) {
        const id = req.params.id
        Profile.findByPk(id)
        .then(ins => ins.destroy())
        .then(() => {res.redirect('/logout')})
        .catch(err => res.send(err))
    }
}

module.exports = ProfileController