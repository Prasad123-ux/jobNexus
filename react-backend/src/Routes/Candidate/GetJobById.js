const express = require('express')
const { getAllJobsController } = require('../../Controllers/Candidate/GetJobs')
const getJobByIDRoute= express.Router() 




getJobByIDRoute.get('/getJobByID/:id', getAllJobsController)


module.exports={getJobByIDRoute}