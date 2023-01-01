var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(100, 0);
ctx.lineTo(0, 200);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.stroke();

// Draw symbols
  ctx.font = '20px Arial';
  ctx.fillText('A', 40, 80);
  ctx.fillText('B', 105, 80);
  ctx.fillText('C', 50, 230);
  ctx.fillStyle = 'red';
  ctx.fill();
