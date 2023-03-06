let v=document.getElementById("percentagebar")
window.onscroll=function(){
var height = document. documentElement.scrollHeight - document.documentElement.clientHeight ;
    
var winScroll = document.documentElement.scrollTop;

var scrolled=(winScroll/height)*100
v.style.width=scrolled+"%"
}
