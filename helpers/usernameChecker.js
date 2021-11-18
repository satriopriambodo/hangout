const { User } = require('../models')

function usernameChecker(username) {
    User.findAll({
        where: {
            username
        }
    })
    .then(result => {
        if (result) {
            return true
        } else {
            return false
        }
    })
}

module.exports = usernameChecker