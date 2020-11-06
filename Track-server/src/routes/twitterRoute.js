var Twitter = require('twitter');

const express = require('express');




const router = express.Router();

router.post('/getTweets', async (req,res)=>{

  const {handle} =req.body;
  var client = new Twitter({
    consumer_key: 'ZGCQYotjNkswwqf2e8OHr91BR',
    consumer_secret: 'mCU1B1cHGoQ0AGPXC1z6Cw9xlihGv4ykEBXGvdDNbLpOGZ7UE1',
    access_token_key: '818333233754451968-ZInHIn3g0OJretOS3QjS1QxKLWyTz80',
    access_token_secret: 'OqMWRdug5M2OdvXzxK9XtfwwrYOZgwAFMzgbDCtIMxxCr'
  });

  console.log(handle)
    //const handle = "who"
    var params = {screen_name: handle,count: 10,include_rts: true};
    client.get('statuses/user_timeline', params, function(error, tweet, response) {

      const newArray=[];
      var i=0;
    // console.log(tweet)
    if (!error) {
      
        tweet.forEach(T => {
         // newArray.push(T.text);
         //console.log(T.text);
       
     });
  } 

 
  res.send(tweet)
});
  


})


module.exports = router;
