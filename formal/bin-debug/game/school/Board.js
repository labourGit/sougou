var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//学校牌子
var Board = (function (_super) {
    __extends(Board, _super);
    function Board() {
        var _this = _super.call(this) || this;
        _this.board = new egret.Bitmap(RES.getRes("board_png"));
        _this.board.anchorOffsetX = _this.board.width / 2;
        _this.board.anchorOffsetY = _this.board.height / 2;
        _this.board.x = 320;
        _this.board.y = Util.h - 200;
        _this.addChild(_this.board);
        _this.board.scaleX = 0.1;
        _this.board.scaleY = 0.1;
        _this.board.alpha = 0;
        var ani = egret.Tween.get(_this.board).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 800, egret.Ease.elasticInOut).call(_this.show, _this);
        //
        _this.tip = new egret.TextField();
        _this.tip.x = 385;
        _this.tip.y = Util.h - 200;
        _this.tip.size = 55;
        _this.tip.textColor = 0x000000;
        _this.tip.fontFamily = "fzdhjt";
        _this.tip.width = _this.board.width;
        _this.tip.height = _this.board.height;
        _this.tip.anchorOffsetX = _this.tip.width / 2;
        _this.tip.anchorOffsetY = _this.tip.height / 2;
        _this.tip.textAlign = egret.HorizontalAlign.LEFT;
        _this.tip.verticalAlign = egret.VerticalAlign.MIDDLE;
        _this.tip.text = "";
        _this.addChild(_this.tip);
        return _this;
    }
    Board.prototype.show = function () {
        TyperText.getInstance().typerEffect(this.tip, "搜狗商学院", 200);
    };
    Board.prototype.del = function () {
        this.removeChild(this.tip);
        this.removeChild(this.board);
    };
    return Board;
}(egret.Sprite));
__reflect(Board.prototype, "Board");
//# sourceMappingURL=Board.js.map