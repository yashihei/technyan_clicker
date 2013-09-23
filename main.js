/*
 * TechnyanClicker
 */
var SCREEN_WIDTH    = 640;
var SCREEN_HEIGHT   = 480;
var SCREEN_CENTER_X = SCREEN_WIDTH/2;
var SCREEN_CENTER_Y = SCREEN_HEIGHT/2;

var ASSETS = {
    "tekunyan" : "tekunyan.png",
};

tm.main(function() {
    // アプリケーション作成
    var app = tm.app.CanvasApp("#world");
    app.resize(SCREEN_WIDTH, SCREEN_HEIGHT); // リサイズ
    app.fitWindow();    // 自動フィット
    // app.enableStats();
    tm.asset.AssetManager.load(ASSETS);

    var scene = app.currentScene;

    var teku = Teku();
    var p = app.pointing;

    scene.update = function() {
    };

    scene.addChild(teku);
    app.run();//実行
});

tm.define("Teku", {
    superClass : "tm.app.Shape",
    init : function () {
        this.superInit(300, 300);
        this.setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y);
        this.canvas.clearColor("hsl({0}, {1}%, 70%)".format(0, 0));
    },
});