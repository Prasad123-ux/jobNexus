const { CompanyRegister } = require("../../Modules/HR/Registration")


const profileDataController=(req, res)=>{

    const email= req.email

    CompanyRegister.findOne({CompanyEmail:email}).exec()
    .then((user)=>{
        if(user!==null){
            res.status(200).json({success:true, message:"User Found", Data:user})
        }else{
            res.status(404).json({success:false, message:"Sorry ! user not found"})
        }

    }).then((err)=>{
        res.status(404).json({success:false, message:"Sorry ! user not found", error:err})


    })



}

module.exports={profileDataController}