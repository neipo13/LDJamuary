import Player from 'objects/Player';
import Input from 'util/Input';
import EnemySpawner from 'util/EnemySpawner';

class GameState extends Phaser.State {
  preload() {
    this.game.load.image('player', 'img/16pxTest.png');
    this.game.load.image('sword', 'img/testSword.png');
    this.game.load.image('troll', 'img/blackBox.png');
  }

  create() {
    this.weaponGroup = this.game.add.group();
    this.enemyGroup = this.game.add.group();

    this.game.stage.backgroundColor = '#DDD';
    this.player = new Player(this.game, 160, 480, this.weaponGroup);
    this.inputManager = new Input(this.game);

		this.enemySpawner = new EnemySpawner(this.game, this.enemyGroup, 0, 1);
		this.enemySpawner.start();
  }

  update() {
    this.game.inputs = this.inputManager.update(); //manually update input (sprites will update themselves)
  }
}

export default GameState;
