var Grenade = cc.Sprite.extend({
  targetX:1,
  targetY:1,
  speedX:0,
  speedY:0,
  ctor:function (targetX, targetY) {
    this.targetX = targetX;
    this.targetY = targetY;
    this.speedX = -1300;
    this._super(res.grenade);
    this.setScale(0.2);
    this.scheduleUpdate();
  },
  update(dt){
    var dx = this.targetX - this.x;
    var dy = this.targetY - this.y;
    var t = dx / this.speedX; //time to target
    var accelY = dy*2/(t*t*t) - this.speedY*2/(t*t) - this.speedY/t; //aceleration need to reach target for t time
    this.speedY += accelY*dt;
    this.x += this.speedX*dt;
    this.y += this.speedY*dt;
    this.remainingTime -=dt;
    if(t<dt){
      this.blow();
      this.removeFromParent();
    }
  },
  blow(){
    var impg = new ImpassableGround(100, 10);
    impg.x = this.targetX;
    impg.y = this.targetY;
    this.getParent().addChild(impg);
  }

});
