const form =document.getElementById('form');
const email =document.getElementById('email');
const pa=document.getElementById('para');
const small=document.getElementById('small');
const icon=document.getElementById('icon');

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInput();
})
function checkInput(){
    const emailVal = email.value.trim();

    if(emailVal === ''){
        setError(email,pa,small,icon);
    }else if(!isEmail(emailVal)){
         setError(email,pa,small,icon);
    }
}
function setError(input,p,s,i){
    const formControl = input.parentElement;
    const pu =p.parentElement;
    const sa=s.parentElement;
    const ic=i.parentElement;
    formControl.className = 'loginbox error';
    pu.className='check error';
    sa.className='check error';
    ic.className='check error';
}
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
