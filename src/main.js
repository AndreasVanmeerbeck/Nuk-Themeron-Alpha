const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1920,
    heigth: 1080,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        fps:{
            min:120,
            target:140,
            forceSetTimeOut:true,
        },
        min: {
            width: 720,
            height: 680
        },

        max: {
            width: 1280,
            height: 720,
        }
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1600 },
        },
    },
    scene: [
        SceneMenu,
        scene,
        Scene2,
        Scene3,
        SceneUI,
        SceneControls,
        SceneEnd,
    ]
};

const game = new Phaser.Game(config);

let keyQ;
let keyS;
let keyD;
let keyZ;
let keySPACE;
let keySHIFT;
let JumpCount;
let NextJump;
let Timer;
let CatTimer = 200;
let MapSwitchDroite;
let MapSwitchHaut;
let BonusAmount = 0;
let initialtime;
let Gamelaunch = true;
