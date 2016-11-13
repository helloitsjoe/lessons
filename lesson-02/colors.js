function randomChannel() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    return `rgb(${randomChannel()},${randomChannel()},${randomChannel()})`;
}
