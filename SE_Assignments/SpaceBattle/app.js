$(() => {

  //Modal 

  // Grabbing "Mission" button. 
  const $openBtn = $('#openModal');

  // Grabbing modal element
  const $modal = $('#modal');

  // Grabbing close button
  const $closeBtn = $('#close');

  // Event handler to open the modal
  // Add event listener to About the Game button
  $openBtn.on('click', () => {
  $modal.css('display', 'block');
 });
  
  // Event handler to close the modal
  // Add event listener to Close button
  $closeBtn.on('click', () => {
    $modal.css('display', 'none');
  });
  
 //Begin Space Battle 2020 JS

 //Input prompt to start the Battle to Save Earth!!!
 $("#close").click(function() {
   inputName = prompt("Please Enter Your Name Captain: ");
   console.log('%c Hello Captain ' +inputName+ ' you are going to battle against aliens to save Earth!', "color:green;font-size:35px");
   inputReady = prompt("ENTER READY, HIT OK, THEN GO TO THE CONSOLE WHEN THIS BOX DISAPPEARS: ");
   console.log('%c CAPTAIN ' +inputName+ ' SPACE BATTLE BEGINS NOW!!!', 'color:red;font-size:40px');
  });
}); 
 
/*class Hero {
  //Assign fields
  constructor(name, hull, accuracy, firepower) {
    //"this" keyword refers to the object it belongs to
    this.name = name || Captain;
    this.hull = hull || 20;
    this.accuracy = accuracy || 0.7;
    this.firepower = firepower || 5;
  }
}
attack() {
    if (alienCount >= 6) {
      $('#game-text').append('');
      $('#game-text').append(
        `<div class="action">You won! ${spaceShip.name} has defeated the aliens!<br></div>`
      );
    } else {
      if (Math.random() < spaceShip.accuracy) {
        alienArray[alienCount].hull =
          alienArray[alienCount].hull - spaceShip.firepower;
        if (alienArray[alienCount].hull <= 0) {
          $('#game-text').append(
            `<div class="action">${alienArray[alienCount].name} ${
              alienCount + 1
            } is destroyed<br></div>`
          );
          i++;
        } else {
          alienAttack();
        }
      } else {
        $('#game-text').append(
          `<div class="action">${spaceShip.name} has missed...<br></div>`
        );
        alienAttack();
      }
    }
  }
  retreat() {
    $('#game-text').append(
      `<div class="action">${this.name} has retreated! Game over!</div>`
    );
    var alienCount = 0;
  }
}


class Alien {
    constructor(hull, accuracy, firepower) {
      this.hull = Math.floor(Math.random() * 4) + 3; //given between 3 and 6
      this.firePower = Math.floor(Math.random() * 3) + 2; //given between 2 and 4
      this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; // given between 0.6 and 0.8
      
    } 
}); */ 





















