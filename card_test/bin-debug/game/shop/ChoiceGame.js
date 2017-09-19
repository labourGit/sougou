var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ChoiceGame = (function (_super) {
    __extends(ChoiceGame, _super);
    function ChoiceGame() {
        var _this = _super.call(this) || this;
        _this.bg = new egret.Bitmap(RES.getRes("loading_bg_jpg"));
        _this.addChild(_this.bg);
        _this.content = new egret.Bitmap(RES.getRes("content_png"));
        _this.addChild(_this.content);
        return _this;
    }
    ChoiceGame.prototype.init = function () {
        this.shop = new Shop();
        this.addChild(this.shop);
        this.shop.init();
    };
    ChoiceGame.prototype.del_shop = function () {
        this.removeChild(this.shop);
        this.cardGame = new CardGame();
        this.addChild(this.cardGame);
    };
    return ChoiceGame;
}(egret.DisplayObjectContainer));
__reflect(ChoiceGame.prototype, "ChoiceGame");
//# sourceMappingURL=ChoiceGame.js.map