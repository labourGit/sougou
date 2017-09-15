var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    Game.prototype.createView = function () {
        //学校-牌子-打铃
        this.schoolScene = new SchoolScene();
        this.addChild(this.schoolScene);
        this.ring = new egret.Bitmap(RES.getRes("ring_png"));
        this.addChild(this.ring);
        this.ring.alpha = 0;
        var board = new Board();
        this.addChild(board);
        egret.setTimeout(function () {
            board.del();
        }, this, 2000);
        egret.setTimeout(function () {
            var ani = egret.Tween.get(this.ring).to({ alpha: 1 }, 100).wait(1900).to({ alpha: 0 }, 10).call(this.secScene, this);
            ShakeTool.getInstance().shakeObj(this.schoolScene, 2, 20, 5);
        }, this, 2500);
    };
    Game.prototype.secScene = function () {
        //老师表情
        this.teacher = new TeacherOne();
        this.addChild(this.teacher);
        this.teacher.init();
    };
    Game.prototype.reScene = function () {
        this.alpha = 0;
    };
    return Game;
}(egret.DisplayObjectContainer));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map