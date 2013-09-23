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

    var loading = tm.app.LoadingScene({
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        assets: ASSETS,
        nextScene: MainScene,
    });
    app.replaceScene(loading);

    app.run();//実行
});

var MainScene = tm.createClass({
    superClass : tm.app.Scene,
    teku: null,
    num: null,
    init : function () {
        this.superInit();
        this.teku = new Teku();
        this.addChild(this.teku);
        this.num = 0;

        self = this;
        this.teku.onpointingstart = function () {
            self.num++;
            console.log(self.num);
        };
    }
});

var Teku = tm.createClass({
    superClass : tm.app.Sprite,
    init : function () {
        this.superInit("tekunyan", 300, 300);
        this.setInteractive(true);
        this.setPosition(SCREEN_CENTER_X, SCREEN_CENTER_Y);
    },
    onpointingover : function () {
        this.setSize(this.width * 1.1, this.height * 1.1);
    },
    onpointingout : function () {
        this.setSize(this.width / 1.1, this.height / 1.1);
    },
});

