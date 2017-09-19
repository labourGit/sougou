var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Card = (function (_super) {
    __extends(Card, _super);
    function Card(id, str, n) {
        var _this = _super.call(this) || this;
        _this.id_word = id;
        var string = str;
        _this.id = n;
        _this.is_back = true;
        _this.face = new Face_card(string);
        _this.face.anchorOffsetX = 64;
        _this.addChild(_this.face);
        _this.face.scaleX = 0;
        _this.back = new egret.Bitmap(RES.getRes("card_back_png"));
        _this.addChild(_this.back);
        _this.back.anchorOffsetX = 64;
        return _this;
    }
    Card.prototype.turn_ani = function () {
        var _this = this;
        if (this.is_back) {
            this.is_back = false;
            egret.Tween.get(this.back).to({ scaleX: 0 }, 80, egret.Ease.backIn).call(function () {
                egret.Tween.get(_this.face).to({ scaleX: 1 }, 80, egret.Ease.backOut);
            });
        }
        else {
            this.is_back = true;
            egret.Tween.get(this.face).to({ scaleX: 0 }, 80, egret.Ease.backIn).call(function () {
                egret.Tween.get(_this.back).to({ scaleX: 1 }, 80, egret.Ease.backOut);
            });
        }
    };
    return Card;
}(egret.DisplayObjectContainer));
__reflect(Card.prototype, "Card");
var Face_card = (function (_super) {
    __extends(Face_card, _super);
    function Face_card(str) {
        var _this = _super.call(this) || this;
        var face = new egret.Bitmap(RES.getRes("card_face_png"));
        _this.addChild(face);
        _this.tip = new egret.TextField();
        _this.tip.size = 30;
        _this.tip.textColor = 0x000000;
        _this.tip.fontFamily = "fzdhjt";
        _this.tip.width = 128;
        _this.tip.height = 180;
        _this.tip.textAlign = egret.HorizontalAlign.CENTER;
        _this.tip.verticalAlign = egret.VerticalAlign.MIDDLE;
        _this.tip.text = str;
        _this.addChild(_this.tip);
        return _this;
    }
    return Face_card;
}(egret.Sprite));
__reflect(Face_card.prototype, "Face_card");
//# sourceMappingURL=Card.js.map