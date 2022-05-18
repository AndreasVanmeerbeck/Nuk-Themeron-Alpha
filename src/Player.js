class Player {


    constructor(scene) {
        this.scene=scene

        this.cameras=scene

        this.player = this.scene.physics.add.sprite(50, 300, 'player');
        this.player.setBounce(0);
        this.player.setCollideWorldBounds(false);
        this.scene.physics.add.collider(this.player, this.scene.platforms);
        this.player.chat = false;

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

    move(){
        if ((keySPACE.isDown || keyZ.isDown) && JumpCount < 1 && NextJump<Timer){
            this.jumpHuman()
        }

        switch (true) {
            case keyQ.isDown:
                this.moveLeftHuman()
                break;
            case keyD.isDown:
                this.moveRightHuman();
                break;
            case keySHIFT.isDown:
                if (!this.flag) {

                } else {
                    console.log("oui")
                    this.transform()
                    this.flag = false
                }
                break;
            case this.player.body.onFloor():
                this.stopHuman();
                break;
        }

                if(!keySHIFT.isDown)
                {
                    this.flag=true
                }


        if (this.player.body.onFloor()){
            JumpCount = 0;
        }
    }

    transform() {
        if (!this.player.chat)
        {
            this.player.visible=false;
            this.player.setBounce(1.8, 2);
            this.player.body.setSize(150,150);
            this.player.body.setMaxVelocityY(860);
            this.player.body.setMaxVelocityX(600);
            this.player.setCollideWorldBounds(false);
            this.player.body.position.y = this.player.body.position.y - 30;
            this.player.chat = true;

        }
        else
        {
            this.player.setTexture('player');
            this.player.visible=true;
            this.player.setBounce(0, 0);
            this.player.body.setSize(80, 130);
            this.player.setCollideWorldBounds(false);
            this.player.chat = !this.player.chat;
        }

    }

    }



