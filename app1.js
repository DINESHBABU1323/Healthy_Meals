const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const msg=document.getElementById('msg');
const minus=document.getElementsByClassName('minus')
const num=document.getElementsByClassName('num')
const plus=document.getElementsByClassName('plus')


/*Quantities*/
for(var i=0;i<plus.length;i++){
    var button = plus[i];
    button.addEventListener('click',function(event){
        var btnclicked=event.target;
        var input=btnclicked.parentElement.children[1];
        var inputVal=input.value;
        var newVal=parseInt(inputVal) + 1;
        newVal=(newVal < 10)? '0' + newVal : newVal;
        input.value=newVal;
    })
}

for(var i=0;i<minus.length;i++){
    var button = minus[i];
    button.addEventListener('click',function(event){
        var btnclicked=event.target;
        var input=btnclicked.parentElement.children[1];
        var inputVal=input.value;
        if(inputVal>0){
            var newVal=parseInt(inputVal) - 1;
            newVal=(newVal < 10)? '0' + newVal : newVal;
            input.value=newVal;
        }
    })
}

/*contact validation */
form.addEventListener('submit',(e)=> {
    if(!validateInputs()){
        e.preventDefault();
    }
})
function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const msgVal=msg.value.trim();
    let success = true;

    if(usernameVal===''){
        success = false;
        setError(username,'Name is required');
    }
    else{
        setSuccess(username);
    }
    if(emailVal===''){
        success = false;
        setError(email,'Email is required');
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email');
    }
    else{
        setSuccess(email);
    }
    if(msgVal===''){
        success = false;
        setError(msg,'Please give your feedback');
    }
    else{
        setSuccess(msg);
    }
    return success;
}
function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText=message; 
};
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');
    errorElement.innerText=''; 
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
