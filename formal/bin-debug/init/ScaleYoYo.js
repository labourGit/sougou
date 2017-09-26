var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var ScaleYoYo = (function () {
    function ScaleYoYo() {
    }
    ScaleYoYo.start = function (obj) {
        ScaleYoYo.obj = null;
        var self = ScaleYoYo;
        EnterFrameCall.del(self.tickHandler, self);
        self.obj = obj;
        self.oldScale.setTo(obj.scaleX, obj.scaleY);
        self.adding = true;
        EnterFrameCall.add(self.tickHandler, self);
    };
    ScaleYoYo.tickHandler = function (sanp) {
        var self = ScaleYoYo;
        if (self.adding) {
            self.obj.scaleX += self.oldScale.x * 0.04;
            self.obj.scaleY += self.oldScale.y * 0.04;
            if (self.obj.scaleX >= self.oldScale.x * 1) {
                self.adding = false;
            }
        }
        else {
            self.obj.scaleX -= self.oldScale.x * 0.04;
            self.obj.scaleY -= self.oldScale.y * 0.04;
            if (self.obj.scaleX <= self.oldScale.x * 0.5) {
                self.adding = true;
            }
        }
        return true;
    };
    ScaleYoYo.stop = function () {
        EnterFrameCall.del(ScaleYoYo.tickHandler, ScaleYoYo);
        ScaleYoYo.obj = null;
    };
    return ScaleYoYo;
}());
ScaleYoYo.oldScale = new egret.Point();
__reflect(ScaleYoYo.prototype, "ScaleYoYo");
/**
 *
 * @author
 *
 */
var ScaleYoYo1 = (function () {
    function ScaleYoYo1() {
    }
    ScaleYoYo1.start = function (obj) {
        ScaleYoYo1.obj = null;
        var self = ScaleYoYo1;
        EnterFrameCall.del(self.tickHandler, self);
        self.obj = obj;
        self.oldScale.setTo(obj.scaleX, obj.scaleY);
        self.adding = true;
        EnterFrameCall.add(self.tickHandler, self);
    };
    ScaleYoYo1.tickHandler = function (sanp) {
        var self = ScaleYoYo1;
        if (self.adding) {
            self.obj.scaleX += self.oldScale.x * 0.04;
            self.obj.scaleY += self.oldScale.y * 0.04;
            if (self.obj.scaleX >= self.oldScale.x * 1) {
                self.adding = false;
            }
        }
        else {
            self.obj.scaleX -= self.oldScale.x * 0.04;
            self.obj.scaleY -= self.oldScale.y * 0.04;
            if (self.obj.scaleX <= self.oldScale.x * 0.5) {
                self.adding = true;
            }
        }
        return true;
    };
    ScaleYoYo1.stop = function () {
        EnterFrameCall.del(ScaleYoYo1.tickHandler, ScaleYoYo1);
        ScaleYoYo1.obj = null;
    };
    return ScaleYoYo1;
}());
ScaleYoYo1.oldScale = new egret.Point();
__reflect(ScaleYoYo1.prototype, "ScaleYoYo1");
//# sourceMappingURL=ScaleYoYo.js.map