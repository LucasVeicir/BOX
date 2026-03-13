let box;

function setup(){
    createCanvas(400,400);
    box = new Box();
}

function draw(){
    background(220);
    box.show();
    box.setWidth(100);
}