"use strict";

function control() {
    // Update controllers if they're being used
    pads = navigator.getGamepads();

    // User input callback for player 1
    tieBomber.keyPress(pads[0]);

    // User input for player 2
    if (numPlayers == 2)
	arwing.keyPress(pads[1]);
    
    if (keyboard.pressed("2"))
	numPlayers = 2;
    else if(keyboard.pressed("1")) {
	numPlayers = 1;
    }
 
    if (keyboard.pressed("3"))  {
	scene.remove(skyBox);
	skyBox = skyBoxSpace;
	scene.add(skyBox);
    }
    else if(keyboard.pressed("4")) {
	scene.remove(skyBox);
	skyBox = skyBoxLand;
	scene.add(skyBox);
    }




}
