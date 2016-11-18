let Input = {
    mouseLeftDown: false,
    mouseRightDown: false,
    mouseX: 0,
    mouseY: 0,
    isKeyDown(key){
        return KeyState[key];
    },
    Keys: {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        SPACEBAR: 32
    }
};

let KeyState = {};

for (let key in Input.Keys) {
    KeyState[Input.Keys[key]] = false;
}

document.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        mouseLeftDown = true;
    } else if (event.button === 2) {
        mouseRightDown = true;
    }
});

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

document.addEventListener('mouseup', (event) => {
    if (event.button === 0) {
        mouseLeftDown = false;
    } else if (event.button === 2) {
        mouseRightDown = false;
    }
});

document.addEventListener('keydown', (event) => {
    for (let key in Input.Keys) {
        if (Input.Keys[key] === event.keyCode) {
            KeyState[Input.Keys[key]] = true;
        }
    }
});

document.addEventListener('keyup', (event) => {
    for (let key in Input.Keys) {
        if (Input.Keys[key] === event.keyCode) {
            KeyState[Input.Keys[key]] = false;
        }
    }
});
