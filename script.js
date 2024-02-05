let screen = document.getElementById("screen");

let ctx = screen.getContext("2d");

let img = new Image();
img.src = "./img/Cat.png";

img.onload = drawImg;

function drawImg() {


    ctx.drawImage(this, 250, 200, this.naturalWidth/2 , this.naturalHeight/2);


}




// Animated Circle
// let circle = {

//      x: 250,
//      y: 250,
//      r: 100,    
//      begin: 0,
//      end: 0,
// }

// function drawCircle (c) {

//     ctx.beginPath();
//     ctx.rect(0, 0, 650 , 500);
//     ctx.fillStyle = "#B9EEF3";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.strokeStyle = "#A98C16";
//     ctx.arc( c.x, c.y, c.r, c.begin, c.end);
//     ctx.fillStyle = "#FDDA4C";
    
//     ctx.fill();
//     ctx.stroke();

// }

// drawCircle(circle);

// setInterval(function(){


//     if (circle.end < 2 * Math.PI){

//         circle.end += 0.1;
//         circle.x += 1;
//         circle.y -= 1;

//     }

//     drawCircle(circle);


// },10)




// Understanding how Path works
// ctx.beginPath();

// ctx.lineWidth = 4;
// ctx.strokeStyle = "purple";
// ctx.moveTo(10, 10);
// ctx.lineTo(500, 400);
// ctx.stroke();


// ctx.beginPath();

// ctx.lineWidth = 7;
// ctx.strokeStyle = "blue";
// ctx.fillStyle= "white";
// ctx.moveTo(50, 10);
// ctx.lineTo(300, 300);
// ctx.lineTo(100, 300);
// ctx.closePath();
// ctx.fill();
// ctx.stroke();



// Rectangle border only
// ctx.strokeStyle = "white";
// ctx.strokeRect(20, 20, 100, 200)


// Purple Rectangle 
// ctx.fillStyle = "purple";
// ctx.fillRect(20, 20, 100, 200)


// Rectangle with border and cut part
// ctx.rect(20, 20, 100, 200)
// ctx.strokeStyle = "white";
// ctx.fillStyle = "purple";
// ctx.fill();
// ctx.stroke();
// ctx.lineWidth = 3;
// ctx.clearRect(10, 10, 20, 20);


// Carta desenhada
// let ctx = screen.getContext("2d");
// let ctx2 = screen.getContext("2d");
// let ctx3 = screen.getContext("2d");
// ctx.lineWidth = 3;
// ctx.strokeStyle = "#FF98AE";
// ctx.moveTo(0,0);
// ctx.lineTo(700,0);
// ctx.lineTo(350,200);
// ctx.stroke();

// ctx2.moveTo(0,0);
// ctx2.lineTo(350,200);
// ctx2.stroke();

// ctx3.lineWidth = 10;
// ctx3.moveTo(0,0);
// ctx3.lineTo(0,500);
// ctx3.lineTo(700,500);
// ctx3.lineTo(700,0);
// ctx3.stroke();