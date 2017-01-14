import Player from 'objects/Player';
import Input from 'util/Input';

class GameState extends Phaser.State {

	preload(){
		this.game.load.image('player', 'img/16pxTest.png');
		this.game.load.image('sword', 'img/testSword.png');
		this.game.load.image('troll', 'img/blackBox.png');
	}

	create() {
		this.game.stage.backgroundColor = "#DDD";
		this.player = new Player(this.game, 160, 480);
		this.inputManager = new Input(this.game);
	}

	update(){
		this.game.inputs = this.inputManager.update(); //manually update input (sprites will update themselves)
	}

}

export default GameState;
