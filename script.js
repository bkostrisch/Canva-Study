let screen = document.getElementById("screen");

let ctx = screen.getContext("2d");


ctx.beginPath();

ctx.lineWidth = 4;
ctx.strokeStyle = "purple";
ctx.moveTo(10, 10);
ctx.lineTo(500, 400);
ctx.stroke();


ctx.beginPath();

ctx.lineWidth = 7;
ctx.strokeStyle = "blue";
ctx.fillStyle= "white";
ctx.moveTo(50, 10);
ctx.lineTo(300, 300);
ctx.lineTo(100, 300);
ctx.closePath();
ctx.fill();
ctx.stroke();



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