var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TyperText = (function () {
    function TyperText() {
    }
    TyperText.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TyperText();
        }
        return this.instance;
    };
    TyperText.prototype.typerEffect = function (obj, content, interval, backFun) {
        if (content === void 0) { content = ""; }
        if (interval === void 0) { interval = 200; }
        if (backFun === void 0) { backFun = null; }
        var strArr = content.split("");
        var len = strArr.length;
        for (var i = 0; i < len; i++) {
            egret.setTimeout(function () {
                obj.appendText(strArr[Number(this)]);
                if ((Number(this) >= len - 1) && (backFun != null)) {
                    backFun();
                    console.log("zhixing");
                }
            }, i, interval * i);
        }
    };
    return TyperText;
}());
__reflect(TyperText.prototype, "TyperText");
//# sourceMappingURL=TyperText.js.map