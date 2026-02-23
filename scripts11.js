console.log("This is scripts11.js");
const login = document.getElementById("clickme")
login.style.display = "block";
document.getElementById("birthday").style.display = "none";

login.onclick = function() {
    login.style.display = "none";
    document.getElementById("birthday").style.display = "";
    birthday();
}

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function birthday(){
    let fireworks = [];
let particles = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Firework {
    constructor() {
        this.x = random(0, canvas.width);
        this.y = canvas.height;
        this.targetY = random(canvas.height/4, canvas.height/2);
        this.speed = random(3, 7);
        this.exploded = false;
    }
    update() {
        this.y -= this.speed;
        if (this.y <= this.targetY && !this.exploded) {
            this.explode();
            this.exploded = true;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI*2);
        ctx.fillStyle = "white";
        ctx.fill();
    }
    explode() {
        const colors = ["#ff0043","#14fc56","#1e90ff","#fffc00","#ff7f00"];
        for(let i=0; i<30; i++){
            particles.push(new Particle(this.x, this.y, colors[Math.floor(random(0,colors.length))]));
        }
    }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.speedX = random(-5,5);
        this.speedY = random(-5,5);
        this.alpha = 1;
        this.decay = random(0.01,0.03);
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= this.decay;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }
}

function animate() {
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    if(Math.random() < 0.05){
        fireworks.push(new Firework());
    }

    fireworks.forEach((f, index) => {
        f.update();
        f.draw();
        if(f.exploded) fireworks.splice(index,1);
    });

    particles.forEach((p,index)=>{
        p.update();
        p.draw();
        if(p.alpha <= 0) particles.splice(index,1);
    });

    requestAnimationFrame(animate);
}

animate();
}

/* Optional: adjust canvas size on resize */
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
inside = document.getElementById("inside");
document.getElementById("buttonme").onclick = function() {
    inside.style.display = "flex";
    document.getElementById("buttonme").style.display = "none";
}
const insta = document.getElementById("insta");
insta.onclick = function() {
    window.open("https://www.instagram.com/reel/DT4Z941gSVL/?igsh=NjVqaGRhZ2h1ZHdu", "_blank");
}