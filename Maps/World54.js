map.locs = [
  new Location(0, startCastle)
];
map.areas = [
  new Area("Castle", function() {
    setLocationGeneration(0);
    
    startCastleInside();
    
    makeCeilingCastle(40, 11, 3);
    pushPreFloor(40, 24, 11);
    
    fillPreWater(128, 0, 32);
    pushPreThing(Podoboo, 128, -32);
    pushPreThing(GenericStone, 144, 32, 2, 1);
    pushPreThing(Podoboo, 160, -24);
    pushPreThing(GenericStone, 176, 48, 3, 1);
    pushPreThing(CastleBlock, 184, 48, 12);
    pushPreThing(Block, 184, 80, Mushroom);
    pushPreThing(GenericStone, 216, 32, 2, 1);
    pushPreThing(Podoboo, 240, -32);
    
    pushPreFloor(256, 0, 52);
    pushPreThing(GenericStone, 256, 24, 2, 3);
    makeCeilingCastle(272, 49, 4);
    pushPreThing(GenericStone, 296, jumplev1, 36, 1);
    pushPreThing(CastleBlock, 344, 0, 6);
    pushPreThing(CastleBlock, 392, jumplev1, 6);
    pushPreThing(CastleBlock, 440, 0, 6);
    pushPreThing(CastleBlock, 440, jumplev2, 6);
    pushPreThing(CastleBlock, 488, jumplev1, 6);
    pushPreThing(CastleBlock, 536, 0, 6);
    pushPreThing(CastleBlock, 584, jumplev1, 6);
    pushPreThing(GenericStone, 640, 24, 4, 3)
    pushPreThing(CastleBlock, 656, 56, 6);
    
    pushPrePlatformGenerator(686, 3, -1);
    pushPrePlatformGenerator(710, 3, 1);
    
    pushPreFloor(736, 16);
    pushPreThing(CastleBlock, 736, 24, 6);
    pushPreFloor(744, 24, 6);
    makeCeilingCastle(744, 6, 3);
    pushPreFloor(792, 0, 10);
    fillPreThing(Coin, 817, 7, 3, 2, 8, 32);
    pushPreThing(CastleBlock, 824, 16, 6);
    fillPreWater(872, 0, 4);
    pushPreThing(GenericStone, 864, 24, 1, 3);
    pushPreThing(Podoboo, 872, -32);
    pushPreFloor(888, 24, 2);
    fillPreWater(904, 0, 4);
    
    pushPreFloor(920, 0, 13);
    pushPreThing(GenericStone, 920, 24, 5, 3);
    makeCeilingCastle(920, 13, 3);
    fillPreThing(GenericStone, 976, 24, 2, 1, 32, 0, 2, 3);
    pushPreThing(Podoboo, 904, -32);
    
    fillPreThing(Brick, 1024, 64, 6, 1, 8);
    endCastleInside(1024);
    pushPreThing(Podoboo, 1048, -40);
  })
];