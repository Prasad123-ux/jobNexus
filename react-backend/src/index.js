const express= require('express')
const app= express()
const env= require('dotenv')
const { companyRegisterRoute } = require('./Routes/Company/registerRoutes')
env.config() 
const bodyParser= require('body-parser')
const { companyLoginRoute } = require('./Routes/Company/Login')
const { profileDataRoute } = require('./Routes/Company/ProfileData')
const { updateCompanyProfileRoute } = require('./Routes/Company/UpdateProfileData')
const { jobPostingRoute } = require('./Routes/Company/JobPosting')
const { myJobsRoute } = require('./Routes/Company/MyJobs')
const { deleteJobRoute } = require('./Routes/Company/DeleteJobs')
const { getAllJobsRoutes } = require('./Routes/Candidate/GetAllJobs')
const { getJobByIDRoute } = require('./Routes/Candidate/GetJobById')
const { registerCandidateRoute } = require('./Routes/Candidate/RegisterCadidate')
const { loginCandidateRoute } = require('./Routes/Candidate/Login')
const { updateDataRoute } = require('./Routes/Candidate/update')
const { getProfileDataRoute } = require('./Routes/Candidate/GetProfileData')
const { saveJobsRoutes } = require('./Routes/Candidate/SaveJobs')
const { GetAllSavedJobsRoute } = require('./Routes/Candidate/GetAllSavedJob')



app.use(bodyParser.json())



app.use('/api/company', companyRegisterRoute)
app.use('/api/company', companyLoginRoute)
app.use('/api/company', profileDataRoute)
app.use('/api/company', updateCompanyProfileRoute)
app.use('/api/company', jobPostingRoute)
app.use('/api/company',myJobsRoute )  
app.use('/api/company', deleteJobRoute)
app.use('/api/candidate', getAllJobsRoutes)
app.use('/api/candidate', getJobByIDRoute)
app.use('/api/candidate', registerCandidateRoute)
app.use('/api/candidate', loginCandidateRoute)
app.use('/api/candidate', updateDataRoute)
app.use('/api/candidate', getProfileDataRoute)
app.use('/api/candidate', saveJobsRoutes)
app.use('/api/candidate', deleteJobRoute)
app.use('/api/candidate', GetAllSavedJobsRoute)




const port= process.env.PORT  



app.listen(port, ()=>{console.log(`server is listening in port ${port}`)})