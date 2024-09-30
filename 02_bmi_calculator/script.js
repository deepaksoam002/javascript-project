const submit = document.querySelector('form')
const result = document.querySelector(".message")
form.addEventListener("submit",function(e){
    e.preventDefault();
    const weight = parseInt(document.querySelector("#weight").value)
    const height = parseInt(document.querySelector("#height").value)
    if(weight==""||weight==0||isNaN(weight)){
      displaymessage("please! enter a vaild weight")
       
    }
    else if(height==""||height==0||isNaN(height)){
        displaymessage("please! enter a vaild height")
     }
     else{
        const bmi= (weight/((height*height)/10000)).toFixed(2)
        if (bmi<18.5) {
              checkbmi(`You need a good food diet`)
        }else if(bmi>25){
              checkbmi(`You need to join a gym`)
        }else{
         checkbmi(`congratulation! You have a good fitness`)
        }
        displaymessage(`your bmi is ${bmi}kg/km2`)
        
     }
});
form.addEventListener("reset",function(e){
   const weight = parseInt(document.querySelector("#weight").value)
   const height = parseInt(document.querySelector("#height").value)
    weight.innerHTML="";
    height.innerHTML="";
    displaymessage(``);
    checkbmi(``);
})

 function displaymessage(message){
 result.innerHTML= `${message}`;
 console.log(message);
 
}

function checkbmi(message){
const checkmessage = document.querySelector(".checkbmi")
checkmessage.innerHTML=`${message}`
}