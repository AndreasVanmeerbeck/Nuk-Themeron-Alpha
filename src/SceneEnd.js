class SceneEnd extends Phaser.Scene {

    constructor() {
        super({key: 'ScreenEnd'});
    }

    preload() {
        this.load.image('gg', 'assets/images/menu/GG.png');
        this.load.image('time', 'assets/images/menu/Temps.png');
        this.load.image('bonusend', 'assets/images/menu/Bonus.png');
    }


    create() {

        this.add.image(0,0,'bg').setOrigin(0,0).setScale(1);

        this.add.image(360,225,'time').setOrigin(0,0).setScale(1);

        this.add.image(367,120,'bonusend').setOrigin(0,0).setScale(1);

        this.add.image(85,425,'gg').setOrigin(0,0).setScale(1);

        this.text = this.add.text(650, 200,(this.formatTime(initialtime)), {
            fontFamily: 'JMH_Cthulhumbus',
            color: 'purple',
            fontSize: 90,
        });

        this.text = this.add.text(650, 100,(BonusAmount), {
            fontFamily: 'JMH_Cthulhumbus',
            color: 'purple',
            fontSize: 90,
        });



    }

    formatTime(seconds){
        this.minutes = Math.floor(seconds/60);
        this.partInSeconds = seconds%60;
        this.partInSeconds = this.partInSeconds.toString().padStart(2,'0');
        if(initialtime>0) {
            return `${this.minutes}:${this.partInSeconds}`;
        }
    }
}