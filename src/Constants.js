var Constants = {
  screenSizeX: 1280,
  screenSizeY: 800,
  gameOverLineX:300,
  playerAcceleration:8000,
  playerMaxSpeed:1000,
  playerArea:{
    top:750,
    bottom:50,
    left:50,
    right:300
  }
}

Constants.monsters = {
  "test-monster":{
    sprites: ["res/monsters/test-monster.png"],
    hp:200,
    maxSpeed: 40
  },
  "skull":{
    sprites:["res/monsters/skull/s_000.png", "res/monsters/skull/s_001.png",
    "res/monsters/skull/s_002.png", "res/monsters/skull/s_003.png",
    "res/monsters/skull/s_004.png","res/monsters/skull/s_005.png",
    "res/monsters/skull/s_006.png","res/monsters/skull/s_007.png",
    "res/monsters/skull/s_008.png","res/monsters/skull/s_009.png",
    "res/monsters/skull/s_010.png","res/monsters/skull/s_011.png"],
    hp:200,
    maxSpeed: 40,
    animationDelay:0.05,
    scale:0.7,
    attackCount:2,
    attackDelay:5
  },
  "zombie":{
    sprites:["res/monsters/zombie/go_1.png","res/monsters/zombie/go_2.png",
    "res/monsters/zombie/go_3.png","res/monsters/zombie/go_4.png",
    "res/monsters/zombie/go_5.png","res/monsters/zombie/go_6.png",
    "res/monsters/zombie/go_7.png",  "res/monsters/zombie/go_8.png",
    "res/monsters/zombie/go_9.png","res/monsters/zombie/go_10.png"],
    hp:200,
    maxSpeed: 30,
    animationDelay:0.1,
    scale:0.5
  },
  "vampire":{
    sprites:["res/monsters/vampire/go_1.png","res/monsters/vampire/go_2.png",
    "res/monsters/vampire/go_3.png","res/monsters/vampire/go_4.png",
    "res/monsters/vampire/go_5.png","res/monsters/vampire/go_6.png",
    "res/monsters/vampire/go_7.png", "res/monsters/vampire/go_8.png"],
    hp:200,
    maxSpeed: 40,
    animationDelay:0.1,
    scale:0.4
  },
  "skeleton":{
    sprites:["res/monsters/skeleton/go_1.png","res/monsters/skeleton/go_2.png",
    "res/monsters/skeleton/go_3.png","res/monsters/skeleton/go_4.png",
    "res/monsters/skeleton/go_5.png","res/monsters/skeleton/go_6.png",
    "res/monsters/skeleton/go_7.png", "res/monsters/skeleton/go_8.png"],
    hp:1000,
    maxSpeed: 15,
    animationDelay:0.1,
    scale:0.8,
    isBoss:true
  }
}

Constants.bullets = {
  "bullet":{
    sprite: "res/bullet.png",
    damage: 10,
    speed:2000
  },
  "bullet-bat":{
    sprite: "res/bullet-bat.png",
    damage: 100,
    speed:600
  }
}

Constants.impassableGround = {
  sprites:[],
  baseRadius:70,
  yAnchorPoint:0.35

}
for(i=1; i<=13; i++){
  Constants.impassableGround.sprites.push("res/fire/fire1_ "+String(i).padStart(2,"0")+".png");
}
