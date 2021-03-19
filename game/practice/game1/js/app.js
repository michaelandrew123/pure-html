const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
let stageWidth;
let stageHeight;
let canvasPosition = canvas.getBoundingClientRect();
window.addEventListener('resize', resize());

const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    click: false,
}

canvas.addEventListener('mousedown', function(event){
    mouse.click = true;
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;
});

canvas.addEventListener('mouseup', function(event){
    mouse.click = false
})

class Player{
    constructor(){
        this.x = canvas.width;
        this.y = canvas.height/2 
        this.radius = 50;
    }
    update(){
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;

        if(mouse.x != this.x){
            this.x -= dx/20;
        }
        if(mouse.y != this.y){
            this.y -= dy/20;
        }
    }
    draw(){
        if(mouse.click){
            ctx.strokeStyle = 'green';
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y); // appear last
            ctx.lineTo(mouse.x, mouse.y); // appear first 
            ctx.stroke();
        }
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}

const player = new Player();



function animate(){
    ctx.clearRect(0, 0, stageWidth, stageHeight);
    player.draw();
    player.update();
    requestAnimationFrame(animate)
}

animate();










function resize(){
    stageWidth = document.body.clientWidth;
    stageHeight = document.body.clientHeight;

    canvas.width = stageWidth * pixelRatio;
    canvas.height = stageHeight * pixelRatio;
    ctx.scale(pixelRatio, pixelRatio); 
    canvasPosition = canvas.getBoundingClientRect();
}
