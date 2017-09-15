
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/experimental/experimental.js",
	"libs/modules/tween/tween.js",
	"polyfill/promise.js",
	"bin-debug/init/PageManager.js",
	"bin-debug/BitmapMovie.js",
	"bin-debug/game/Board.js",
	"bin-debug/game/Game.js",
	"bin-debug/game/SchoolScene.js",
	"bin-debug/game/TeacherOne.js",
	"bin-debug/init/ActionSheet.js",
	"bin-debug/init/AlphaYoYo.js",
	"bin-debug/init/ArrowManager.js",
	"bin-debug/init/AssetAdapter.js",
	"bin-debug/init/BarragePlayer.js",
	"bin-debug/init/CrossdomainLib.js",
	"bin-debug/init/CubicBezier.js",
	"bin-debug/init/EnterFrameCall.js",
	"bin-debug/init/ImageDrawTool.js",
	"bin-debug/init/import.js",
	"bin-debug/init/IPage.js",
	"bin-debug/init/MoveYoYo.js",
	"bin-debug/init/MovieclipController.js",
	"bin-debug/init/ObjectPool.js",
	"bin-debug/CutImgTool.js",
	"bin-debug/init/ScaleYoYo.js",
	"bin-debug/init/SimpleAlert.js",
	"bin-debug/init/SimpleLoading.js",
	"bin-debug/init/Toast.js",
	"bin-debug/init/UploadImageTool.js",
	"bin-debug/init/VirtualLoadingCall.js",
	"bin-debug/init/XYAPI.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/ShakeTool.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/TyperText.js",
	"bin-debug/Util.js",
	"bin-debug/util/ConfigVO.js",
	"bin-debug/util/FriendData.js",
	"bin-debug/util/GameConfig.js",
	"bin-debug/util/Global.js",
	"bin-debug/util/PlayerVO.js",
	"bin-debug/util/TimeChuo.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "fixedWidth",
		contentWidth: 640,
		contentHeight: 1050,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};