const {check}=require('express-validator')

const JobDetailValidation=[
    check('JobTitle', "Job Title should not be empty").notEmpty(),
    check('JobDescription', 'Job description should not be empty').isInt({min:20, max:500}),
    check('JobRole', 'Job role should not be empty').notEmpty(),
    check('EducationalRequirement', 'Education Requirement is mandatory').notEmpty(),
    check('experience', "experience should not be empty").notEmpty(),
    check('JobLocation', "Enter Proper location detail for finding jobSeeker").notEmpty(),
    check('EmploymentType', "Employment Type should not be empty").notEmpty(),
    check('SalaryRange', "SalaryRange Should not be empty").notEmpty(),
    check('ApplicationWay', "Please enter application way").notEmpty(),
    check('HRName', "HR should not be empty").notEmpty(),
    check('HRMobile', "Mobile number should be valid").isMobilePhone(),
    check('HREmail', "HR Email should be valid").isEmail(),
    check('JobPostingDate', "Job posting date should be valid").isDate(),
    check('JobClosingDate', "Job closing date should be valid").isDate()




]

module.exports={JobDetailValidation}