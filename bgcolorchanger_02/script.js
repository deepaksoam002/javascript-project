 const body = document.querySelector('body')
 const start = document.querySelector('.start')
 const stop = document.querySelector('.stop')
 let intervalid;
start.addEventListener('click',()=>{
    if(!intervalid)
    {intervalid = setInterval(()=>{
      body.style.backgroundColor= colorcode()
    },1000)}  
 })
 stop.addEventListener('click',()=>{
    clearInterval(intervalid)
    intervalid=null;
 })

 function colorcode(){
     const hex='0123456789abcdef'
     let color='#'
     for(i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)]
     }
      return color
  }

colorcode()