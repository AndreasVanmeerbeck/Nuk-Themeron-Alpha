class SceneControls extends Phaser.Scene {

    constructor() {
        super("ControlsScene");
    }
    preload(){
        this.load.image('text', 'assets/images/menu/Controls_text.png');
        this.load.image('z', 'assets/images/menu/z.png');
        this.load.image('q', 'assets/images/menu/q.png');
        this.load.image('d', 'assets/images/menu/d.png');
        this.load.image('shift', 'assets/images/menu/shift.png');
        this.load.image('espace', 'assets/images/menu/espace.png');
        this.load.image('back', 'assets/images/menu/Bouton_back.png');
        this.load.image('backover', 'assets/images/menu/Bouton_back_2.png');
        this.load.image('help', 'assets/images/menu/Help.png');
    }
    create(){
        this.add.image(0,0,'bg').setOrigin(0,0).setScale(1);
        this.add.image(-20,0,'text').setOrigin(0,0).setScale(1);
        this.add.image(1020,300,'z').setOrigin(0,0).setScale(1);
        this.add.image(158,300,'q').setOrigin(0,0).setScale(1);
        this.add.image(290,300,'d').setOrigin(0,0).setScale(1);
        this.add.image(570,500,'shift').setOrigin(0,0).setScale(1);
        this.add.image(945,370,'espace').setOrigin(0,0).setScale(1);
        this.add.image(550,250,'icon').setOrigin(0,0).setScale(1);

        let backbutton = this.add.image(90,70,'back');
        backbutton.setScale(1);

        backbutton.setInteractive();

        backbutton.on("pointerover",()=>{
            backbutton.setTexture('backover')
        })

        backbutton.on("pointerout",()=>{
            backbutton.setTexture('back')
        })

        backbutton.on("pointerup",()=>{
            backbutton.setTexture('backover')
            this.scene.start("menuGame")
        })
    }
}