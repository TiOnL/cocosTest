
var HelloWorldLayer = cc.Layer.extend({
    playerSprite:null,
    objects:[],
    monsters:[],
    ctor:function () {
        this._super();

        this.monsters.push(new Monster());



        var size = cc.winSize;
        var backgroundSprite = new cc.Sprite(res.background_png);
        backgroundSprite.attr({
              x:size.width/2,
              y:size.height/2
            });
        this.addChild(backgroundSprite, -10);
        this.playerSprite = new cc.Sprite("res/player.png");
        this.playerSprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.playerSprite, 0);
        this.scheduleUpdate();
        for (var m of this.monsters){
          this.addChild(m, 0);
        }
        return true;
    },
    update: function(dt){
      console.log("init called "+ dt);
      this.playerSprite.x-=dt*5;
      if(this.playerSprite.x<=100)this.removeChild(this.playerSprite);
    }

});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
