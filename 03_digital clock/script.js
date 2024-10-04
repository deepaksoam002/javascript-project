const clock = document.querySelector(".clock")

setInterval(() => {  
let time= new Date
clock.innerHTML = time.toLocaleTimeString()
console.log(time.toLocaleTimeString());
}, 1000);