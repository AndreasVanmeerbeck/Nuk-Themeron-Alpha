class SceneUI extends Phaser.Scene {

    constructor() {
        super({ key: 'UIScene'});
    }

    preload(){
        this.load.image('icncat', 'assets/images/UI/Icone10.png');
        for (let i = 0; i <= 10; i++) {
            this.load.image('icncat' + i, 'assets/images/UI/Icone' + i + '.png');
        }
    }
    create(){

        //Affichage UI

        this.Iconcat10 = this.add.image(20, 50, 'icncat10').setOrigin(0, 0);
        this.Iconcat10.setScale(1.5)
        this.Iconcat10.setVisible(true)

        this.Iconcat9 = this.add.image(20, 50, 'icncat9').setOrigin(0, 0);
        this.Iconcat9.setScale(1.5)
        this.Iconcat9.setVisible(false)

        this.Iconcat8 = this.add.image(20, 50, 'icncat8').setOrigin(0, 0);
        this.Iconcat8.setScale(1.5)
        this.Iconcat8.setVisible(false)

        this.Iconcat7 = this.add.image(20, 50, 'icncat7').setOrigin(0, 0);
        this.Iconcat7.setScale(1.5)
        this.Iconcat7.setVisible(false)

        this.Iconcat6 = this.add.image(20, 50, 'icncat6').setOrigin(0, 0);
        this.Iconcat6.setScale(1.5)
        this.Iconcat6.setVisible(false)

        this.Iconcat5 = this.add.image(20, 50, 'icncat5').setOrigin(0, 0);
        this.Iconcat5.setScale(1.5)
        this.Iconcat5.setVisible(false)

        this.Iconcat4 = this.add.image(20, 50, 'icncat4').setOrigin(0, 0);
        this.Iconcat4.setScale(1.5)
        this.Iconcat4.setVisible(false)

        this.Iconcat3 = this.add.image(20, 50, 'icncat3').setOrigin(0, 0);
        this.Iconcat3.setScale(1.5)
        this.Iconcat3.setVisible(false)

        this.Iconcat2 = this.add.image(20, 50, 'icncat2').setOrigin(0, 0);
        this.Iconcat2.setScale(1.5)
        this.Iconcat2.setVisible(false)

        this.Iconcat1 = this.add.image(20, 50, 'icncat1').setOrigin(0, 0);
        this.Iconcat1.setScale(1.5)
        this.Iconcat1.setVisible(false)

        this.Iconcat0 = this.add.image(20, 50, 'icncat0').setOrigin(0, 0);
        this.Iconcat0.setScale(1.5)
        this.Iconcat0.setVisible(false)
    }

    UIUpdate(){
        if(CatTimer <= 180){
            this.Iconcat10.setVisible(false)
        }
    }

    update(){
        this.UIUpdate()
    }

}