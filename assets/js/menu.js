var timer;

var Menu = {
    preload: function () {
        this.load.image('buttonPlay', './assets/images/play-button.png');
        this.load.image('buttonPause', './assets/images/pause-button.png');
    },
    create: function () {
        this.playBtn = this.add.sprite(GameApp.CANVAS_WIDTH / 2, GameApp.CANVAS_HEIGHT / 2, 'buttonPlay').setInteractive();
        this.pauseBtn = this.add.sprite(GameApp.CANVAS_WIDTH / 2, GameApp.CANVAS_HEIGHT / 2 + 128, 'buttonPause').setInteractive();

        this.playBtn.on('pointerdown', function (event) {  startPopup();   });
            //timer = this.scene.time.addEvent({ delay: 5000, callback: closePopup, callbackScope: this});

        this.pauseBtn.on('pointerdown', function (event) {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.scene.cameras.main.setBackgroundColor('#' + randomColor);
        });
    }
}

function startPopup() {
    var alert = bootbox.alert('Popup');
    alert.show();
    setTimeout(function(){alert.modal('hide'); }, 4000);
}






