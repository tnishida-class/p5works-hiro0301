// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 50, 50, color(0,0,255),"red");
}

function balloon(t,x,y,bc,tc){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  let m=w+p*2
  let n=h+p*2
  fill(bc);
  rect(x, y, m, n);
  fill(tc);
  text(t, x, y+h);
  fill(bc)
  triangle(x+m/4, y+n, x+m/4, y+h+p*8, x+m/3, y+n)
}
