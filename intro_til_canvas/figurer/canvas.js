
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//Rektangler
c.fillStyle = 'yellow';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'red';
c.fillRect(100, 300, 200, 80);
c.fillStyle = 'green';
c.fillRect(350, 300, 40, 350);

//Linjer
c.beginPath();
c.moveTo(100, 380);
c.lineTo(350,650);
c.lineTo(300, 380);
c.strokeStyle = 'blue';
c.stroke();

//Sirkler (arc)
c.beginPath();
c.arc(350, 100, 30, 0, 2*Math.PI);
c.strokeStyle = "blue";
c.fillStyle = 'rgba(0,0,250,0.3';
c.fill();
c.stroke();

//Mange sirkler


//Mønster
for(var i = 1; i<100; i++){
    c.beginPath();
    c.arc(150+i*2, 150+i*15, 5+i*10, 0, 2*Math.PI);
    c.strokeStyle = 'rgba('+r+','+g+','+b+', 100)';
    c.fillStyle = 'rgba(0,0,250,0.3';
    c.stroke();
}

//Tilfeldig
for(var i = 1; i<100; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerWidth;
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    c.beginPath();
    c.arc(x, y, 10, 0, 2*Math.PI);
    c.strokeStyle = 'rgba('+r+','+g+','+b+', 100)';
    c.fillStyle = 'rgba(0,0,250,0.3';
    c.stroke();
}