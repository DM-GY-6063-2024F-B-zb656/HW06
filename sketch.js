let data = [];
let natCount = {};

// let nodata = 0;

function preload() {
  data = loadJSON("Artists.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(190);
  textAlign(CENTER);
  textFont('Courier New');
  textStyle(BOLD);

  data = Object.values(data);

  for (let idx = 0; idx <data.length; idx++) {
    let mNat = data[idx].Nationality;
    if (mNat in natCount) {
      natCount[mNat] += 1;
    } else {
      natCount[mNat] = 1;
    }
  }

  let natList = Object.keys(natCount);

  for (let idx = 0; idx < natList.length; idx++) {
    let aNat = natList[idx];
    let aNatCount = natCount[aNat];
    let NatSize = map(aNatCount, 0, 5500, 15, 100);

    let x = random(100, width - 100);
    let y = random(100, height - 100);

    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);

    textSize(NatSize);
    stroke(150);
    strokeWeight(1);
    fill(r,g,b);
    text(aNat, x, y); 
  }




  // my original way of counting nationalities one by one
  // for (let idx = 0; idx < data.length; idx++) {
  //   let nationality = data[idx].Nationality;

  //   if (nationality == "American") {
  //     american++;
  //   }


  //   if (nationality == null) {
  //     nodata++;
  //   }
  // }


  // the circles (abandoned)
  // let AmerCircle = map(american, 0, 138442, 0, height)
  // let NoneCircle = map(nodata, 0, 138442, 0, height)

  // fill(0);
  // ellipse(100, height/2, AmerCircle);
  // fill(10);
  // ellipse(width/2, height/2, NoneCircle);

}

function draw() {
}
