const canvas = document.getElementById('orbitCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// 5 glowing rings settings
const orbits = [
  { radius: 100, angle: 0, speed: 0.01, color: 'rgba(219, 156, 20, 0.2)', width: 2 },
  { radius: 140, angle: Math.PI / 2, speed: 0.008, color: 'rgba(245, 216, 25, 0.92)', width: 2 },
  { radius: 180, angle: Math.PI, speed: 0.006, color: 'rgba(217, 255, 0, 0.99)', width: 2 },
  { radius: 220, angle: Math.PI / 4, speed: 0.004, color: 'rgba(255, 255, 0, 0.7)', width: 2 },
  { radius: 260, angle: Math.PI / 3, speed: 0.003, color: 'rgba(140, 255, 0, 0.9)', width: 2 },
];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  orbits.forEach(orbit => {
    orbit.angle += orbit.speed;

    // draw orbit ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, orbit.radius, 0, Math.PI * 2);
    ctx.strokeStyle = orbit.color;
    ctx.lineWidth = orbit.width;
    ctx.shadowBlur = 15;
    ctx.shadowColor = orbit.color;
    ctx.stroke();

    // optional: small moving dot along the ring
    const dotX = centerX + orbit.radius * Math.cos(orbit.angle);
    const dotY = centerY + orbit.radius * Math.sin(orbit.angle);
    ctx.beginPath();
    ctx.arc(dotX, dotY, 6, 0, Math.PI * 2);
    ctx.fillStyle = orbit.color;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
