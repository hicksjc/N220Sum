var Lyrics = ["Blue canary in the outlet by the light switch", "Who watches over you?", "Make a little birdhouse in your soul"];
//variable for div element.
var song = document.getElementById("lyrics");
let currentLyric = 0;
song.innerHTML = Lyrics[0];
//create a function that goes forward through the lyrics.
function forward() {
    //when the button is clicked display the next lyric, ending in the last.
    currentLyric = currentLyric + 1;
    song.innerHTML =  Lyrics[currentLyric];
}
function backward() {
    //when the button is clicked display the previous lyric, ending in the first.
    currentLyric = currentLyric - 1;
    song.innerHTML = Lyrics[currentLyric];
}