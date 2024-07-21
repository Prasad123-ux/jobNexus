const express= require('express')
const { loginCandidateValidation } = require('../../Validators/Candidate/Login')
const { CandidateLoginController } = require('../../Controllers/Candidate/Login')
const loginCandidateRoute= express.Router() 




loginCandidateRoute.post('/login_candidate', loginCandidateValidation, CandidateLoginController)


module.exports={loginCandidateRoute}