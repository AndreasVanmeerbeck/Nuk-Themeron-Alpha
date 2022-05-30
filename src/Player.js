class Player {


    constructor(scene) {
        this.scene=scene
        this.cameras=scene

        this.player = this.scene.physics.add.sprite(110, 865, 'player');
        this.player.setBounce(0);
        this.player.body.setSize(100, 190);
        this.player.body.setMaxVelocityY(700);
        this.player.body.setMaxVelocityX(1300);
        this.player.setCollideWorldBounds(false);
        this.scene.physics.add.collider(this.player, this.scene.blocks);
        this.player.chat = false;

    }



    jumpHuman(){
        JumpCount++
        Timer = 0
        this.player.setVelocityY(-800);

    }
    jumpCat(){
        JumpCount++
        Timer = 0
        this.player.setVelocityY(-600);

    }
    moveRightHuman(){
        this.player.setVelocityX(350);
        this.player.setFlipX(false);
    }
    moveRightCat(){
        this.player.setVelocityX(600);
        this.player.setFlipX(true);
    }
    moveLeftHuman(){
        this.player.setVelocityX(-350);
        this.player.setFlipX(true);
    }
    moveLeftCat(){
        this.player.setVelocityX(-600);
        this.player.setFlipX(true);
    }
    stopHuman(){
        this.player.setVelocityX(0);
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

        if (!keyQ.isDown || keyD.isDown){
            this.stopHuman()
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
            this.player.visible=false;
            this.player.setBounce(0,0);
            this.player.body.setSize(110,50);
            this.player.body.setMaxVelocityY(700);
            this.player.body.setMaxVelocityX(1300);
            this.player.setCollideWorldBounds(false);
            this.player.body.position.y = this.player.body.position.y + 70;
            this.player.chat = true;
            CatTimer - 50
        }
        else
        {
            this.player.setTexture('player');
            this.player.visible=true;
            this.player.setBounce(0, 0);
            this.player.body.setSize(100, 190);
            this.player.body.setMaxVelocityY(700);
            this.player.body.setMaxVelocityX(1300);
            this.player.setCollideWorldBounds(false);
            this.player.body.position.y = this.player.body.position.y - 70;
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



