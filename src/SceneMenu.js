class SceneMenu extends Phaser.Scene {

    constructor() {
        super("menuGame");
    }

    preload() {
        this.load.image('icon', 'assets/images/menu/Icone.png');
        this.load.image('bg', 'assets/images/menu/Background.png');
        this.load.image('title', 'assets/images/menu/Title.png');

        this.load.image('play', 'assets/images/menu/Bouton_play.png');
        this.load.image('playover', 'assets/images/menu/Bouton_play_2.png');

        this.load.image('bind', 'assets/images/menu/Bouton_bind.png');
        this.load.image('bindover', 'assets/images/menu/Bouton_bind_2.png');


    }

    create() {
        this.add.image(0,0,'bg').setOrigin(0,0).setScale(1);
        this.add.image(550,250,'icon').setOrigin(0,0).setScale(1);
        this.add.image(120,75,'title').setOrigin(0,0).setScale(1);

        let playbutton = this.add.image(630,525,'play');
        playbutton.setScale(1);

        playbutton.setInteractive();

        playbutton.on("pointerover",()=>{
            console.log("over")
            playbutton.setTexture('playover')
        })

        playbutton.on("pointerout",()=>{
            console.log("out")
            playbutton.setTexture('play')
        })

        playbutton.on("pointerup",()=>{
            console.log("up")
            playbutton.setTexture('playover')
            this.scene.start("playGame")
        })

        let bindbutton = this.add.image(630,600,'bind');
        bindbutton.setScale(1);

        bindbutton.setInteractive();

        bindbutton.on("pointerover",()=>{
            //console.log("over")
            bindbutton.setTexture('bindover')
        })

        bindbutton.on("pointerout",()=>{
            //console.log("out")
            bindbutton.setTexture('bind')
        })

        bindbutton.on("pointerup",()=>{
            //console.log("up")
            bindbutton.setTexture('bindover')
            this.scene.start("ControlsScene")
        })
    }
}
