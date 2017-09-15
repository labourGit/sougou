var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ArrowManager = (function () {
    function ArrowManager() {
        this.mImage = newBitmap_XY('arrow_down2_png');
    }
    ArrowManager.show = function () {
        ArrowManager.init();
        ArrowManager._ins.show();
    };
    ArrowManager.setLocToRight = function () {
        ArrowManager.init();
        ArrowManager._ins.setLocToRight();
    };
    ArrowManager.hide = function () {
        ArrowManager.init();
        ArrowManager._ins.hide();
    };
    ArrowManager.init = function () {
        if (!ArrowManager._ins) {
            ArrowManager._ins = new ArrowManager();
        }
    };
    ArrowManager.prototype.show = function () {
        Global.stage.addChild(this.mImage);
        this.mImage.x = (640 - this.mImage.width) / 2;
        var locY = 1050 - 40 - this.mImage.height;
        this.mImage.y = locY;
        Tween$.get(this.mImage, { loop: true })
            .to({ y: locY + 20 }, 500)
            .to({ y: locY }, 500);
    };
    ArrowManager.prototype.setLocToRight = function () {
        this.mImage.x = 640 - this.mImage.width - 100;
    };
    ArrowManager.prototype.hide = function () {
        remove_XY(this.mImage);
        Tween$.removeTweens(this.mImage);
    };
    return ArrowManager;
}());
__reflect(ArrowManager.prototype, "ArrowManager");
//# sourceMappingURL=ArrowManager.js.map