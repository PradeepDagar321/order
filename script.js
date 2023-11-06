var a=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
         a.style.left=dets.x+"px";
         a.style.top=dets.y+"px";
})
var b=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    b.style.left=dets.x - 100+"px";
    b.style.top=dets.y -100 +"px";
})

gsap.from("#about-us-in",{
    y:50,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        markers:false,
    start:"top 60%",
    end:"top 58%",   }
})
gsap.from("#sign-in",{
    y:80,
    opacity:0,
    duration:1.3,
    transition:0.8,
    scrollTrigger:{
        trigger:"#sign-in",
        scroller:"body",
    start:"top 80%",
    end:"top 78%", 
   }
})
gsap.to("#nav",{
    backgroundColor:"#a99757",
    duration:0.3,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:false,
        start:"top -1%",
        end:"top -5%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"white",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        srcub:4
    }
})
gsap.from("#colon2",{
    y:-70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        srcub:4
    }
})
var si=document.querySelector("#whole");
si.addEventListener("click",function(){
    window.location.href='whole.html';
})
var nw=document.querySelector("#new");
nw.addEventListener("click",function(){
    window.location.href='new.html';
})
var n=document.querySelector("#order");
n.addEventListener("click",function(){
    window.location.href='order.html';
})
var ng=document.querySelector("#area");
ng.addEventListener("click",function(){
    window.location.href='./BootstrapWebsite-master/contact.html';
})
var instaLink = document.querySelector("#insta-link");
instaLink.addEventListener("click", function(){
    window.location.href = 'https://www.instagram.com/shreyaa____sharma/';
});