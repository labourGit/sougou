var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Xuan = (function (_super) {
    __extends(Xuan, _super);
    function Xuan() {
        var _this = _super.call(this) || this;
        _this.wordArry = [];
        switch (Util.id_shop) {
            case 1:
                _this.wordArry = Util.xp1;
                _this.str_bg = "beauty_alpha_png";
                _this.str_sbg = "shop_beauty_png";
                _this.str_ss = "美容院";
                break;
            case 2:
                _this.wordArry = Util.xp2;
                _this.str_bg = "cafe_alpha_png";
                _this.str_sbg = "shop_cafe_png";
                _this.str_ss = "咖啡厅";
                break;
            case 3:
                _this.wordArry = Util.xp3;
                _this.str_bg = "sport_alpha_png";
                _this.str_sbg = "shop_sport_png";
                _this.str_ss = "健身房";
                break;
            default:
                _this.wordArry = Util.xp1;
                _this.str_bg = "beauty_alpha_png";
                _this.str_sbg = "shop_beauty_png";
                _this.str_ss = "美容院";
                break;
        }
        _this.createView();
        return _this;
    }
    Xuan.prototype.createView = function () {
        this.choice1_num = 0;
        this.choice2_num = 0;
        this.bg = new egret.Bitmap(RES.getRes(this.str_bg));
        this.addChild(this.bg);
        this.board = new Boardshop(this.wordArry[0].str);
        this.addChild(this.board);
        this.c_A = new choiceABC(this.wordArry[1].str, "choiceA_png", 25, this.wordArry[1].score, 1);
        this.c_A.x = 640;
        this.c_A.y = 260;
        this.addChild(this.c_A);
        var ta = egret.Tween.get(this.c_A).to({ x: 50 }, 600, egret.Ease.sineIn);
        this.c_B = new choiceABC(this.wordArry[2].str, "choiceB_png", 25, this.wordArry[2].score, 2);
        this.c_B.x = 640;
        this.c_B.y = 390;
        this.addChild(this.c_B);
        var ta = egret.Tween.get(this.c_B).wait(300).to({ x: 50 }, 600, egret.Ease.sineIn);
        this.c_C = new choiceABC(this.wordArry[3].str, "choiceC_png", 25, this.wordArry[3].score, 3);
        this.c_C.x = 640;
        this.c_C.y = 520;
        this.addChild(this.c_C);
        var ta = egret.Tween.get(this.c_C).wait(600).to({ x: 50 }, 600, egret.Ease.sineIn).call(this.touch1, this);
    };
    Xuan.prototype.touch1 = function () {
        this.c_A.touchEnabled = true;
        this.c_B.touchEnabled = true;
        this.c_C.touchEnabled = true;
        this.c_A.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch1over, this);
        this.c_B.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch1over, this);
        this.c_C.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch1over, this);
    };
    Xuan.prototype.touch1over = function (evt) {
        this.c_A.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch1over, this);
        this.c_B.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch1over, this);
        this.c_C.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch1over, this);
        console.log(evt.target.score);
        this.choice1_num = evt.target._id;
        evt.target.tip.textColor = 0xdb6638;
        Util.choiceScore += evt.target.score;
        var ta = egret.Tween.get(this.c_A).wait(600).to({ x: -640 }, 600, egret.Ease.sineIn);
        var ta = egret.Tween.get(this.c_B).wait(900).to({ x: -640 }, 600, egret.Ease.sineIn);
        var ta = egret.Tween.get(this.c_C).wait(1200).to({ x: -640 }, 600, egret.Ease.sineIn).call(this.createView2, this);
    };
    Xuan.prototype.createView2 = function () {
        this.board = new Boardshop(this.wordArry[4].str);
        this.addChild(this.board);
        this.c_A = new choiceABC(this.wordArry[5].str, "choiceA_png", 18, this.wordArry[5].score, 5);
        this.c_A.x = 640;
        this.c_A.y = 260;
        this.addChild(this.c_A);
        var ta = egret.Tween.get(this.c_A).to({ x: 50 }, 600, egret.Ease.sineIn);
        this.c_B = new choiceABC(this.wordArry[6].str, "choiceB_png", 18, this.wordArry[6].score, 6);
        this.c_B.x = 640;
        this.c_B.y = 390;
        this.addChild(this.c_B);
        var ta = egret.Tween.get(this.c_B).wait(300).to({ x: 50 }, 600, egret.Ease.sineIn);
        this.c_C = new choiceABC(this.wordArry[7].str, "choiceC_png", 18, this.wordArry[7].score, 7);
        this.c_C.x = 640;
        this.c_C.y = 520;
        this.addChild(this.c_C);
        var ta = egret.Tween.get(this.c_C).wait(600).to({ x: 50 }, 600, egret.Ease.sineIn).call(this.touch2, this);
    };
    Xuan.prototype.touch2 = function () {
        this.c_A.touchEnabled = true;
        this.c_B.touchEnabled = true;
        this.c_C.touchEnabled = true;
        this.c_A.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch2over, this);
        this.c_B.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch2over, this);
        this.c_C.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch2over, this);
    };
    Xuan.prototype.touch2over = function (evt) {
        this.c_A.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch2over, this);
        this.c_B.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch2over, this);
        this.c_C.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touch2over, this);
        console.log(evt.target.score);
        this.choice2_num = evt.target._id;
        evt.target.tip.textColor = 0xdb6638;
        Util.choiceScore += evt.target.score;
        var ta = egret.Tween.get(this.c_A).wait(600).to({ x: -640 }, 600, egret.Ease.sineIn);
        var ta = egret.Tween.get(this.c_B).wait(900).to({ x: -640 }, 600, egret.Ease.sineIn);
        var ta = egret.Tween.get(this.c_C).wait(1200).to({ x: -640 }, 600, egret.Ease.sineIn).call(this.result, this);
    };
    Xuan.prototype.result = function () {
        this.board.tip.text = '页面呈现';
        this.parent.hero.bai();
        this.result_page = new Resut_page(this.str_ss, this.wordArry[this.choice1_num].str, this.str_sbg, this.wordArry[this.choice2_num].str);
        this.addChild(this.result_page);
        this.happyBtn = new egret.Bitmap(RES.getRes("happyBtn_png"));
        this.happyBtn.x = 140;
        this.happyBtn.y = Util.h - 280;
        this.happyBtn.alpha = 0;
        this.addChild(this.happyBtn);
        var ta = egret.Tween.get(this.happyBtn).wait(200).to({ alpha: 1 }, 400);
        this.unhappyBtn = new egret.Bitmap(RES.getRes("unhappyBtn_png"));
        this.unhappyBtn.x = 140;
        this.unhappyBtn.y = Util.h - 180;
        this.unhappyBtn.alpha = 0;
        this.addChild(this.unhappyBtn);
        var ta = egret.Tween.get(this.unhappyBtn).wait(200).to({ alpha: 1 }, 400);
        this.unhappyBtn.touchEnabled = true;
        this.unhappyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.restart, this);
    };
    Xuan.prototype.restart = function () {
        this.parent.restart();
    };
    return Xuan;
}(egret.DisplayObjectContainer));
__reflect(Xuan.prototype, "Xuan");
var choiceABC = (function (_super) {
    __extends(choiceABC, _super);
    function choiceABC(str1, str2, _size, score, id) {
        var _this = _super.call(this) || this;
        _this.score = score;
        _this._id = id;
        var bg = new egret.Bitmap(RES.getRes(str2));
        _this.addChild(bg);
        _this.tip = new egret.TextField();
        _this.tip.x = 100;
        _this.tip.size = _size;
        _this.tip.textColor = 0xffffff;
        _this.tip.fontFamily = "fzdhjt";
        _this.tip.width = 457;
        _this.tip.height = 88;
        // this.tip.anchorOffsetX=this.tip.width/2;
        // this.tip.anchorOffsetY=this.tip.height/2;
        _this.tip.textAlign = egret.HorizontalAlign.LEFT;
        _this.tip.verticalAlign = egret.VerticalAlign.MIDDLE;
        _this.tip.text = str1;
        _this.addChild(_this.tip);
        return _this;
    }
    return choiceABC;
}(egret.Sprite));
__reflect(choiceABC.prototype, "choiceABC");
var Resut_page = (function (_super) {
    __extends(Resut_page, _super);
    function Resut_page(str1, str2, str3, str4) {
        var _this = _super.call(this) || this;
        var s_bg = new egret.Bitmap(RES.getRes("ss_png"));
        _this.addChild(s_bg);
        s_bg.x = 30;
        s_bg.y = 250;
        var tip = new egret.TextField();
        tip.x = 100;
        tip.y = 250;
        tip.size = 25;
        tip.textColor = 0x000000;
        tip.fontFamily = "fzdhjt";
        tip.width = 200;
        tip.height = 80;
        tip.textAlign = egret.HorizontalAlign.LEFT;
        tip.verticalAlign = egret.VerticalAlign.MIDDLE;
        tip.text = str1;
        _this.addChild(tip);
        var tip2 = new egret.TextField();
        tip2.x = 50;
        tip2.y = 320;
        tip2.size = 28;
        tip2.textColor = 0xdb6638;
        tip2.fontFamily = "fzdhjt";
        tip2.width = 500;
        tip2.height = 100;
        tip2.textAlign = egret.HorizontalAlign.LEFT;
        tip2.verticalAlign = egret.VerticalAlign.MIDDLE;
        tip2.text = str2;
        _this.addChild(tip2);
        var bg_l = new egret.Bitmap(RES.getRes(str3));
        bg_l.scaleX = 0.5;
        bg_l.scaleY = 0.5;
        bg_l.x = 50;
        bg_l.y = 400;
        _this.addChild(bg_l);
        var tip4 = new egret.TextField();
        tip4.x = 180;
        tip4.y = 400;
        tip4.size = 25;
        tip4.textColor = 0x000000;
        tip4.fontFamily = "fzdhjt";
        tip4.width = 400;
        tip4.textAlign = egret.HorizontalAlign.LEFT;
        tip4.text = str4;
        _this.addChild(tip4);
        return _this;
    }
    return Resut_page;
}(egret.Sprite));
__reflect(Resut_page.prototype, "Resut_page");
//# sourceMappingURL=Xuan.js.map