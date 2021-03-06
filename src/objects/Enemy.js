class Enemy extends Phaser.Sprite{
  constructor(game, x, y, spriteName){
    super(game, x, y, spriteName);
    //properties
    this.ySpeed = 100;
    this.attackDelay = 500; // ms
    this.hp = 100;
    //physics
    game.physics.arcade.enable(this);
    this.body.allowGravity = false;
    this.anchor.setTo(.5,.5);
    //animation

    //finished add it to the stage
    this.game.stage.addChild(this);
  }

  onCollision(){
    //placeholder fn
  }
}

export default Enemy;
