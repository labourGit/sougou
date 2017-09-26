var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Toast = (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        return _super.call(this) || this;
    }
    Toast.init = function (stage) {
        this.mContainer = stage;
    };
    Toast.getStage = function () {
        return Toast.mContainer;
    };
    /**
     * 创建一个Toast弹窗的方法,需game，tween库支持
     * 使用：Toast.show(html文本，消失时间（可选）)
     * 前提：
     *       1.需要先在游戏初始化时，初始化Toast.init(主舞台)
     */
    Toast.show = function (htmlText, duration) {
        if (duration === void 0) { duration = 1200; }
        if (this.mContainer) {
            var toast = ObjToast.make();
            this.mContainer.addChild(toast);
            toast.setHtmlText(htmlText);
            toast.x = (this.mContainer.stageWidth - toast.bg.width) / 2;
            var iy = (this.mContainer.stageHeight - toast.bg.height) * 0.4;
            toast.y = iy + 30;
            toast.alpha = 0;
            egret.Tween.get(toast)
                .to({ alpha: 1, y: iy }, 500, egret.Ease.quintOut)
                .wait(duration)
                .to({ alpha: 0, y: iy - 50 }, 500, egret.Ease.quintIn)
                .call(function (o) {
                ObjToast.collect(o);
            }, null, [toast]);
        }
    };
    return Toast;
}(egret.DisplayObjectContainer));
__reflect(Toast.prototype, "Toast");
var ObjToast = (function (_super) {
    __extends(ObjToast, _super);
    function ObjToast() {
        var _this = _super.call(this) || this;
        _this.bg = new egret.Shape();
        _this.addChild(_this.bg);
        _this.tf = new egret.TextField();
        _this.tf.fontFamily = 'Microsoft Yahei';
        _this.tf.size = 26;
        _this.tf.lineSpacing = 8;
        _this.tf.multiline = true;
        _this.tf.wordWrap = true;
        _this.addChild(_this.tf);
        return _this;
    }
    ObjToast.make = function () {
        if (ObjToast.mPool.length > 0) {
            return ObjToast.mPool.shift();
        }
        return new ObjToast();
    };
    ObjToast.collect = function (obj) {
        egret.Tween.removeTweens(obj);
        if (obj.parent) {
            obj.parent.removeChild(obj);
        }
        egret.setTimeout(function (o) {
            ObjToast.mPool.push(o);
        }, null, 1, obj);
    };
    ObjToast.prototype.setHtmlText = function (value) {
        this.tf.width = Toast.getStage().stageWidth * 0.8;
        this.tf.height = Toast.getStage().stageHeight;
        if (this.tf) {
            this.tf.textFlow = new egret.HtmlTextParser().parser(value);
        }
        this.bg.graphics.clear();
        this.tf.width = this.tf.textWidth;
        this.tf.height = this.tf.textHeight;
        this.tf.x = 25;
        this.tf.y = 15;
        this.bg.graphics.beginFill(0x1E1E1E, 0.8);
        this.bg.graphics.drawRoundRect(0, 0, this.tf.width + 50, this.tf.height + 30, 15, 15);
        this.bg.graphics.endFill();
    };
    return ObjToast;
}(egret.Sprite));
ObjToast.mPool = [];
__reflect(ObjToast.prototype, "ObjToast");
//# sourceMappingURL=Toast.js.map