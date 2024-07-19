const express= require('express')
const { profileDataController } = require('../../Controllers/Company/ProfileData')
const profileDataRoute= express.Router() 


profileDataRoute.get('/getProfileData', profileDataController)

module.exports={profileDataRoute}