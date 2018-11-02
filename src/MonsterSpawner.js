
var MonsterSpawner = function(spawnData, infinite){

  this.infiniteLoop = infinite || false;
  this.onMonsterSpawn = null;
  var timeSinceSpawn = 0;
  var currentSpawnDataPos = 0;

  this.update = function (dt){
    timeSinceSpawn+=dt;
    while(currentSpawnDataPos<spawnData.length &&
          spawnData[currentSpawnDataPos].time < timeSinceSpawn){
            timeSinceSpawn -= spawnData[currentSpawnDataPos].time;
            if(this.onMonsterSpawn){
              var monster = new Monster(spawnData[currentSpawnDataPos].type);
              monster.x = spawnData[currentSpawnDataPos].x * Constants.screenSizeX;
              monster.y = spawnData[currentSpawnDataPos].y * Constants.screenSizeY;
              this.onMonsterSpawn(monster);
            }
            currentSpawnDataPos ++;
          }
          if(this.infiniteLoop && currentSpawnDataPos >= spawnData.length){
            currentSpawnDataPos = 0;
          }
  }

}
