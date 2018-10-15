var Monster = cc.Sprite.extend({
  hp:100,
    ctor:function () {
    this._super("res/player.png");
    this.x = 200;
    this.y = 200;
    this.scheduleUpdate();

  },
  update(dt){
    console.log("monster update "+ dt);
    this.hp -=1;
    this.x +=dt*20;
    if(this.hp<=0){
    //  this.unscheduleUpdate();
      this.removeFromParent();
    }
  },


  getSprite:function(){
    return this.sprite;
  }

});
