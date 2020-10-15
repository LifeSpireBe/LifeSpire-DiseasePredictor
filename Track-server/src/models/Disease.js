const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
    Symptom1:String,
     Symptom2:String,
      Symptom3:String,
       Symptom4:String, 
       Symptom5:String
});


mongoose.model('Disease', diseaseSchema);
