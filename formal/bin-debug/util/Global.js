var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var Global = (function () {
    function Global() {
    }
    /**
     * 自动加载策略：
     *     1.自动加载优先级是-1
     *     2.同一时刻保持只有一个自动加载组
     */
    Global.initRESEvent = function () {
        if (!Global.mEventAdded) {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, Global.onGroupOk, Global);
            Global.mEventAdded = true;
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, Global.onError, Global);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, Global.onError, Global);
        }
    };
    Global.onError = function (e) {
        try {
            trace(e.type + ',' + JSON.stringify(e.resItem));
        }
        catch (e) {
            trace('error:' + JSON.stringify(e));
        }
    };
    Global.onGroupOk = function (e) {
        trace(e.groupName + ' load complete!');
        Global.eventCenter.dispatchEventWith(e.groupName);
        if (e.groupName == Global.mAutoQueueLoaderGroupName) {
            Global.mAutoQueueLoaderGroupName = null;
        }
        if (Global.mAutoQueueLoaderGroupName == null && Global.all.length > 0) {
            var groupName = Global.all.shift();
            Global.mAutoQueueLoaderGroupName = groupName;
            RES.loadGroup(groupName, -1);
        }
    };
    Global.onEvent = function (eName, data) {
        Global.eventCenter.dispatchEventWith(eName, false, data);
    };
    Global.clone = function (obj) {
        var n = {};
        for (var key in obj) {
            n[key] = obj[key];
        }
        return n;
    };
    return Global;
}());
Global.eventCenter = new egret.EventDispatcher();
/*****************************自定义逻辑变量start*********************************/
/*****************************自定义逻辑变量 end *********************************/
Global.blobKey = '_blob';
Global.all = [
    'p2', 'p3', 'p4', 'p5', 'p6'
];
__reflect(Global.prototype, "Global");
//# sourceMappingURL=Global.js.map