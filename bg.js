const body = document.querySelector("body");

const IMG_NUMBER=3;

function handleImgLoad(){
  console.log("finished loaded")
}



function paintImage(ImgNumber){
  const image = new Image();
  image.src = 'images/${imgNumber+1}.jpg'
  body.prepend(image);
  // image.addEventListener("loadend");
  //
  // image.classList.add()
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
