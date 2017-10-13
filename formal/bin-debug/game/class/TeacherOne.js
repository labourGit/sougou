var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TeacherOne = (function (_super) {
    __extends(TeacherOne, _super);
    function TeacherOne() {
        var _this = _super.call(this) || this;
        _this.teacher = new egret.Bitmap(RES.getRes("teacher_1_png"));
        _this.addChild(_this.teacher);
        _this.teacher.x = -320;
        _this.teacher.y = Util.h - 350;
        _this.hand = new BitmapMovie();
        _this.hand.initByTile('teacher1_hand', 'png', 7);
        _this.hand.delay = 1000 / 10;
        _this.hand.x = -320;
        _this.hand.y = Util.h - 350;
        _this.addChild(_this.hand);
        return _this;
    }
    TeacherOne.prototype.init = function () {
        var ta = egret.Tween.get(this.hand).to({ x: 0 }, 400, egret.Ease.sineIn);
        var ta = egret.Tween.get(this.teacher).to({ x: 0 }, 400, egret.Ease.sineIn).call(this.hanani, this);
    };
    TeacherOne.prototype.hanani = function () {
        var ta = egret.Tween.get(this.hand).to({ y: this.hand.y - 10 }, 300).to({ y: this.hand.y }, 300).call(this.show, this);
    };
    TeacherOne.prototype.show = function () {
        this.hand.play(1);
        this.dialog = new egret.Bitmap(RES.getRes("dialog1_png"));
        this.addChild(this.dialog);
        this.dialog.x = 180;
        this.dialog.y = Util.h - 450;
        this.tip = new egret.TextField();
        this.tip.x = 250;
        this.tip.y = Util.h - 390;
        this.tip.size = 25;
        this.tip.textColor = 0x000000;
        this.tip.fontFamily = "fzdhjt";
        this.tip.width = 300;
        // this.tip.anchorOffsetX=this.tip.width/2;
        // this.tip.anchorOffsetY=this.tip.height/2;
        this.tip.textAlign = egret.HorizontalAlign.LEFT;
        // this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
        this.tip.text = "";
        this.addChild(this.tip);
        TyperText.getInstance().typerEffect(this.tip, "这个铃声！！上上次听到它是二十年前，不久后，健林完成了他的小目标！而上一次，是潘石屹，它拿下了人生的第一个10亿。这次...", 30);
        egret.setTimeout(this.next, this, 2000);
    };
    TeacherOne.prototype.next = function () {
        this.parent.roleShow();
    };
    return TeacherOne;
}(egret.Sprite));
__reflect(TeacherOne.prototype, "TeacherOne");
//# sourceMappingURL=TeacherOne.js.map