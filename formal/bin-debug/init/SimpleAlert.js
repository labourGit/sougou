var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SimpleAlert = (function (_super) {
    __extends(SimpleAlert, _super);
    function SimpleAlert() {
        return _super.call(this) || this;
    }
    SimpleAlert.show = function (source, closeCall, obj) {
        SimpleAlert.getInstance().show(source, closeCall, obj);
    };
    SimpleAlert.hide = function () {
        SimpleAlert.getInstance().hide();
    };
    SimpleAlert.getInstance = function () {
        if (!SimpleAlert.instance) {
            SimpleAlert.instance = new SimpleAlert();
        }
        return SimpleAlert.instance;
    };
    SimpleAlert.prototype.show = function (source, closeCall, obj) {
        this.call = closeCall;
        this.thisObj = obj;
        this.setData(source);
        tween_XY_alphaShow(this);
        Global.stage.addChild(this);
    };
    SimpleAlert.prototype.setData = function (source) {
        if (!this.bmp) {
            this.bmp = new eui.Image(source);
            this.addChild(this.bmp);
            bindTapEvent_XY(this, this.onNext, this);
        }
        this.bmp.source = source;
    };
    SimpleAlert.prototype.onNext = function () {
        if (this.call) {
            this.call.apply(this.thisObj);
        }
        this.hide();
    };
    SimpleAlert.prototype.hide = function () {
        remove_XY(this);
        this.call = null;
        this.thisObj = null;
    };
    return SimpleAlert;
}(eui.Component));
__reflect(SimpleAlert.prototype, "SimpleAlert");
//# sourceMappingURL=SimpleAlert.js.map