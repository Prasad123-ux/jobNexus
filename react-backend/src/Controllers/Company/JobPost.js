const { JobDetail } = require("../../Modules/HR/JobDetail")
const { CompanyRegister } = require("../../Modules/HR/Registration")
const { JobDetailValidation } = require("../../Validators/Company/JobDetail")

const JobPostingController=(req, res)=>{

const error= JobDetailValidation(req) 
if(!error.isEmpty()){
    res.status(404).json({success:false, message:"Problem with Data validation" , error:error})
}else{

   CompanyRegister.find({CompanyEmail:req.email}).exec()
   .then((user)=>{
    if(user!==null){
        const jobDetailObject= new JobDetail({
            JobTitle:req.body.jobTitle,
            JobDescription:req.body.jobDescription,
            JobRole:req.body.jobRole,
            CompanyEmail:req.email,
            DepartMentDetail:req.body.departmentDetail,
            EducationalRequirement:req.body.educationalRequirement,
            Experience:req.body.experience,
            NeededSkillsAndTechnologies:req.body.neededSkillsAndTechnologies,
            JobCertification:req.body.jobCertification,
            AdditionalSkillNotMandatory:req.body.additionalSkillNotMandatory,
            JobLocation:req.body.jobLocation,
            RemoteWorkOption:req.body.remoteWorkOption,
            TravelRequirements:req.body.travelRequirements,
            EmploymentType:req.body.employmentType,
            SalaryRange:req.body.salaryRange,
            BenefitsOffered:req.body.benefitsOffered,
            PerformanceBonuses:req.body.performanceBonuses,
            ApplicationWay:req.body.applicationWay,
            RequiredDocuments:req.body.RequiredDocuments,
            HRName:req.body.hrName,
            HRMobile:req.body.hrMobile,
            HREmail:req.body.HREmail,
            JobApplicationPortal:req.body.jobApplicationPortal,
            JobPostingDate:req.body.jobPostingDate,
            JobClosingDate:req.body.jobClosingDate,
            OfficeCulture:req.body.officeCulture,
            WorkingHours:req.body.workingHours,
            AnySpecificCondition:req.body.anySpecificCondition

        })
        jobDetailObject.save().then(()=>{
            res.status(200).json({success:true, message:"Data saved successfully"})
         
        }).catch((err)=>{
            res.status(404).json({success:false, message:"Data not saved", error:err})

        })

    }else{
        res.status(404).json("Problem with Login credentials Please check your company detail")
    }

   }).catch((err)=>{
    res.status(404).json({success:true, message:"not registered company", error:err})

   })
}

}

module.exports={JobPostingController}