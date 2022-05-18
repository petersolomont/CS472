const express= require('express');
const app= express();
app.set('view engine', 'ejs'); 


app.get('/calculator.js', function(req, res){

  var q= req.query;
  var n1= parseInt(q.num1);
  var n2= parseInt(q.num2);
  var operation= q.operation;

  var result;

  if(operation=='add'){
    result= n1+n2;
  }else if(operation=='subtract'){
    result= n1-n2;
  }else if(operation=='multiply'){
    result= n1*n2;
  }else{
    result=n1/n2;
  }
  
 
  res.render('resultPage', {answer: result}); 


})


app.listen(8080, function(req, res){
  console.log("Server running!");
});

