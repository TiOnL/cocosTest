var  MainScene = (function(){

  var HelloWorldLayer = cc.Layer.extend({
    playerSprite:null,
    monsterSpawner:null,
    ctor:function () {
      this._super();
      this.monsterSpawner = new MonsterSpawner();
      this.monsterSpawner.onMonsterSpawn = (monster)=>{
        this.addChild(monster);
      }

      var size = cc.winSize;
      var backgroundSprite = new cc.Sprite(res.background_png);
      backgroundSprite.attr({
        x:size.width/2,
        y:size.height/2,
        scale:2.0
      });
      this.addChild(backgroundSprite, -10);
      this.playerSprite = new Player();
      this.playerSprite.attr({
        x: size.width / 2,
        y: size.height / 2
      });
      this.addChild(this.playerSprite, 0);
      this.scheduleUpdate();
      return true;
    },
    update: function(dt){
      this.monsterSpawner.update(dt);
      var allChildren = this.getChildren();
      //check game loose
      for (child of allChildren){
        if(child instanceof Monster && child.x < Constants.gameOverLineX){
          // this.unscheduleUpdate();
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
