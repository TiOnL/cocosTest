var  MainScene = (function(){

  var HelloWorldLayer = cc.Layer.extend({
    playerSprite:null,
    monsterSpawner:null,
    scoreLabel:null,
    ctor:function () {
      this._super();
      this.monsterSpawner = new MonsterSpawner(monsterSpawnScenario, true);
      this.monsterSpawner.onMonsterSpawn = (monster)=>{
        monster.onDie = (m)=>{
          if(m.isBoss){
            GameData.playerScore += 500;
            this.playerSprite.setSpecialBullets("bullet-bat", 3.0);
          }else{
            GameData.playerScore += 100;
          }
          this.scoreLabel.setString("Score: " + GameData.playerScore);
        }
        this.addChild(monster);
      }
      this.scoreLabel =  cc.LabelTTF.create("Score: 0","Arial","32",cc.TEXT_ALIGNMENT_LEFT);
      this.scoreLabel.x = Constants.screenSizeX * 0.9;
      this.scoreLabel.y = Constants.screenSizeY * 0.95;
      this.addChild(this.scoreLabel);
      var size = cc.winSize;
      var backgroundSprite = new cc.Sprite(res.background_png);
      backgroundSprite.attr({
        x:size.width/2,
        y:size.height/2,
        scale:1.0
      });
      this.addChild(backgroundSprite, -10);
      this.playerSprite = new Player();
      this.playerSprite.attr({
        x: size.width / 2,
        y: size.height / 2
      });
      this.addChild(this.playerSprite, 0);
      this.scheduleUpdate();
      GameData.playerScore = 0;
      //test



      return true;
    },
    update: function(dt){
      this.monsterSpawner.update(dt);
      var allChildren = this.getChildren();
      //check game loose
      for (child of allChildren){
        if(child instanceof Monster && child.x < Constants.gameOverLineX){
          this.unscheduleUpdate();
          // this.cleanup();
          // cc.director.pause();
          this.changeScene();
          return;
        }

      }

    },
    changeScene:function(){
      var allChildren = this.getChildren();
        for (child of allChildren){
          child.unscheduleUpdate();
        }
      cc.eventManager.removeAllListeners();
      var transition = new cc.TransitionCrossFade(3.0, new EndGameScene());
      cc.director.runScene(transition);
    }

  });


  return cc.Scene.extend({
    onEnter:function () {
      this._super();
      var layer = new HelloWorldLayer();
      this.addChild(layer);
    }
  });

})();
