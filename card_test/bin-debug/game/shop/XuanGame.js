var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var XuanGame = (function (_super) {
    __extends(XuanGame, _super);
    function XuanGame() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    XuanGame.prototype.createView = function () {
        Util.choiceScore = 0;
        this.hero = new Hero2();
        this.addChild(this.hero);
        this.hero.init();
        this.xuan = new Xuan();
        this.addChild(this.xuan);
    };
    XuanGame.prototype.restart = function () {
        this.parent.reset_xuan();
    };
    return XuanGame;
}(egret.DisplayObjectContainer));
__reflect(XuanGame.prototype, "XuanGame");
//# sourceMappingURL=XuanGame.js.map