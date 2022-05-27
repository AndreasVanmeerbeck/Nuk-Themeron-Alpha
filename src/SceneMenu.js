class SceneMenu extends Phaser.Scene {

    constructor() {
        super("menuGame");
    }

    preload() {
        this.load.image('icon', 'assets/images/Icone.png');

        this.load.image('play', 'assets/images/Bouton_play.png');
        this.load.image('playover', 'assets/images/Bouton_play_2.png');

        this.load.image('title', 'assets/images/Title.png');
    }

    create() {
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
    }
}
