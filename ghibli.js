const baseURL = ('https://ghibliapi.herokuapp.com/films');

let characterInfo = [
  {imageURL: './pics/Ashitaka.jpg', correctMovie: `Princess Mononoke`},
  {imageURL: './pics/San.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Eboshi.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Jigo.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Kohroku.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Gonza.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Hii-sama.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Yakul.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Shishigami.png', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Moro.jpg', correctMovie: 'Princess Mononoke'},
  {imageURL: './pics/Jiji.png', correctMovie: 'Kiki\'s Delivery Service'},
  {imageURL: './pics/Satsuki.png', correctMovie: 'My Neighbor Totoro'},
  {imageURL: './pics/Mei.png', correctMovie: 'My Neighbor Totoro'},
  {imageURL: './pics/Tatsuo.jpg', correctMovie: 'My Neighbor Totoro'},
  {imageURL: './pics/Yasuko.jpg', correctMovie: 'My Neighbor Totoro'},
  {imageURL: './pics/Granny.png', correctMovie: 'My Neighbor Totoro'},
  {imageURL: './pics/Kanta.jpg', correctMovie: 'My Neighbor Totoro'},
  {imageURL: './pics/Totoro.jpg', correctMovie: 'My Neighbor Totoro'},
  {imageURL: './pics/Chu.jpg', correctMovie: 'My Neighbor Totoro'},
  {imageURL: './pics/Chibi.jpg', correctMovie: 'My Neighbor Totoro'},
  {imageURL: './pics/Catbus.jpg', correctMovie: 'My Neighbor Totoro'},
  {imageURL: './pics/Niya.jpg', correctMovie: 'The Secret World of Arrietty'},
  {imageURL: './pics/Renaldo.jpg', correctMovie: 'The Cat Returns', correctMovie: 'Whisper of the Heart'},
  {imageURL: './pics/Catking.jpg', correctMovie: 'The Cat Returns'},
  {imageURL: './pics/Yuki.jpg', correctMovie: 'The Cat Returns'},
  {imageURL: './pics/Haru.jpg', correctMovie: 'The Cat Returns'},
  {imageURL: './pics/Baron.jpg', correctMovie: 'The Cat Returns'},
  {imageURL: './pics/Natori.png', correctMovie: 'The Cat Returns'},
  {imageURL: './pics/Muska.jpg', correctMovie: 'Castle in the Sky'},
  {imageURL: './pics/Marco.jpg', correctMovie: 'Porco Rosso'},
  {imageURL: './pics/Sosuke.jpg', correctMovie: 'Ponyo'}
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
}
function submitAnswer() {
  if (movieChoices.value == characterInfo[randomNumberSelected].correctMovie) {
    alert ('You are correct')
    window.location.reload(true);
  } else {
    alert ('You are wrong')
    window.location.reload(true);
  }
}

