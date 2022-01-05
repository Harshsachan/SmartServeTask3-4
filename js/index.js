var invalidForm=true
function validateForm()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("  Please enter a valid e-mail address \n Email-Valid-Format:{example@mail.com}");  
  invalidForm=true
  return false;  
  }  
  var pass = document.getElementById("password").value;
  
  if(pass!=="SmartServTest@12")
  {
    invalidForm=true;
    alert("  Please enter a valid password");  
  return false;   
  }
  invalidForm=false;
  return true;
}
function sendmail()
{
  window.open('mailto:support@smartserv.io');
}
function submitForm(){
  console.log(invalidForm)  
  if(!invalidForm){
    window.location.href='http://127.0.0.1:5500/Dashboard/index.html';
}
  }
  
