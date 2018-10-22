var ImpassableGround = cc.Sprite.extend({
  remainingTime:1,
  radius:1,

  ctor:function (radius, remainingTime) {
    this.remainingTime = remainingTime || 1;
    this.radius = radius || 50;
    this._super(Constants.impassableGround.sprites[0]);
    this.setAnchorPoint(new cc.Point(0.5, Constants.impassableGround.yAnchorPoint))
    this.setScaleX(this.radius/Constants.impassableGround.baseRadius*1.7);
    this.setScaleY(this.radius/Constants.impassableGround.baseRadius);
    var animFrames = [];
    for(var fname of Constants.impassableGround.sprites){
      var spriteFrame = cc.spriteFrameCache.getSpriteFrame(fname);
      if(!spriteFrame){
        var texture = cc.textureCache.addImage(fname);
        var spriteFrame = cc.SpriteFrame.create(texture,cc.rect(0,0,texture.width,texture.height));
        cc.spriteFrameCache.addSpriteFrame(spriteFrame, fname);
      }
      var animFrame = new cc.AnimationFrame(spriteFrame, 1, null);
      animFrames.push(animFrame);
    }
    var animation = new cc.Animation(animFrames, 0.1, 1);
    var animateAction = cc.Animate.create(animation);
    this.runAction(animateAction.repeatForever());
    this.scheduleUpdate();
  },
  update(dt){
    this.remainingTime -=dt;
    if(this.remainingTime <= 0){
      this.removeFromParent();
    }
  }

});
