window.onload=function(){
let v=document.getElementById("data").innerText
let arr=v.trim().split(" ")
for(let a=0;a<arr.length;a++){
    if(arr[a].length>=8){
        arr[a]="<span>"+arr[a]+"</span>"
       console.log(arr[a]);
    }
}

   document.getElementById("data").innerHTML=arr.join(' ')
}
