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
    x.target.style.backgroundColor = "red";
    x.target.disabled = true;

})

document.getElementById("Completed_btn_2").addEventListener("click",function(x){
    alert("hey my you koi");
})
