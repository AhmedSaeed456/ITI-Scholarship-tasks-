
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = 0;
ctx.beginPath();
ctx.moveTo(0, 0);

ctx.lineWidth = 5
ctx.strokeStyle = "blue"


var tim = setInterval(() => {
    
    ctx.lineTo(x++, x++);
    ctx.closePath();
    ctx.stroke();
    if (x >500) {
        alert("finish")
        clearInterval(tim);
        
    }
},10)


