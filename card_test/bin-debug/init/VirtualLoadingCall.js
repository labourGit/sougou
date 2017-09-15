var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var VirtualLoadingCall = (function () {
    function VirtualLoadingCall() {
    }
    VirtualLoadingCall.start = function (call, thisObj) {
        VirtualLoadingCall.mCall = call;
        VirtualLoadingCall.mObj = thisObj;
        EnterFrameCall.add(VirtualLoadingCall.onRender, VirtualLoadingCall);
        VirtualLoadingCall.startTime = egret.getTimer();
    };
    VirtualLoadingCall.stop = function () {
        EnterFrameCall.del(VirtualLoadingCall.onRender, VirtualLoadingCall);
    };
    VirtualLoadingCall.onRender = function () {
        var loadingPro = Math.sqrt(2 * 1.1 * (egret.getTimer() - VirtualLoadingCall.startTime));
        if (loadingPro >= 99) {
            loadingPro = 99;
            VirtualLoadingCall.stop();
        }
        VirtualLoadingCall.mCall.apply(VirtualLoadingCall.mObj, [loadingPro]);
    };
    return VirtualLoadingCall;
}());
__reflect(VirtualLoadingCall.prototype, "VirtualLoadingCall");
//# sourceMappingURL=VirtualLoadingCall.js.map