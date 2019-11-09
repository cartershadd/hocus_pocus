

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

console.log("test");

// do cool things with the context
ctx.font = '40pt Calibri';
ctx.fillStyle = 'blue';
ctx.fillText('Hello World!', 100, 100);