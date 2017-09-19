var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Roles = (function (_super) {
    __extends(Roles, _super);
    function Roles() {
        var _this = _super.call(this) || this;
        _this.roleRight = new egret.Bitmap(RES.getRes("roleRight_png"));
        _this.roleRight.alpha = 0;
        _this.roleRight.x = 200;
        _this.roleRight.y = 320;
        _this.addChild(_this.roleRight);
        return _this;
    }
    Roles.prototype.init = function () {
        var _this = this;
        this.dialog_roleRight = new egret.Bitmap(RES.getRes("dialog_roleRight_png"));
        this.dialog_roleRight.alpha = 0;
        this.dialog_roleRight.x = 150;
        this.dialog_roleRight.y = 450;
        this.addChild(this.dialog_roleRight);
        this.text_roleRight = new egret.TextField();
        this.text_roleRight.x = 200;
        this.text_roleRight.y = 510;
        this.text_roleRight.size = 25;
        this.text_roleRight.textColor = 0x000000;
        this.text_roleRight.fontFamily = "fzdhjt";
        this.text_roleRight.width = 200;
        this.text_roleRight.textAlign = egret.HorizontalAlign.LEFT;
        this.text_roleRight.text = "";
        this.addChild(this.text_roleRight);
        var ani1 = egret.Tween.get(this.roleRight).to({ alpha: 1, x: 400 }, 600, egret.Ease.sineInOut).call(function () {
            TyperText.getInstance().typerEffect(_this.text_roleRight, "来大干一场啊！！", 100);
            var ta = egret.Tween.get(_this.dialog_roleRight).to({ alpha: 1 }, 10).wait(1000).call(_this.left_show, _this);
        });
    };
    Roles.prototype.left_show = function () {
        var _this = this;
        this.dialog_roleRight.alpha = 0;
        this.text_roleRight.alpha = 0;
        this.roleLeft = new egret.Bitmap(RES.getRes("roleLeft_png"));
        this.roleLeft.x = 200;
        this.roleLeft.y = 370;
        this.roleLeft.alpha = 0;
        this.addChild(this.roleLeft);
        this.dialog_roleLeft = new egret.Bitmap(RES.getRes("dialog_roleLeft_png"));
        this.dialog_roleLeft.alpha = 0;
        this.dialog_roleLeft.x = 200;
        this.dialog_roleLeft.y = 450;
        this.addChild(this.dialog_roleLeft);
        this.text_roleLeft = new egret.TextField();
        this.text_roleLeft.x = 250;
        this.text_roleLeft.y = 510;
        this.text_roleLeft.size = 25;
        this.text_roleLeft.textColor = 0x000000;
        this.text_roleLeft.fontFamily = "fzdhjt";
        this.text_roleLeft.width = 200;
        this.text_roleLeft.textAlign = egret.HorizontalAlign.LEFT;
        this.text_roleLeft.text = "";
        this.addChild(this.text_roleLeft);
        var ani2 = egret.Tween.get(this.roleLeft).to({ alpha: 1, x: -100 }, 600, egret.Ease.sineInOut).call(function () {
            var ta = egret.Tween.get(_this.dialog_roleLeft).to({ alpha: 1 }, 10).wait(1000).call(_this.role_show, _this);
            TyperText.getInstance().typerEffect(_this.text_roleLeft, "切，又是碾压局！", 100);
        });
    };
    Roles.prototype.role_show = function () {
        var _this = this;
        this.dialog_roleLeft.alpha = 0;
        this.text_roleLeft.alpha = 0;
        this.role = new egret.Bitmap(RES.getRes("role_png"));
        this.role.alpha = 0;
        this.role.x = 50;
        this.role.y = 370;
        this.addChild(this.role);
        this.dialog_role = new egret.Bitmap(RES.getRes("dialog_role_png"));
        this.dialog_role.alpha = 0;
        this.dialog_role.x = 300;
        this.dialog_role.y = 650;
        this.addChild(this.dialog_role);
        this.text_role = new egret.TextField();
        this.text_role.x = 370;
        this.text_role.y = 740;
        this.text_role.size = 30;
        this.text_role.textColor = 0x000000;
        this.text_role.fontFamily = "fzdhjt";
        this.text_role.width = 200;
        this.text_role.textAlign = egret.HorizontalAlign.LEFT;
        this.text_role.text = "";
        this.addChild(this.text_role);
        var ani2 = egret.Tween.get(this.role).to({ alpha: 1, y: 300 }, 600, egret.Ease.sineInOut).call(function () {
            var ta = egret.Tween.get(_this.dialog_role).to({ alpha: 1 }, 10).wait(500).call(_this.over, _this);
            TyperText.getInstance().typerEffect(_this.text_role, "冠军是我的！", 100);
        });
    };
    Roles.prototype.over = function () {
        var _this = this;
        this.dialog_role.alpha = 0;
        this.text_role.alpha = 0;
        var ani1 = egret.Tween.get(this.roleRight).to({ x: 800 }, 300, egret.Ease.sineInOut);
        var ani2 = egret.Tween.get(this.roleLeft).to({ x: -640 }, 300, egret.Ease.sineInOut);
        var ani3 = egret.Tween.get(this.role).to({ y: 2000 }, 300, egret.Ease.sineInOut);
        var tb = egret.Tween.get(this.parent.line).to({ scaleY: 2.5 }, 800, egret.Ease.sineInOut);
        var ta = egret.Tween.get(this.parent.maskBg).to({ scaleY: 2.5 }, 800, egret.Ease.sineInOut).call(function () {
            _this.parent.del();
        });
    };
    return Roles;
}(egret.DisplayObjectContainer));
__reflect(Roles.prototype, "Roles");
//# sourceMappingURL=Roles.js.map