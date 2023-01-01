const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const outerGradient = ctx.createRadialGradient(canvas.width,canvas.height , 150, 0, 0, 200);

outerGradient.addColorStop(0, 'white');
outerGradient.addColorStop(1, 'blue');

const innerGradient = ctx.createRadialGradient(
    canvas.width /2+100,
    canvas.height / 2+70,
    0,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 4
);
  

innerGradient.addColorStop(0, 'white');
innerGradient.addColorStop(1, 'blue');

ctx.fillStyle = outerGradient;
ctx.arc(canvas.width/2, canvas.height/2, 150, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 4, 0, 2 * Math.PI);
ctx.fillStyle = innerGradient;
ctx.fill();

ctx.font = "200px Arial";
ctx.fillStyle="white"
ctx.fillText("A", canvas.width/2-60, canvas.height/2+70);