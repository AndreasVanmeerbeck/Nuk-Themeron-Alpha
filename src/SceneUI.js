let timer;
let total = 0;

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

        initialtime = 0;
        this.text = this.add.text(1150, 30, this.formatTime(initialtime), {
            fontFamily: 'JMH_Cthulhumbus',
            color: 'purple',
            fontSize: 50,
        });
        this.timedEvent = this.time.addEvent({
            delay: 1000,
            callback: this.onEvent,
            callbackScope: this,
            loop: true
        });

        //Affichage UI

        this.Iconcat10 = this.add.image(29, 150, 'icncat10').setOrigin(0, 0);
        this.Iconcat10.setScale(1.5)
        this.Iconcat10.setVisible(true)

        this.Iconcat9 = this.add.image(29, 150, 'icncat9').setOrigin(0, 0);
        this.Iconcat9.setScale(1.5)
        this.Iconcat9.setVisible(false)

        this.Iconcat8 = this.add.image(29, 150, 'icncat8').setOrigin(0, 0);
        this.Iconcat8.setScale(1.5)
        this.Iconcat8.setVisible(false)

        this.Iconcat7 = this.add.image(29, 150, 'icncat7').setOrigin(0, 0);
        this.Iconcat7.setScale(1.5)
        this.Iconcat7.setVisible(false)

        this.Iconcat6 = this.add.image(29, 150, 'icncat6').setOrigin(0, 0);
        this.Iconcat6.setScale(1.5)
        this.Iconcat6.setVisible(false)

        this.Iconcat5 = this.add.image(29, 150, 'icncat5').setOrigin(0, 0);
        this.Iconcat5.setScale(1.5)
        this.Iconcat5.setVisible(false)

        this.Iconcat4 = this.add.image(29, 150, 'icncat4').setOrigin(0, 0);
        this.Iconcat4.setScale(1.5)
        this.Iconcat4.setVisible(false)

        this.Iconcat3 = this.add.image(29, 150, 'icncat3').setOrigin(0, 0);
        this.Iconcat3.setScale(1.5)
        this.Iconcat3.setVisible(false)

        this.Iconcat2 = this.add.image(29, 150, 'icncat2').setOrigin(0, 0);
        this.Iconcat2.setScale(1.5)
        this.Iconcat2.setVisible(false)

        this.Iconcat1 = this.add.image(29, 150, 'icncat1').setOrigin(0, 0);
        this.Iconcat1.setScale(1.5)
        this.Iconcat1.setVisible(false)

        this.Iconcat0 = this.add.image(20, 50, 'icncat0').setOrigin(0, 0);
        this.Iconcat0.setScale(1.5)
        this.Iconcat0.setVisible(true)
    }

    formatTime(seconds){
        this.minutes = Math.floor(seconds/60);
        this.partInSeconds = seconds%60;
        this.partInSeconds = this.partInSeconds.toString().padStart(2,'0');
        if(initialtime>0) {
            return `${this.minutes}:${this.partInSeconds}`;
        }
    }


    onEvent ()
    {
        initialtime += 1; // One second
        this.text.setText(this.formatTime(initialtime));
        console.log(initialtime);
    }

    UIUpdate(){
        if(CatTimer === 200) {
            this.Iconcat10.setVisible(true)
        }
        if(CatTimer <= 180){
            this.Iconcat10.setVisible(false)
            this.Iconcat9.setVisible(true)
        }
        if(CatTimer <= 160) {
            this.Iconcat9.setVisible(false)
            this.Iconcat8.setVisible(true)
        }
        if(CatTimer <= 140) {
            this.Iconcat8.setVisible(false)
            this.Iconcat7.setVisible(true)
        }
        if(CatTimer <= 120) {
            this.Iconcat7.setVisible(false)
            this.Iconcat6.setVisible(true)
        }
        if(CatTimer <= 100) {
            this.Iconcat6.setVisible(false)
            this.Iconcat5.setVisible(true)
        }
        if(CatTimer <= 80) {
            this.Iconcat5.setVisible(false)
            this.Iconcat4.setVisible(true)
        }
        if(CatTimer <= 60) {
            this.Iconcat4.setVisible(false)
            this.Iconcat3.setVisible(true)
        }
        if(CatTimer <= 40) {
            this.Iconcat3.setVisible(false)
            this.Iconcat2.setVisible(true)
        }
        if(CatTimer <= 20) {
            this.Iconcat2.setVisible(false)
            this.Iconcat1.setVisible(true)
        }
        if(CatTimer <= 5) {
            this.Iconcat1.setVisible(false)
            this.Iconcat0.setVisible(true)
        }

    }

    update(){
        this.UIUpdate()
    }

}