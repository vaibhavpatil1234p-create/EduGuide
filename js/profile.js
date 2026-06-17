// Image Preview

document.getElementById("imageInput")
.addEventListener("change",function(){

const file=this.files[0];

if(file){

const reader=new FileReader();

reader.onload=function(e){

document.getElementById("profileImage").src=e.target.result;

localStorage.setItem(
"profileImage",
e.target.result
);

};

reader.readAsDataURL(file);

}

});



// Load image after refresh

if(localStorage.getItem("profileImage")){

document.getElementById("profileImage").src=
localStorage.getItem("profileImage");

}



// Save Profile

function saveProfile(){

const profile={

name:
document.getElementById("fullName").value,

email:
document.getElementById("email").value,

phone:
document.getElementById("phone").value,

city:
document.getElementById("city").value,

state:
document.getElementById("state").value,

studentClass:
document.getElementById("class").value,

stream:
document.getElementById("stream").value,

percentage:
document.getElementById("percentage").value,

dreamCollege:
document.getElementById("dreamCollege").value,

dreamBranch:
document.getElementById("dreamBranch").value,

interest:
document.getElementById("interest").value

};

localStorage.setItem(
"userProfile",
JSON.stringify(profile)
);

alert("Profile Saved Successfully ✅");


window.location.href="dashboard.html";

}

