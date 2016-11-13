function drawCircle(ctx, cx, cy, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(cx,cy,radius,0,Math.PI*2,true);
    ctx.fill();
}
