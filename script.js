var fun=document.getElementsByClassName("icon")[0];
var op=document.getElementsByClassName("menu")[0];
var redirect=document.getElementsByClassName("con")[0];

redirect.addEventListener('click',()=>{
   window.open("#contact", target="_parent");
});

fun.addEventListener('click',()=>{
    fun.classList.toggle("active");
    op.classList.toggle("active");
});