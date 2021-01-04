//Sets up modal to open 6sec after pages loads. Can be opened & closed when desired
$(() => {

  //Grabbing Elements
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  //Event Handlers
  const openModal = () => {
    $modal.css('display', 'block');
  }
  setTimeout(openModal, 6000);

  const closeModal = () => {
    $modal.css('display', 'none');
  }

  //Event Listeners
  $openBtn.on('click', openModal);

  $closeBtn.on('click', closeModal);

});

//Set first alert to pop-up 2.5 sec after page loads
setTimeout(function() {
  alert(
    "Welcome to the Space Battle 2020 page! - Use the console log on the page to play the game. In exactly 5 seconds the mission details will be given and can be reviewed at any time by hitting the mission button."
  );
}, 2500);

//Defines a class
class Hero {
  //Assign fields
  constructor(name, hull, accuracy) {
    //"this" keyword refers to the object it belongs to
    this.name = name;
    this.hull = hull || 20;
    this.accuracy = accuracy || 0.7;
    this.firepower = firepower || 5;
  }
}

//Defines an extension of Hero class
class Aliens extends Hero {
  constructor(name, hull, accuracy, firepower) {
    //"super" keyword refers to parent class. Calls parent class constructor
    super(name, hull, accuracy, firepower);
  }
}

//Allien objects
const aliens1 = new Aliens('Borg', 5, 0.7, 3)
console.log( % You got me Captain but my brothers will avenge me!!!);
const aliens2 = new Aliens('Zoltan', 4, 0.7, 3)
console.log( % Die weak Earthling...I 'm hit!);
const aliens3 = new Aliens('Cyclon', 3, 0.6, 2)
console.log( % You will not destroy us all!);
const aliens4 = new Aliens('Titus', 4, 0.8, 2)
console.log( % Tricky move Captain!You last missle destroyed my engine.);
const aliens5 = new Aliens('Ozon', 5, 0.7, 3)
console.log( % Rats....Almost had you Captain!);
const aliens6 = new Aliens('Mortzar', 6, 0.8, 4)
console.log( % You won this time Captain!!!We will Return....
'font style: italic; background: red; border: 5px dashed black;');
