var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ActionSheet = (function (_super) {
    __extends(ActionSheet, _super);
    function ActionSheet() {
        var _this = _super.call(this) || this;
        var exml = "<e:Skin xmlns:e=\"http://ns.egret.com/eui\">\n\t\t\t\t<e:Rect id=\"bg\" left=\"0\" right=\"0\" top=\"0\" bottom=\"0\" fillAlpha=\"0.6\"/>\n                <e:Scroller id=\"scl\" height=\"640\" width=\"442\" verticalCenter=\"0\" horizontalCenter=\"0\">\n\t\t\t\t<e:Skin>\n\t\t\t\t\t<e:VScrollBar id=\"verticalScrollBar\" width=\"11\" height=\"100%\" right=\"-20\">\n\t\t\t\t\t\t<e:Skin>\n\t\t\t\t\t\t\t<e:Image height=\"100%\"  source=\"thumb_bg_png\" x=\"5\" scale9Grid=\"2,5,6,48\" />\n\t\t\t\t\t\t\t<e:Image id=\"thumb\" height=\"30\" x=\"5\" scale9Grid=\"2,5,6,20\" source=\"thumb_png\" />\n\t\t\t\t\t\t</e:Skin>\n\t\t\t\t\t</e:VScrollBar>\n\t\t\t\t</e:Skin>\n\t\t\t\t<e:List id=\"lst\">\n\t\t\t\t\t<e:itemRendererSkinName>\n\t\t\t\t\t\t<e:Skin states=\"up,down\" height=\"64\">\n\t\t\t\t\t\t\t<e:Image width=\"100%\" height=\"62\" x=\"1\"  source=\"selected_jpg\" source.down=\"button_down_jpg\"/>\n\t\t\t\t\t\t\t<e:Label size=\"30\" fontFamily=\"\u5FAE\u8F6F\u96C5\u9ED1\" text=\"{data}\" textAlign=\"center\" width=\"100%\" textColor=\"0x555555\" textColor.down=\"0xffffff\" verticalCenter=\"0\"/>\n\t\t\t\t\t\t</e:Skin>\n\t\t\t\t\t</e:itemRendererSkinName>\n\t\t\t\t</e:List>\n\t\t\t</e:Scroller>\n            </e:Skin>";
        _this.skinName = exml;
        _this.width = Global.stage.stageWidth;
        _this.height = Global.stage.stageHeight;
        _this.lst.dataProvider = new eui.ArrayCollection([]);
        _this.scl.verticalScrollBar.autoVisibility = false;
        _this.lst.addEventListener(eui.ItemTapEvent.ITEM_TAP, _this.onChange, _this);
        bindTapEvent_XY(_this.bg, _this.onHide, _this);
        return _this;
    }
    ActionSheet.getInstance = function () {
        if (!ActionSheet.ins) {
            ActionSheet.ins = new ActionSheet();
        }
        return ActionSheet.ins;
    };
    ActionSheet.prototype.onChange = function (e) {
        if (this.mCall) {
            this.mCall.apply(this.mObj, [this.lst.selectedItem]);
        }
        this.close();
    };
    ActionSheet.prototype.onHide = function () {
        if (this.mCancelCall) {
            this.mCancelCall.apply(this.mObj);
        }
        this.close();
    };
    ActionSheet.prototype.showList = function (source, currentValue, call, thisObj, cancalCall) {
        var _this = this;
        this.lastValue = Global.stage.dirtyRegionPolicy;
        Global.stage.addChild(this);
        tween_XY_alphaShow(this);
        this.mCall = call;
        this.mObj = thisObj;
        this.mCancelCall = cancalCall;
        this.lst.dataProvider.source = source;
        this.lst.selectedItem = currentValue;
        var maxLen = 64 * source.length;
        if (maxLen > 640) {
            maxLen = 640;
        }
        this.scl.height = maxLen;
        this.scl.y = (640 - maxLen) / 2 + 215;
        var maxSc = 64 * source.length - maxLen;
        var v;
        if (maxSc <= 0) {
            v = 0;
            this.scl.verticalScrollBar.visible = false;
        }
        else {
            v = Math.min(Math.max(0, (source.indexOf(currentValue) - 5) * 64), maxSc);
            this.scl.verticalScrollBar.visible = true;
        }
        egret.callLater(function (p) { _this.lst.scrollV = p; }, this, [v]);
        this.scl.validateDisplayList();
        Global.stage.dirtyRegionPolicy = DirtyRegionPolicy$.OFF;
    };
    ActionSheet.prototype.close = function () {
        remove_XY(this);
        this.mCall = null;
        this.mObj = null;
        Global.stage.dirtyRegionPolicy = this.lastValue;
    };
    return ActionSheet;
}(eui.Component));
__reflect(ActionSheet.prototype, "ActionSheet");
//# sourceMappingURL=ActionSheet.js.map