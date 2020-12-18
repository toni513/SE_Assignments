/*JQuery cont.
Complete following
jQuery Fundamentals (Links to an external site.)*/

//jQuery Methods (Links to an external site.)
jQuery Methods – before()//insert the specified content before the selected elements
$("ul").before("
<h2>My favourite dogs!!</h2>
")
jQuery Methods – after()//insert specified content after the selected element
$("ul").after("
<h2>All dogs are adorable!!</h2>
")
jQuery Methods – text()//set or return the text content of the selected elements
$(selector).text( )
$(selector).text(content)
$("li").text()
$("p").text("Welcome to this fun jQuery Tutorial")

jQuery Methods – html()//to set or return the entire content of the selected elements
$(selector).html( )
$(selector).html(content)
$("li:first").html()
$("li:last").html("
<li> German shepherd</li>
")
jQuery Methods – css()//to get or set style properties for selected elements
$(selector).css(propertyname);
$(selector).css(propertyname, value);
$("h1").css("background-color", "blue")
$("ul li").css("color", "green")

jQuery Methods – attr()//to set or return attributes and values of the selected elements
$(selector).attr(attribute)
$(selector).attr(attribute, value)
$("img").attr("border","5px solid black")

jQuery Methods – val()//to set or return current values of the selected elements
$(selector).val( )
$(selector).val(value)

jQuery Methods – addClass()//to add one or more class to the selected element
$(selector).addClass(classname)

jQuery Methods – removeClass()//removes one or more class to the selected element
$(selector).removeClass(classname)
$("img").removeClass("styleclass")

jQuery Methods – toggleClass()//toggles between adding and removing one or more class to the selected element
$(selector).toggleClass(classname)
$("img").toggleClass("styleclass")


//jQuery Events (Links to an external site.)
jQuery Events – click()
When you click on an element, the click event occurs by executing a function or a set of statements.
$(selector).click(function)

jQuery Events -on()
Once you run the above code, open up the JavaScript console and enter any character into the input box.
On the keypress of a character the <p> tag that says “Start typing…” gets hidden. So in this example
we’re using the on() event to add another event listener, i.e. keypress().

jQuery Events – keypress()
The jQuery keypress ( ) event is executed when a character is entered.
$(selector).keypress(function)


//jQuery Effects (Links to an external site.)
jQuery Effects – hide()
The jQuery hide() method is used to hide the selected elements.
$(selector).hide(speed, callback);

jQuery Effects – show()
The jQuery show() method is used to display the selected elements.
$(selector).show(speed, callback);

jQuery Effects – toggle()
The jQuery toggle() method is used to toggle between the hide() and show() method.
It displays the hidden elements and hides the visible element.
$(selector).toggle(speed, callback);
The toggle() effect is a combination of hide() and show().
$("img").toggle()

jQuery Effects – fadeOut()
The jQuery fadeOut() method is used to fade out the selected element.
$(selector).fadeOut(speed, callback);

jQuery Effects – fadeIn()
The jQuery fadeIn() method is used to fade in the selected element.
$(selector).fadeIn(speed, callback);

jQuery Effects – fadeToggle()
jQuery fadeToggle() method is used to toggle between the fadeIn() and fadeOut() methods.
$(selector).fadeToggle(speed, callback);
The fadeToggle() effect is a combination of fadeOut() and fadeIn().
$("#one").fadeToggle()
$("#two").fadeToggle()
$("#three").fadeToggle()

jQuery Effects – slideDown()
The jQuery slideDown() method is used to slide down the selected element.
$(selector).slideDown(speed, callback);

jQuery Effects – slideUp()
The jQuery slideUp() method is used to slide up the selected element.
$(selector).slideUp(speed, callback);

jQuery Effects – slideUp()
The jQuery slideUp() method is used to slide up the selected element.
$(selector).slideUp(speed, callback);

jQuery Effects – slideToggle()
jQuery slideToggle() method is used to toggle between the slideDown() and slideUp() methods.
$(selector).slideToggle(speed, callback);
The slideToggle() effect is a combination of slideDown() and slideUp().
$("#div1").slideToggle("slow")


//jQuery UI
Query UI – draggable()
jQuery UI draggable() method is used to make any DOM element draggable. Once the
element is draggable, you can drag it anywhere within the html page.
$(selector).draggable( );

Query UI – droppable()
jQuery UI facilitates you to use droppable() method to make any DOM element
droppable at a specified target.
$(selector).droppable( );

Query UI – datepicker()
jQuery UI datepicker widget enables users to enter dates easily and visually. 
$(selector).datepicker( );
