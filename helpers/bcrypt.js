const bcrypt = require('bcryptjs')
let salt = bcrypt.genSaltSync(5)

// console.log(hash)

function bcryptGenerate(password) {
    let hash = bcrypt.hashSync(password, salt)
    return hash
}

module.exports = bcryptGenerate