const baseURL = ('https://ghibliapi.herokuapp.com/films');

let characterInfo = [
  {imageURL: './pics/Ashitaka.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/San.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Eboshi.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Jigo.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Kohroku.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Gonza.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Hii-sama.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Yakul.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Shishigami.png', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Moro.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Jiji.png', correctMovie: 'Kiki Delivery Service'},
  {imageURL: './pics/Satsuki.png', correctMovie: 'My Neighbor Totoro'}
]
let movieChoices = document.getElementById('movie-choices');
let characterImage = document.getElementById('character-image');
let characterName = document.getElementById('character-name');
let submit = document.getElementById('submit');
submit.addEventListener("click", submitAnswer);

let randomNumberSelected;

//current character shown on screen
let currentCharacter;

//starting point of correct and wrong guesses
let correctGuessStart = 0;
let wrongGuessStart = 0;

//generate a random character to start with
let randomCharacterStart;

//fetch films list
  fetch(baseURL)
  .then(function (response) {
    return response.json();
  }).then(function(movieJson){
    for (var i = 0; i < movieJson.length; i++)
    document.getElementById("movie-choices").innerHTML += "<option>" + movieJson[i].title + "</option>";
        console.log(response);
  })

    fetch('https://ghibliapi.herokuapp.com/people')
    .then(function(response) {
    return response.json();
  }) 
  .then(function (characterJson) {
    console.log(characterJson);
    displayRandomCharacter(characterJson);
  })

//shows list of movie titles
document.getElementById("movie-choices").onchange = function() {
  let movieSelected = document.getElementById("movie-choices");
  let movieTitle = movieSelected.options[movieSelected.selectedIndex].innerText;
  console.log(movieTitle);
}

console.log(characterJson[randomCharacterStart].films[0]);
console.log(selectedFilm);
if (characterJson[randomCharacterStart].films[0].includes(selectedFilm)
) 
//generate a new character image
getNewCharacterData();
document.getElementById("movie-choices").selectedIndex = 0;

//annoucement if game is won
if (correctCount === 5) {
  alert ("You won!");
}
function displayRandomCharacter(characterJson) {
  //come up with a random number between 0-31
  //need name and photo
  //create an element for the image
  //give the image a source
  //append the image element to the character image
  //add inner text for character name
  let randomNumber = Math.floor(Math.random()*31);
  randomNumberSelected = randomNumber;
  characterName.innerText = characterJson[randomNumber].name;
  let image = document.createElement('img');
  image.src = characterInfo[randomNumber].imageURL;
  characterImage.appendChild(image);
  //go find images
  //update line random number to account for all pictures
  //
}
function submitAnswer() {
  //take what is in drop down menu and compare it to array
  //
  if (movieChoices.value == characterInfo[randomNumberSelected].correctMovie) {
    alert ('You are correct')
  } else {
    alert ('You are wrong')
  }
}
