let msg=document.getElementById("display");
function appendvalue(value){
    msg.value+=value;
}
function clearDisplay(){
    msg.value="";
}
function deletelast(){
    msg.value=msg.value.slice(0,-1);
}
function calculate(){
    try{

           msg.value=eval(msg.value);
    }
    catch{
        msg.value="error";
    }
}