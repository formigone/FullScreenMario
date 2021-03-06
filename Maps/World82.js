
map.locs = [
  new Location(0, true),
  new Location(0, exitPipeVert),
  new Location(1)
];
map.areas = [
  new Area("Overworld", function() {
    setLocationGeneration(0);
    
    pushPrePattern("backfencemin2", 0, 0, 5);
    pushPreScenery("Castle", -16, castlev, 0);
    pushPreFloor(0, 0, 15);
    pushPreFloor(128, 0, 5);
    pushPreThing(Lakitu, 128, 84);
    pushPreThing(GenericStone, 136, 8, 1);
    pushPreThing(GenericStone, 144, 16, 1, 2);
    pushPreThing(GenericStone, 152, 24, 1, 3);
    pushPreThing(GenericStone, 160, 32, 1, 4);
    pushPreFloor(176, 0, 14);
    pushPreThing(GenericStone, 176, 48, 1, 6);
    pushPreThing(GenericStone, 184, 56, 1, 7);
    pushPreThing(GenericStone, 192, 64, 2, 8);
    fillPreThing(Block, 232, 32, 4, 1, 8);
    
    pushPreFloor(296, 0, 8);
    pushPreThing(Brick, 344, 64);
    pushPreThing(Springboard, 352, 15.5);
    pushPreThing(Brick, 352, 64, [Mushroom, 1]);
    fillPreThing(Brick, 360, 64, 31, 1, 8);
    pushPreFloor(368, 0, 4);
    pushPreFloor(408, 0, 1);
    pushPreFloor(424, 0, 3);
    pushPreFloor(456, 0, 6);
    pushPreThing(Koopa, 456, 26, false, true);
    pushPreFloor(512, 0, 14);
    fillPreThing(Brick, 616, 32, 2, 1, 8);
    pushPreFloor(640, 0, 4);
    
    pushPreFloor(680, 0, 53);
    pushPreThing(Cannon, 680, 16, 2);
    pushPreThing(Koopa, 736, 32, false, true);
    pushPreThing(Cannon, 744, 8, 1, true);
    pushPreThing(Cannon, 744, 24, 2);
    pushPreThing(Koopa, 760, 24, false, true);
    pushPreThing(Brick, 792, jumplev1);
    pushPreThing(Brick, 800, jumplev1, Mushroom);
    pushPreThing(Cannon, 840, 16, 2);
    fillPreThing(Brick, 880, jumplev1, 2, 1, 8);
    pushPreThing(Beetle, 888, 8.5);
    pushPreThing(Cannon, 920, 8, 1);
    pushPreThing(Brick, 944, jumplev1);
    pushPreThing(GenericStone, 952, jumplev1);
    pushPreThing(Cannon, 952, 40);
    pushPreThing(Brick, 960, jumplev1, Mushroom);
    pushPreThing(Beetle, 968, 8.5);
    pushPreThing(Beetle, 984, 8.5);
    pushPreThing(Cannon, 1000, 24, 3);
    pushPrePipe(1048, 0, 16, true);
    
    pushPreFloor(1112, 0, 5);
    pushPreThing(Koopa, 1112, 12, false, true);
    pushPrePipe(1136, 0, 16, true);
    pushPreFloor(1160, 0, 1);
    pushPreFloor(1176, 0, 1);
    
    pushPreFloor(1232, 0, 20);
    pushPrePipe(1248, 0, 32, true, 2);
    pushPrePipe(1304, 0, 16, true, false, 1);
    pushPreThing(Koopa, 1360, 32, false, true);
    pushPreThing(Koopa, 1376, 24, false, true);
    pushPreFloor(1400, 0, 1);
    pushPreThing(Cannon, 1400, 16, 2);
    pushPreThing(Koopa, 1400, 48, false, true);
    
    pushPreFloor(1432, 0, 23);
    pushPreThing(GenericStone, 1456, 8, 1);
    pushPreThing(GenericStone, 1464, 16, 1, 2);
    pushPreThing(GenericStone, 1472, 24, 1, 3);
    pushPreThing(Goomba, 1472, 32);
    pushPreThing(GenericStone, 1480, 32, 1, 4);
    pushPreThing(GenericStone, 1488, 40, 1, 5);
    pushPreThing(Goomba, 1488, 48);
    pushPreThing(Beetle, 1512, 8.5);
    pushPreThing(Cannon, 1528, 8, 1, true);
    pushPreThing(Cannon, 1528, 24, 2);
    pushPreThing(GenericStone, 1592, 8);
    pushPreThing(GenericStone, 1600, 16, 1, 2);
    pushPreThing(GenericStone, 1608, 24, 1, 3);
    pushPreFloor(1624, 0, 1);
    pushPreThing(GenericStone, 1624, 40, 1, 5);
    pushPreThing(Koopa, 1624, 72, false, true);
    
    pushPreFloor(1648, 0, 40);
    pushPreThing(GenericStone, 1648, 64, 2, 8);
    endCastleOutside(1724, 0, castlev);
  }),
  new Area("Underworld", function() {
      setLocationGeneration(2);
      
      makeCeiling(32, 7);
      pushPreFloor(0, 0, 17);
      fillPreThing(Brick, 0, 8, 1, 11, 8, 8);
      fillPreThing(Brick, 32, 48, 7, 1, 8);
      pushPreThing(Brick, 32, 56);
      fillPreThing(Coin, 42, 55, 5, 2, 8, 8);
      fillPreThing(Brick, 80, 56, 1, 4, 8, 8);
      fillPreThing(Brick, 88, 56, 2, 1, 8);
      pushPreThing(Brick, 112, 48, Coin);
      pushPreThing(PipeSide, 104, 16, 1);
      pushPreThing(PipeVertical, 120, 88, 88);
  })
];