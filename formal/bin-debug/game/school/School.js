var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var School = (function (_super) {
    __extends(School, _super);
    function School() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    School.prototype.createView = function () {
        //学校-牌子-打铃
        this.schoolScene = new SchoolScene();
        this.addChild(this.schoolScene);
        this.schoolScene.anchorOffsetX = 320;
        this.schoolScene.anchorOffsetY = 525;
        this.schoolScene.x = 320;
        this.schoolScene.y = 525;
        this.ring = new egret.Bitmap(RES.getRes("ring_png"));
        this.addChild(this.ring);
        this.ring.alpha = 0;
        //    var board:Board=new Board();
        //    this.addChild(board);
        //    egret.setTimeout(function(){
        //         board.del(); 
        //    },this,2000);
        egret.setTimeout(function () {
            var ani = egret.Tween.get(this.ring).to({ alpha: 1 }, 100).wait(1000).to({ alpha: 0 }, 10).call(this.secScene, this);
            ShakeTool.getInstance().shakeObj(this.schoolScene, 1, 20, 5);
        }, this, 500);
    };
    School.prototype.secScene = function () {
        egret.Tween.get(this.schoolScene).to({ scaleX: 2.5, scaleY: 2.5, alpha: 0 }, 500, egret.Ease.quadIn);
        console.log("33");
        this.parent.reScene();
    };
    School.prototype.secScene1 = function () {
        //老师表情
        this.teacher = new TeacherOne();
        this.addChild(this.teacher);
        this.teacher.init();
    };
    School.prototype.del = function () {
        var _this = this;
        var ta = egret.Tween.get(this.teacher).to({ x: -320 }, 400, egret.Ease.sineInOut).call(function () {
            _this.parent.reScene();
            _this.parent.del_school();
        });
    };
    return School;
}(egret.DisplayObjectContainer));
__reflect(School.prototype, "School");
//# sourceMappingURL=School.js.map