var Bullet = cc.Sprite.extend({
  damage:1,
  speed:1,
  
    ctor:function (bulletType) {
      var bulletInfo = Constants.bullets[bulletType]
      if(bulletInfo){
        this._super(bulletInfo.sprite);
        this.damage = bulletInfo.damage;
        this.speed = bulletInfo.speed;
      }else{
        this._super(res.error);
      }
      this.scheduleUpdate();
  },
  update(dt){

    this.x +=dt*this.speed;
    if(this.x > Constants.screenSizeX){
      this.removeFromParent();
    }
  },


  getSprite:function(){
    return this.sprite;
  }

});
