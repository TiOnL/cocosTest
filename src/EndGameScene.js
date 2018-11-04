var  EndGameScene = (function(){

  var mainLayer = cc.Layer.extend({
    playerSprite:null,
    monsterSpawner:null,
    ctor:function () {
      this._super();
      var backgroundSprite = new cc.Sprite(res.endSceneImage);
      backgroundSprite.attr({
        x:cc.winSize.width/2,
        y:cc.winSize.height/2,
        scale:1.0
      });
      this.addChild(backgroundSprite, -1);

      var outputText = "Game ended. Your score: " + GameData.playerScore +
        "\nPress Enter.";
      var myLabel =  cc.LabelTTF.create(outputText, "Arial","32",cc.TEXT_ALIGNMENT_CENTER);
      myLabel.x = Constants.screenSizeX/2;
      myLabel.y = Constants.screenSizeY/2;
      this.addChild(myLabel);
      cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: (keyCode, event) =>{
              if (keyCode == cc.KEY.enter){
                cc.eventManager.removeAllListeners();
                cc.director.runScene(new StartScene());
              }
            }
          }, this);
      cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: (keyCode, event) =>{
                cc.eventManager.removeAllListeners();
                cc.director.runScene(new StartScene());
            }
          }, this);
      return true;
    }

  });


  return cc.Scene.extend({
    onEnter:function () {
      this._super();
      var layer = new mainLayer();
      this.addChild(layer);
    }
  });
})();
