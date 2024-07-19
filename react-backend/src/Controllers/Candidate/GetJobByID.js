const { JobDetail } = require("../../Modules/HR/JobDetail")

const getJobByIDController=(req, res)=>{

JobDetail.findById({_id:req.params.id}).exec()
.then((user)=>{
    if(user!==null){
        res.status(200).json({ success:true, message:"Data found", Data:user})
    }else{
        res.status(404).json({success:false, message:"Data not found"})
    }

})
.catch((err)=>{
    res.status(404).json({success:false, message:"Data not found", err:err})


})
}


module.exports={getJobByIDController}