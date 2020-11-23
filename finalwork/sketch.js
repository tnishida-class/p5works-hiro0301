// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 20;
  }

 function draw(){
  background(0 , 0 , 255);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = windowWidth/2 + cos(theta) * windowWidth/8;
    let y = windowHeight/2 + sin(theta) * windowWidth/8;
//　星のアニメーション
    count = (count + 0.01) % cycle;
    if(count < 10){
      size = count + 10;
    }
    else{
      size = 20 - count;
    }
    noStroke();
    fill(255, 204, 100);
    star(x, y, size);
  }
// 質問を表示
  if(keyIsDown("Q".charCodeAt(0))){
    questionballon("この旗は何を意味しますか？", 100 , 100 , 255, 0)
}
// 答えを表示　
  if(keyIsDown("A".charCodeAt(0))){
    answerballon("この旗は欧州旗、つまりEUの旗を意味します！！", 100, 450 , 255, "red")
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

function questionballon(t, x, y, bc, tc){
  textSize(16);
  let w = textWidth(t);
  let h = textAscent(); + textDescent();
  fill(bc);
  ellipse(x + w / 2 , y, w * 1.8, h * 8);
  fill(tc);
  text(t, x, y + h);
  fill(bc);
  triangle(x + w /3 , y + h * 3.5 , x + w * 5 / 6, y+ h * 5 , x + w * 3 / 4 , y + h * 3.5);
}

function answerballon(t, x, y, bc, tc){
  textSize(16);
  let w = textWidth(t);
  let h = textAscent(); + textDescent();
  fill(bc);
  ellipse(x + w / 3 , y, w * 1.2 , h * 8);
  fill(tc);
  text(t, x - w / 5, y + h);
  fill(bc);
  triangle(x + w / 2, y - h * 3.5 , x + w * 3 / 4 , y - h * 5 , x + w * 11 / 16 , y - h * 3);
}
