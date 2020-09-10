const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
const User=mongoose.model('User');


module.exports =(req, res, next)=>{

    const { authorization }=req.headers;

    //authorization === 'Bearer sabcsca9e82'
    if(!authorization){
        return res.status(401).send({error:'You must be logged in2.'});
    }

    const token=authorization.replace('Bearer ','');
    jwt.verify(token,'MySecretKey', async (err, payload)=>{
        if(err){
            return res.status(401).send({error:'You must be logged in1.'});
        }
        const { userId }=payload;

        const user=await User.findById(userId);
        req.user=user;

        next();
    });
    
};