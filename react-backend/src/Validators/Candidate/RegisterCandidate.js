const {check}= require('express-validator')

const registerCandidateValidator=[
    check('firstName', 'FirstName should not be empty').notEmpty(),
    check('lastName', "LastName should not be empty").notEmpty(),
    check('dateOfBirth', "Date of Birth should be valid").notEmpty(),
    check('gender', 'Gender should not be empty').notEmpty(),
    check('email', "Email should be valid").notEmpty(),
    check('password', "Password should be string").notEmpty(),
    check('mobileNumber', "Enter Valid Mobile Number").isMobilePhone()

]

module.exports={registerCandidateValidator}