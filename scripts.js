const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 64;
const CANVAS_HEIGHT = canvas.height = 64;

const playerImage = new Image();
playerImage.src = 'hitman.png';

const spriteWidth = 64 ;
const spriteHeight = 64 ;

let frameX = 0; 
let frameY = 0;
let gameFrame = 0;
const staggerFrames  = 10;

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100,50, 100,100);
    // ctx.drawImage(image, posx, posy, spritewidth, spriteheight, dx, dy, dw, dh)
    ctx.drawImage(playerImage, frameX*spriteWidth, frameY*spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrames == 0){
        if(frameX <4) frameX++;
        else frameX = 0;
    }
    gameFrame++;
    requestAnimationFrame(animate);
};

animate();