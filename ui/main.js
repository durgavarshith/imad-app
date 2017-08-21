
//submit username/password to login
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
    //create a request object
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onrreadystatechange=function(){
         if(request.readystate===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                alert('logged in sucessfully');
            }else if(request.status===403){
                alert('username/password is incorrect');
            }else if(request.status===500){
                alert('something went wrong on server');
            }
    }
    //not done yet
    };
    
    //make the request
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
     request.open('POST','http://ratnavarshith.imad.hasura-app.io/login',true);
     request.setRequest('content-Type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
    
   };