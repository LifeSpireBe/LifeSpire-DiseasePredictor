const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Disease = mongoose.model('Disease');


var { PythonShell } = require('python-shell');

const myPythonScriptPath = "Disease Prediction.py";




const router = express.Router();

router.post('/predictDisease', async (req, res)=>{
    const { Symptom1, Symptom2, Symptom3, Symptom4, Symptom5 }= req.body;
    var JSON_data={Symptom1, Symptom2, Symptom3, Symptom4, Symptom5};
    var pyshell = new PythonShell(myPythonScriptPath);
    pyshell.send(JSON.stringify(JSON_data));
    pyshell.on('message',(message) =>
    {
       res.send(message);
    });
    pyshell.end((err) =>    
    {
        if(err)
        {
            console.log(err);
        }
    });


    
   // res.send(Symptom1);
    /*try {
        const disease=new Disease( { Symptom1, Symptom2, Symptom3, Symptom4, Symptom5 });
        await disease.save();

        const token = jwt.sign({ userId: disease._id }, 'MY_SRT_KEY');
        res.send({token});
    } catch (error) {
        return res.status(422).send(error.message);
        
    }*/
});

module.exports = router;
