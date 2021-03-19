
class Draw{
    constructor(ctx){
        this.ctx = ctx;
        this.painting = false;
    }

    animate(canvas){
        canvas.addEventListener('mousedown', this.startPosition.bind(this), false);
        canvas.addEventListener('mousemove', this.movePosition.bind(this), false);
        canvas.addEventListener('mouseup', this.finishedPosition.bind(this), false);
    }

    startPosition(e){
        this.painting = true;
        this.movePosition(e);
    }
    movePosition(e){
        if(!this.painting) return;

        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = 'red';

        this.ctx.lineTo(e.clientX, e.clientY);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(e.clientX, e.clientY);
    }
    finishedPosition(e){
        this.painting = false;
        this.ctx.beginPath();
    }

        

}



class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);


        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }
    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
        
        this.paint = new Draw(this.ctx);
    
    }
    animate(t){
        this.paint.animate(this.canvas);

        window.requestAnimationFrame(this.animate.bind(this));
    }

}

window.onload = ()=>{
    new App();
}