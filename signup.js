const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById('email');
const password=document.getElementById("password");
const confirm=document.getElementById("confirm");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    const usernamevalue=username.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=password.value.trim();
    const confirmvalue=confirm.value.trim();
    if(usernamevalue=''){
        // add error class
        setError(username,"This field cannot be blank !!");
    }
    else{
        // add success class
        setSuccess(username);
    }
    if(emailvalue=''){
        //add error class
        SpeechSynthesisErrorEvent(email,"This field cannot be blank!!");
    }
    else if(email(emailvalue)){
        setError(email,"check the email bro!!");
    }
    else{
        // add success class
        setSuccess(email);
    }
    if(passwordvalue=''){
        // add error class
        setError(password,"this field cannot be blank!!");
    }
    else if(passwordvalue.length<=4){
        setError(password,"password is too small!");
    }
    else{
        //add success class
        setSuccess(password);
    }
    if(confirmvalue=''){
        //add error class
        setError(confirm,"this field cannot be blank!");
    }elseif(passwordvalue!=confirmvalue){
        setError(confirm,"password and confirm password must be same.");
    }
    else{
        // add success class
        setSuccess(confirm);
    }
}
function setError(input,msg){
    const formControl=input.parantElement;
    const small=formControl.queryselector("small");
    small.innerText=msg;
    // add Error Class
    formControl.className="form-control Error";
}
function setSuccess(input){
    const formControl=input.parantElement;
    formControl.className="form-control success";
}
// function isemail(email){
//     return /^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@"]+)|(".+"))@((\[[0-9]{1,3}\[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }