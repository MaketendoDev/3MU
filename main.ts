namespace SpriteKind {
    export const UIBacking = SpriteKind.create()
}
function loadSettingsApp () {
    LoadedApp = "Settings"
    scene.setBackgroundImage(assets.image`Settings Background`)
    SettingsTitle = textsprite.create("Settings")
    SettingsTitle.setOutline(1, 12)
    SettingsTitle.setMaxFontHeight(10)
    SettingsTitle.setPosition(80, 10)
    VerNum = textsprite.create("V0.0.1 - 3MU Pre-Alpha")
    VerNum.setPosition(70, 115)
    SettingsMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Set User Icon"),
    miniMenu.createMenuItem("Hardware Info"),
    miniMenu.createMenuItem("Data Managment"),
    miniMenu.createMenuItem("Back")
    )
    SettingsMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 12)
    SettingsMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Border, 1)
    SettingsMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 13)
    SettingsMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            loadUserIconOption()
        } else if (selectedIndex == 1) {
            loadHardwareInfo()
        } else if (selectedIndex == 2) {
            loadDataManagementInfo()
        } else {
            bootApp("Back")
        }
    })
    SettingsMenu.onSelectionChanged(function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    })
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LoadedApp == "MainMenu") {
    	
    } else {
        if (LoadedApp == "DemoGame") {
            demoGameInputPressed("up")
        }
    }
})
function sendConsoleLog (id: string, string: string) {
    console.log("[" + id + "]: " + string)
    consolelog.push("[" + id + "]: " + string)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LoadedApp == "MainMenu") {
    	
    } else {
        if (LoadedApp == "DemoGame") {
            demoGameInputPressed("b")
        }
    }
})
function loadUserIcon (icon_id: string, x: number, y: number) {
    UserProf = sprites.create(assets.image`DefaultUserProf`, SpriteKind.UIBacking)
    UserProf.setPosition(x, y)
    if (icon_id == "Knight") {
        UserProf.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c . . . . . 
            . . . c c d f f f f f d c c . . . 
            . . c d d f f f 2 f f f d d c . . 
            . . c d f f f 2 2 2 f f f d c . . 
            . c d f f f e e e e e f f f d c . 
            . c d f f e 2 2 2 2 2 e e f d c . 
            . c d f e 2 f f f f f 2 e f d c . 
            . c d f f f f e e e f f f f d c . 
            . c f f e f b f 4 f b f e f f c . 
            . c f e e 4 1 f d f 1 4 e e f c . 
            . c d f e e d d d d d e e f d c . 
            . . c d f e e 4 4 4 e e f d c . . 
            . . c e 4 f 2 2 2 2 2 f 4 e c . . 
            . . . c c f 2 2 2 2 2 f c c . . . 
            . . . . . c c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (icon_id == "Coins") {
        UserProf.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c . . . . . 
            . . . c c d d d d d d d c c . . . 
            . . c d d d d d b b b b d d c . . 
            . . c d d d d b 5 5 5 5 b d c . . 
            . c d d d d b 5 d 3 3 d 5 b d c . 
            . c d d d b b 5 3 5 5 1 5 b d c . 
            . c d d b 5 c 5 3 5 5 1 d c d c . 
            . c d b 5 d c d d 1 1 d d c d c . 
            . c d b 5 3 5 f d d d d f d d c . 
            . c d c 5 3 5 5 f f f f d d d c . 
            . c d c d d 1 1 d d c d d d d c . 
            . . c d f d d d d f d d d d c . . 
            . . c d d f f f f d d d d d c . . 
            . . . c c d d d d d d d c c . . . 
            . . . . . c c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (icon_id == "Ghost") {
        UserProf.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c . . . . . 
            . . . c c d f f f f b b c c . . . 
            . . c d f f 1 1 1 1 f f b d c . . 
            . . c f b 1 1 1 1 1 1 b f b c . . 
            . c d f 1 1 1 1 1 1 1 1 f b d c . 
            . c f d 1 1 1 1 1 1 1 1 d f b c . 
            . c f d 1 1 1 1 1 1 1 1 d f b c . 
            . c f d d d 1 1 1 1 d d d f b c . 
            . c f b d b f d d f b d b f b c . 
            . c f c d c f 1 1 f c d c f b c . 
            . c d f b 1 1 1 1 1 1 b f b d c . 
            . . c d f c d b 1 b d f b d c . . 
            . . c d f c b f b f c f b d c . . 
            . . . c c f f f f f f b c c . . . 
            . . . . . c c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (icon_id == "Shine") {
        UserProf.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c . . . . . 
            . . . c c d d d b d d d c c . . . 
            . . c d d d d b d b d d d d c . . 
            . . c d d d d c d c d d d d c . . 
            . c d d d d d c 5 c d d d d d c . 
            . c d d d d c d 5 d c d d d d c . 
            . c d b c c d 5 5 5 d c c b d c . 
            . c b d d 5 5 5 5 5 5 5 d d b c . 
            . c d b c c d 5 5 5 d c c b d c . 
            . c d d d d c d 5 d c d d d d c . 
            . c d d d d d c 5 c d d d d d c . 
            . . c d d d d c d c d d d d c . . 
            . . c d d d d b d b d d d d c . . 
            . . . c c d d d b d d d c c . . . 
            . . . . . c c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (icon_id == "Star") {
        UserProf.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c . . . . . 
            . . . c c d d d d d d d c c . . . 
            . . c d d d d d d d d d d d c . . 
            . . c d d d d b b b d d d d c . . 
            . c d d d d b 5 5 5 b d d d d c . 
            . c d b b b 5 5 1 1 1 b b b d c . 
            . c d b 5 5 5 5 1 1 1 5 5 b d c . 
            . c d d b d 5 5 5 5 5 d b d d c . 
            . c d d c b 5 5 5 5 5 b c d d c . 
            . c d d c 5 d d d d d 5 c d d c . 
            . c d d c 5 d c c c d 5 c d d c . 
            . . c d c c c d d d c c c d c . . 
            . . c d d d d d d d d d d d c . . 
            . . . c c d d d d d d d c c . . . 
            . . . . . c c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (icon_id == "Heart") {
        UserProf.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c . . . . . 
            . . . c c d d d d d d d c c . . . 
            . . c d d d d d d d d d d d c . . 
            . . c d d d d d d d d d d d c . . 
            . c d d d 2 2 d d d 2 2 d d d c . 
            . c d d 2 3 2 2 d 2 2 2 2 d d c . 
            . c d d 2 3 2 2 2 2 2 2 2 d d c . 
            . c d d 2 2 2 2 2 2 2 2 2 d d c . 
            . c d d d 2 2 2 2 2 b 2 d d d c . 
            . c d d d d 2 2 2 b 2 d d d d c . 
            . c d d d d d 2 2 2 d d d d d c . 
            . . c d d d d d 2 d d d d d c . . 
            . . c d d d d d d d d d d d c . . 
            . . . c c d d d d d d d c c . . . 
            . . . . . c c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (icon_id == "Baby Dino") {
        UserProf.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c . . . . . 
            . . . c c d d d d d d d c c . . . 
            . . c d d d d c c c c d d d c . . 
            . . c d d c c 5 5 5 5 c c d c . . 
            . c d d c 5 5 5 5 5 5 5 5 c d c . 
            . c d c 5 5 5 5 5 1 f 5 5 5 c c . 
            . c d c 5 5 5 5 5 f f 5 5 5 5 c . 
            . c d c 5 5 5 5 5 5 5 5 5 5 5 c . 
            . c d d c b b 1 b 5 5 5 5 5 5 c . 
            . c d d 5 3 3 3 5 5 5 5 5 d d c . 
            . c d d b 5 5 5 5 5 5 5 5 d d c . 
            . . c d d c b b c 5 5 b d d c . . 
            . . c d c b b c 5 5 b b d d c . . 
            . . . c c c c c c c d d c c . . . 
            . . . . . c c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (icon_id == "Princess") {
        UserProf.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c . . . . . 
            . . . c c d d b d b d d c c . . . 
            . . c d d d b 5 b 5 b b d d c . . 
            . . c d d b f 5 5 5 f f b d c . . 
            . c d d b f 1 5 2 5 1 6 f b d c . 
            . c d b f 1 6 6 6 6 6 1 6 f b c . 
            . c d b f 6 6 f f f f 6 1 f b c . 
            . c d b f 6 f f d d f f 6 f b c . 
            . c b f 6 f d f d d f d f 6 f c . 
            . c b f 6 f d 3 d d 3 d f 6 f c . 
            . c b f 6 6 f d d d d f 6 6 f c . 
            . . c 6 6 f 3 f f f f 3 f 6 c . . 
            . . c f f d 3 5 3 3 5 3 d f c . . 
            . . . c c d f 3 5 5 3 f c c . . . 
            . . . . . c c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (icon_id == "Rugby Player") {
        UserProf.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c . . . . . 
            . . . c c 2 2 2 2 2 e d c c . . . 
            . . c d 2 2 2 2 d 2 2 e d d c . . 
            . . c e 2 2 2 2 2 2 2 e d d c . . 
            . c d e 2 2 2 2 2 2 2 e d d d c . 
            . c 2 e 2 2 2 2 2 e f f c c d c . 
            . c 2 e e 2 2 e f f f f b c d c . 
            . c 2 e e f e 2 b f f f d c d c . 
            . c 2 2 2 d f 2 1 1 1 1 b c d c . 
            . c d 2 2 d f e e c c c d d d c . 
            . c d 1 d e 2 2 e e c d d d d c . 
            . . c f e 2 2 2 2 e d d d d c . . 
            . . c f f d d 2 2 f f d d d c . . 
            . . . c c d d e e f f d c c . . . 
            . . . . . c c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else if (icon_id == "Flower") {
        UserProf.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . c c c c c c c . . . . . 
            . . . c c d d d d d d d c c . . . 
            . . c d d d d d c c c d d b c . . 
            . . c d d c c c c 3 c c d b c . . 
            . c d d c c 3 c 3 c 3 c d d b c . 
            . c d d c 3 3 c c b c c d d b c . 
            . c d d c b 3 c b 3 b 3 c d b c . 
            . c d d c c c c c c c 3 c d b c . 
            . c d d c 3 3 b b c 3 3 c d b c . 
            . c d d c c 3 3 3 c c c c d b c . 
            . c d d d c c c c c 7 d d 6 b c . 
            . . c d d d d d d d 7 6 6 6 c . . 
            . . c d d d 5 d d 7 6 6 b b c . . 
            . . . c c b 7 7 7 6 b b c c . . . 
            . . . . . c c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    } else {
        UserProf.setImage(assets.image`DefaultUserProf`)
    }
}
function demoGameInputPressed (input2: string) {
    if (input2 == "a") {
        DemoPlayerSwordSwung = true
        animation.runImageAnimation(
        DemoPlayer,
        [img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .......fff..............
            ....fffff2f.............
            ..ffeeeee22ff...........
            .ffeeeeee222ff..........
            .feeeefffeeeef..........
            .fffffeee2222ef.........
            fffe222fffffe2f.........
            fffffffffeeefff.....cc..
            fefe44ebbf44eef...ccdc..
            .fee4d4bbfddef..ccddcc..
            ..feee4dddddfeecdddc....
            ...f2222222eeddcdcc.....
            ...f444445e44ddccc......
            ...ffffffffeeee.........
            ...fff...ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            .......ff...............
            ....ffff2ff.............
            ..ffeeeef2ff............
            .ffeeeeef22ff...........
            .feeeeffeeeef...........
            .fffffee2222ef..........
            fffe222ffffe2f..........
            ffffffffeeefff..........
            fefe44ebf44eef..........
            .fee4d4bfddef...........
            ..feee4dddee.c..........
            ...f2222eeddeccccccc....
            ...f444e44ddecddddd.....
            ...fffffeeee.ccccc......
            ..ffffffff...c..........
            ..fff..ff...............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef............
            .ffffee2222ef...........
            .fe222ffffe2f...........
            fffffffeeefff...........
            ffe44ebf44eef...........
            fee4d41fddef............
            .feee4ddddf.............
            ..fdde444ef.............
            ..fdde22ccc.............
            ...eef22cdc.............
            ...f4444cddc............
            ....fffffcddc...........
            .....fff..cddc..........
            ...........cdc..........
            ............cc..........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
        timer.after(400, function () {
            DemoPlayerSwordSwung = false
            DemoPlayer.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
        })
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LoadedApp == "MainMenu") {
    	
    } else {
        if (LoadedApp == "DemoGame") {
            demoGameInputPressed("a")
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LoadedApp == "MainMenu") {
        LeftArrow.x += -1
        timer.after(200, function () {
            LeftArrow.x += 1
        })
    } else {
        if (LoadedApp == "DemoGame") {
            demoGameInputPressed("left")
        }
    }
})
function loadDemoGame () {
    info.startCountdown(300)
    LoadedApp = "DemoGame"
    info.setLife(3)
    DemoPlayer = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(DemoPlayer)
    scene.cameraFollowSprite(DemoPlayer)
    tiles.setCurrentTilemap(tilemap`level1`)
    characterAnimations.loopFrames(
    DemoPlayer,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    DemoPlayer,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    DemoPlayer,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    DemoPlayer,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
}
function closeMenu () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
    sprites.destroyAllSpritesOfKind(SpriteKind.UIBacking)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    scene.centerCameraAt(0, 0)
}
function finState (line_1: string, line_2: string) {
    game.splash(line_1, line_2)
    closeMenu()
    openMenu()
    info.setScore(0)
    info.setLife(0)
    info.stopCountdown()
}
function initTheme () {
    scene.setBackgroundImage(img`
        ccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        cccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddb
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddb
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddb
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddbb
        dddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddcdddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        dcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccddddddddddddddddddbb
        dcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccddddddddddddddddddbb
        dcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccdcccddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcdddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcdddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcdddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcdddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb
        ddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    TopBar = sprites.create(assets.image`TopBar`, SpriteKind.UIBacking)
    TopBar.setPosition(80, 9)
    loadUserIcon(blockSettings.readString("3mu_usericon"), 152, 9)
    DisplayAppName = textsprite.create("")
    DisplayAppName.setPosition(43, 27)
    LeftArrow = sprites.create(img`
        . . . . . . . . . . . c c c . . 
        . . . . . . . . . c c d d b c . 
        . . . . . . . c c d d d d b c . 
        . . . . . c c d d d d d d b c . 
        . . . c c d d d d d d d d b c . 
        . c c d d d d d d d d d d b c . 
        c d d d d d d d d d d d d b c . 
        c d d d d d d d d d d d d b c . 
        c d d d d d d d d d d d d b c . 
        c b b d d d d d d d d d d b c . 
        . c c b b d d d d d d d d b c . 
        . . . c c b b d d d d d d b c . 
        . . . . . c c b b d d d d b c . 
        . . . . . . . c c b b d d b c . 
        . . . . . . . . . c c b b b c . 
        . . . . . . . . . . . c c c . . 
        `, SpriteKind.UIBacking)
    LeftArrow.setPosition(15, 50)
    RightArrow = sprites.create(img`
        . . c c c . . . . . . . . . . . 
        . c d d d c c . . . . . . . . . 
        . c d d d d d c c . . . . . . . 
        . c d d d d d d d c c . . . . . 
        . c d d d d d d d d d c c . . . 
        . c d d d d d d d d d d d c c . 
        . c d d d d d d d d d d d d b c 
        . c d d d d d d d d d d d d b c 
        . c d d d d d d d d d d d d b c 
        . c d d d d d d d d d d d b b c 
        . c d d d d d d d d d b b c c . 
        . c d d d d d d d b b c c . . . 
        . c d d d d d b b c c . . . . . 
        . c d d d b b c c . . . . . . . 
        . c b b b c c . . . . . . . . . 
        . . c c c . . . . . . . . . . . 
        `, SpriteKind.UIBacking)
    RightArrow.setPosition(135, 50)
    MiniPlayer = sprites.create(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `, SpriteKind.UIBacking)
    RandomInt = randint(0, 5)
    LongText = textsprite.create("Select (A)")
    LongText.setOutline(1, 12)
    LongText.setPosition(31, 114)
    textSprite = textsprite.create("Menu")
    textSprite.setOutline(1, 11)
    textSprite.setPosition(14, 5)
    if (RandomInt == 0) {
        animation.runImageAnimation(
        MiniPlayer,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        true
        )
    } else if (RandomInt == 1) {
        animation.runImageAnimation(
        MiniPlayer,
        [img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 6 2 5 5 6 f . . . . . 
            . . . f 6 6 6 6 1 6 6 f . . . . 
            . . . f 6 6 6 6 6 1 6 f . . . . 
            . . . f d f d 6 6 6 1 f . . . . 
            . . . f d f d 6 6 6 6 f f . . . 
            . . . f d 3 d d 6 6 6 f 6 f . . 
            . . . . f d d d f f 6 f f . . . 
            . . . . . f f 5 3 f 6 6 6 f . . 
            . . . . f 5 3 3 f f f f f . . . 
            . . . . f 3 3 f d f . . . . . . 
            . . . . . f 3 f d f . . . . . . 
            . . . . f 3 5 3 f d f . . . . . 
            . . . . f f 3 3 f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . 5 . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 6 2 5 5 6 f . . . . 
            . . . . f 6 6 6 6 1 6 6 f . . . 
            . . . . f 6 6 6 6 6 1 6 f . . . 
            . . . . f d f d 6 6 6 1 f . . . 
            . . . . f d f d 6 6 6 6 f f . . 
            . . . . f d 3 d d 6 6 6 f 6 f . 
            . . . . . f d d d f f 6 f f . . 
            . . . . . . f f 3 3 f f 6 6 f . 
            . . . . . f d d d d f f f f . . 
            . . . . . f d d d f 3 f . . . . 
            . . . . . . f f f d 5 3 f . . . 
            . . . . . f f f 3 3 f f . . . . 
            . . . . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . 5 . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 6 2 5 5 6 f . . . . 
            . . . . f 6 6 6 6 1 6 6 f . . . 
            . . . . f 6 6 6 6 6 1 6 f . . . 
            . . . . f d f d 6 6 6 1 f . . . 
            . . . . f d f d 6 6 6 6 f f . . 
            . . . . f d 3 d d 6 6 6 f 6 f . 
            . . . . . f d d d f f 6 f f . . 
            . . . . . . f f 3 3 f f 6 6 f . 
            . . . . . f 5 3 3 d d f f f . . 
            . . . . . f 3 3 3 f d d f . . . 
            . . . . . . f 3 5 f f f . . . . 
            . . . . . f 3 3 3 3 f . . . . . 
            . . . . . . f f f f f . . . . . 
            `],
        200,
        true
        )
    } else if (RandomInt == 2) {
        animation.runImageAnimation(
        MiniPlayer,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c c . . . 
            . . . . . . c 5 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c b b b b 1 b b c c . . 
            . . . . c 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 b b c c 
            . . c c d 1 1 1 b 1 b 1 5 5 5 c 
            . . c c d 1 c 1 1 1 b 1 b b 5 c 
            . c c d d 1 1 1 1 1 b 1 f b 5 c 
            f d d d 1 1 1 1 1 b b b f . c c 
            f f f f f 1 1 1 b b 5 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c c . . . 
            . . . . . . c c 5 5 5 5 5 c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c 1 1 b b 1 b b c c . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . c c 
            . . . c d 1 1 1 b 1 1 1 b b 5 c 
            . . c c d 1 c 1 b 1 b 1 5 5 5 c 
            . c c d d 1 1 1 1 1 b 1 b b 5 c 
            f d d d 1 1 1 1 1 b b 1 f . c c 
            f f f 1 1 1 1 1 1 b b b f . . . 
            . . . f f 1 1 1 b b b 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            `,img`
            . . . . . . . . . c c c c c . . 
            . . . . . . c c c 5 5 5 5 c c . 
            . . . . c c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . c 1 1 1 b b 1 b b c c . . 
            . . . c 1 1 1 1 b 1 1 1 c . c c 
            . . . c d 1 1 1 b 1 1 1 c b 5 c 
            . . c c d 1 c 1 b 1 1 1 b b 5 c 
            c c c d d 1 1 1 b 1 b 1 5 5 5 c 
            f d d d 1 1 1 1 1 1 b 1 b b c c 
            . f f 1 1 1 1 1 1 b b 1 f . . . 
            . . . f 1 1 1 1 1 b b b f . . . 
            . . . . f f 1 1 b b 5 5 f . . . 
            . . . . . . f 5 5 5 5 5 f . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c c . . . 
            . . . . . . c c 5 5 5 5 5 c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c 1 1 b b 1 b b c c . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . c c 
            . . . c d 1 1 1 b 1 1 1 b b 5 c 
            . . c c d 1 c 1 b 1 b 1 5 5 5 c 
            . c c d d 1 1 1 1 1 b 1 b b 5 c 
            f d d d 1 1 1 1 1 b b 1 f . c c 
            f f f 1 1 1 1 1 1 b b b f . . . 
            . . . f f 1 1 1 b b b 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
    } else if (RandomInt == 3) {
        animation.runImageAnimation(
        MiniPlayer,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111df.......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd1dfbddddbf......
            ......fbddfcdbbbcf......
            .......f11111bbcf.......
            .......f1b1fffff........
            .......fbfc111bf........
            ........ff1b1bff........
            .........fbfbfff.f......
            ..........ffffffff......
            ............fffff.......
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            ........f11111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd111111dddf......
            ......fd11111ddddf......
            ......fd11dddddddf......
            ......f111dddddddf......
            ......f11fcddddddf......
            .....fb1111bdddbf.......
            .....f1b1bdfcfff........
            .....fbfbffffffff.......
            ......fffffffffff.ff....
            ...........ffffffff.....
            ........f1b1bffffff.....
            ........fbfbffffff......
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
    } else if (RandomInt == 4) {
        animation.runImageAnimation(
        MiniPlayer,
        [img`
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 f . f d f 
            . f 2 2 2 2 2 2 b b f f d f 
            . f b d d d d d d b b d b f 
            . f d d d d d b d d f f f . 
            . f d f f f d f f d f . . . 
            . f f . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . . . 
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e b f b . 
            f d d f d d f d d f f d f . 
            f b d d b b d d 2 b f d f . 
            . f 2 2 2 2 2 2 d b d b f . 
            . f d d d d d d d f f f . . 
            . f d b d f f f d f . . . . 
            . . f f f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 b f f d f 
            . f 2 2 2 2 2 2 d b b d b f 
            . f d d d d d d d f f f f . 
            . . f d b d f d f . . . . . 
            . . . f f f f f f . . . . . 
            `],
        200,
        true
        )
    } else if (RandomInt == 5) {
        animation.runImageAnimation(
        MiniPlayer,
        [img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e e f . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 7 7 7 e 4 4 e . . 
            . . . f 6 6 6 f e e f . . 
            . . . . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 e e f f f . 
            . . . f f e e 4 4 e f . . 
            . . . f 7 7 e 4 4 e f . . 
            . . f f 6 6 f e e f f f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . f f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f f 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e 4 4 4 . 
            . . . f 7 7 7 7 e 4 4 e . 
            . . f f 6 6 6 6 f e e f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `],
        200,
        true
        )
    } else if (RandomInt == 6) {
        animation.runImageAnimation(
        MiniPlayer,
        [img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `,img`
            . . . c c c c c c . . . . . . . 
            . . c 6 7 7 7 7 6 c . . . . . . 
            . c 7 7 7 7 7 7 7 7 c . . . . . 
            c 6 7 7 7 7 7 7 7 7 6 c . . . . 
            c 7 c 6 6 6 6 c 7 7 7 c . . . . 
            f 7 6 f 6 6 f 6 7 7 7 f . . . . 
            f 7 7 7 7 7 7 7 7 7 7 f . . . . 
            . f 7 7 7 7 6 c 7 7 6 f . . . . 
            . . f c c c c 7 7 6 f c c c . . 
            . . c 6 2 7 7 7 f c c 7 7 7 c . 
            . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
            . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
            . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
            . . c 6 1 1 1 1 1 7 6 6 c c . . 
            . . . c c c c c c c c c c . . . 
            `],
        200,
        true
        )
    } else if (RandomInt == 7) {
        animation.runImageAnimation(
        MiniPlayer,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c c b 5 5 b d d d c . 
            . . . . . c d 5 5 b b c c c . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 5 5 5 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c b 5 5 b d d d c c . 
            . . . . c d 5 5 b b c c c . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 5 5 5 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c . 
            . c c c c c b b d d d d d d c c 
            . . . c c 5 5 b 5 5 d d d d d c 
            . . . . c b 5 5 b b c c c c c c 
            . . . . c c c c c c . . . . . . 
            . . . . . c b b b c . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c c 3 3 b b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c c 
            . . . c b c c b 5 5 b c c c . . 
            . . . c c c d 5 5 b c . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d c c . 
            . . c b b c c c 5 5 b c c . . . 
            . . c c c c c d 5 5 c . . . . . 
            `],
        200,
        true
        )
    } else if (RandomInt == 8) {
        animation.runImageAnimation(
        MiniPlayer,
        [img`
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . c c 5 5 5 c c c . . . . 
            . . c c c c 5 5 5 5 c b c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . c 5 5 5 b b b b 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 f f . . 
            . . . . f e e e f b e e f f . . 
            . . . . f e b b f 1 b f f f . . 
            . . . . f b b b b b b f f . . . 
            . . . . . f e e e e f e e . . . 
            . . . . . f 5 b b e b b e . . . 
            . . . . f 5 5 5 5 e b b e . . . 
            . . . . c b 5 5 5 5 e e . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c c 5 c . . . . . . 
            . . . . c c 5 5 5 c c c . . . . 
            . . c c c c 5 5 5 5 c b c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . c 5 5 5 b b b b 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 f f . . 
            . . . . f e e e f b e e f f . . 
            . . . . f e b b f 1 b f f f . . 
            . . . . f b b b b e e f f . . . 
            . . . . . f e e e b b e f . . . 
            . . . . f 5 b b e b b e . . . . 
            . . . . c 5 5 5 5 e e f . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . . . . c c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . c c 5 5 5 c c c . . . . 
            . . c c c c 5 5 5 5 c b c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . c 5 5 5 b b b b 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 f f . . 
            . . . . f e e e f b e e f f . . 
            . . . . f e b b f 1 b f f f . . 
            . . . . f b b b b b b f f . . . 
            . . . . . f e e e e f e e . . . 
            . . . . . f 5 b b e b b e . . . 
            . . . . f 5 5 5 5 e b b e . . . 
            . . . . c b 5 5 5 5 e e . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c c 5 c . . . . . . 
            . . . . c c 5 5 5 c c c . . . . 
            . . c c c c 5 5 5 5 c b c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . c 5 5 5 b b b b 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 f f . . 
            . . . . f e e e f b e e f f . . 
            . . . . f e b b f 1 b f f f . . 
            . . . . f b b b b b b f f . . . 
            . . . . . f e e e e e b b e . . 
            . . . . f 5 5 b b b e b b e . . 
            . . . . c 5 5 5 5 5 e e e . . . 
            . . . . . f f f f f f . . . . . 
            `],
        200,
        true
        )
    } else {
        animation.runImageAnimation(
        MiniPlayer,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            c d e e d d d d e e d d f . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e b d c . f f 
            . f d d d d e e e f f c . f e f 
            . f f f f f f e e e e f . f e f 
            . f f f f e e e e e e e f f e f 
            f d d f d d f e f e e e e f f . 
            f d b f d b f e f e e e e f . . 
            f f f f f f f f f f f f e f . . 
            . . . . . . . . . f c d d f . . 
            . . . . . . . . . . f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f f . . . . 
            . c d d d d d d e e d d f . . . 
            . c d f d d f d e e b d c . . . 
            c d d f d d f d e e b d c . f f 
            c d e e d d d d e e f c . f e f 
            c d d d d c d e e e f . . f e f 
            . f c c c d e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . f f e f e e f e e e e f . . 
            . f e f f e e f f f e e e f . . 
            f d d b d d c f f f f f f b f . 
            f d d c d d d f . . f c d d f . 
            . f f f f f f f . . . f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f f f . . . . 
            . . f d d d e e e e d d f . . . 
            . c d d d d d e e e b d c . . . 
            . c d d d d d d e e b d c . . . 
            c d d f d d f d e e f c . f f . 
            c d d f d d f d e e f . . f e f 
            c d e e d d d d e e f . . f e f 
            . f d d d c d e e f f . . f e f 
            . . f f f d e e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . . . f f e e e e e b f f . . 
            . . . f e f f e e c d d f f . . 
            . . f d d b d d c f f f . . . . 
            . . f d d c d d d f f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `],
        200,
        true
        )
    }
    MiniPlayer.setPosition(160, 112)
}
function loadUserIconOption () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
    SettingsTitle = textsprite.create("User Icon")
    SettingsTitle.setOutline(1, 12)
    SettingsTitle.setMaxFontHeight(10)
    SettingsTitle.setPosition(80, 10)
    IconSelectMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Knight", img`
        . . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c c . . . . . 
        . . . c c d f f f f f d c c . . . 
        . . c d d f f f 2 f f f d d c . . 
        . . c d f f f 2 2 2 f f f d c . . 
        . c d f f f e e e e e f f f d c . 
        . c d f f e 2 2 2 2 2 e e f d c . 
        . c d f e 2 f f f f f 2 e f d c . 
        . c d f f f f e e e f f f f d c . 
        . c f f e f b f 4 f b f e f f c . 
        . c f e e 4 1 f d f 1 4 e e f c . 
        . c d f e e d d d d d e e f d c . 
        . . c d f e e 4 4 4 e e f d c . . 
        . . c e 4 f 2 2 2 2 2 f 4 e c . . 
        . . . c c f 2 2 2 2 2 f c c . . . 
        . . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Coins", img`
        . . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c c . . . . . 
        . . . c c d d d d d d d c c . . . 
        . . c d d d d d b b b b d d c . . 
        . . c d d d d b 5 5 5 5 b d c . . 
        . c d d d d b 5 d 3 3 d 5 b d c . 
        . c d d d b b 5 3 5 5 1 5 b d c . 
        . c d d b 5 c 5 3 5 5 1 d c d c . 
        . c d b 5 d c d d 1 1 d d c d c . 
        . c d b 5 3 5 f d d d d f d d c . 
        . c d c 5 3 5 5 f f f f d d d c . 
        . c d c d d 1 1 d d c d d d d c . 
        . . c d f d d d d f d d d d c . . 
        . . c d d f f f f d d d d d c . . 
        . . . c c d d d d d d d c c . . . 
        . . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Ghost", img`
        . . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c c . . . . . 
        . . . c c d f f f f b b c c . . . 
        . . c d f f 1 1 1 1 f f b d c . . 
        . . c f b 1 1 1 1 1 1 b f b c . . 
        . c d f 1 1 1 1 1 1 1 1 f b d c . 
        . c f d 1 1 1 1 1 1 1 1 d f b c . 
        . c f d 1 1 1 1 1 1 1 1 d f b c . 
        . c f d d d 1 1 1 1 d d d f b c . 
        . c f b d b f d d f b d b f b c . 
        . c f c d c f 1 1 f c d c f b c . 
        . c d f b 1 1 1 1 1 1 b f b d c . 
        . . c d f c d b 1 b d f b d c . . 
        . . c d f c b f b f c f b d c . . 
        . . . c c f f f f f f b c c . . . 
        . . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Shine", img`
        . . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c c . . . . . 
        . . . c c d d d b d d d c c . . . 
        . . c d d d d b d b d d d d c . . 
        . . c d d d d c d c d d d d c . . 
        . c d d d d d c 5 c d d d d d c . 
        . c d d d d c d 5 d c d d d d c . 
        . c d b c c d 5 5 5 d c c b d c . 
        . c b d d 5 5 5 5 5 5 5 d d b c . 
        . c d b c c d 5 5 5 d c c b d c . 
        . c d d d d c d 5 d c d d d d c . 
        . c d d d d d c 5 c d d d d d c . 
        . . c d d d d c d c d d d d c . . 
        . . c d d d d b d b d d d d c . . 
        . . . c c d d d b d d d c c . . . 
        . . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Star", img`
        . . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c c . . . . . 
        . . . c c d d d d d d d c c . . . 
        . . c d d d d d d d d d d d c . . 
        . . c d d d d b b b d d d d c . . 
        . c d d d d b 5 5 5 b d d d d c . 
        . c d b b b 5 5 1 1 1 b b b d c . 
        . c d b 5 5 5 5 1 1 1 5 5 b d c . 
        . c d d b d 5 5 5 5 5 d b d d c . 
        . c d d c b 5 5 5 5 5 b c d d c . 
        . c d d c 5 d d d d d 5 c d d c . 
        . c d d c 5 d c c c d 5 c d d c . 
        . . c d c c c d d d c c c d c . . 
        . . c d d d d d d d d d d d c . . 
        . . . c c d d d d d d d c c . . . 
        . . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Heart", img`
        . . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c c . . . . . 
        . . . c c d d d d d d d c c . . . 
        . . c d d d d d d d d d d d c . . 
        . . c d d d d d d d d d d d c . . 
        . c d d d 2 2 d d d 2 2 d d d c . 
        . c d d 2 3 2 2 d 2 2 2 2 d d c . 
        . c d d 2 3 2 2 2 2 2 2 2 d d c . 
        . c d d 2 2 2 2 2 2 2 2 2 d d c . 
        . c d d d 2 2 2 2 2 b 2 d d d c . 
        . c d d d d 2 2 2 b 2 d d d d c . 
        . c d d d d d 2 2 2 d d d d d c . 
        . . c d d d d d 2 d d d d d c . . 
        . . c d d d d d d d d d d d c . . 
        . . . c c d d d d d d d c c . . . 
        . . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Baby Dino", img`
        . . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c c . . . . . 
        . . . c c d d d d d d d c c . . . 
        . . c d d d d c c c c d d d c . . 
        . . c d d c c 5 5 5 5 c c d c . . 
        . c d d c 5 5 5 5 5 5 5 5 c d c . 
        . c d c 5 5 5 5 5 1 f 5 5 5 c c . 
        . c d c 5 5 5 5 5 f f 5 5 5 5 c . 
        . c d c 5 5 5 5 5 5 5 5 5 5 5 c . 
        . c d d c b b 1 b 5 5 5 5 5 5 c . 
        . c d d 5 3 3 3 5 5 5 5 5 d d c . 
        . c d d b 5 5 5 5 5 5 5 5 d d c . 
        . . c d d c b b c 5 5 b d d c . . 
        . . c d c b b c 5 5 b b d d c . . 
        . . . c c c c c c c d d c c . . . 
        . . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Princess", img`
        . . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c c . . . . . 
        . . . c c d d b d b d d c c . . . 
        . . c d d d b 5 b 5 b b d d c . . 
        . . c d d b f 5 5 5 f f b d c . . 
        . c d d b f 1 5 2 5 1 6 f b d c . 
        . c d b f 1 6 6 6 6 6 1 6 f b c . 
        . c d b f 6 6 f f f f 6 1 f b c . 
        . c d b f 6 f f d d f f 6 f b c . 
        . c b f 6 f d f d d f d f 6 f c . 
        . c b f 6 f d 3 d d 3 d f 6 f c . 
        . c b f 6 6 f d d d d f 6 6 f c . 
        . . c 6 6 f 3 f f f f 3 f 6 c . . 
        . . c f f d 3 5 3 3 5 3 d f c . . 
        . . . c c d f 3 5 5 3 f c c . . . 
        . . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Rugby Player", img`
        . . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c c . . . . . 
        . . . c c 2 2 2 2 2 e d c c . . . 
        . . c d 2 2 2 2 d 2 2 e d d c . . 
        . . c e 2 2 2 2 2 2 2 e d d c . . 
        . c d e 2 2 2 2 2 2 2 e d d d c . 
        . c 2 e 2 2 2 2 2 e f f c c d c . 
        . c 2 e e 2 2 e f f f f b c d c . 
        . c 2 e e f e 2 b f f f d c d c . 
        . c 2 2 2 d f 2 1 1 1 1 b c d c . 
        . c d 2 2 d f e e c c c d d d c . 
        . c d 1 d e 2 2 e e c d d d d c . 
        . . c f e 2 2 2 2 e d d d d c . . 
        . . c f f d d 2 2 f f d d d c . . 
        . . . c c d d e e f f d c c . . . 
        . . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Flower", img`
        . . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c c . . . . . 
        . . . c c d d d d d d d c c . . . 
        . . c d d d d d c c c d d b c . . 
        . . c d d c c c c 3 c c d b c . . 
        . c d d c c 3 c 3 c 3 c d d b c . 
        . c d d c 3 3 c c b c c d d b c . 
        . c d d c b 3 c b 3 b 3 c d b c . 
        . c d d c c c c c c c 3 c d b c . 
        . c d d c 3 3 b b c 3 3 c d b c . 
        . c d d c c 3 3 3 c c c c d b c . 
        . c d d d c c c c c 7 d d 6 b c . 
        . . c d d d d d d d 7 6 6 6 c . . 
        . . c d d d 5 d d 7 6 6 b b c . . 
        . . . c c b 7 7 7 6 b b c c . . . 
        . . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Default", img`
        . . . . . . . . . . . . . . . . . 
        . . . . . c c c c c c c . . . . . 
        . . . c c d b b b b b d c c . . . 
        . . c d d b b b b b b b d d c . . 
        . . c d d b b b b b b b d d c . . 
        . c d d d b b b b b b b d d d c . 
        . c d d d b b b b b b b d d d c . 
        . c d d d b b b b b b b d d d c . 
        . c d d d d b b b b b d d d d c . 
        . c d d d d d d d d d d d d d c . 
        . c d d d b b b b b b b d d d c . 
        . c d d b b b b b b b b b d d c . 
        . . c b b b b b b b b b b b c . . 
        . . c b b b b b b b b b b b c . . 
        . . . c c b b b b b b b c c . . . 
        . . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . . 
        `),
    miniMenu.createMenuItem("Back", img`
        . . . . . . . . . . . . . . . . . 
        . . c c c c c c c c c c c c c . . 
        . c c d d d d d d d d d d d c c . 
        . c d d d d d d d d d d d d b c . 
        . c d d d c d d d d d c d d b c . 
        . c d d b b c d d d c c c d b c . 
        . c d d d b b c d c c c d d b c . 
        . c d d d d b b c c c d d d b c . 
        . c d d d d d b b c d d d d b c . 
        . c d d d d b b b c c d d d b c . 
        . c d d d b b b d b c c d d b c . 
        . c d d b b b d d d b c c d b c . 
        . c d d d b d d d d d b d d b c . 
        . c d d d d d d d d d d d b b c . 
        . c c b b b b b b b b b b b c c . 
        . . c c c c c c c c c c c c c . . 
        . . . . . . . . . . . . . . . . . 
        `)
    )
    IconSelectMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 3)
    IconSelectMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 5)
    IconSelectMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 1)
    IconSelectMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 1)
    IconSelectMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 11)
    IconSelectMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.IconOnly, 1)
    IconSelectMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 9)
    IconSelectMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, 15)
    IconSelectMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Border, miniMenu.createBorderBox(
    0,
    0,
    0,
    2
    ))
    IconSelectMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, 1)
    IconSelectMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 11)
    IconSelectMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 102)
    IconSelectMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 73)
    IconSelectMenu.bottom = 100
    IconSelectMenu.left = 30
    IconSelectMenu.setTitle("Knight")
    IconSelectMenu.onSelectionChanged(function (selection, selectedIndex) {
        IconSelectMenu.setTitle(selection)
        music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    })
    IconSelectMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (!(selectedIndex == 11)) {
            blockSettings.writeString("3mu_usericon", selection)
            closeMenu()
            loadSettingsApp()
        } else {
            closeMenu()
            loadSettingsApp()
        }
    })
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LoadedApp == "MainMenu") {
        RightArrow.x += 1
        timer.after(200, function () {
            RightArrow.x += -1
        })
    } else {
        if (LoadedApp == "DemoGame") {
            demoGameInputPressed("right")
        }
    }
})
function bootApp (appname: string) {
    color.FadeToBlack.startScreenEffect(500)
    timer.after(500, function () {
        closeMenu()
        if (appname == "Settings") {
            loadSettingsApp()
        } else if (appname == "Back") {
            color.startFadeFromCurrent(color.originalPalette)
            openMenu()
        } else if (appname == "Demo Game") {
            loadDemoGame()
        } else {
        	
        }
        color.startFadeFromCurrent(color.originalPalette)
    })
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (DemoPlayerSwordSwung == false) {
        info.changeLifeBy(-1)
        info.changeScoreBy(-10)
        sprites.destroy(sprite)
    }
})
function openMenu () {
    initTheme()
    initIcons()
    bootData()
    LoadedApp = "MainMenu"
    for (let index = 0; index <= 170; index++) {
        MiniPlayer.x += -1
        pause(100)
    }
}
function loadDataManagementInfo () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
    SettingsTitle = textsprite.create("Data")
    SettingsTitle.setOutline(1, 12)
    SettingsTitle.setMaxFontHeight(10)
    Icon = sprites.create(img`
        ................
        .dddd...........
        .dddddddd.......
        .dddddddddd.....
        .dddddd.dddddd..
        .ddddd...dddddb.
        .dddd.....ddddb.
        .ddd.......dddb.
        .dd.........ddb.
        .ddddd...dddddb.
        .ddddd...dddddb.
        .ddddd...dddddb.
        .ddddd...dddddb.
        .ddddd...dddddb.
        .ddddd...dddddb.
        .dddddddddddddb.
        .eeeeeeeeeeeeeb.
        .bbbbbbbbbbbbbb.
        ................
        ................
        `, SpriteKind.Text)
    Icon.setPosition(80, 40)
    SettingsTitle.setPosition(80, 10)
    LongText = textsprite.create("Saved Settings:")
    LongText.setPosition(80, 60)
    loop = 60
    for (let index = 0; index <= blockSettings.list().length - 1; index++) {
        loop += 10
        SysSoftwareText = textsprite.create("" + blockSettings.list()[index] + ": " + blockSettings.readString(blockSettings.list()[index]))
        SysSoftwareText.setPosition(80, loop)
    }
    LongText = textsprite.create("Back (A)")
    LongText.setOutline(1, 12)
    LongText.setPosition(27, 114)
    Back = miniMenu.createMenu(
    miniMenu.createMenuItem("back")
    )
    Back.setPosition(-100, 0)
    Back.onButtonPressed(controller.A, function (selection, selectedIndex) {
        closeMenu()
        loadSettingsApp()
    })
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LoadedApp == "MainMenu") {
    	
    } else {
        if (LoadedApp == "DemoGame") {
            demoGameInputPressed("down")
        }
    }
})
function bootData () {
    sendConsoleLog("3MU", "3MU V0.0.1")
    sendConsoleLog("3MU", "Loaded Icon: " + blockSettings.readString("3mu_usericon"))
    sendConsoleLog("3MU", "===============================")
    sendConsoleLog("3MU", "Ver: " + blockControl.deviceDalVersion())
    sendConsoleLog("3MU", "Serial:" + blockControl.deviceSerialNumber())
    sendConsoleLog("3MU", "Long Serial: " + blockControl.deviceLongSerialNumber())
    sendConsoleLog("3MU", "Ram Size:" + blockControl.ramSize())
    sendConsoleLog("3MU", "Emulator: " + blockControl.inSimulator())
}
function loadHardwareInfo () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    sprites.destroyAllSpritesOfKind(SpriteKind.MiniMenu)
    SettingsTitle = textsprite.create("Hardware")
    SettingsTitle.setOutline(1, 12)
    SettingsTitle.setMaxFontHeight(10)
    Icon = sprites.create(img`
        .ddddddddddddd..
        dddddddddddddddb
        ddd.........dddb
        dd...........bdb
        dd...........bdb
        dd...........bdb
        dd...........bdb
        dd...........bdb
        ddd.........bbdb
        dddbbbbbbbbbbddb
        dddddddddddddddb
        dddddddddddddddb
        dddddddddddddddb
        dddddddddddddddb
        dddd.dddd.bddddb
        ddd..bdddbbddddb
        ddddbdddddd.bddb
        dddddddddddbbddb
        .dddddddddddddbb
        .bbbbbbbbbbbbbb.
        `, SpriteKind.Text)
    Icon.setPosition(80, 40)
    SettingsTitle.setPosition(80, 10)
    SerialText = textsprite.create("Serial: " + blockControl.deviceSerialNumber())
    SerialText.setPosition(80, 115)
    SysSoftwareText = textsprite.create("Sys Software: " + blockControl.deviceDalVersion())
    SysSoftwareText.setPosition(80, 70)
    HashText = textsprite.create("Hash: " + blockControl.programHash())
    HashText.setPosition(80, 80)
    RamSizeText = textsprite.create("Ram Size: " + blockControl.ramSize())
    RamSizeText.setPosition(80, 90)
    LongText = textsprite.create("Long: " + blockControl.deviceLongSerialNumber())
    LongText.setPosition(80, 100)
    Back = miniMenu.createMenu(
    miniMenu.createMenuItem("back")
    )
    Back.setPosition(-100, 0)
    Back.onButtonPressed(controller.A, function (selection, selectedIndex) {
        closeMenu()
        loadSettingsApp()
    })
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite2 = textsprite.create("Paused")
    textSprite2.setMaxFontHeight(10)
    textSprite2.setOutline(1, 12)
    textSprite2.setPosition(120, 10)
    IconSelectMenu.setButtonEventsEnabled(false)
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Volume Down"),
    miniMenu.createMenuItem("Volume Up"),
    miniMenu.createMenuItem("Home Screen"),
    miniMenu.createMenuItem("Back")
    )
    myMenu.setFrame(img`
        . c c c c c c c c c c c c c . 
        c c d d d d d d d d d d d c c 
        c d d d d d d d d d d d d b c 
        c d d d d d d d d d d d d b c 
        c d d d d d d d d d d d d b c 
        c d d d d d d d d d d d d b c 
        c d d d d d d d d d d d d b c 
        c d d d d d d d d d d d d b c 
        c d d d d d d d d d d d d b c 
        c d d d d d d d d d d d d b c 
        c d d d d d d d d d d d d b c 
        c d d d d d d d d d d d d b c 
        c d d d d d d d d d d d b b c 
        c c b b b b b b b b b b b c c 
        . c c c c c c c c c c c c c . 
        `)
    myMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 13)
    myMenu.setPosition(120, 50)
    textSprite2.setFlag(SpriteFlag.RelativeToCamera, true)
    myMenu.setFlag(SpriteFlag.RelativeToCamera, true)
    myMenu.onSelectionChanged(function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    })
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        if (selectedIndex == 0) {
            Volume += -20
            music.setVolume(Volume)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        } else if (selectedIndex == 1) {
            Volume += 20
            music.setVolume(Volume)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        } else if (selectedIndex == 2) {
            bootApp("Back")
        } else {
            IconSelectMenu.setButtonEventsEnabled(true)
            myMenu.close()
            sprites.destroy(textSprite2)
        }
    })
})
function initIcons () {
    IconSelectMenu = miniMenu.createMenuFromArray([miniMenu.createMenuItem("Settings", assets.image`SettingsApp`), miniMenu.createMenuItem("Demo Game", assets.image`Demo Game Icon`)])
    IconSelectMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    IconSelectMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 20)
    IconSelectMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 100)
    IconSelectMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Padding, miniMenu.createBorderBox(
    2,
    0,
    2,
    0
    ))
    IconSelectMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.IconOnly, 1)
    IconSelectMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 102)
    IconSelectMenu.left = 25
    IconSelectMenu.bottom = 60
    IconSelectMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 13)
    IconSelectMenu.onSelectionChanged(function (selection, selectedIndex) {
        DisplayAppName.setText(selection)
        DisplayAppName.setPosition(85 - selection.length, 27)
        music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    })
    IconSelectMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        bootApp(selection)
        music.play(music.createSoundEffect(WaveShape.Triangle, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(15)
    info.changeLifeBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (DemoPlayerSwordSwung == true) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(35)
    }
})
let DemoHeal: Sprite = null
let MonsterCount = 0
let Monster: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let textSprite2: TextSprite = null
let RamSizeText: TextSprite = null
let HashText: TextSprite = null
let SerialText: TextSprite = null
let Back: miniMenu.MenuSprite = null
let SysSoftwareText: TextSprite = null
let loop = 0
let Icon: Sprite = null
let IconSelectMenu: miniMenu.MenuSprite = null
let textSprite: TextSprite = null
let LongText: TextSprite = null
let RandomInt = 0
let MiniPlayer: Sprite = null
let RightArrow: Sprite = null
let DisplayAppName: TextSprite = null
let TopBar: Sprite = null
let LeftArrow: Sprite = null
let DemoPlayer: Sprite = null
let DemoPlayerSwordSwung = false
let UserProf: Sprite = null
let SettingsMenu: miniMenu.MenuSprite = null
let VerNum: TextSprite = null
let SettingsTitle: TextSprite = null
let LoadedApp = ""
let consolelog: string[] = []
let Volume = 0
Volume = 100
consolelog = []
openMenu()
game.onUpdateInterval(2000, function () {
    if (LoadedApp == "DemoGame") {
        Monster = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        Monster.follow(DemoPlayer, 40)
        tiles.placeOnTile(Monster, tiles.getTileLocation(randint(1, 14), randint(1, 14)))
        MonsterCount += 1
    }
})
game.onUpdateInterval(10000, function () {
    if (LoadedApp == "DemoGame") {
        DemoHeal = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 3 3 3 f f f 3 3 3 f f . 
            . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f f 3 3 3 b b b 3 3 3 f f . 
            . . . f f 3 b b b b b 3 f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(DemoHeal, tiles.getTileLocation(randint(1, 14), randint(1, 14)))
    }
})
