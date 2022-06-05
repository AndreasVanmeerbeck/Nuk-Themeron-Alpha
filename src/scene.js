class scene extends Phaser.Scene {

    constructor (){
        super("playGame")
    }

    preload() {
        this.load.image('background', 'assets/images/background.png');

        this.load.spritesheet('idle','assets/images/animation/Anim_Idle_sheet.png',{frameWidth: 98, frameHeight: 190});
        this.load.spritesheet('idlecat','assets/images/animation/Anim_Idle_Cat.png',{frameWidth: 110, frameHeight: 50});

        this.load.image('player', 'assets/images/Bastet.png');
        this.load.image('player2', 'assets/images/BastetC.png');
        this.load.image('vase', 'assets/images/vase.png');
        this.load.image('tiles', 'assets/tilesets/BLOC.png');

        this.load.image('text', 'assets/images/menu/Controls_text.png');
        this.load.image('z', 'assets/images/menu/z.png');
        this.load.image('q', 'assets/images/menu/q.png');
        this.load.image('d', 'assets/images/menu/d.png');
        this.load.image('shift', 'assets/images/menu/shift.png');
        this.load.image('espace', 'assets/images/menu/espace.png');
        this.load.image('back', 'assets/images/menu/Bouton_back.png');
        this.load.image('backover', 'assets/images/menu/Bouton_back_2.png');
        this.load.image('help', 'assets/images/menu/Help.png');

        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/level1.json');
    }


    create() {

        //Lancement de l'UI que à la première fois lancé
        if(Gamelaunch === true){
            this.scene.launch("UIScene")
            Gamelaunch = false
        }


        //Background
        const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        backgroundImage.setScale(1, 1);

        const vases = this.add.image(1400, 255, 'vase').setOrigin(0, 0);

        //map tiled
        const map = this.make.tilemap({key: 'map'});

        const tileset = map.addTilesetImage('main_tileset', 'tiles');

        this.blocks = map.createLayer('Ground', tileset);

        this.spikes = map.createLayer('Spike', tileset);

        this.lamps = map.createLayer('Lamp', tileset);

        //Tuto
        this.add.image(60,680,'help').setOrigin(0,0).setScale(0.3);
        this.add.image(80 ,760,'espace').setOrigin(0,0).setScale(0.5);
        this.add.image(111,700,'z').setOrigin(0,0).setScale(0.7);

        this.add.image(600,120,'help').setOrigin(0,0).setScale(0.3);
        this.add.image(647,150,'shift').setOrigin(0,0).setScale(0.7);


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

        //Colliders
        this.collide = this.physics.add.group({
            allowGravity: false,
            immovable: true,
        });
        map.getObjectLayer('Collider').objects.forEach((col) => {
            this.collideSprite = this.collide.create(col.x, col.y, col.height).setOrigin(0).setDisplaySize(col.width,col.height).visible=false;
            this.physics.add.collider(this.collide, this.collideSprite)
        });
        this.physics.add.collider(this.collide, this.player.player);

        this.spikescollide = this.physics.add.group({
            allowGravity: false,
            immovable: true,
        });
        map.getObjectLayer('SpikeCol').objects.forEach((spike) => {
            this.SpikeColSprite = this.spikescollide.create(spike.x, spike.y, spike.height).setOrigin(0).setDisplaySize(spike.width,spike.height).visible=false;
            this.physics.add.collider(this.spikescollide, this.SpikeColSprite)
        });
        this.spikeCollider()

        //Setup Cam
        this.cameras.main.setBounds(45, -2, 15000, 15000)
        this.cameras.main.zoom = 0.7
    }
    //event de collision
    spikeCollider(){
        this.physics.add.collider(this.spikescollide, this.player.player, (player) => {
            this.player.player.setVelocityX(0);
            this.player.player.setVelocityY(0);
            this.player.player.setX(160);
            this.player.player.setY(850);
        });
    }

    mapSwitch(){
        if(this.player.player.x >= 1850){
            this.scene.stop("playGame")
            this.scene.launch("Screen2")
            this.player.player.setX(110);
            this.player.player.setY(865);
        }
    }

    BonusTake(player, bonus){
        bonus.destroy()
        BonusAmount ++
    }


    update() {

        this.mapSwitch();
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