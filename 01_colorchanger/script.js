const boxes=document.querySelectorAll(".box")
const body = document.querySelector("body")
boxes.forEach(function(box){
box.addEventListener("click",function(e){
  if(e.target.id=="white"){
    body.style.backgroundColor=e.target.id
  }
  else if (e.target.id=="red"){
    body.style.backgroundColor=e.target.id
  }
  else if(e.target.id=="blue"){
    body.style.backgroundColor=e.target.id
  }
  else if(e.target.id=="gray"){
    body.style.backgroundColor=e.target.id
  }
  else if(e.target.id=="black"){
    body.style.backgroundColor=e.target.id
  }

}   
)});