const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'meme.png';

img.onload=()=>{
    ctx.drawImage(img, 0, 200, 400, 500);
    ctx.font = "40px Arial";
    ctx.shadowColor = "black";
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 2;
    ctx.fillStyle="white"
    ctx.fillText("hppiness", canvas.width/2-60, canvas.height/2);
    ctx.fillText("overthinking", 0, canvas.height-40);
}
