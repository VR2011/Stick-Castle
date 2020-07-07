const {Engine, World, Bodies} = Matter;

function preload() {

}
var hat, hatL, hatR;

function setup() {
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(1000, 1200);
    ground = new Ground(600, 1190, 1200, 20);
    midBox = new Box(500, 1000, 200, 400);
    firBoxL = new Box(350, 900, 100, 600);
    firBoxR = new Box(650, 900, 100, 600);
    secBoxL = new Box(250, 800, 100, 800);
    secBoxR = new Box(750, 800, 100, 800);
    leftBox = new Box(150, 700, 50, 1000);
    rightBox = new Box(850, 700, 50, 1000);
}

function draw() {
    Engine.update(engine);
    background("black");
    ground.display();
    midBox.display();
    firBoxL.display();
    firBoxR.display();
    secBoxL.display();
    secBoxR.display();
    leftBox.display();
    rightBox.display();
    hat = triangle(400, 780, 500, 500, 600, 780);
    hatL = triangle(187.5, 375, 250, 275, 312.5, 375);
    hatR = triangle(687.5, 375, 750, 275, 812.5, 375);
    //console.log(mouseX, mouseY);
    drawSprites();
}