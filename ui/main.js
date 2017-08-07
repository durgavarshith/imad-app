//counter code
var button=document.getElementById('counter');

button.onclick=function(){
    
    //create a request object
    var request=new XMLHttpRequest();
    
    
    //capture response and store it in the counter value
    request.onreadystatechange=function(){
        if(request.readyState==XMLHttpRequest.DONE){
            //take some action
            if(request.status==200){
                var counter=request.responseText;
               var span=document.getElementById('count');
    span.innerHTML=counter.toString(); 
            }
        }
        //not done at
    };
    
    //make the request
    request.open('GET','http://ratnavarshith.imad.hasura-app.io/counter',true);
    request.send(null);
    
};