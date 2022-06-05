class Scene3 extends Phaser.Scene {

    constructor (){
        super({ key: 'Screen3'});
    }

    preload() {

    }


    create() {



        //Background
        const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        backgroundImage.setScale(1, 1);


        //map tiled
        const map = this.make.tilemap({key: 'map'});

        const tileset = map.addTilesetImage('main_tileset', 'tiles');

        this.blocks = map.createLayer('Ground3', tileset);

        this.spikes = map.createLayer('Spike3', tileset);

        //Controles
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keySHIFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

        //Variables
        JumpCount = 0;
        Timer = 0;
        NextJump = Timer + 18


        this.player = new Player(this)


        //collider
        this.collide = this.physics.add.group({
            allowGravity: false,
            immovable: true,
        });
        map.getObjectLayer('Collider3').objects.forEach((col) => {
            this.collideSprite = this.collide.create(col.x, col.y, col.height).setOrigin(0).setDisplaySize(col.width,col.height).visible=false;
            this.physics.add.collider(this.collide, this.collideSprite)
        });
        this.physics.add.collider(this.collide, this.player.player);

        this.spikescollide = this.physics.add.group({
            allowGravity: false,
            immovable: true,
        });
        map.getObjectLayer('SpikeCol3').objects.forEach((spike) => {
            this.SpikeColSprite = this.spikescollide.create(spike.x, spike.y, spike.height).setOrigin(0).setDisplaySize(spike.width,spike.height).visible=false;
            this.physics.add.collider(this.spikescollide, this.SpikeColSprite)
        });

        this.spikeCollider()


        //caméra
        this.cameras.main.setBounds(45, -2, 15000, 15000)
        this.cameras.main.zoom = 0.7
    }

    BonusTake(player, bonus){
        bonus.destroy()
        BonusAmount ++
        console.log(BonusAmount)
    }

    spikeCollider(){
        this.physics.add.collider(this.spikescollide, this.player.player, (player) => {
            console.log("collide")
            this.player.player.setVelocityX(0);
            this.player.player.setVelocityY(0);
            this.player.player.setX(975);
            this.player.player.setY(150);
            if(this.player.player.chat){
                this.player.transform();
            }
        });
    }


    mapSwitchFin(){
        if(this.player.player.x >= 1850){
            this.scene.stop("Screen3")
            this.scene.stop("UIScene")
            this.scene.launch("ScreenEnd")
        }
    }


    update() {

        this.mapSwitchFin();
        this.player.move();
        this.player.timertransform();

        Timer++
        if (Timer>500){
            Timer = 0
        }
        if (CatTimer>1000){
            CatTimer=1000
        }

    }
}