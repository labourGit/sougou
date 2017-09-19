var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shop = (function (_super) {
    __extends(Shop, _super);
    function Shop() {
        var _this = _super.call(this) || this;
        var color = 0xdb6638; /// 光晕的颜色，十六进制，不包含透明度
        var alpha = 0.8; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
        var blurX = 45; /// 水平模糊量。有效值为 0 到 255.0（浮点）
        var blurY = 45; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        var strength = 2; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
        var inner = false; /// 指定发光是否为内侧发光，暂未实现
        var knockout = false; /// 指定对象是否具有挖空效果，暂未实现
        _this.glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
        _this.garden = new egret.Bitmap(RES.getRes("garden_png"));
        _this.addChild(_this.garden);
        //
        _this.shop_beauty = new egret.Bitmap(RES.getRes("shop_beauty_png"));
        _this.addChild(_this.shop_beauty);
        _this.shop_beauty.x = 235;
        _this.shop_beauty.y = 255;
        _this.shop_beauty.filters = [_this.glowFilter];
        _this.shop_cafe = new egret.Bitmap(RES.getRes("shop_cafe_png"));
        _this.addChild(_this.shop_cafe);
        _this.shop_cafe.x = 420;
        _this.shop_cafe.y = 320;
        _this.shop_sport = new egret.Bitmap(RES.getRes("shop_sport_png"));
        _this.addChild(_this.shop_sport);
        _this.shop_sport.x = 30;
        _this.shop_sport.y = 255;
        return _this;
    }
    Shop.prototype.init = function () {
        this.shop_beauty.filters = [];
        this.board = new Boardshop();
        this.addChild(this.board);
        //
        this.isFirst = true;
        Util.id_shop = 0;
        this.shop_beauty.touchEnabled = true;
        this.shop_beauty.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_beauty, this);
        this.shop_cafe.touchEnabled = true;
        this.shop_cafe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_cafe, this);
        this.shop_sport.touchEnabled = true;
        this.shop_sport.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_sport, this);
    };
    Shop.prototype.tap_beauty = function () {
        Util.id_shop = 1;
        this.board.tip.text = "美容院";
        if (this.isFirst) {
            this.teacher1 = new TeacherThree();
            this.addChild(this.teacher1);
            this.teacher1.init();
            this.shop_beauty.filters = [this.glowFilter];
            this.add_btn();
            this.isFirst = false;
        }
        else {
            this.shop_beauty.filters = [this.glowFilter];
            this.shop_cafe.filters = [];
            this.shop_sport.filters = [];
        }
    };
    Shop.prototype.tap_cafe = function () {
        Util.id_shop = 2;
        this.board.tip.text = "咖啡厅";
        if (this.isFirst) {
            this.teacher1 = new TeacherThree();
            this.addChild(this.teacher1);
            this.teacher1.init();
            this.shop_cafe.filters = [this.glowFilter];
            this.add_btn();
            this.isFirst = false;
        }
        else {
            this.shop_cafe.filters = [this.glowFilter];
            this.shop_beauty.filters = [];
            this.shop_sport.filters = [];
        }
    };
    Shop.prototype.tap_sport = function () {
        Util.id_shop = 3;
        this.board.tip.text = "健身房";
        if (this.isFirst) {
            this.teacher1 = new TeacherThree();
            this.addChild(this.teacher1);
            this.teacher1.init();
            this.shop_sport.filters = [this.glowFilter];
            this.add_btn();
            this.isFirst = false;
        }
        else {
            this.shop_sport.filters = [this.glowFilter];
            this.shop_cafe.filters = [];
            this.shop_beauty.filters = [];
        }
    };
    Shop.prototype.add_btn = function () {
        this.btn = new egret.Bitmap(RES.getRes("button1_png"));
        this.addChild(this.btn);
        this.btn.x = 20;
        this.btn.y = 590;
        this.btn.touchEnabled = true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.choiceOver, this);
    };
    Shop.prototype.choiceOver = function () {
        this.shop_beauty.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_beauty, this);
        this.shop_cafe.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_cafe, this);
        this.shop_sport.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_sport, this);
        this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.choiceOver, this);
        console.log(Util.id_shop);
        this.removeChild(this.btn);
        this.teacher1.bai();
    };
    Shop.prototype.del = function () {
        this.parent.del_shop();
    };
    return Shop;
}(egret.DisplayObjectContainer));
__reflect(Shop.prototype, "Shop");
//# sourceMappingURL=Shop.js.map