// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j) %2 ==0){
        fill(255);
      }
      else{
        fill(100);
      }
      rect(size * i, size * j, size ,size);
    }
  for(let n = 0; n < 8; n++){
    for(let m = 0; m < 8; m++){
      let r=20;
      if((n+m)  %2 ==1 && m<3){
        fill(255,0,0);
      }
      else if((n+m)  %2 ==1 && m>=3 && m<5){
        fill(100);
}
      else if((n+m)  %2 ==1 && m>=5){
        fill(0,0,255);
      }
      else{
        fill(255);
      }
        ellipse(12.5+size*n, 12.5+size*m, r, r);
    }
      }
    }
  }
