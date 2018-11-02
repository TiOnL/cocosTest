
var MonsterSpawner = function(spawnData, infinite){


  spawnData.sort((a,b)=>{return a.time - b.time});
  //end initialization
  this.onMonsterSpawn = null;
  var timeSinceStart = 0;
  var currentSpawnDataPos = 0;

  this.update = function (dt){
    timeSinceStart+=dt;
    while(currentSpawnDataPos<spawnData.length &&
          spawnData[currentSpawnDataPos].time < timeSinceStart){
            if(this.onMonsterSpawn){
              var monster = new Monster(spawnData[currentSpawnDataPos].type);
              monster.x = spawnData[currentSpawnDataPos].x * Constants.screenSizeX;
              monster.y = spawnData[currentSpawnDataPos].y * Constants.screenSizeY;
              this.onMonsterSpawn(monster);
            }
            currentSpawnDataPos ++;
          }
  }

}
