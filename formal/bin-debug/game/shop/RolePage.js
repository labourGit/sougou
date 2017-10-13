var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RolePage = (function (_super) {
    __extends(RolePage, _super);
    function RolePage(str) {
        var _this = _super.call(this) || this;
        _this._string = str;
        _this.teacher = new egret.Bitmap(RES.getRes("logo_role_png"));
        _this.addChild(_this.teacher);
        _this.teacher.x = 640;
        _this.teacher.y = 400;
        return _this;
    }
    RolePage.prototype.init = function () {
        var ta = egret.Tween.get(this.teacher).wait(600).to({ x: 400 }, 400, egret.Ease.sineInOut).call(this.show, this);
    };
    RolePage.prototype.show = function () {
        this.dialog = new egret.Bitmap(RES.getRes("dialog_last_png"));
        this.addChild(this.dialog);
        this.dialog.x = 20;
        this.dialog.y = 400;
        this.tip = new egret.TextField();
        this.tip.x = 100;
        this.tip.y = 470;
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
        this.addChild(this.teacher);
        TyperText.getInstance().typerEffect(this.tip, this._string, 20);
        // egret.setTimeout(this.bai,this,4000);
    };
    RolePage.prototype.bai = function () {
        var _this = this;
        this.removeChild(this.tip);
        this.removeChild(this.dialog);
        var ta = egret.Tween.get(this.teacher).to({ x: -400 }, 400, egret.Ease.sineInOut).call(function () {
            _this.parent.del();
        });
    };
    return RolePage;
}(egret.Sprite));
__reflect(RolePage.prototype, "RolePage");
//# sourceMappingURL=RolePage.js.map