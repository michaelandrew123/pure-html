 function init(){
    const slides = document.querySelectorAll('.slide');
    const pages = document.querySelectorAll('.page');
    const backgrounds = [
        `radial-gradient(#2b3760, #0b1023)`, 
        `radial-gradient(#4e3022, #161616)`,
        `radial-gradient(#4e4342, #161616)`
    ];

    //Tracker
    let current = 0;
    let scrollSlide = 0;
    slides.forEach((slide, index)=> {
        slide.addEventListener('click', function(){
            changeDots(this);
            nextSlide(index);
            scrollSlide = index;
        })
    })
    function changeDots(dot){ 

        slides.forEach(slide=>{
            slide.classList.remove('active');
        })
        dot.classList.add('active');
    }

    function nextSlide(pageNumber){
        const nextPage = pages[pageNumber];
        const currentPage = pages[current]; 
        const nextModel = nextPage.querySelector('.hero .model');
        const currentModel = currentPage.querySelector('.hero .model');
        const nextText = nextPage.querySelector('.details');
        const overallContainer = document.querySelector('.overall-container');
 
        const tl = new TimelineMax({
            onStart: function(){
                slides.forEach(slide =>{ 
                    slide.style.pointerEvents = 'none';
                })
            },
            onComplete: function(){
                slides.forEach(slide=>{
                    slide.style.pointerEvents = 'all';
                })
            } 
        });
        tl.fromTo(currentModel, 0.3, {y: '-10%'}, {y:'-100%'}, "-=0.2")
            .to(overallContainer, 0.3, { backgroundImage: backgrounds[pageNumber] })
            .fromTo(currentPage, 0.3, 
            {opacity: 1, pointerEvents: 'all'}, 
            {opacity: 0, pointerEvents: 'none'}
            ) 
            .fromTo(nextPage, 0.3, 
            {opacity: 0, pointerEvents: 'none'}, 
            {opacity: 1, pointerEvents: 'all'}
            ) 
            .fromTo(nextModel, 0.3, {y: '-100%'}, {y:'-10%'}, "-=0.2")
            .fromTo(nextText, 0.3, {opacity: 0, y: 0}, {opacity: 1, y:0})
            .set(nextModel, { clearProps: "all" } );
                
        current = pageNumber;
    }

    document.addEventListener('wheel', throttle(scrollChange, 1500));
    document.addEventListener('touchmove', throttle(scrollChange, 1500));

    function switchDots(dotNumber){
        const activeDot = document.querySelectorAll('.slide')[dotNumber];
        slides.forEach(slide => {
            slide.classList.remove('active');
        }); 
        activeDot.classList.add('active');

    }

    function scrollChange(e){
        if(e.deltaY > 0)
        {
            scrollSlide += 1;
        }else{
            scrollSlide -= 1;
        }
        if(scrollSlide > 2){
            scrollSlide = 0;
        }
        if(scrollSlide < 0){
            scrollSlide = 2;
        }
        switchDots(scrollSlide);
        nextSlide(scrollSlide); 
        console.log(scrollSlide); 
    }
 
 }
 
function throttle(func, limit){
    let inThrottle;
    return function(){
        const args  = arguments;
        const context = this;
        if(!inThrottle){
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>(inThrottle=false), limit);
        }
    }
}



 init();