var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CardGame = (function (_super) {
    __extends(CardGame, _super);
    function CardGame() {
        var _this = _super.call(this) || this;
        _this.cards = [];
        _this.createView();
        return _this;
    }
    CardGame.prototype.createView = function () {
        for (var i = 0; i < 6; i++) {
            var card = new Card(Util.op[i].id, Util.op[i].str, i);
            this.addChild(card);
            if (i < 3) {
                card.y = 200;
                card.x = 100 + i * 200;
            }
            else {
                card.y = 500;
                card.x = 100 + (i - 3) * 200;
            }
            this.cards.push(card);
            card.touchEnabled = true;
            //  card.addEventListener(egret.TouchEvent.TOUCH_TAP,(evt:egret.TouchEvent)=>{
            //         this.turn(evt.target);
            //     },this);
            card.addEventListener(egret.TouchEvent.TOUCH_TAP, this.turn, this);
        }
    };
    CardGame.prototype.turn = function (evt) {
        console.log(evt.target.id);
        var i = evt.target.id;
        this.cards[i].turn_ani();
    };
    return CardGame;
}(egret.DisplayObjectContainer));
__reflect(CardGame.prototype, "CardGame");
//# sourceMappingURL=CardGame.js.map