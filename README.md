I used the MoMA's [Artist's data JSON](https://github.com/MuseumofModernArt/collection). I chose this dataset because it's one I'm already familiar with from some of the digital preservation classes I've taken in my degree.

My goal was to create a visualization of the Nationality field to represent how often different nationalities appear in the MoMA's collection. I wanted to use every instance of every nationality in the data, which originally seemed like it was going to take a lot of manual variable creation. 

My original thought was to create a circle for each nationality and adjust their size based on the nationality's frequency. Since I wanted to pull non-numerical data from my list and we didn't cover the specifics of that in class, there was some troubleshooting involved.

My first (unsuccessful) attempt was this (with `let American = 0` as a global variable):
```
for (let idx = 0; idx < data.length; idx++) {
  let aNationality = data[idx].nationality;

  if(aNationality = "American") {
    American += 1;
  }

  ellipse(width/2, height/2, American);
  }
```

After some googling, I landed on this to calculate the frequency of a specific nationality like "american", set as a global variable already: 
```
for (let idx = 0; idx < data.length; idx++) {
  let nationality = data[idx].Nationality;

    if (nationality == "American") {
      american++;
    }

    if (nationality == null) {
      nodata++;
    }
}

let AmerCircle = map(american, 0, 138442, 0, height)
let NoneCircle = map(nodata, 0, 138442, 0, height)

fill(0);
ellipse(100, height/2, AmerCircle);
fill(10);
ellipse(width/2, height/2, NoneCircle);
```

While this let me pull specific nationality counts, I couldn't figure out a way to essentially mass-calculate the frequency of every nationality in the dataset, so I reached out by email. The example I received worked for my data to give me number counts for each nationality, and from there I worked within the same `for()` loop to illustrate the results.

I decided to go for a word bubble-esque visualization, with text for each nationality sized to match its frequency. I did this by mapping the number count for the nationalities to font sizes between 15 and 100. Then I randomized randomized each text's location on the screen, with borders of 100 added to try and prevent text from clipping off-screen. It doesn't completely solve that problem, since the "American" text still sometimes clips off, but I think making bigger borders would have made it a bit too crowded in the middle of the screen. Then I randomized the color for each text (and changed the background to a more neutral one), and added a grey-toned stroke to the text to make sure text would be visible even when colors clashed with the background. I wanted a black outline, but for smaller text it doesn't work so well.

I was honestly kind of surprised by the data results. I figured American would be the most frequent, since it's an American museum, but I didn't think the difference would be as large as it is. That being said, the second largest nationality is just "null" so there's a lot of unknown data.