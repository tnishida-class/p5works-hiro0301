// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      rect(size * i, size * j, size ,size)
      if((itj) %2 ==0){
        fill(0);
      }
      else{
        fill(150);
      }
    }
  }
}
