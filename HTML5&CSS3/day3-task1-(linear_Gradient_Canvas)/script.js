const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Create gradient
const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height/2);
gradient.addColorStop(0, 'blue');
gradient.addColorStop(1, 'white');


const gradient2 = ctx.createLinearGradient(0, canvas.height / 2, 0, canvas.height);
gradient2.addColorStop(0, "green");
gradient2.addColorStop(1, "white");

const squareGradiet = ctx.createLinearGradient(0, 0, canvas.width / 2, 0);
squareGradiet.addColorStop(0, "black");
squareGradiet.addColorStop(0.7, "black");
squareGradiet.addColorStop(1, "transparent");
ctx.lineWidth = 7;

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

ctx.fillStyle = gradient2;
ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);


ctx.strokeStyle = squareGradiet;

ctx.beginPath();
ctx.rect(100, 100, 200, 200);
ctx.rotate(Math.PI / 2);
ctx.stroke();



