function toggleTheme(){

document.body.classList.toggle("dark-mode");

localStorage.setItem(
"theme",
document.body.classList.contains("dark-mode")
);

}

if(localStorage.getItem("theme")==="true"){

document.body.classList.add("dark-mode");

}



function logout(){

localStorage.clear();

sessionStorage.clear();

window.location.href="../index.html";

}