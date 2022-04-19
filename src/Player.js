class Player {


    constructor(scene) {
        this.scene=scene
        this.cameras=scene
        this.player = this.scene.physics.add.sprite(50, 300, 'player');
        this.player.setBounce(0);
        this.player.setCollideWorldBounds(false);
        this.scene.physics.add.collider(this.player, this.scene.platforms);

        this.scene.anims.create({
            key: 'walkh',
            frames: this.scene.anims.generateFrameNames('player', {
                prefix: 'robo_player_',
                start: 2,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'idleh',
            frames: [{key: 'player', frame: 'robo_player_0'}],
            frameRate: 10,

        });
        this.scene.anims.create({
            key: 'jumph',
            frames: [{key: 'player', frame: 'robo_player_1'}],
            frameRate: 10,
            repeat:-1,

        });
    }

    jumpHuman(){
        JumpCount++
        Timer = 0
        this.player.setVelocityY(-420);
        this.player.play('jumph');

    }
    moveRightHuman(){
        this.player.setVelocityX(300);
        this.player.setFlipX(false);
        if (this.player.body.onFloor()) {
            this.player.play('walkh', true)}
    }
    moveLeftHuman(){
        this.player.setVelocityX(-300);
        if (this.player.body.onFloor()) {
            this.player.play('walkh', true)}
        this.player.setFlipX(true);
    }
    stopHuman(){
        this.player.setVelocityX(0);
        if (this.player.body.onFloor()) {
            this.player.play('idleh',true)
        }
    }

    }



