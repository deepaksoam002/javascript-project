const box_01 = document.getElementById("box_01")
let ifthere = true; 
box_01.addEventListener("click", () => {
    if (ifthere) {
        box_01.style.backgroundColor = "blue";
        ifthere = false;   
    } else {
        box_01.style.backgroundColor = "red";
        ifthere = true;
    }
    
});
const box_02 = document.getElementById("box_02")
let ifthere_01
box_02.addEventListener("mouseover", () => {
    if (ifthere_01) {
        box_02.style.backgroundColor = "rgb(95,14,77)";
        ifthere_01 = false;   
    } else {
        box_02.style.backgroundColor = "blue";
        ifthere_01 = true;
    }
})
const box_03 = document.getElementById("box_03")
let ifthere_02
box_03.addEventListener("mousemove", () => {
    if (ifthere_02) {
        box_03.style.backgroundColor = "rgb(95,14,77)";
        ifthere_02 = false;   
    } else {
        box_03.style.backgroundColor = "blue";
        ifthere_02 = true;
    }
})