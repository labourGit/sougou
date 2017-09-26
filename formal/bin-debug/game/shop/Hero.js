var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
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
    Hero.prototype.init = function () {
        var ta = egret.Tween.get(this.teacher).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 400, egret.Ease.backInOut).call(this.show, this);
    };
    Hero.prototype.show = function () {
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
        TyperText.getInstance().typerEffect(this.tip, "规则Tips：将同类词两两配对（如苹果—香蕉），配对成功即可形成推广词组，招徕顾客。配对的时间越少奖励越多！", 50);
    };
    Hero.prototype.bai = function () {
        var _this = this;
        this.removeChild(this.tip);
        this.removeChild(this.dialog);
        var ta = egret.Tween.get(this.teacher).to({ x: -400 }, 400, egret.Ease.sineInOut).call(function () {
            _this.parent.del();
        });
    };
    return Hero;
}(egret.Sprite));
__reflect(Hero.prototype, "Hero");
//# sourceMappingURL=Hero.js.map