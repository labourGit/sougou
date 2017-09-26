var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Role_fail = (function (_super) {
    __extends(Role_fail, _super);
    function Role_fail() {
        var _this = _super.call(this) || this;
        _this.role = new egret.Bitmap(RES.getRes("role_fail_png"));
        _this.role.y = Util.h - 255;
        _this.role.x = 640;
        _this.addChild(_this.role);
        var ta = egret.Tween.get(_this.role).to({ x: 370 }, 600, egret.Ease.sineIn).wait(300).call(_this.show, _this);
        return _this;
    }
    Role_fail.prototype.show = function () {
        var _this = this;
        this.dog = new egret.Bitmap(RES.getRes("dog_png"));
        this.addChild(this.dog);
        this.dog.anchorOffsetX = this.dog.width / 2;
        this.dog.anchorOffsetY = this.dog.height / 2;
        this.dog.x = 320;
        this.dog.y = 500;
        this.dog.rotation = 0;
        this.dog.scaleX = 0.1;
        this.dog.scaleY = 0.1;
        this.glass = new egret.Bitmap(RES.getRes("glass_png"));
        this.glass.alpha = 0;
        this.addChild(this.glass);
        var ta = egret.Tween.get(this.dog).to({ scaleX: 1, scaleY: 1, rotation: 360 }, 600).call(function () {
            _this.glass.alpha = 1;
            var tb = egret.Tween.get(_this.dog).wait(400).to({ y: 1500 }, 1200, egret.Ease.sineOut).call(function () {
                _this.removeChild(_this.glass);
                var ta = egret.Tween.get(_this.role).to({ x: 640 }, 600, egret.Ease.sineOut).call(function () {
                    _this.parent.btnPage();
                });
            });
        });
    };
    return Role_fail;
}(egret.DisplayObjectContainer));
__reflect(Role_fail.prototype, "Role_fail");
//# sourceMappingURL=Role_fail.js.map