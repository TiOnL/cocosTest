var  StartScene = (function(){

  var mainLayer = cc.Layer.extend({
    ctor:function () {
      this._super();
      var backgroundSprite = new cc.Sprite(res.startSceneImage);
      backgroundSprite.attr({
        x:cc.winSize.width/2,
        y:cc.winSize.height/2,
        scale:1.0
      });
      this.addChild(backgroundSprite);
      cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: (keyCode, event) =>{
              if (keyCode == cc.KEY.enter){
                cc.eventManager.removeAllListeners();
                cc.director.runScene(new MainScene());
              }
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
