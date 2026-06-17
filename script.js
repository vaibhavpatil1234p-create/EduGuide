console.log("SCRIPT FILE LOADED");


// ================= PASSWORD STRENGTH =================

const loginPassword = document.getElementById("loginPassword");

if(loginPassword){

loginPassword.addEventListener("input",()=>{

let value=loginPassword.value;

let strength=document.getElementById("strengthText");

if(value.length<6){

strength.innerHTML="Weak 🟥";

strength.style.color="red";

}

else if(value.length<10){

strength.innerHTML="Medium 🟨";

strength.style.color="orange";

}

else{

strength.innerHTML="Strong 🟩";

strength.style.color="lightgreen";

}

});

}



// ================= SHOW PASSWORD =================

function togglePassword(){

let pass=document.getElementById("loginPassword");

if(pass.type==="password"){

pass.type="text";

}

else{

pass.type="password";

}

}



// ================= SHOW SIGNUP =================

function showSignup(){

document.getElementById("loginCard").style.display="none";

document.getElementById("signupCard").style.display="block";

}



// ================= SHOW LOGIN =================

function showLogin(){

document.getElementById("signupCard").style.display="none";

document.getElementById("loginCard").style.display="block";

}



// ================= SIGNUP =================

async function signup(){

const email=document.getElementById("signupEmail").value;

const password=document.getElementById("signupPassword").value;


if(email==="" || password===""){

alert("Please fill all fields");

return;

}


try{

const response=await fetch(

"http://localhost:5000/api/auth/signup",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

email,

password

})

}

);


const data=await response.json();

alert(data.message || data.error);


if(response.ok){

window.location.href="pages/profile.html";

}

}

catch(err){

console.log(err);

alert("Server Error");

}

}



// ================= LOGIN =================

async function login(){

const email=document.getElementById("loginEmail").value;

const password=document.getElementById("loginPassword").value;


if(email==="" || password===""){

alert("Please fill all fields");

return;

}


try{

const response=await fetch(

"http://localhost:5000/api/auth/login",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

email,

password

})

}

);


const data=await response.json();


if(response.ok){

localStorage.setItem(

"token",

data.token

);

alert("Login Successful 🚀");

window.location.href="pages/dashboard.html";

}

else{

alert(data.error);

}

}

catch(err){

console.log(err);

alert("Server Error");

}

}

