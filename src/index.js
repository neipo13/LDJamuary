import GameState from 'states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(320, 512, Phaser.AUTO, 'content', null);
		this.antialias = false;
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}
}

new Game();
