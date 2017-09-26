var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var EnterFrameCall = (function () {
    function EnterFrameCall() {
    }
    EnterFrameCall.init = function (stage) {
        EnterFrameCall.mStage = stage;
        stage.addEventListener(egret.Event.ENTER_FRAME, EnterFrameCall.onEnterFrame, EnterFrameCall);
    };
    EnterFrameCall.onEnterFrame = function (e) {
        for (var i = 0; i < EnterFrameCall.mCalls.length; i++) {
            var obj = EnterFrameCall.mCalls[i];
            obj[0].apply(obj[1]);
        }
    };
    EnterFrameCall.add = function (call, thisObj) {
        for (var i = 0; i < EnterFrameCall.mCalls.length; i++) {
            var obj = EnterFrameCall.mCalls[i];
            if (obj[0] == call && obj[1] == thisObj) {
                return;
            }
        }
        EnterFrameCall.mCalls.push([call, thisObj]);
    };
    EnterFrameCall.del = function (call, thisObj) {
        for (var i = 0; i < EnterFrameCall.mCalls.length; i++) {
            var obj = EnterFrameCall.mCalls[i];
            if (obj[0] == call && obj[1] == thisObj) {
                EnterFrameCall.mCalls.splice(i, 1);
                return;
            }
        }
    };
    return EnterFrameCall;
}());
EnterFrameCall.mCalls = [];
__reflect(EnterFrameCall.prototype, "EnterFrameCall");
//# sourceMappingURL=EnterFrameCall.js.map