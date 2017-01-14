simport Sword from 'objects/Sword';

class Player extends Phaser.Sprite {

	constructor(game, x, y) {
		super(game, x, y, 'player'); // sprite constructor
    this.anchor.setTo(.5,.5); // center sprite
    this.scale.setTo(2,2); //TODO:REMOVE THIS WHEN ADDING A 32px sprite
    //properties
		this.speed = 175; //character L/R move speed
		this.fireDelay = 500; //ms
		this.fireTimer = 0;
    //physics body
    game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.body.allowGravity = false;
    //animation

    //finished add it to the stage
    this.game.stage.addChild(this);
	}

  update(){
    this.move();
		this.fire();
  }

	move(){
		//use global input obj
    let velX = 0;
    if(this.game.inputs.left && !this.game.inputs.right){
      velX = -this.speed;
    }
    else if (this.game.inputs.right && !this.game.inputs.left){
      velX = this.speed;
    }
    this.body.velocity.x = velX;
	}

	fire(){
		if(this.fireTimer < this.fireDelay/1000){
				//increment time since last firing
				this.fireTimer += 1/60;
				console.log(this.fireTimer);
		}
		else{
			//shoot dummy!
			console.log('shooooooot');
			const sword = new Sword(this.game, this.x, this.y, this.body.velocity.x);
			//don't forget to reset the timer to 0;
			this.fireTimer = 0;
		}
	}

}

export default Player;
