"use strict";

function advance() {
    // fire a laser
    var deadLasers = 0;
    if (tieBomber.lasers[0] != undefined) {
      for (var i = 0; i < tieBomber.lasers.length; i++) {
      	if (tieBomber.lasers[i].timeAlive < 0) {
      		deadLasers++;
      		scene.remove(tieBomber.lasers[i].model);
      		scene.remove(tieBomber.lasers[i].pointLight);
      	}
        tieBomber.lasers[i].advance();
        tieBomber.lasers[i].model.updateMatrix();
      }
    }
    while (deadLasers > 0) {
    	tieBomber.lasers.shift();
    	deadLasers--;
    }

    temp.position.set(tieBomber.model.position.x, tieBomber.model.position.y, tieBomber.model.position.z);
    skyBox.position.set(tieBomber.model.position.x, tieBomber.model.position.y, tieBomber.model.position.z);
    tieBomber.advance();
    laser.advance();

    // rotate and update the asteroids
    // Using an asteroid class will make this much smoother.  Take an object as the constructor parameter.
    //    Include: rotation, velocity, size.
    for (var i = 0; i < 50; i++) {
	if(asteroids[i].model.rotation.x != undefined)
	    asteroids[i].rotateMove();
    }

    // LASER Collision detection
    for(var a = 0; a < asteroids.length; a++) {
	for(var b = 0; b < tieBomber.lasers.length; b++) {
	    
	    if(asteroids[a].model != undefined && tieBomber.lasers[b].model != undefined) // Ensure creation
		if(tieBomber.lasers[b].colBox.intersectsBox(asteroids[a].colBox)) {// Check collision
		    asteroids[a].model.position.x = 10000000;
		    tieBomber.laers[b].model.x = 1000000000000
		}
	}
    }
}
