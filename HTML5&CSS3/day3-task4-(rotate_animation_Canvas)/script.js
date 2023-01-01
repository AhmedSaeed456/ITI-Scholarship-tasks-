const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
var q = 120;
var v = 1;
const x = 100;
const y = 100;
const width = 350;
const height = 150;
var angle = Math.PI / 4; 
const tim=setInterval(() => {
   // 45 degrees in radians

ctx.save();

// Translate the canvas context to the center of the rectangle
ctx.translate(x + width / 2, y + height / 2);



ctx.rotate(v*(angle + q));
// Draw the rectangle at the rotated position
ctx.fillStyle = "rgba(0,100,255,0.5"; 
ctx.fillRect(-width / 5, -height / 2, width, height/2);

    ctx.restore();
    q += 0.2;
    if (q > 126) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        q = 120;
        v *= -1;
       
    }
    
},100)
// const x = 100;
// const y = 100;
// const width = 100;
// const height = 50;
// var angle = Math.PI / 10;  // 45 degrees in radians
// var q = 120;
// ctx.save();

// // Translate the canvas context to the center of the rectangle
// ctx.translate(x + width / 2, y + height / 2);

// // Rotate the canvas context around the center of the rectangle
// // setInterval(() => {
// //     ctx.rotate(angle + q);
// //     q++;
// //     console.log(q);
// //     ctx.fillStyle = "rgba(0,100,255,0.5"; 
// // ctx.fillRect(-width / 2, -height / 2, width, height);
// // },1000)

// ctx.rotate(angle + q);
// // Draw the rectangle at the rotated position
// ctx.fillStyle = "rgba(0,100,255,0.5"; 
// ctx.fillRect(-width / 2, -height / 2, width, height);

// ctx.restore();
