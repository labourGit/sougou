var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TimeChuo = (function (_super) {
    __extends(TimeChuo, _super);
    function TimeChuo() {
        return _super.call(this) || this;
    }
    TimeChuo.timestampDate = function () {
        return Math.round(new Date().getTime() / 1000);
    };
    TimeChuo.formatDate = function (Num) {
        //        return new Date(parseInt(Num) * 1000).toLocaleString().replace("/", "-").replace("/", "-");
        //        new Date(parseInt(Num) * 1000).toLocaleString().replace(/\//gi, '-');
        var Day = new Date(parseInt(Num) * 1000).toLocaleTimeString().replace("上午", '').replace("下午", '').replace(":", '').replace(":", '');
        var DayBy = new Date(parseInt(Num) * 1000).toLocaleTimeString().replace("上午", '').replace("下午", '');
        var DayDal = new Date(parseInt(Num) * 1000).toLocaleTimeString();
        var Text = DayDal.substr(0, 1);
        var DayA = Day;
        var DayB = Day;
        var DayC = Day;
        var DayH;
        var DayM;
        var DayS;
        var DateDal = new Date(parseInt(Num) * 1000).toLocaleDateString().replace(/\//gi, '-');
        if (Text == "下") {
            for (var i = 0; i < 4; i++) {
                DayA = DayA.substring(0, DayA.length - 1);
            }
            if (Number(DayA) >= 1 && Number(DayA) <= 9) {
                DayB = DayB.substring(1);
                for (var ic = 0; ic < 3; ic++) {
                    DayC = DayC.substring(1);
                }
            }
            else {
                for (var ib = 0; ib < 2; ib++) {
                    DayB = DayB.substring(1);
                }
                for (var ia = 0; ia < 4; ia++) {
                    DayC = DayC.substring(1);
                }
            }
            for (var id = 0; id < 2; id++) {
                DayB = DayB.substring(0, DayB.length - 1);
            }
            if (Number(DayA) == 12) {
                DayH = "12";
            }
            else {
                DayH = 12 + Number(DayA);
            }
        }
        else {
            for (var i = 0; i < 4; i++) {
                DayA = DayA.substring(0, DayA.length - 1);
            }
            if (Number(DayA) >= 0 && Number(DayA) <= 9) {
                DayB = DayB.substring(1);
                for (var ic = 0; ic < 3; ic++) {
                    DayC = DayC.substring(1);
                }
            }
            else {
                for (var ib = 0; ib < 2; ib++) {
                    DayB = DayB.substring(1);
                }
                for (var ia = 0; ia < 4; ia++) {
                    DayC = DayC.substring(1);
                }
            }
            for (var id = 0; id < 2; id++) {
                DayB = DayB.substring(0, DayB.length - 1);
            }
            if (Number(DayA) == 12) {
                DayH = "00";
            }
            else if (Number(DayA) >= 10 && Number(DayA) <= 11) {
                DayH = Number(DayA);
            }
            else {
                DayH = "0" + Number(DayA);
            }
        }
        DayM = DayB;
        DayS = DayC;
        // DayBy = DateDal + " " + DayH + ":" + DayM + ":" + DayS;
        DayBy = DayH + ":" + DayM;
        return DayBy;
    };
    return TimeChuo;
}(egret.DisplayObjectContainer));
__reflect(TimeChuo.prototype, "TimeChuo");
//# sourceMappingURL=TimeChuo.js.map