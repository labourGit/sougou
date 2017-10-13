var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TeacherTwo = (function (_super) {
    __extends(TeacherTwo, _super);
    function TeacherTwo() {
        var _this = _super.call(this) || this;
        _this.teacher = new egret.Bitmap(RES.getRes("teacher_1_png"));
        _this.addChild(_this.teacher);
        _this.teacher.x = -320;
        _this.teacher.y = 350;
        _this.hand = new BitmapMovie();
        _this.hand.initByTile('teacher1_hand', 'png', 7);
        _this.hand.delay = 1000 / 10;
        _this.hand.x = -320;
        _this.hand.y = 350;
        _this.addChild(_this.hand);
        return _this;
    }
    TeacherTwo.prototype.init = function () {
        var ta = egret.Tween.get(this.hand).to({ x: 0 }, 400, egret.Ease.sineIn);
        var ta = egret.Tween.get(this.teacher).to({ x: 0 }, 400, egret.Ease.sineIn).call(this.hanani, this);
    };
    TeacherTwo.prototype.hanani = function () {
        var ta = egret.Tween.get(this.hand).to({ y: this.hand.y - 10 }, 300).to({ y: this.hand.y }, 300).call(this.show, this);
    };
    TeacherTwo.prototype.show = function () {
        this.hand.play(1);
        this.dialog = new egret.Bitmap(RES.getRes("dialog1_png"));
        this.addChild(this.dialog);
        this.dialog.x = 230;
        this.dialog.y = 350;
        this.tip = new egret.TextField();
        this.tip.x = 300;
        this.tip.y = 400;
        this.tip.size = 22;
        this.tip.textColor = 0x000000;
        this.tip.fontFamily = "fzdhjt";
        this.tip.width = 300;
        // this.tip.anchorOffsetX=this.tip.width/2;
        // this.tip.anchorOffsetY=this.tip.height/2;
        this.tip.textAlign = egret.HorizontalAlign.LEFT;
        // this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
        this.tip.textFlow = [
            { text: "这个铃声！！上上次听到它是二十年前，不久后，健林完成了他的小目标！而上一次，是潘石屹，它拿下了人生的第一个10亿。\n" },
            { text: "5年后，你有可能成为下一个神话吗？苦思冥想不如试试！" }
        ];
        this.addChild(this.tip);
        // TyperText.getInstance().typerEffect(this.tip,"这个铃声！！上上次听到它是二十年前，不久后，健林完成了他的小目标！而上一次，是潘石屹，它拿下了人生的第一个10亿。5年后，你有可能成为下一个神话吗？苦思冥想不如试试！",15);
        egret.setTimeout(this.bai, this, 100);
    };
    TeacherTwo.prototype.bai = function () {
        var _this = this;
        this.btn = new egret.Bitmap(RES.getRes("changeBtn_png"));
        this.addChild(this.btn);
        this.btn.anchorOffsetX = this.btn.width / 2;
        this.btn.anchorOffsetY = this.btn.height / 2;
        this.btn.x = 170;
        this.btn.y = 600;
        this.btn.touchEnabled = true;
        this.btn.alpha = 0;
        this.btn.scaleX = 0.1;
        this.btn.scaleY = 0.1;
        egret.Tween.get(this.btn).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 450, egret.Ease.backOut);
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var _sound = RES.getRes("qie_mp3");
            _sound.play(0, 1);
            _this.removeChild(_this.tip);
            _this.removeChild(_this.dialog);
            _this.removeChild(_this.btn);
            _this.parent.maskAni();
        }, this);
        // (<ClassRoom>this.parent).shakeBg();
        // (<ClassRoom>this.parent).rolesShow();
        // (<ClassRoom>this.parent).delAni();
    };
    return TeacherTwo;
}(egret.Sprite));
__reflect(TeacherTwo.prototype, "TeacherTwo");
//# sourceMappingURL=TeacherTwo.js.map