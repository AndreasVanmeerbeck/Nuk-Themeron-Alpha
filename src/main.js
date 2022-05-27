const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1920,
    heigth: 1080,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
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
            debug: true,
        },
    },
    scene: [SceneMenu,scene,SceneUI]
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
let ManaEmpty = false;
