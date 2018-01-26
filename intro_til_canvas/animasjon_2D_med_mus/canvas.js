
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c   =   canvas.getContext('2d');

var fart    =   0.05;
var temp    =   100;
var musX    =   canvas.width/2;
var musY    =   canvas.height/2;

c.canvas.addEventListener('mousemove', function (e) {
    musX = e.clientX;
    musY = e.clientY;


});



function animate() {

    requestAnimationFrame(animate);

    c.fillStyle = 'rgba(0, 0, 0, 0.05)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    temp = temp + fart;

    for(var i = 0; i<100; i++){
        var x = Math.sin(temp+i*temp/10)*20*i+musX;
        var y = Math.cos(temp+i*temp/10)*20*i+musY;
        var radius = 5;
        var r = 255;
        var g = 0;
        var b = Math.round(Math.random()*i*12);
        c.beginPath();
        c.arc(x, y, radius, 0, 2*Math.PI);
        c.strokeStyle = 'rgba('+r+','+g+','+b+', 0.3)';
        c.fillStyle = 'rgba('+r+','+g+','+b+', 0.6)';
        c.fill();
        c.stroke();
    }
}

animate();
