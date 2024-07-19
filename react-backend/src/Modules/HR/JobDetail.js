const { mongoose } = require("../../Config/db");

const jobSchema= new mongoose.Schema({
    JobTitle:{
        type:String,
        required:true
    },
    JobDescription:{
        type:String,
        required:true
    },
    JobRole:{
        type:String,
        required:true
    },
    CompanyEmail:String,
    DepartMentDetail:String,
    EducationalRequirement:{
        type:Date,
        required:true,
        min:'2024-01-01'
    },
    Experience:{
        type:Date,
        required:true,
        min:'2024-01-01'
    },
    NeededSkillsAndTechnologies:String,
    JobCertification:String,
    AdditionalSkillNotMandatory:String,
    JobLocation:{
        type:String,
        required:true
    },
    RemoteWorkOption:String,
    TravelRequirements:String,
    EmploymentType:{
        type:String,
        required:true
    },
    SalaryRange:{
        type:String,
        required:true
    },
    BenefitsOffered:{
        type:String,
        required:false
    },
    PerformanceBonuses:String,
    ApplicationWay:{
        type:String,
        required:true
    },
    RequiredDocuments:{
        type:String,
        required:false
    },
    HRName:{
        type:String,
        required:true
    },
    HRMobile:String,
    HREmail:String,
    JobApplicationPortal:String,
    JobPostingDate:{
        type:String,
        required:true
    },
    JobClosingDate:{
        type:String,
        required:true
    },
    OfficeCulture:String,
    WorkingHours:String,
    AnySpecificCondition:String,


}, {timestamps:true})

const JobDetail=mongoose.model('JobDetail', jobSchema)

module.exports={JobDetail}