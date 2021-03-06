(function(){
    const wallBounciness = 0.8;
    const bounciness = 0.8; // Bounciness value between 0 (no bounce) and 1 (no loss of energy when bouncing)
    const gravity = 2;
    const IMPULSE = 20.5;
    const PLAYER_RADIUS = 50;


    class Player {

        constructor (x, y, vx, vy, canvas, world){
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.canvas = canvas;
            this.radius = PLAYER_RADIUS;
            this.color = 'black';
            this.world = world;
        }

        render (ctx) {
            drawCircle(ctx, this.x, this.y, this.radius, this.color);
        }

        update(timeElapsed) {
            if (Input.isKeyDown(Input.Keys.LEFT)){
                this.vx = -IMPULSE;
            }
            if (Input.isKeyDown(Input.Keys.RIGHT)){
                this.vx = IMPULSE;
            }

            this.x += this.vx; // Apply horizontal velocity
            this.y += this.vy; // Apply vertical velocity
            this.vy += gravity; // Apply gravity to vercital velocity

            if (this.y > canvas.height) {
                this.reactToBounce();
                this.y = canvas.height;
                this.vy *= - wallBounciness;
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
            // this.color = randomColor();
        }

    }

window.Player = Player;

})();
