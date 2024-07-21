const express= require('express')
const { SaveJobsController } = require('../../Controllers/Candidate/SaveJobs')
const { candidateAuthenticationMiddleware } = require('../../Middlewares/Candidate/Authentication')
const saveJobsRoutes= express.Router() 



saveJobsRoutes.post('/save_job',candidateAuthenticationMiddleware,  SaveJobsController)


module.exports={saveJobsRoutes}