
var MonsterSpawner = function(){
  var spawnData = [{type:"test-monster",
                    time: 0.2,
                    x: 0.85,
                    y: 0.5
                  },
                  {type:"vampire",
                  time: 1.8,
                  x: 0.85,
                  y: 0.8},
                  {type:"zombie",
                  time: 2.0,
                  x: 0.85,
                  y: 0.25},
                  {type:"zombie",
                  time: 3.0,
                  x: 0.85,
                  y: 0.5},
                  {type:"skull",
                  time: 6,
                  x: 0.85,
                  y: 0.8},
                  {type:"skull",
                  time: 9,
                  x: 0.85,
                  y: 0.5},
                  {type:"vampire",
                  time: 9,
                  x: 0.85,
                  y: 0.25},
                  ];

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
