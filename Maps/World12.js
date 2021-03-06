map.locs = [
  new Location(0, walkToPipe),
  new Location(1),
  new Location(2),
  new Location(1, exitPipeVert),
  new Location(3, exitPipeVert),
  new Location(1, false, 1000)
];
map.areas = [
  new Area("Overworld", function() {
    setLocationGeneration(0);
    
    pushPreScenery("Castle", -16, castlev);
    pushPrePattern("backcloud", 0, 4, 1);
    pushPreFloor(0, 0, 24);
    pushPreThing(PipeSide, 80, 16, 1);
    pushPrePipe(96, 0, 32);
  }),
  new Area("Underworld", function() {
    setLocationGeneration(1);
  
    pushPreThingsVert(Brick, 0, 0, 8, 11);
    pushPreFloor(0, 0, 80);
    makeCeiling(48, 83);
    pushPreThing(Block, 80, jumplev1, Mushroom);
    fillPreThing(Block, 88, jumplev1, 4, 1, 8, 8);
    
    pushPreThing(Goomba, 128, 8);
    pushPreThing(Stone, 136, 8);
    pushPreThing(Goomba, 136, 16);
    pushPreThing(Stone, 152, 16, 1, 2);
    pushPreThing(Stone, 168, 24, 1, 3);
    pushPreThing(Stone, 184, 32, 1, 4);
    pushPreThing(Stone, 200, 32, 1, 4);
    pushPreThing(Stone, 216, 24, 1, 3);
    pushPreThing(Goomba, 232, 8);
    pushPreThing(Brick, 232, 40, Coin);
    pushPreThing(Stone, 248, 24, 1, 3);
    pushPreThing(Stone, 264, 16, 1, 2);
    fillPreThing(Brick, 310, 32, 1, 3, 8, 8);
    pushPreThing(Brick, 318, 32);
    pushPreThing(Coin, 319, 39);
    fillPreThing(Brick, 326, 32, 1, 3, 8, 8);
    pushPreThing(Coin, 328, 62);
    pushPreThing(Brick, 334, 48);
    pushPreThing(Coin, 336, 62);
    pushPreThing(Brick, 342, 48);
    pushPreThing(Coin, 344, 62);
    pushPreThing(Koopa, 350, 12);
    fillPreThing(Brick, 350, 32, 1, 3, 8, 8);
    pushPreThing(Coin, 352, 62);
    pushPreThing(Brick, 358, 32);
    pushPreThing(Koopa, 360, 12);
    pushPreThingsVert(Brick, 366, 24, 8, 3);
    pushPreThing(Coin, 359, 39, 8, 4);
    pushPreThing(Brick, 366, 48, Star);
    fillPreThing(Brick, 414, 32, 2, 5, 8, 8);
    fillPreThing(Brick, 430, 16, 2, 3, 8, 8);
    fillPreThing(Brick, 430, 72, 2, 2, 8, 8);
    pushPreThing(Koopa, 462, 12);
    fillPreThing(Brick, 462, 32, 4, 1, 8, 8);
    fillPreThing(Brick, 462, 72, 5, 2, 8, 8);
    fillPreThing(Coin, 463, 39, 4, 1, 8, 8);
    fillPreThing(Brick, 494, 32, 2, 7, 8, 8);
    pushPreThing(Goomba, 494, 8);
    pushPreThing(Goomba, 510, 8);
    fillPreThing(Brick, 534, 72, 4, 2, 8, 8);
    fillPreThing(Brick, 542, 32, 1, 5, 8, 8);
    fillPreThing(Brick, 550, 32, 2, 1, 8, 8);
    pushPreThing(Coin, 551, 39);
    pushPreThing(Brick, 558, 40, Mushroom);
    fillPreThing(Brick, 582, 32, 2, 1, 8, 8);
    pushPreThing(Brick, 582, 40);
    fillPreThing(Brick, 582, 48, 2, 3, 8, 8);
    pushPreThing(Brick, 590, 40, Coin);
    pushPreThing(Goomba, 590, 72);
    fillPreThing(Brick, 608, 32, 4, 1, 8, 8);
    fillPreThing(Brick, 608, 72, 4, 2, 8, 8);
    pushPreThing(Goomba, 608, 40);
    pushPreThing(Goomba, 618, 40);
    
    pushPreFloor(664, 0, 34);
    fillPreThing(Brick, 672, 40, 6, 2, 8, 8);
    fillPreThing(Coin, 674, 64, 6, 1, 8, 8);
    pushPreThing(Brick, 712, 88, [Mushroom, 1]);
    makeCeiling(720, 45);
    fillPreThing(Goomba, 768, 8, 3, 1, 12, 8);
    pushPrePipe(800, 0, 24, true, 2);
    pushPrePipe(848, 0, 32, true);
    pushPrePipe(896, 0, 16, true, false, 3);
    
    pushPreFloor(952, 0, 2);
    fillPreThing(Brick, 952, 8, 2, 3, 8, 8);
    
    pushPreFloor(984, 0, 12);
    pushPreThing(Stone, 1040, 8);
    pushPreThing(Stone, 1048, 16, 1, 2);
    pushPreThing(Stone, 1056, 24, 1, 3);
    pushPreThing(Stone, 1064, 32, 1, 4);
    pushPreThing(Stone, 1072, 32, 1, 4);
    pushPrePlatformGenerator(1096, 6, 1);
    // pushPreThing(PlatformGenerator, 1096, ceilmax, 6, 1);
    
    pushPreFloor(1144, 0, 8);
    fillPreThing(Brick, 1144, 40, 5, 1, 8, 8);
    pushPreThing(Koopa, 1152, 12, true);
    pushPreThing(Brick, 1184, 40, Mushroom);
    pushPrePlatformGenerator(1224, 6, -1);
    // pushPreThing(PlatformGenerator, 1224, ceilmax, 6, -1);
    
    pushPreFloor(1266, 0, 32);
    fillPreThing(Brick, 1266, 8, 17, 3, 8, 8);
    pushPreThing(PipeSide, 1314, 40, 4);
    pushPreThing(PipeVertical, 1330, 88, 64);
    makeCeiling(1274, 7);
    fillPreThing(Brick, 1346, 32, 7, 7, 8, 8);
    pushPreThing(ScrollEnabler, 1340, ceilmax);
    makeCeiling(1346, 17);
    pushPreWarpWorld(1400, 0, [[4,1],[3,1],[2,1]], 0, true);
    fillPreThing(Brick, 1506, 8, 2, 11, 8, 8);
  }),
  new Area("Underworld", function() {
    setLocationGeneration(2);
    
    pushPreFloor(0, 0, 17);
    fillPreThing(Brick, 0, 8, 1, 11, 8, 8);
    fillPreThing(Coin, 25, 7, 9, 1, 8, 8);
    fillPreThing(Brick, 24, 32, 9, 1, 8, 8);
    fillPreThing(Coin, 33, 39, 8, 1, 8, 8);
    pushPreThing(Brick, 96, 32, Coin);
    fillPreThing(Brick, 24, 64, 10, 4, 8, 8);
    fillPreThing(Brick, 104, 24, 2, 9, 8, 8);
    pushPreThing(PipeSide, 104, 16, 3);
    pushPreThing(PipeVertical, 120, 100, 100);
  }),
  new Area("Overworld", function() {
    setLocationGeneration(4);
    
    pushPrePattern("backreg", 104, 0, 1);
    pushPreFloor(0, 0, 58);
    pushPrePipe(0, 0, 16, false, false, 4);
    pushPreThing(Stone, 16, 8);
    pushPreThing(Stone, 24, 16, 1, 2);
    pushPreThing(Stone, 32, 24, 1, 3);
    pushPreThing(Stone, 40, 32, 1, 4);
    pushPreThing(Stone, 48, 40, 1, 5);
    pushPreThing(Stone, 56, 48, 1, 6);
    pushPreThing(Stone, 64, 56, 1, 7);
    pushPreThing(Stone, 72, 64, 2, 8);
    endCastleOutside(148, 0, castlev);
  })
];