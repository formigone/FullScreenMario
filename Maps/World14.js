map.locs = [
  new Location(0, startCastle)
];
map.areas = [
  new Area("Castle", function() {
    setLocationGeneration(0);
    
    startCastleInside();

    pushPreThing(GenericStone, 40, 88, 19, 3);
    pushPreFloor(40, 24, 8);
    fillPreWater(104, 8, 4);
    
    pushPreFloor(120, 24, 11);
    pushPreThing(GenericStone, 184, 64, 1, 1);
    pushPreThing(CastleBlock, 184, 56);
    makeCeilingCastle(192, 136);
    fillPreWater(208, 0, 6);
    
    pushPreFloor(232, 24, 3);
    pushPreThing(CastleBlock, 240, 24, 6, 1);
    pushPreThing(Block, 240, 56, Mushroom);
    fillPreWater(256, 0, 6);
    
    pushPreThing(GenericStone, 280, 32, 37, 1);
    pushPreThing(GenericStone, 280, 24, 69, 3);
    pushPreFloor(280, 0, 93);
    pushPreThing(GenericStone, 296, 80, 35, 3);
    pushPreThing(CastleBlock, 296, 56);
    pushPreThing(CastleBlock, 392, 56, 6, 1);
    pushPreThing(CastleBlock, 480, 56, 6, 1);
    pushPreThing(CastleBlock, 536, 56, 6, 1);
    pushPreThing(CastleBlock, 608, 32, 6, 1);
    pushPreThing(GenericStone, 640, 80, 1, 1);
    pushPreThing(CastleBlock, 640, 72);
    pushPreThing(CastleBlock, 672, 32, 6, 1);
    pushPreThing(GenericStone, 704, 80, 1, 1);
    pushPreThing(CastleBlock, 704, 72, 6, -1);
    pushPreThing(CastleBlock, 736, 32);
    pushPreThing(GenericStone, 776, 80, 7, 2);
    pushPreThing(Block, 848, 32, Coin, true);
    pushPreThing(Block, 872, 32, Coin, true);
    pushPreThing(Block, 896, 32, Coin, true);
    pushPreThing(Block, 856, 64, Coin, true);
    pushPreThing(Block, 880, 64, Coin, true);
    pushPreThing(Block, 904, 64, Coin, true);
    pushPreThing(GenericStone, 928, 24, 4, 3);
    pushPreThing(GenericStone, 984, 24, 5, 3);
    pushPreThing(GenericStone, 984, 80, 5, 2);
    
    endCastleInside(1024);
  })
];