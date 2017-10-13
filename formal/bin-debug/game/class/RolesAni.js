var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RolesAni = (function (_super) {
    __extends(RolesAni, _super);
    function RolesAni() {
        var _this = _super.call(this) || this;
        // this.bg=new egret.Shape();
        // this.bg.graphics.beginFill(0xFFFFFF);
        // this.bg.graphics.drawRect(0,0,640,1050);
        // this.bg.graphics.endFill;
        // this.addChild(this.bg);
        _this.createView();
        return _this;
    }
    RolesAni.prototype.createView = function () {
        this.role1 = new egret.Bitmap(RES.getRes("role1_png"));
        this.addChild(this.role1);
        this.role1.x = -640;
        egret.Tween.get(this.role1).to({ x: 0 }, 350, egret.Ease.quadInOut);
        this.role2 = new egret.Bitmap(RES.getRes("role2_png"));
        this.addChild(this.role2);
        this.role2.x = 640;
        egret.Tween.get(this.role2).to({ x: 0 }, 350, egret.Ease.quadInOut);
        this.role3 = new egret.Bitmap(RES.getRes("role3_png"));
        this.addChild(this.role3);
        this.role3.x = -640;
        egret.Tween.get(this.role3).to({ x: 0 }, 350, egret.Ease.quadInOut).call(this.boomAni, this);
    };
    RolesAni.prototype.boomAni = function () {
        var _this = this;
        this.boom = new egret.Bitmap(RES.getRes("boom_png"));
        this.addChild(this.boom);
        this.boom.alpha = 0;
        this.boom.anchorOffsetX = this.boom.width / 2;
        this.boom.anchorOffsetY = this.boom.height / 2;
        this.boom.x = 250;
        this.boom.y = 500;
        this.boom.scaleX = 0.1;
        this.boom.scaleY = 0.1;
        egret.Tween.get(this.boom).wait(150).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 400, egret.Ease.elasticOut).wait(300).call(function () {
            _this.parent.rolesShow();
        });
    };
    return RolesAni;
}(egret.DisplayObjectContainer));
__reflect(RolesAni.prototype, "RolesAni");
//# sourceMappingURL=RolesAni.js.map