var canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');


var color = ["red","green", "blue", "purple", "yellow"];

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = ["red", "green", "blue", "purple", "yellow"];
    this.randomIndex = Math.floor(Math.random() * color.length);

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "red";
        // c.stroke();
        c.fillStyle = this.color[this.randomIndex];
        c.fill();

    }

    this.update = function () {

        if (this.x + radius > innerWidth || this.x - radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + radius > innerHeight || this.y - radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            if(this.radius < 40){
                this.radius += 1;
            }
            
        }
        else{
            if(this.radius > this.minRadius){
                this.radius -= 1;
            }
        }

        this.draw();
    }
}

window.addEventListener('resize', function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init();
})

var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;

})


var circleArray = [];

function init(){
    circleArray = [];
    for (var i = 0; i < 800; i++) {
        var x = Math.random() * (window.innerWidth - radius * 2) + radius;
        var y = Math.random() * (window.innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        var radius = Math.random()*3 + 5;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}





function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}
animate();
init();