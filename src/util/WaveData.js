class WaveData{
  constructor(){

  }

  getWave(level){
    //generate random number
    if(level === 1){
      return getLevelOneWave();
    }
    else{
      return getLevelTwoWave();
    }
  }


  
  getLevelOneWave(r){
  }

  getLevelTwoWave(r){

  }
}

export default WaveData;
