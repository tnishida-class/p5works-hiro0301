// 小手調べ
function setup(){
  noFill();
  for(let i = 0; i < 10; i++){
    let r=i*10+10
    ellipse(50, 50, r, r);
    if(i<4){
      stroke(0,0,255);
    }
    else{
      stroke(255,0,0);
    }
  }
}
