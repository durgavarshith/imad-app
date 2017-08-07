//counter code
var button=document.getElementById('counter');

button.onclick=function(){
    
    //create a request object
    var request=new XMLHttpRequest();
    
    //capture response and store it in the counter value
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                var counter=request.responseText;
               var span=document.getElementById('count');
    span.innerHTML=counter.toString(); 
            }
        }
        //not done yet
    };
    
    //make the request
    request.open('GET','http://ratnavarshith.imad.hasura-app.io/counter',true);
    request.send(null);
};

//submit name
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
    //make a request to server and send the name 
    var request=new XMLHttpRequest();
    
    //capture a list of names and render it as a list
    request.onrreadystatechange=function(){
         if(request.readystate===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                 //capture a list of names and render it as a list
    var names=request.responseText;
    names=JSON.parse(names);
    var list=''; 
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
            }
    }
    //not done yet
    };
    
    //make the request
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
     request.open('GET','http://ratnavarshith.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
   };