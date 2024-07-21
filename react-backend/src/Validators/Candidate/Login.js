const {check}= require('express-validator')

const loginCandidateValidation=[
    check("email", "Please Enter Valid Email").isEmail(),
    check("password", "Please Enter Strong Password").isStrongPassword()
]

module.exports={loginCandidateValidation}




