var timer;

var Menu = {
    preload: function () {
        this.load.image('buttonPlay', './assets/images/play-button.png');
        this.load.image('buttonPause', './assets/images/pause-button.png');
    },
    create: function () {
        this.playBtn = this.add.sprite(GameApp.CANVAS_WIDTH / 2, GameApp.CANVAS_HEIGHT / 2, 'buttonPlay').setInteractive();
        this.pauseBtn = this.add.sprite(GameApp.CANVAS_WIDTH / 2, GameApp.CANVAS_HEIGHT / 2 + 128, 'buttonPause').setInteractive();

        this.playBtn.on('pointerdown', function (event) {\
            showPopup()
            timer = this.scene.time.addEvent({ delay: 5000, callback: closePopup, callbackScope: this});
        });
        this.pauseBtn.on('pointerdown', function (event) {
            //this.scene.background = red;
        });
    }
}

function showPopup() {
    alert('text');
}
function closePopup() {

}






