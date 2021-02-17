function init(){
    const tl = new TimelineMax();
    const coverColor = document.querySelector('.cover-color') 
    const titleCover = document.querySelector('.title-card')
    const header = document.querySelector('header')
    const logo = document.querySelector('.logo')
    const linkItems = document.querySelector('.link-items')
    const hero = document.querySelector('.hero')
    tl.fromTo(titleCover, 2, {opacity: 0}, {opacity: 1}, "+=0.5") 
    .to(titleCover, 1, {opacity: 0}, "+=0.5")  
    .fromTo(coverColor, 1, 
        {y: '0%'}, 
        {y:'-100%', 
        onComplete: () => document.querySelector('body').classList.remove('is-loading') }, 
        "+=0.5")
    // .fromTo(header, 1, 
    //     {opacity: 0, yPercent: -100}, 
    //     {yPercent:0, opacity: 1}, 
    //     "+=0.5")
    .fromTo(logo, 1, {opacity: 0}, {opacity: 1}, "+=0.2")
    //.to(linkItems, { duration: 2.5, ease: "bounce.out", y: 0 });
     .to(".link-items .link-item", {opacity: 1}) 
     .from(".link-items .link-item", {y:-50, stagger: 0.1, duration: 0.5, ease: "black"})
     .fromTo(".hero", {opacity: 0}, {opacity: 1}, "+=0.2") 
}
 
init(); 
// function myFunction() {
//     var elmnt = document.getElementById("myDIV");
//     var x = elmnt.scrollLeft;
//     var y = elmnt.scrollTop;
//     document.getElementById("demo1").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
// }