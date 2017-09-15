var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var TopYoyo = (function () {
    function TopYoyo() {
    }
    TopYoyo.start = function (obj) {
        TopYoyo.obj = null;
        var self = TopYoyo;
        self.obj = obj;
        self.adding = true;
        self.mLoc = obj.y;
        Tween$.removeTweens(obj);
        Tween$.get(obj, { loop: true })
            .to({ y: self.mLoc - 20 }, 500)
            .to({ y: self.mLoc }, 500);
    };
    TopYoyo.stop = function () {
        TopYoyo.obj.y = TopYoyo.mLoc;
        Tween$.removeTweens(TopYoyo.obj);
        TopYoyo.obj = null;
    };
    return TopYoyo;
}());
__reflect(TopYoyo.prototype, "TopYoyo");
var BottomYoyo = (function () {
    function BottomYoyo() {
    }
    BottomYoyo.start = function (obj) {
        BottomYoyo.obj = null;
        var self = BottomYoyo;
        self.obj = obj;
        self.adding = true;
        self.mLoc = obj.y;
        Tween$.removeTweens(obj);
        Tween$.get(obj, { loop: true })
            .to({ y: self.mLoc + 20 }, 500)
            .to({ y: self.mLoc }, 500);
    };
    BottomYoyo.stop = function () {
        BottomYoyo.obj.y = BottomYoyo.mLoc;
        Tween$.removeTweens(BottomYoyo.obj);
        BottomYoyo.obj = null;
    };
    return BottomYoyo;
}());
__reflect(BottomYoyo.prototype, "BottomYoyo");
var LeftYoyo = (function () {
    function LeftYoyo() {
    }
    LeftYoyo.start = function (obj) {
        LeftYoyo.obj = null;
        var self = LeftYoyo;
        self.obj = obj;
        self.adding = true;
        self.mLoc = obj.x;
        Tween$.removeTweens(obj);
        Tween$.get(obj, { loop: true })
            .to({ x: self.mLoc - 20 }, 500)
            .to({ x: self.mLoc }, 500);
    };
    LeftYoyo.stop = function () {
        LeftYoyo.obj.x = LeftYoyo.mLoc;
        Tween$.removeTweens(LeftYoyo.obj);
        LeftYoyo.obj = null;
    };
    return LeftYoyo;
}());
__reflect(LeftYoyo.prototype, "LeftYoyo");
var RightYoyo = (function () {
    function RightYoyo() {
    }
    RightYoyo.start = function (obj) {
        RightYoyo.obj = null;
        var self = RightYoyo;
        self.obj = obj;
        self.adding = true;
        self.mLoc = obj.x;
        Tween$.removeTweens(obj);
        Tween$.get(obj, { loop: true })
            .to({ x: self.mLoc + 20 }, 500)
            .to({ x: self.mLoc }, 500);
    };
    RightYoyo.stop = function () {
        RightYoyo.obj.x = RightYoyo.mLoc;
        Tween$.removeTweens(RightYoyo.obj);
        RightYoyo.obj = null;
    };
    return RightYoyo;
}());
__reflect(RightYoyo.prototype, "RightYoyo");
//# sourceMappingURL=MoveYoYo.js.map