let target=document.getElementById("target")
document.getElementById("newitem").addEventListener("click",()=>{
    target2.innerHTML=""
let li=document.createElement("li")
let input1=document.createElement("input")
input1.setAttribute("type","text")
input1.setAttribute("placeholder","enter the name")

let input2=document.createElement("input")
input2.type="number"
input2.placeholder="Enter the price"

li.appendChild(input1)
li.appendChild(input2)


target.appendChild(li)
})

let target2=document.getElementById("target2")
document.getElementById("getvalue").addEventListener("click",()=>{


    let inputs=document.querySelectorAll("input")
    
    for(let a=0,b=1;a<inputs.length;a=a+2,b=b+2){
        let x=inputs[a].value
        let y=inputs[b].value
let li=document.createElement("li")
let d1=document.createElement("div")
d1.textContent=x
let d2=document.createElement("div")
d2.textContent=y*80
li.appendChild(d1)
li.appendChild(d2)

target2.appendChild(li)
    } 
    target.innerHTML=""
})
