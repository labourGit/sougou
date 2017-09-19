var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Util = (function () {
    function Util() {
    }
    return Util;
}());
Util.op = [
    { id: 1, str: "美式咖啡" },
    { id: 1, str: "拿铁咖啡" },
    { id: 2, str: "咖啡店" },
    { id: 2, str: "咖啡厅" },
    { id: 3, str: "慢咖啡厅" },
    { id: 3, str: "猫屎咖啡厅" }
];
__reflect(Util.prototype, "Util");
//# sourceMappingURL=Util.js.map