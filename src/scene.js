class scene extends Phaser.Scene {


    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('spike', 'assets/images/spike.png');
        this.load.image('player', 'assets/images/Bastet.png');
        // At last image must be loaded with its JSON
        //this.load.atlas('player', 'assets/images/kenney_player.png', 'assets/images/kenney_player_atlas.json');
        this.load.image('tiles', 'assets/tilesets/BLOC.png');

        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/level1.json');
    }


    create() {




        const backgroundImage = this.add.image(0, -120, 'background').setOrigin(0, 0);
        backgroundImage.setScale(1, 1);
        const map = this.make.tilemap({key: 'map'});

        const tileset = map.addTilesetImage('main_tileset', 'tiles');

        this.blocks = map.createStaticLayer('Ground', tileset);
        //this.blocks.setCollisionByExclusion(-1, true);



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
        NextJump = Timer + 25


        this.player = new Player(this)

        this.collide = this.physics.add.group({
            allowGravity: false,
            immovable: true,
        });
        map.getObjectLayer('Collider').objects.forEach((col) => {
            this.collideSprite = this.collide.create(col.x, col.y, col.height).setOrigin(0).setDisplaySize(col.width,col.height).visible=false;
            this.physics.add.collider(this.collide, this.collideSprite)
        });

        this.physics.add.collider(this.collide, this.player.player);

        //this.cameras.main.startFollow(this.player.player,false);
    }


    update() {

        this.player.move();
        this.player.timertransform();
        Timer++
        if (Timer>500){
            Timer = 0
        }
        if (CatTimer>1000){
            CatTimer=1000
        }

        console.log(CatTimer)





    }
}