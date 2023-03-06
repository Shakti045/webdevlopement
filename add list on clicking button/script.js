let lists=["HTML and Semantics","Starting with CSS","Working Template","Mobile responsive webpages","Grid and Flex-box in CSS","Projects using HTML & CSS","Version Control and Git","Getting Started with JavaScript","Working with DOM","Making Projects using HTML, CSS and JavaScript"]
let i=-1
let n=lists.length
function additem(){
    i++
    if(i<n){
    let v=document.createElement("p")
    v.textContent=lists[i]
    document.body.append(v)
    }else{
        alert("newthings will be add ")
    }
}
