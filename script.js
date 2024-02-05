let screen = document.getElementById("screen");

let ctx = screen.getContext("2d");
let ctx2 = screen.getContext("2d");
let ctx3 = screen.getContext("2d");


ctx.lineWidth = 3;
ctx.strokeStyle = "#FF98AE";
ctx.moveTo(0,0);
ctx.lineTo(700,0);
ctx.lineTo(350,200);
ctx.stroke();


ctx2.moveTo(0,0);
ctx2.lineTo(350,200);
ctx2.stroke();


ctx3.lineWidth = 10;
ctx3.moveTo(0,0);
ctx3.lineTo(0,500);
ctx3.lineTo(700,500);
ctx3.lineTo(700,0);
ctx3.stroke();