var  EndGameScene = (function(){

  var mainLayer = cc.Layer.extend({
    playerSprite:null,
    monsterSpawner:null,
    ctor:function () {
      this._super();
      var fontDef = new cc.FontDefinition();
      fontDef.fontName = "Arial";
      fontDef.fontSize = "32";
      var myLabel =  cc.LabelTTF.create("Game Ended","Arial","32",cc.TEXT_ALIGNMENT_CENTER);
      myLabel.x = Constants.screenSizeX/2;
      myLabel.y = Constants.screenSizeY/2;
      this.addChild(myLabel);
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
