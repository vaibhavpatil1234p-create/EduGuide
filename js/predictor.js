function predictCareer(){

let stream=document.getElementById("stream").value;

let exam=document.getElementById("exam").value;

let rank=parseInt(document.getElementById("rank").value);

let branch=document.getElementById("branch");

let college=document.getElementById("college");

let package=document.getElementById("package");



// PCM

if(stream==="PCM"){

if(exam==="JEE Main"){

if(rank<=5000){

branch.innerHTML="AI & ML";

college.innerHTML=`

IIT Bombay <br>

IIT Delhi <br>

IIT Madras

`;

package.innerHTML="₹30 LPA";

}

else{

branch.innerHTML="Computer Science";

college.innerHTML=`

NIT Surathkal <br>

NIT Trichy <br>

IIIT Hyderabad

`;

package.innerHTML="₹20 LPA";

}

}



else if(exam==="KCET"){

branch.innerHTML="CSE";

college.innerHTML=`

RVCE <br>

MSRIT <br>

BMSCE

`;

package.innerHTML="₹18 LPA";

}



else{

branch.innerHTML="AI & ML";

college.innerHTML=`

MSRIT <br>

DSCE <br>

NIE Mysore

`;

package.innerHTML="₹16 LPA";

}

}



// PCB

else if(stream==="PCB"){

branch.innerHTML="MBBS";

college.innerHTML=`

AIIMS Delhi <br>

JIPMER <br>

CMC Vellore

`;

package.innerHTML="₹18 LPA";

}



// Commerce

else{

branch.innerHTML="Finance & CA";

college.innerHTML=`

SRCC Delhi <br>

Christ University <br>

NMIMS

`;

package.innerHTML="₹15 LPA";

}

}
