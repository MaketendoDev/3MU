// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004020703030311020202020303070301051412121212171617171212121212081015121212121212121612121414120e061212121313131212121215141512090512121313131313151212121212120906121213131313131212121212121209061212131313131312121212121212080612121313131212121512121212120805121212121212121212121212121208051212121212121212121212121212090512121313131212131313131312120906121213131312121313131313121209061212121212121213131313131212081012121212121212131313131212150e051414121212121212121212121512080c0b0f0b0b0d0d0b0b0b0d0b0b0f0b0a`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchUp,sprites.dungeon.floorDark0,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.floorDark1,sprites.dungeon.floorDark5,sprites.dungeon.floorDark2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
