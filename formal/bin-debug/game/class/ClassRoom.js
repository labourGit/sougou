var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ClassRoom = (function (_super) {
    __extends(ClassRoom, _super);
    function ClassRoom() {
        var _this = _super.call(this) || this;
        _this.classbg = new egret.Bitmap(RES.getRes("classBg_jpg"));
        _this.addChild(_this.classbg);
        _this.classbg.anchorOffsetX = 320;
        _this.classbg.anchorOffsetY = 525;
        _this.classbg.x = 320;
        _this.classbg.y = 525;
        _this.classbg.scaleX = 0.2;
        _this.classbg.scaleY = 0.2;
        _this.classbg.alpha = 0;
        var ani = egret.Tween.get(_this.classbg).wait(100).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 500, egret.Ease.quadIn).wait(400).call(_this.teacherAni, _this);
        return _this;
    }
    ClassRoom.prototype.shakeBg = function () {
        ShakeTool.getInstance().shakeObj(this.classbg, 0.5, 10, 5);
    };
    ClassRoom.prototype.rolesShow = function () {
        this.bg = new egret.Bitmap(RES.getRes("loading_bg_jpg"));
        this.addChild(this.bg);
        this.maskBg = new egret.Shape();
        this.maskBg.graphics.beginFill(0x000000);
        this.maskBg.graphics.drawRect(0, 0, 640, 520);
        this.maskBg.graphics.endFill;
        this.maskBg.anchorOffsetY = 260;
        this.maskBg.scaleY = 0;
        this.maskBg.y = 600;
        this.bg.mask = this.maskBg;
        this.addChild(this.maskBg);
        this.line = new egret.Bitmap(RES.getRes("line_png"));
        this.line.anchorOffsetY = 267;
        this.line.scaleY = 0;
        this.line.y = 600;
        this.addChild(this.line);
        var tb = egret.Tween.get(this.line).to({ scaleY: 1 }, 400);
        var ta = egret.Tween.get(this.maskBg).to({ scaleY: 1 }, 400).call(this.rolesAni, this);
    };
    ClassRoom.prototype.teacherAni = function () {
        this.teacher = new TeacherTwo();
        this.addChild(this.teacher);
        this.teacher.init();
    };
    ClassRoom.prototype.delAni = function () {
        this.removeChild(this.teacher);
    };
    ClassRoom.prototype.rolesAni = function () {
        this.roles = new Roles();
        this.addChild(this.roles);
        this.maskRoles = new egret.Shape();
        this.maskRoles.graphics.beginFill(0x000000);
        this.maskRoles.graphics.drawRect(0, 0, 640, 850);
        this.maskRoles.graphics.endFill;
        this.addChild(this.maskRoles);
        this.roles.mask = this.maskRoles;
        this.roles.init();
    };
    ClassRoom.prototype.del = function () {
        this.parent.shopScene();
        this.parent.del_class();
    };
    return ClassRoom;
}(egret.DisplayObjectContainer));
__reflect(ClassRoom.prototype, "ClassRoom");
//# sourceMappingURL=ClassRoom.js.map