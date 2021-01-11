$(() => {
  $('form').on('click', (e) => {
    e.preventDefault();
    //Grabs the user input
    let userInput = $('input[type="number"]').val();
    const button = $(e.target).val();

    if (userInput < 1) {
      userInput = 10;
    }

    console.log(typeof e.target);
    //Provides reset after each Borough button click 
    if (button != 'NYPD Response') {
      $('ol').html(``);
   }
    
    //Request information from the server
    $.ajax({
      url:
        'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=' +
        button.toUpperCase(),
    }).then(
      (data) => {
        // Displays complaint(s) from input box
        var count = 0;
        for (let index = 0; index < data.length; index++) {
          if (data[index].agency == 'NYPD' && count < Number(userInput)) {
            count++;
            $('ol').append(`
          <li>
          <strong>Borough</strong><span id="borough">${
            data[index].borough
          }</span>
          <br>
          <strong>Descriptor</strong>:<span id="descriptor">${
            data[index].descriptor
          }</span>
          <br>
          <strong>Agency</strong>:<span id="agency">${data[index].agency}</span>
          <br>
          <div ><strong>Resolution description</strong>:<span><br><section>${
            data[index].resolution_description
          }</section></span></div>
          <input type="submit" value="NYPD Response" onclick="response(${count.toString()})" class="btn btn-warning" id="bit">
          </li>
          
          <hr>
          `);
          }
        }
      },
    );
  });
});
// Function open NYPD response button
function response(x) {
  var myNodelist = document.querySelectorAll('div');

  $(myNodelist[x]).animate(
    {
      height: 'toggle',
    },
  );
}