const ROTATION_SPEED = 0.1;
let darkness
let currentRotation = 0, targetRotation = 0;

function darknessSetup() {
      darkness = new Sprite(width/2, height/2, 1920, 1080); // creates a sprite that is the size of the canvas and at the center of the canvas
      darkness.img = "assets/darknessEyesight.svg"
      darkness.collider = 'none';
      darkness.layer = DARKNESS_LAYER; // layer needs to be higher than player and enviroment sprites
} 

function darknessDraw(playerX, playerY, playerVelocityX, playerVelocityY, hasFlashlight) {     
      darkness.y = playerY;
      darkness.x = playerX;
  
      if(playerVelocityX !== 0 || playerVelocityY !== 0) { // if player is moving
          targetRotation = (Math.atan2(playerVelocityX, -playerVelocityY) * 180 / Math.PI + 360) % 360; // calculates the angle formed between two points, converts to degrees, range of 0-359
  
          // calculate the shortest rotation direction
          let diff = (targetRotation - currentRotation + 540) % 360 - 180; // finds difference between angles, add 540 to ensure positive before modulo, range of -180-179
  
          // adjust targetRotation to rotate in the shortest direction
          targetRotation = currentRotation + diff;
      }
  
      currentRotation = lerp(currentRotation, targetRotation, ROTATION_SPEED); // currentRotation gets ROTATION_SPEED times closer to the target
  
      darkness.rotation = currentRotation;

      if(hasFlashlight){
            darkness.img = "assets/darknessFlashlight.svg"
      }
      else{
            darkness.img = "assets/darknessEyesight.svg"
      }
}
