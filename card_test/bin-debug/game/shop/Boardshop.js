var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//选店
var Boardshop = (function (_super) {
    __extends(Boardshop, _super);
    function Boardshop() {
        var _this = _super.call(this) || this;
        _this.board = new egret.Bitmap(RES.getRes("board1_png"));
        _this.board.anchorOffsetX = _this.board.width / 2;
        _this.board.anchorOffsetY = _this.board.height / 2;
        _this.board.x = 320;
        _this.board.y = 100;
        _this.addChild(_this.board);
        _this.board.scaleX = 0.1;
        _this.board.scaleY = 0.1;
        _this.board.alpha = 0;
        var ani = egret.Tween.get(_this.board).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 800, egret.Ease.elasticInOut).call(_this.show, _this);
        return _this;
        //
    }
    Boardshop.prototype.show = function () {
        this.tip = new egret.TextField();
        this.tip.x = 320;
        this.tip.y = 100;
        this.tip.size = 35;
        this.tip.textColor = 0x000000;
        this.tip.fontFamily = "fzdhjt";
        this.tip.width = this.board.width;
        this.tip.height = this.board.height;
        this.tip.anchorOffsetX = this.tip.width / 2;
        this.tip.anchorOffsetY = this.tip.height / 2;
        this.tip.textAlign = egret.HorizontalAlign.CENTER;
        this.tip.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.tip.text = "请选择下面一家商铺";
        this.addChild(this.tip);
        // TyperText.getInstance().typerEffect(this.tip,"",100);
    };
    Boardshop.prototype.del = function () {
        this.removeChild(this.tip);
        this.removeChild(this.board);
    };
    return Boardshop;
}(egret.Sprite));
__reflect(Boardshop.prototype, "Boardshop");
//# sourceMappingURL=Boardshop.js.map