function setup(){
  createCanvas(200, 200);
  background(0, 0, 255);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 100 + cos(theta) * 50;
    let y = 100 + sin(theta) * 50;
    noStroke()
    fill(255, 204, 100);
    star(x, y, 10);
  }
}
function star(cx, cy, r){
  beginShape();
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}
