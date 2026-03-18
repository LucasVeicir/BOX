let box;
let box2;
let box3

function setup(){
    createCanvas(400,400);
    box = new Box();
    box2 = new Box2(10, 10, 100, 50, 1);
    box3 = new Box2(390, 340, 50, 50, -1)
}

function draw(){
    background(220);
    box.show();
    box.setWidth(100);
    box2.show();
    box2.move();
    box3.show();
    box3.move();
}