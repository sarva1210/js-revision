addEventListener('mousemove',(e)=>{

  console.log(e.clientX,e.clientY);
  
  document.querySelector(".box").style.setProperty('--x',e.clientX+"px")
  document.querySelector(".box").style.setProperty('--y',e.clientY+"px")
})