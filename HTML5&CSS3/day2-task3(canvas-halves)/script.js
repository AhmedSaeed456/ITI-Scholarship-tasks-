var x=false
var i = 0
var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');
function first(x) {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(100, 50, 50, 0, Math.PI, x);
    ctx.stroke()
    ctx.lineWidth="1"
    ctx.closePath();
    // Fill with yellow color
    ctx.fillStyle = '#FFFF00';
    ctx.fill();
}

var tim = setInterval(() => {

    if (i < 10) {
        if (x == true) {
            first(true)
            x = false
        }
        else {
            first(false)
            x = true
        }
       
    }
    
    if (i == 10) {
        console.log("el");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(100, 50, 50, 0, 2 * Math.PI);
        ctx.stroke()
        ctx.lineWidth="5"
        ctx.closePath(); 
        ctx.fillStyle = '#FFFF00';
        ctx.fill();
        clearInterval(tim)
        
    }
    i++; 
    

  
    },100)
   
  
    






