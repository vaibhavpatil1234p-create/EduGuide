// ================= PACKAGE GRAPH =================

const packageCtx = document.getElementById("packageChart");

new Chart(packageCtx, {

type: "bar",

data: {

labels: [

"AI & ML",
"CSE",
"Cyber Security",
"Data Science",
"ISE",
"ECE",
"EEE",
"Mechanical",
"Civil",
"Chemical",
"Biotechnology"

],

datasets: [{

label: "Average Package (LPA)",

data: [

22,
20,
18,
21,
19,
14,
12,
11,
9,
10,
13

],

backgroundColor: [

"#2563eb",
"#3b82f6",
"#06b6d4",
"#14b8a6",
"#22c55e",
"#facc15",
"#f97316",
"#ef4444",
"#ec4899",
"#8b5cf6",
"#6366f1"

],

borderRadius: 10,

borderWidth: 1

}]

},

options: {

responsive: true,

plugins: {

legend: {

labels: {

color: "white"

}

}

},

scales: {

x: {

ticks: {

color: "white"

}

},

y: {

beginAtZero: true,

ticks: {

color: "white"

}

}

}

}

});



// ================= YEAR GRAPH =================

const yearCtx = document.getElementById("yearChart");

new Chart(yearCtx, {

type: "line",

data: {

labels: [

"2022",
"2023",
"2024"

],

datasets: [

{

label: "AI & ML",

data: [

16,
19,
22

],

borderColor: "#3b82f6",

tension: .4

},

{

label: "CSE",

data: [

15,
18,
20

],

borderColor: "#22c55e",

tension: .4

},

{

label: "Cyber Security",

data: [

12,
15,
18

],

borderColor: "#ef4444",

tension: .4

},

{

label: "Data Science",

data: [

14,
17,
21

],

borderColor: "#f97316",

tension: .4

},

{

label: "ECE",

data: [

10,
12,
14

],

borderColor: "#eab308",

tension: .4

}

]

},

options: {

responsive: true,

plugins: {

legend: {

labels: {

color: "white"

}

}

},

scales: {

x: {

ticks: {

color: "white"

}

},

y: {

beginAtZero: true,

ticks: {

color: "white"

}

}

}

}

});

