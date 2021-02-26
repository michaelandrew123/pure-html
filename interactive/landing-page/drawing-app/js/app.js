window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas'); 
    const ctx = canvas.getContext('2d');

    //resizing
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //part 1 
    //ctx.fillRect(200, 200, 40, 40);
    // ctx.strokeStyle = "red";
    // ctx.lineWidth = 5;
    // ctx.strokeRect(200, 200, 200, 200);
    // ctx.strokeStyle = "blue";
    // ctx.lineWidth = 2;
    // ctx.strokeRect(300, 300, 200, 200);

    //part 2
    // ctx.beginPath();
    // ctx.moveTo(100, 100);
    // ctx.lineTo(200, 100);
    // ctx.lineTo(200, 150);
    // ctx.closePath();
    // ctx.stroke();


    //part 3
    //variable

    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle='red';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }
    //eventlistener
    
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);





})



window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

// window.onload = () => {
//     alert("Hello world");
// } 