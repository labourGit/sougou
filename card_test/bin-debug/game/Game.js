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
        this.school = new School();
        this.addChild(this.school);
    };
    Game.prototype.del_school = function () {
        this.removeChild(this.school);
    };
    Game.prototype.reScene = function () {
        this.classroom = new ClassRoom();
        this.addChild(this.classroom);
    };
    Game.prototype.del_class = function () {
        this.removeChild(this.classroom);
    };
    Game.prototype.shopScene = function () {
        this.choiceGame = new ChoiceGame();
        this.addChild(this.choiceGame);
        this.choiceGame.init();
    };
    return Game;
}(egret.DisplayObjectContainer));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map