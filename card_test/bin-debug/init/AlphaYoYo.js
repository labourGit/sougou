var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var AlphaYoYo = (function () {
    function AlphaYoYo() {
    }
    AlphaYoYo.start = function (obj) {
        if (AlphaYoYo.obj) {
            AlphaYoYo.stop();
        }
        AlphaYoYo.obj = null;
        var self = AlphaYoYo;
        EnterFrameCall.del(self.tickHandler, self);
        self.obj = obj;
        self.adding = true;
        EnterFrameCall.add(self.tickHandler, self);
    };
    AlphaYoYo.tickHandler = function (sanp) {
        var self = AlphaYoYo;
        if (self.adding) {
            self.obj.alpha += 0.06;
            if (self.obj.alpha >= 1) {
                self.adding = false;
            }
        }
        else {
            self.obj.alpha -= 0.06;
            if (self.obj.alpha <= 0) {
                self.adding = true;
            }
        }
        return true;
    };
    AlphaYoYo.stop = function () {
        EnterFrameCall.del(AlphaYoYo.tickHandler, AlphaYoYo);
        AlphaYoYo.obj = null;
    };
    return AlphaYoYo;
}());
__reflect(AlphaYoYo.prototype, "AlphaYoYo");
/**
 *
 * @author
 *
 */
var AlphaYoYo1 = (function () {
    function AlphaYoYo1() {
    }
    AlphaYoYo1.start = function (obj) {
        if (AlphaYoYo1.obj) {
            AlphaYoYo1.stop();
        }
        AlphaYoYo1.obj = null;
        var self = AlphaYoYo1;
        EnterFrameCall.del(self.tickHandler, self);
        self.obj = obj;
        self.adding = true;
        EnterFrameCall.add(self.tickHandler, self);
    };
    AlphaYoYo1.tickHandler = function (sanp) {
        var self = AlphaYoYo1;
        if (self.adding) {
            self.obj.alpha += 0.06;
            if (self.obj.alpha >= 1) {
                self.adding = false;
            }
        }
        else {
            self.obj.alpha -= 0.06;
            if (self.obj.alpha <= 0) {
                self.adding = true;
            }
        }
        return true;
    };
    AlphaYoYo1.stop = function () {
        EnterFrameCall.del(AlphaYoYo1.tickHandler, AlphaYoYo1);
        AlphaYoYo1.obj = null;
    };
    return AlphaYoYo1;
}());
__reflect(AlphaYoYo1.prototype, "AlphaYoYo1");
//# sourceMappingURL=AlphaYoYo.js.map