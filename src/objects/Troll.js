import Enemy from 'objects/Enemy';

class Troll extends Enemy{
  constructor(game, x, y){
    super(game, x, y, 'troll');
    this.body.velocity.y = this.ySpeed;
  }

  onCollision(){
  }
}

export default Troll;
