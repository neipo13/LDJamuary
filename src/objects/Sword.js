class Sword extends Phaser.Sprite{
  constructor(game, x, y, vel){
    super(game, x, y, 'sword');
    this.anchor.setTo(.5,.5); // center sprite
    //properties
		this.forward = 175; // forward velocity
    this.horizontal = vel; // horizontal velocity from the player
    //physics body
    game.physics.arcade.enable(this);
    this.body.allowGravity = false;
    //set(and forget) the velocity of the projectile
    this.body.velocity.y = -this.forward;
    this.body.velocity.x = this.horizontal/4;
    //animation?

    //finished add it to the stage
    this.game.stage.addChild(this);
  }
}

export default Sword;
