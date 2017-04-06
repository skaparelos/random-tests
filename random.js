//things to check:
//DOMElement.addEventHandler

//example code:



////////////////////////////////////////////////////////////////////
//
// QUIZ
// 
// Create a 256 element array named 'keyState', then specify the onKeyUp
// function as the event handler for the 'keyup' event. In the onKeyDown 
// and onKeyUp functions, modify the keyState array to keep track of which 
// keys are currently being pressed.
// You can assume that our canvas element has an ID of 'my_canvas'.
//
////////////////////////////////////////////////////////////////////

InputEngineClass = Class.extend({

// TASK #1
// Create a 256 element array to hold the keystates and name it 'keyState'.
//
// YOUR CODE HERE

// TASK #2
// Specify the event handler for the 'keyup' event in the 'setup' method.
// Remember that you can grab a DOM element using the document.getElementByID
// method, and that the syntax for the addEventHandler method is:
//
// DOMElement.addEventHandler('event name', eventHandlerFunction);

	//-----------------------------
	setup: function () {
		document.getElementById('my_canvas').addEventListener('mousemove', onMouseMove);
		document.getElementById('my_canvas').addEventListener('keydown', onKeyDown);
		// YOUR CODE HERE
		
	},

	//-----------------------------
	onMouseMove: function (event) {
		var posx = event.clientX;
		var posy = event.clientY;
	},

	//-----------------------------
	onKeyDown: function (event) {
		// TASK #3
		// Grab the keyID property of the event object parameter,
		// then set the equivalent element in the keyState array
		// to true.
        //
        // YOUR CODE HERE
        
	},

	//-----------------------------
	onKeyUp: function (event) {
		// TASK #4
		// Grab the keyID property of the event object parameter, 
		// then set the equivalent element in the keyState array
		// to false.
		//
		// YOUR CODE HERE
		
	},

	// This is just an example update function.
	// You don't have to do anything with this.
	//-----------------------------
	update: function() {
		// 87 is the corresponding ASCII keycode for the key 'w'.
		KeyW = 87;

		if(keyState[KeyW])
			// Drop the beat.
			console.log("FORWARD!!!");
		// etc.
	}


});

gInputEngine = new InputEngineClass();


