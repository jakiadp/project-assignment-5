// page transfore
document.getElementById("discover_something").addEventListener("click", function(){
    window.location.href = "main.html"
})

// color

let changebtn = document.querySelector("button");

changebtn.addEventListener("click",function(){
    document.body.style.backgroundColor = genarateRandomColor();

});
function genarateRandomColor(){
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}



// time change

const now = new Date()
const time = now.toLocaleString()
document.getElementById("time_change").innerText = time


// button-1

document.getElementById("Completed_btn_1").addEventListener("click", function(x){
    alert("board undate successufully")
    x.target.style.backgroundColor = "gray";
    x.target.disabled = true;


    const task = document.getElementById("Task_Assigned").innerText;
    const convertNumber = parseInt(task);

    const biyog = convertNumber - 1;
    document.getElementById("Task_Assigned").innerText =biyog;
     const navNumber = document.getElementById("navbar_number").innerText;

     const navbarNumber = document.getElementById("navbar_number").innerText;
    const convertednumber = parseInt(navbarNumber);
    const sum = convertednumber + 1;
    document.getElementById("navbar_number").innerText = sum;


    if(biyog === 0){
        alert("All board undated successully")
    }

    const now = new Date();
    const hours = now.getHours();
    const minites = now.getMinutes();
    const secend = now.getSeconds
    const timeset = `${hours}: ${minites}: ${secend}`;
    const maincontainar = document.getElementById("Activity_log1");
    const fixMobile = document.getElementById("fix_mobile").innerText;
    const p = document.createElement("p");
    p.innerHTML= `you have complated the task <h1>${fixMobile}</h1>${time} `;
    maincontainar.appendChild(p)

})

// button number -- 2
document.getElementById("Completed_btn_2").addEventListener("click", function(x){
    alert("board undated successully");
    x.target.style.backgroundColor = "gray";
x.target.disabled = true;


    const task = document.getElementById("Task_Assigned").innerText;
     const convertNumber = parseInt(task);

     const biyog = convertNumber - 1;
     document.getElementById("Task_Assigned").innerText = biyog;

     const navbarNumber = document.getElementById("navbar_number").innerText;
     const convertednumber = parseInt(navbarNumber);
     const sum = convertednumber + 1;
     document.getElementById("navbar_number").innerText = sum;

     if(biyog == 0){
        alert("All board undated successully ")
     }
     const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const secend = now.getSeconds();
     const timeSet =` ${hours}: ${minutes}: ${secend}`;
     const maincontainar = document.getElementById("Activity_log2");
     const fixMobile = document.getElementById("fix_mobile5").innerText;
     const p = document.createElement("p");
     p.innerHTML = `you have complated the task <h1>${fixMobile}</h1>${timeSet}`;
     maincontainar.appendChild(p)

})


// button-3


document.getElementById("Completed_btn_3").addEventListener("click", function(x){
    alert("Board undated successully");
    x.target.style.backgroundColor ="gray";
    x.target.disabled = true;

    const task =document.getElementById("Task_Assigned").innerText;
    const convertNumber = parseInt(task);
    const biyog = convertNumber - 1;
    document.getElementById("Task_Assigned").innerText = biyog;

    const navbarNumber = document.getElementById("navbar_number").innerText;
    const convertednumber = parseInt(navbarNumber);
    const sum = convertednumber + 1;
    document.getElementById("navbar_number").innerText = sum;

       if(biyog == 0){
        alert("All board undated successully ")}


   const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const secend = now.getSeconds();
     const timeSet =` ${hours}: ${minutes}: ${secend}`;
     const maincontainar = document.getElementById("Activity_log2");
     const fixMobile = document.getElementById("fix_mobile6").innerText;
     const p = document.createElement("p");
     p.innerHTML = `you have complated the task <h1>${fixMobile}</h1>${timeSet}`;
     maincontainar.appendChild(p)


})


// button-4


document.getElementById("Completed_btn_4").addEventListener("click", function(x){
    alert("Board undated successully");
    x.target.style.backgroundColor ="gray";
    x.target.disabled = true;

    const task =document.getElementById("Task_Assigned").innerText;
    const convertNumber = parseInt(task);
    const biyog = convertNumber - 1;
    document.getElementById("Task_Assigned").innerText = biyog;

    const navbarNumber = document.getElementById("navbar_number").innerText;
    const convertednumber = parseInt(navbarNumber);
    const sum = convertednumber + 1;
    document.getElementById("navbar_number").innerText = sum;

       if(biyog == 0){
        alert("All board undated successully ")}


   const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const secend = now.getSeconds();
     const timeSet =` ${hours}: ${minutes}: ${secend}`;
     const maincontainar = document.getElementById("Activity_log2");
     const fixMobile = document.getElementById("fix_mobile7").innerText;
     const p = document.createElement("p");
     p.innerHTML = `you have complated the task <h1>${fixMobile}</h1>${timeSet}`;
     maincontainar.appendChild(p)


})


// button-5


document.getElementById("Completed_btn_5").addEventListener("click", function(x){
    alert("Board undated successully");
    x.target.style.backgroundColor ="gray";
    x.target.disabled = true;

    const task =document.getElementById("Task_Assigned").innerText;
    const convertNumber = parseInt(task);
    const biyog = convertNumber - 1;
    document.getElementById("Task_Assigned").innerText = biyog;

    const navbarNumber = document.getElementById("navbar_number").innerText;
    const convertednumber = parseInt(navbarNumber);
    const sum = convertednumber + 1;
    document.getElementById("navbar_number").innerText = sum;

       if(biyog == 0){
        alert("All board undated successully ")}


   const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const secend = now.getSeconds();
     const timeSet =` ${hours}: ${minutes}: ${secend}`;
     const maincontainar = document.getElementById("Activity_log2");
     const fixMobile = document.getElementById("fix_mobile8").innerText;
     const p = document.createElement("p");
     p.innerHTML = `you have complated the task <h1>${fixMobile}</h1>${timeSet}`;
     maincontainar.appendChild(p)


})

// button-6


document.getElementById("Completed_btn_6").addEventListener("click", function(x){
    alert("Board undated successully");
    x.target.style.backgroundColor ="gray";
    x.target.disabled = true;

    const task =document.getElementById("Task_Assigned").innerText;
    const convertNumber = parseInt(task);
    const biyog = convertNumber - 1;
    document.getElementById("Task_Assigned").innerText = biyog;

    const navbarNumber = document.getElementById("navbar_number").innerText;
    const convertednumber = parseInt(navbarNumber);
    const sum = convertednumber + 1;
    document.getElementById("navbar_number").innerText = sum;

       if(biyog == 0){
        alert("All board undated successully ")}


   const now = new Date();
     const hours = now.getHours();
     const minutes = now.getMinutes();
     const secend = now.getSeconds();
     const timeSet =` ${hours}: ${minutes}: ${secend}`;
     const maincontainar = document.getElementById("Activity_log2");
     const fixMobile = document.getElementById("fix_mobile9").innerText;
     const p = document.createElement("p");
     p.innerHTML = `you have complated the task <h1>${fixMobile}</h1>${timeSet}`;
     maincontainar.appendChild(p)


})

// clear history

document.getElementById("Clear_History").addEventListener("click", function(){
     document.getElementById('Activity_log1').innerText = "";
 document.getElementById('Activity_log2').innerText = "";
 document.getElementById('Activity_log3').innerText = "";
 document.getElementById('Activity_log4').innerText = "";
 document.getElementById('Activity_log5').innerText = "";
 document.getElementById('Activity_log6').innerText = "";
})