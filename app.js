const btnToggle = document.querySelector(".toggle")
btnToggle.addEventListener("click", (e)=>{
  const html=document.querySelector('html')
  if(html.classList.contains("dark")){
      html.classList.remove("dark")/*ลบclassdark like สลับ*/
      e.target.innerHTML="Click to Nightmode🌙"/*ปุ่ม*/
  }else{
   html.classList.add("dark")
   e.target.innerHTML="Click to Lightmode✨"
  }
})