var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 *
 */
var MovieclipController = (function (_super) {
    __extends(MovieclipController, _super);
    function MovieclipController(target, frameRate, resLoop) {
        var _this = _super.call(this) || this;
        _this.mCount = 0;
        _this.mImg = target;
        _this.frameRate = frameRate;
        _this.mResLoop = resLoop;
        _this.mResCount = resLoop.length;
        return _this;
    }
    MovieclipController.makeResLoop = function (formatStr, from, to) {
        var arr = [];
        if (from < to) {
            for (var i = from; i <= to; i++) {
                arr.push(format_XY(formatStr, i));
            }
        }
        else {
            for (var i = from; i >= to; i--) {
                arr.push(format_XY(formatStr, i));
            }
        }
        console.log("donghua");
        return arr;
    };
    MovieclipController.prototype.gotoAndStop = function (frameIndex) {
        this.stop();
        if (frameIndex < 0) {
            frameIndex = 0;
        }
        if (frameIndex > this.mResCount - 1) {
            frameIndex = this.mResCount - 1;
        }
        this.mImg.texture = RES.getRes(this.mResLoop[frameIndex]);
    };
    MovieclipController.prototype.updateResLoop = function (resLoop) {
        this.mResLoop = resLoop;
        this.mResCount = resLoop.length;
        if (this.mPlayed) {
            this.mCount = 0;
            this.mImg.texture = RES.getRes(this.mResLoop[0]);
        }
    };
    MovieclipController.prototype.playAsYoyo = function () {
        this.yoyoMode = true;
        this.mLoop = true;
        this.mCount = 0;
        EnterFrameCall.add(this.onRender, this);
        this.mPlayed = true;
    };
    MovieclipController.prototype.play = function (loop) {
        this.yoyoMode = false;
        this.mLoop = loop;
        EnterFrameCall.add(this.onRender, this);
        this.mPlayed = true;
    };
    MovieclipController.prototype.stop = function () {
        EnterFrameCall.del(this.onRender, this);
        this.mCount = 0;
        this.mPlayed = false;
        this.yoyoMode = false;
    };
    MovieclipController.prototype.onRender = function (tm) {
        this.mCount++;
        if (this.mCount % this.frameRate == 0) {
            var v = int_XY(this.mCount / this.frameRate);
            var k = v % this.mResCount;
            if (!this.mLoop && v >= this.mResCount) {
                this.stop();
                this.dispatchEventWith(egret.Event.COMPLETE);
                return;
            }
            this.mImg.texture = RES.getRes(this.mResLoop[k]);
            if (k >= this.mResCount - 1 && this.yoyoMode) {
                this.mResLoop = this.mResLoop.reverse();
            }
        }
        return true;
    };
    MovieclipController.prototype.getResLoop = function () {
        return this.mResLoop;
    };
    MovieclipController.prototype.getTarget = function () {
        return this.mImg;
    };
    return MovieclipController;
}(egret.EventDispatcher));
__reflect(MovieclipController.prototype, "MovieclipController");
//# sourceMappingURL=MovieclipController.js.map