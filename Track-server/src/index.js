require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const authRoutes=require('./routes/authRoutes');
const trackRoutes=require('./routes/trackRoutes');
const requireAuth= require('./middlewares/requireAuth');

const app=express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri= 'mongodb+srv://rahuldalvi:Rahulrd@05@cluster0.l9kwu.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(mongoUri,{
    
    useCreateIndex:true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
});

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo instance')
});

mongoose.connection.on('error',(err)=>{
    console.log('Error',err);
})

app.get('/', requireAuth ,(req,res)=>{
    res.send(`Your Email: ${req.user.email}`);
})

app.listen(3000,()=>{
    console.log('Listening on 3000');
})