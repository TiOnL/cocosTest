var Player = cc.Sprite.extend({
  maxSpeed:0,
  speedX:0,
  speedY:0,
  keysDown:new Set(),
  hp:100,
  onCreateObject:null,
  shootDelay:0.1,
  timeToShoot:0,
  bulletType:"bullet",
  bulletTypeRemainingTime:0,
  ctor:function () {
    this._super("res/player.png");
    var animFrames = [];
    for(var fname of res.playerSprites){
      var texture = cc.textureCache.addImage(fname);
      var spriteFrame = cc.SpriteFrame.create(texture,cc.rect(0,0,texture.width,texture.height));
      var animFrame = new cc.AnimationFrame(spriteFrame, 1, null);
      animFrames.push(animFrame);
    }
    var animation = new cc.Animation(animFrames, 0.07, 1);
    var animateAction = cc.Animate.create(animation);
    this.runAction(animateAction.repeatForever());

    this.x = 200;
    this.y = 200;
    this.maxSpeed = Constants.playerMaxSpeed;
    this.scheduleUpdate();
    cc.eventManager.addListener({
    	    event: cc.EventListener.KEYBOARD,
    	    onKeyPressed: (keyCode, event) =>{
            this.keysDown.add(keyCode);
    	    },
          onKeyReleased :(keyCode, event) =>{
            this.keysDown.delete(keyCode);
    	    },
        }, this);

  },
  update(dt){
    if (this.keysDown.has(cc.KEY.up)) this.speedY += dt*Constants.playerAcceleration;
    if (this.keysDown.has(cc.KEY.down)) this.speedY -= dt*Constants.playerAcceleration;
    if (this.keysDown.has(cc.KEY.left)) this.speedX -= dt*Constants.playerAcceleration;
    if (this.keysDown.has(cc.KEY.right)) this.speedX += dt*Constants.playerAcceleration;
    if (!this.keysDown.has(cc.KEY.up) && ! this.keysDown.has(cc.KEY.down))this.speedY *=0.8;
    if (!this.keysDown.has(cc.KEY.left) && !this.keysDown.has(cc.KEY.right))this.speedX *=0.8;

    var absoluteSpeed = Math.hypot(this.speedX, this.speedY);
    if(absoluteSpeed > this.maxSpeed){
      this.speedX *= (this.maxSpeed/absoluteSpeed);
      this.speedY *= (this.maxSpeed/absoluteSpeed);
    }
    var newX = this.x + this.speedX*dt;
    var newY = this.y + this.speedY*dt;
    if (this.canMoveXY(newX, newY)){
      this.x = newX;
      this.y = newY;
    }
    if (this.x < Constants.playerArea.left)this.x = Constants.playerArea.left;
    if (this.x > Constants.playerArea.right)this.x = Constants.playerArea.right;
    if (this.y < Constants.playerArea.bottom)this.y = Constants.playerArea.bottom;
    if (this.y > Constants.playerArea.top)this.y = Constants.playerArea.top;
    this.manageBulletType(dt);
    this.shoot(dt);

  },
  shoot:function(dt){
    this.timeToShoot -=dt;
    while(this.timeToShoot <=0){
      this.timeToShoot +=this.shootDelay;
      var bullet = new Bullet(this.bulletType);
      bullet.x = this.x +50;
      bullet.y = this.y +Math.random()*20-10;
      this.getParent().addChild(bullet);
    }
  },
  canMoveXY(x,y){
    var allChildren = this.parent.getChildren();
    for( var elem of allChildren){
      if(! (elem instanceof ImpassableGround)) continue;
      if(Math.hypot(x-elem.x, y-elem.y) < elem.radius) return false;
    }
    return true;
  },
  setSpecialBullets(bulletType, time){
    this.bulletType = bulletType;
    this.bulletTypeRemainingTime = time || 1.0;
  },
  manageBulletType(dt){
    if (this.bulletType != "bullet"){
      this.bulletTypeRemainingTime-=dt;
      if(this.bulletTypeRemainingTime<=0){
        this.bulletType = "bullet";
      }
    }
  }

});
