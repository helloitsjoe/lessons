const wallBounciness = 0.8;
const bounciness = 0.8; // Bounciness value between 0 (no bounce) and 1 (no loss of energy when bouncing)
const gravity = 2;


class Particle {

    constructor (x, y, vx, vy, canvas, world){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.canvas = canvas;
        this.radius = radius;
        this.color = randomColor();
        this.world = world;
    }

    render (ctx) {
        drawCircle(ctx, this.x, this.y, this.radius, this.color);
    }

    update(timeElapsed) {
        this.x += this.vx; // Apply horizontal velocity
        this.y += this.vy; // Apply vertical velocity
        this.vy += gravity; // Apply gravity to vercital velocity

        if (this.y > canvas.height) {
            this.reactToBounce();
            this.y = canvas.height;
            this.vy *= - bounciness;
        }
        if (this.y < 0) {
            this.reactToBounce();
            this.y = 0;
            this.vy *= - bounciness;
        }
        if (this.x > canvas.width) {
            this.reactToBounce();
            this.x = canvas.width;
            this.vx *= - wallBounciness;
        }
        if (this.x < 0) {
            this.reactToBounce();
            this.x = 0;
            this.vx *= - wallBounciness;
        }

    }

    reactToBounce() {
        // this.radius *= 1.2;
        this.color = randomColor();
        // this.cloneSelf();
    }

    cloneSelf() {
        this.world.addEntity(new Particle(
            this.x,
            this.y,
            this.vx + (Math.random() - 0.5) * 1,
            this.vy + (Math.random() - 0.5) * 1,
            this.radius,
            this.canvas,
            this.world
        ));

    }

}
