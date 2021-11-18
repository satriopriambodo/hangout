const bcrypt = require('bcryptjs')
let salt = bcrypt.genSaltSync(5)

// console.log(hash)

function bcryptMatch(input1, input2) {
    // let hash = bcrypt.hashSync(password, salt)
    return bcrypt.compareSync(input1, input2)
    // return hash
}

module.exports = bcryptMatch