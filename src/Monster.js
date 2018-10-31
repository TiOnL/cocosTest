var Monster = cc.Sprite.extend({
  hp:100,
  maxSpeed:1,
  attackCount:0,
  attackDelay:1,
  timeToNextAttak:0,
    ctor:function (monsterType) {
      var monsterInfo = Constants.monsters[monsterType]
      if(monsterInfo){
        this._super("res/monsters/" +monsterInfo.sprites[0]);
        var scale = monsterInfo.scale ||1.0;
        this.setScale(scale, scale);
        var animationDelay = monsterInfo.animationDelay || 0.5;
        this.attackCount = monsterInfo.attackCount || 0;
        this.attackDelay = monsterInfo.attackDelay || 1.0;
        this.timeToNextAttak = this.attackDelay;
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
    if(this.hp<=0){
      this.removeFromParent();
      return;
    }
    this.x -=dt*this.maxSpeed;
    if(this.attackCount >0){
      this.timeToNextAttak -=dt;
      if (this.timeToNextAttak<=0){
        this.attack();
      }
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
  },

  attack(){
    this.attackCount --;
    this.timeToNextAttak = this.attackDelay;
    var attackX = Math.random()*(Constants.playerArea.right - Constants.playerArea.left)
        + Constants.playerArea.left;
    var attackY = Math.random()*(Constants.playerArea.top - Constants.playerArea.bottom)
            + Constants.playerArea.bottom;
    var grenade = new Grenade(attackX, attackY);
    grenade.x = this.x;
    grenade.y = this.y;
    grenade.speedY = 1000;
    this.getParent().addChild(grenade,1);

  }


});
