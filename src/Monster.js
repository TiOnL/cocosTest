var Monster = cc.Sprite.extend({
  hp:100,
  maxSpeed:1,
    ctor:function (monsterType) {
      var monsterInfo = Constants.monsters[monsterType]
      if(monsterInfo){
        this._super("res/monsters/" +monsterInfo.sprites[0]);
        var scale = monsterInfo.scale ||1.0;
        this.setScale(scale, scale);
        var animationDelay = monsterInfo.animationDelay || 0.5;
        var animFrames = [];
        for(var fname of monsterInfo.sprites){
          var spriteFrame = cc.spriteFrameCache.getSpriteFrame(monsterType + "/" + fname);
          if(!spriteFrame){
            var texture = cc.textureCache.addImage("res/monsters/" +fname);
            var spriteFrame = cc.SpriteFrame.create(texture,cc.rect(0,0,texture.width,texture.height));
            cc.spriteFrameCache.addSpriteFrame(spriteFrame, monsterType + "/" + fname);
          }
        var animFrame = new cc.AnimationFrame(spriteFrame, 1, null);
          animFrames.push(animFrame);
        }
        var animation = new cc.Animation(animFrames, animationDelay, 1);
        var animateAction = cc.Animate.create(animation);
        this.runAction(animateAction.repeatForever());
        this.hp = monsterInfo.hp;
        this.maxSpeed = monsterInfo.maxSpeed;
      }else{
        this._super(res.error);
      }
      this.scheduleUpdate();
  },
  update(dt){
    this.checkCollisionsWithBullets();
    this.x -=dt*this.maxSpeed;
    if(this.hp<=0){
      this.removeFromParent();
    }
  },
  checkCollisionsWithBullets(){
    var bBox = this.getBoundingBoxToWorld();
    var allChildren = this.parent.getChildren();
    for(var i = 0; i< allChildren.length; i++) {
      if(!(allChildren[i].damage))continue;
      var bullet = allChildren[i];
      if(cc.rectContainsPoint(bBox, bullet)){
        this.hp -= bullet.damage;
        bullet.removeFromParent();
      }
    }
  }


});
