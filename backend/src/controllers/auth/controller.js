import registerUser from "../../services/auth/service.js";

const register=async(req,res)=>{
    try{
        const user = await registerUser(req.body);

        return res.status(201).json({
            success:true,
            message:"User Registered Successfully",
            data:user
        });
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"User Registration Failed",
            error:err.message
        });
    }
}

export default register;