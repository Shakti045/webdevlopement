let list=document.querySelectorAll("li")
list.forEach((data)=>{
  data.addEventListener("click",activate)
})
function activate(){
  list.forEach((data)=>{
 data.classList.remove("active")
 this.classList.add("active")

})
}

document.querySelector("button").addEventListener("click",()=>{
list.forEach((data)=>{
  data.classList.remove("active")
})
})
