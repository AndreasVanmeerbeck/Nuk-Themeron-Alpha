class Player {


    constructor(scene) {
        this.scene=scene
        this.cameras=scene

        this.player = this.scene.physics.add.sprite(115, 865, 'player');
        this.player.body.setSize(70, 180);
        this.player.body.setMaxVelocityY(700);
        this.player.body.setMaxVelocityX(1300);
        this.player.setCollideWorldBounds(false);
        this.scene.physics.add.collider(this.player, this.scene.blocks);
        this.player.chat = false;

        if(MapSwitchHaut){
            this.player.setX(950);
            this.player.setY(10);
            MapSwitchHaut = false;
        }


        this.animation();
    }

    animation() {
        this.scene.anims.create({
            key: 'idleplayer',
            frames: this.scene.anims.generateFrameNumbers('idle', {
                start: 0,
                end: 2,
            }),
            frameRate: 2,
            repeat: 0,
        });
    }

    jumpHuman(){
        JumpCount++
        Timer = 0
        this.player.setVelocityY(-700)
        this.player.stop('idleplayer', true)

    }
    jumpCat(){
        JumpCount++
        Timer = 0
        this.player.setVelocityY(-550);

    }
    moveRightHuman(){
        this.player.setVelocityX(350);
        this.player.setFlipX(false);
        this.player.stop('idleplayer', true)
    }
    moveRightCat(){
        this.player.setVelocityX(600);
        this.player.setFlipX(false);
    }
    moveLeftHuman(){
        this.player.setVelocityX(-350);
        this.player.setFlipX(true);
        this.player.stop('idleplayer', true)
    }
    moveLeftCat(){
        this.player.setVelocityX(-600);
        this.player.setFlipX(true);
    }
    stopHuman(){
        this.player.setVelocityX(0);
        this.player.play('idleplayer', true)

    }
    stopCat(){
        this.player.setVelocityX(0);
        this.player.stop('idleplayer', true)
    }

    move(){
        if (keySHIFT.isDown){
            if (!this.flag) {

            } else {
                this.transform()
                this.flag = false
            }
        }
        if ((keySPACE.isDown || keyZ.isDown) && JumpCount < 1 && NextJump<Timer){
            if (!this.player.chat){
                this.jumpHuman()
            }
            else
            {
                this.jumpCat()
            }

        }

        if (!keyQ.isDown || !keyD.isDown){
            if (!this.player.chat){
                this.stopHuman()
            }
            else
            {
                this.stopCat()
            }
        }

        switch (true) {
            case keyQ.isDown:
                if (!this.player.chat){
                this.moveLeftHuman()
                }
                else {
                this.moveLeftCat()
                }
                break;
            case keyD.isDown:
                if (!this.player.chat){
                    this.moveRightHuman()
                }
                else {
                    this.moveRightCat()
                }
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
            this.player.setTexture('player2');
            this.player.body.setSize(110,50);
            this.player.body.setMaxVelocityY(700);
            this.player.body.setMaxVelocityX(900);
            this.player.body.position.y = this.player.body.position.y + 60;
            this.player.chat = true;
            CatTimer - 50
        }
        else
        {
            this.player.setTexture('player');
            this.player.visible=true;
            this.player.setBounce(0, 0);
            this.player.body.setSize(70, 180);
            this.player.body.setMaxVelocityY(700);
            this.player.body.setMaxVelocityX(1300);
            this.player.body.position.y = this.player.body.position.y - 80;
            this.player.chat = !this.player.chat;
        }

    }

    timertransform(){
        if (!this.player.chat && CatTimer<=200){
          CatTimer++
        }
        if (this.player.chat && CatTimer>=1){
            CatTimer--
        }
        if (CatTimer <= 0){
            this.transform()
        }
    }

    }



