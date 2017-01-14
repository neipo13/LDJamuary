import Troll from 'objects/Troll';

class EnemySpawner {
  constructor(game, enemyGroup, y, level) {
    this.y = y || 0;
    this.game = game;
    this.enemyGroup = enemyGroup;
    this.level = level || 1;
    this.i = 0;
    this.j = 0;
    this.eol = true;
    this.spawnJson = [];
    this.columnWidth = 64;
    this.defaultOffset = this.columnWidth/2;
  }
  start() {
    //use level data to create the spawnJson obj
    this.spawnJson = [
      [
        {
          'column':0,
          'offset':0,
          'nextTimer':0,
          'enemyType':'troll'
        },
        {
          'column':1,
          'offset':0,
          'nextTimer':0,
          'enemyType':'troll'
        },
        {
          'column':2,
          'offset':0,
          'nextTimer':0,
          'enemyType':'troll'
        },
        {
          'column':3,
          'offset':0,
          'nextTimer':0,
          'enemyType':'troll'
        },
        {
          'column':4,
          'offset':0,
          'nextTimer':5000,
          'enemyType':'troll'
        }
      ],
      [
        {
          'column':0,
          'offset':0,
          'nextTimer':1000,
          'enemyType':'troll'
        },
        {
          'column':1,
          'offset':0,
          'nextTimer':1000,
          'enemyType':'troll'
        },
        {
          'column':2,
          'offset':0,
          'nextTimer':1000,
          'enemyType':'troll'
        },
        {
          'column':3,
          'offset':0,
          'nextTimer':1000,
          'enemyType':'troll'
        },
        {
          'column':4,
          'offset':0,
          'nextTimer':5000,
          'enemyType':'troll'
        }
      ]

    ]
    this.spawnNextWave();
  }

  spawnNextWave() {
    //spawn current enemy using i & j as array indicators
    let enemyData = this.spawnJson[this.i][this.j];
    const x = (enemyData.column * this.columnWidth) + this.defaultOffset;
    //switch on enemy type
    if(enemyData.enemyType === 'troll'){
      let enemy = new Troll(this.game, x, this.y);
      this.enemyGroup.add(enemy);
    }
    this.j++;
    //if no more in current wave, move to next wave
    if(!this.nextEnemyExists()){
      this.i++;
      this.j = 0;
      if(!this.nextEnemyExists()){
        //if no more waves, trigger end of level flag
        this.eol = true;
        this.i = 0;
        this.j = 0;
        this.start();
        return;
      }
    }
    //grab next enemy info
    //if spawn time is 0, call self recusively to spawn enemy
    if(enemyData.nextTimer == 0){
      this.spawnNextWave();
      return;
    }
    //otherwise, set a timer (from enemy data) and use this fucntion as the timer callback
    this.game.time.events.add(enemyData.nextTimer, this.spawnNextWave, this);
  }

  nextEnemyExists(){
    return this.spawnJson[this.i] !== undefined && this.spawnJson[this.i][this.j] !== undefined;
  }
}

export default EnemySpawner;
