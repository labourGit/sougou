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
        _this.teacher.y = Util.h - 400;
        _this.hand = new BitmapMovie();
        _this.hand.initByTile('teacher1_hand', 'png', 7);
        _this.hand.delay = 1000 / 10;
        _this.hand.x = -320;
        _this.hand.y = Util.h - 400;
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
        this.dialog.y = Util.h - 450;
        this.tip = new egret.TextField();
        this.tip.x = 300;
        this.tip.y = Util.h - 370;
        this.tip.size = 35;
        this.tip.textColor = 0x000000;
        this.tip.fontFamily = "fzdhjt";
        this.tip.width = 300;
        // this.tip.anchorOffsetX=this.tip.width/2;
        // this.tip.anchorOffsetY=this.tip.height/2;
        this.tip.textAlign = egret.HorizontalAlign.LEFT;
        // this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
        this.tip.text = "";
        this.addChild(this.tip);
        TyperText.getInstance().typerEffect(this.tip, "争夺商学院最高荣誉，就看你了！！", 100);
        egret.setTimeout(this.bai, this, 2500);
    };
    TeacherTwo.prototype.bai = function () {
        // (<ClassRoom>this.parent).shakeBg();
        this.parent.rolesShow();
        this.parent.delAni();
    };
    return TeacherTwo;
}(egret.Sprite));
__reflect(TeacherTwo.prototype, "TeacherTwo");
//# sourceMappingURL=TeacherTwo.js.map