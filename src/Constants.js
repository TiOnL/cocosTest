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
    maxSpeed: 60
  },
  "skull":{
    sprites:["skull/s_000.png", "skull/s_007.png"],
    hp:200,
    maxSpeed: 60,
    animationDelay:0.2,
    scale:0.5
  }
}

Constants.bullets = {
  "bullet":{
    sprite: "res/bullet.png",
    damage: 10,
    speed:900
  }
}
