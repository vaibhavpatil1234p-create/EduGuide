function sendMessage(){

let input=document.getElementById("userInput");

let message=input.value;

let chatBox=document.getElementById("chatBox");



chatBox.innerHTML+=`

<div class="user-message">

${message}

</div>

`;



let reply="";



if(message.toLowerCase().includes("ai")){

reply="AI & ML has excellent future scope and high placements.";

}

else if(message.toLowerCase().includes("cyber")){

reply="Cyber Security is one of the fastest growing domains.";

}

else if(message.toLowerCase().includes("iit")){

reply="IIT Bombay, IIT Delhi and IIT Madras are among the top IITs.";

}

else{

reply="That's an interesting question. Gemini AI integration will answer this better.";

}



chatBox.innerHTML+=`

<div class="ai-message">

${reply}

</div>

`;



input.value="";

}

