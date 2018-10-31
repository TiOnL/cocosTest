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
    sprites: ["test-monster.png"],
    hp:200,
    maxSpeed: 40
  },
  "skull":{
    sprites:["skull/s_000.png", "skull/s_001.png", "skull/s_002.png", "skull/s_003.png",
  "skull/s_004.png","skull/s_005.png","skull/s_006.png","skull/s_007.png",
"skull/s_008.png","skull/s_009.png","skull/s_010.png","skull/s_011.png"],
    hp:200,
    maxSpeed: 40,
    animationDelay:0.05,
    scale:0.7,
    attackCount:2,
    attackDelay:5
  },
  "zombie":{
    sprites:["zombie/go_1.png","zombie/go_2.png","zombie/go_3.png","zombie/go_4.png",
  "zombie/go_5.png","zombie/go_6.png","zombie/go_7.png",
  "zombie/go_8.png","zombie/go_9.png","zombie/go_10.png"],
    hp:200,
    maxSpeed: 30,
    animationDelay:0.1,
    scale:0.5
  },
  "vampire":{
    sprites:["vampire/go_1.png","vampire/go_2.png","vampire/go_3.png","vampire/go_4.png",
  "vampire/go_5.png","vampire/go_6.png","vampire/go_7.png", "vampire/go_8.png"],
    hp:200,
    maxSpeed: 40,
    animationDelay:0.1,
    scale:0.4
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
    damage: 30,
    speed:700
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
