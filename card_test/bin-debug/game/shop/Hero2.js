var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Hero2 = (function (_super) {
    __extends(Hero2, _super);
    function Hero2() {
        var _this = _super.call(this) || this;
        _this.teacher = new egret.Bitmap(RES.getRes("sg_hero_png"));
        _this.addChild(_this.teacher);
        _this.teacher.anchorOffsetX = _this.teacher.width / 2;
        _this.teacher.anchorOffsetY = _this.teacher.height / 2;
        _this.teacher.scaleX = 0.1;
        _this.teacher.scaleY = 0.1;
        _this.teacher.x = 500;
        _this.teacher.y = Util.h - 150;
        _this.teacher.alpha = 0;
        return _this;
    }
    Hero2.prototype.init = function () {
        var ta = egret.Tween.get(this.teacher).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 400, egret.Ease.backInOut).call(this.show, this);
    };
    Hero2.prototype.show = function () {
        this.dialog = new egret.Bitmap(RES.getRes("dialog1_hero_png"));
        this.addChild(this.dialog);
        this.dialog.x = 5;
        this.dialog.y = Util.h - 330;
        this.tip = new egret.TextField();
        this.tip.x = 80;
        this.tip.y = Util.h - 280;
        this.tip.size = 25;
        this.tip.textColor = 0x000000;
        this.tip.fontFamily = "fzdhjt";
        this.tip.width = 250;
        // this.tip.anchorOffsetX=this.tip.width/2;
        // this.tip.anchorOffsetY=this.tip.height/2;
        this.tip.textAlign = egret.HorizontalAlign.LEFT;
        // this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
        this.tip.text = "";
        this.addChild(this.tip);
        TyperText.getInstance().typerEffect(this.tip, "规则Tips：下列选项中，请选择他她它可能最喜欢的广告内容，与其他竞争者进行PK，选择的内容越多人喜欢获得的分数越高", 50);
    };
    Hero2.prototype.bai = function () {
        this.removeChild(this.tip);
        this.removeChild(this.dialog);
        var ta = egret.Tween.get(this.teacher).to({ x: -400 }, 400, egret.Ease.sineInOut).call(function () {
            // (<Shop>this.parent).del();
        });
    };
    return Hero2;
}(egret.Sprite));
__reflect(Hero2.prototype, "Hero2");
//# sourceMappingURL=Hero2.js.map