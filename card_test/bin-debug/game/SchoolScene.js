var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SchoolScene = (function (_super) {
    __extends(SchoolScene, _super);
    function SchoolScene() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    SchoolScene.prototype.createView = function () {
        this.schoolBg = new egret.Bitmap(RES.getRes("schoolBg_jpg"));
        this.addChild(this.schoolBg);
        var cloud1 = new egret.Bitmap(RES.getRes("cloud_png"));
        this.addChild(cloud1);
        cloud1.y = 200;
        cloud1.x = -100;
        var ani1 = egret.Tween.get(cloud1, { loop: true }).to({ x: -900 }, 30000).to({ x: 900 }, 20).to({ x: -100 }, 30000);
        var cloud2 = new egret.Bitmap(RES.getRes("cloud_png"));
        this.addChild(cloud2);
        cloud2.y = 200;
        cloud2.x = 900;
        var ani1 = egret.Tween.get(cloud2, { loop: true }).to({ x: -900 }, 60000);
        this.school = new egret.Bitmap(RES.getRes("school_png"));
        this.addChild(this.school);
    };
    return SchoolScene;
}(egret.Sprite));
__reflect(SchoolScene.prototype, "SchoolScene");
//# sourceMappingURL=SchoolScene.js.map