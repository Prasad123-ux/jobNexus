// const { SavedJob } = require("../../Modules/Candidate/SaveJob")
const { SavedJob } = require("../../Modules/Candidate/SaveJob")
const { JobDetail } = require("../../Modules/HR/JobDetail")

const SaveJobsController= async (req, res)=>{

    const jobID= req.params.id   

    const job= await JobDetail.findById(jobID)
    
    if(!job){
        res.status(404).json({message:"Job Not Found"})
    }else{
        const saveJobObject= new SavedJob ({
            UserEmail:req.email,
            JobID:jobID

        })
        saveJobObject.save().then(()=>{
            res.status(200).json({success:true, message:"Job Saved Successfully"})

        })
        .catch((err)=>{
            res.status(404).json({success:false, message:"Job Not Saved", err:err})

        })


    }
}

module.exports={SaveJobsController}      