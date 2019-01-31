var GameApp = GameApp || {};
GameApp.USE_DEVICE_PIXEL_RATIO = false; // here you can change to use or not the device pixel ratio - it is not supported by all browsers

if (GameApp.USE_DEVICE_PIXEL_RATIO) {
    GameApp.DEVICE_PIXEL_RATIO = window.devicePixelRatio;
    GameApp.CANVAS_WIDTH = window.innerWidth * GameApp.DEVICE_PIXEL_RATIO;
    GameApp.CANVAS_HEIGHT = window.innerHeight * GameApp.DEVICE_PIXEL_RATIO;
} else {
    GameApp.DEVICE_PIXEL_RATIO = 1.0;
    GameApp.CANVAS_WIDTH = window.innerWidth * GameApp.DEVICE_PIXEL_RATIO;
    GameApp.CANVAS_HEIGHT = window.innerHeight * GameApp.DEVICE_PIXEL_RATIO;
}

GameApp.ASPECT_RATIO = GameApp.CANVAS_WIDTH / GameApp.CANVAS_HEIGHT;
GameApp.ASPECT_RATIO_ROUND = Math.round(GameApp.ASPECT_RATIO);

if (GameApp.ASPECT_RATIO > 1) {
    GameApp.SCALE_RATIO = GameApp.CANVAS_HEIGHT / GameApp.CANVAS_WIDTH;
} else {
    GameApp.SCALE_RATIO = GameApp.CANVAS_WIDTH / GameApp.CANVAS_WIDTH;
}

var game = new Phaser.Game(GameApp.CANVAS_WIDTH, GameApp.CANVAS_HEIGHT, Phaser.AUTO);

game.scene.add('Menu', Menu);
game.scene.start('Menu');

// game.state.add("Menu", new GameApp.BootState());
// // ... your other states
// game.state.start("Menu", true, false);

