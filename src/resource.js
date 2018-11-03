/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var res = {
    playerSprites:["res/player.png", "res/player1.png"],
    background_png: "res/background.png",
    error: "res/error.png",
    grenade:"res/bomb.png",
    startSceneImage:"res/startScreen.png",
    endSceneImage:"res/endScreen.png"
};

function findStrings(object){
  var strings = [];
  if(typeof object == "string"){
    strings.push(object);
    return strings;
  }
  if(Array.isArray(object)){
    for(var elem of object){
      strings = strings.concat(findStrings(elem));
    }
  } else if(typeof object == "object"){
    for(var key in object){
      strings = strings.concat(findStrings(object[key]));
    }
  }
  return strings;
}
