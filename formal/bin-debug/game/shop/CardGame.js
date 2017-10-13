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
        _this.wordArry = [];
        _this.cards = [];
        _this.first = -1;
        _this.sucess_turn = 0;
        switch (Util.id_shop) {
            case 1:
                _this.wordArry = Util.op1;
                break;
            case 2:
                _this.wordArry = Util.op2;
                break;
            case 3:
                _this.wordArry = Util.op3;
                break;
            default:
                _this.wordArry = Util.op1;
                break;
        }
        _this.wordArry.sort(function () {
            return Math.random() > .5 ? -1 : 1; //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
        });
        _this.createView();
        return _this;
    }
    CardGame.prototype.createView = function () {
        this.board = new Boardshop("同类词翻翻乐", 50);
        this.addChild(this.board);
        for (var i = 0; i < 6; i++) {
            var card = new Card(this.wordArry[i].id, this.wordArry[i].str, i);
            this.addChild(card);
            if (i < 3) {
                card.y = 230;
                card.x = 130 + i * 200;
            }
            else {
                card.y = 450;
                card.x = 130 + (i - 3) * 200;
            }
            this.cards.push(card);
            card.touchEnabled = true;
            card.addEventListener(egret.TouchEvent.TOUCH_TAP, this.turn, this);
        }
        this.is_lock = 1;
        this.hero = new Hero();
        this.addChild(this.hero);
        this.hero.init();
        this.rule_board = new RuleBoard();
        this.rule_board.anchorOffsetX = this.rule_board.width / 2;
        this.rule_board.anchorOffsetY = this.rule_board.height / 2;
        this.rule_board.x = 320;
        this.rule_board.y = 450;
        this.rule_board.alpha = 0;
        this.rule_board.scaleX = 0.4;
        this.rule_board.scaleY = 0.4;
        this.addChild(this.rule_board);
        egret.Tween.get(this.rule_board).wait(700).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 350, egret.Ease.backOut);
        this.firstBtn = new egret.Bitmap(RES.getRes("firstBtn_png"));
        this.addChild(this.firstBtn);
        this.firstBtn.anchorOffsetX = this.firstBtn.width / 2;
        this.firstBtn.anchorOffsetY = this.firstBtn.height / 2;
        this.firstBtn.x = 320;
        this.firstBtn.y = 600;
        this.firstBtn.alpha = 0;
        this.firstBtn.scaleX = 1;
        this.firstBtn.scaleY = 1;
        egret.Tween.get(this.firstBtn).wait(1000).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 250, egret.Ease.backOut);
        this.firstBtn.touchEnabled = true;
        this.firstBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.start, this);
    };
    CardGame.prototype.start = function () {
        this.removeChild(this.firstBtn);
        this.removeChild(this.rule_board);
        var _sound = RES.getRes("goMusic_mp3");
        _sound.play(0, 1);
        this.tip = new egret.TextField();
        this.tip.size = 75;
        this.tip.textColor = 0x000000;
        this.tip.fontFamily = "fzdhjt";
        this.tip.width = 500;
        this.tip.height = 500;
        this.tip.anchorOffsetX = this.tip.width / 2;
        this.tip.anchorOffsetY = this.tip.height / 2;
        this.tip.x = 320;
        this.tip.y = 450;
        this.tip.textAlign = egret.HorizontalAlign.CENTER;
        this.tip.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.tip.text = "Go!";
        this.tip.scaleX = 1;
        this.tip.scaleY = 1;
        this.tip.alpha = 0;
        this.addChild(this.tip);
        var ta = egret.Tween.get(this.tip).wait(200).to({ alpha: 1 }, 1).to({ alpha: 0, scaleX: 4, scaleY: 4 }, 1000, egret.Ease.backIn).call(this.go, this);
    };
    CardGame.prototype.go = function () {
        console.log("开始");
        this.removeChild(this.tip);
        this.is_lock = 0;
        this.addEventListener(egret.Event.ENTER_FRAME, this.gameViewUpdate, this);
        this.parentTime = new Date().getTime();
    };
    CardGame.prototype.gameViewUpdate = function (evt) {
        var nowTime = new Date().getTime();
        this._lastTime = nowTime - this.parentTime;
        var currentTime = Math.floor(this._lastTime / 100) / 10;
        Util.cardTime = currentTime;
        var str = currentTime.toFixed(1) + "秒";
        this.board.tip.text = str;
    };
    CardGame.prototype.turn = function (evt) {
        if (this.is_lock == 1) {
            return;
        }
        console.log(evt.target.id_card);
        var i = evt.target.id_card;
        if (evt.target.is_turn == 0) {
            if (this.first == -1) {
                evt.target.turn_ani();
                evt.target.is_turn = 1;
                this.first = i;
            }
            else {
                evt.target.turn_ani();
                evt.target.is_turn = 1;
                this.check_turn(i);
            }
        }
    };
    CardGame.prototype.check_turn = function (n) {
        this.is_lock = 1;
        if (this.cards[n].id_word == this.cards[this.first].id_word) {
            this.sucess_turn++;
            var _sound = RES.getRes("right_mp3");
            _sound.play(0, 1);
            if (this.sucess_turn == 1) {
                this.pei_cx1 = "" + this.wordArry[this.cards[this.first].id_card].cx;
                this.pei_str1 = "" + this.wordArry[this.cards[this.first].id_card].str + "-" + this.wordArry[this.cards[n].id_card].str;
                console.log(this.pei_cx1);
                console.log(this.pei_str1);
                this.hero.tip.textColor = 0xdb6638;
                this.hero.tip.y = Util.h - 280;
                this.hero.tip.x = 60;
                this.hero.tip.textFlow = [
                    { text: "答对配对词666：\n", style: { "textColor": 0x000000 } },
                    { text: this.pei_cx1 + "：", style: { "textColor": 0x000000 } },
                    { text: this.pei_str1 + "\n", style: { "textColor": 0xdb6638 } }
                ];
            }
            else if (this.sucess_turn == 2) {
                this.pei_cx2 = "" + this.wordArry[this.cards[this.first].id_card].cx;
                this.pei_str2 = "" + this.wordArry[this.cards[this.first].id_card].str + "-" + this.wordArry[this.cards[n].id_card].str;
                this.hero.tip.textFlow = [
                    { text: "答对配对词666：\n", style: { "textColor": 0x000000 } },
                    { text: this.pei_cx1 + "：", style: { "textColor": 0x000000 } },
                    { text: this.pei_str1 + "\n", style: { "textColor": 0xdb6638 } },
                    { text: this.pei_cx2 + "：", style: { "textColor": 0x000000 } },
                    { text: this.pei_str2 + "\n", style: { "textColor": 0xdb6638 } }
                ];
            }
            else {
                this.pei_cx3 = "" + this.wordArry[this.cards[this.first].id_card].cx;
                this.pei_str3 = "" + this.wordArry[this.cards[this.first].id_card].str + "-" + this.wordArry[this.cards[n].id_card].str;
                this.hero.tip.textFlow = [
                    { text: "答对配对词666：\n", style: { "textColor": 0x000000 } },
                    { text: this.pei_cx1 + "：", style: { "textColor": 0x000000 } },
                    { text: this.pei_str1 + "\n", style: { "textColor": 0xdb6638 } },
                    { text: this.pei_cx2 + "：", style: { "textColor": 0x000000 } },
                    { text: this.pei_str2 + "\n", style: { "textColor": 0xdb6638 } },
                    { text: this.pei_cx3 + "：", style: { "textColor": 0x000000 } },
                    { text: this.pei_str3 + "\n", style: { "textColor": 0xdb6638 } }
                ];
            }
            if (this.sucess_turn == 3) {
                console.log("完成");
                this.removeEventListener(egret.Event.ENTER_FRAME, this.gameViewUpdate, this);
                egret.setTimeout(this.overGame, this, 500);
            }
            // egret.setTimeout(this.cards[this.first].sucess_light,this,200);
            // egret.setTimeout(this.cards[n].sucess_light,this,200);
            var _color = Util.colors.shift();
            this.cards[n].sucess_light(_color);
            this.cards[this.first].sucess_light(_color);
            this.first = -1;
            this.is_lock = 0;
        }
        else {
            var _sound = RES.getRes("wrong_mp3");
            _sound.play(0, 1);
            egret.setTimeout(function () {
                this.cards[n].turn_ani();
                this.cards[n].is_turn = 0;
                this.cards[this.first].turn_ani();
                this.cards[this.first].is_turn = 0;
                this.first = -1;
                this.is_lock = 0;
            }, this, 300);
        }
    };
    CardGame.prototype.overGame = function () {
        this.sun_light = new egret.Bitmap(RES.getRes("sun_light_png"));
        this.addChild(this.sun_light);
        this.addChild(this.board);
        this.board.tip.size = 50;
        this.board.tip.text = "比赛结果";
        this.sun_light.anchorOffsetX = 325;
        this.sun_light.anchorOffsetY = 342;
        this.sun_light.scaleX = 1.5;
        this.sun_light.scaleY = 1.5;
        this.sun_light.x = 325;
        this.sun_light.y = 400;
        var ta = egret.Tween.get(this.sun_light, { loop: true }).to({ rotation: 360 }, 4500);
        var masksun = new egret.Shape();
        masksun.graphics.beginFill(0x000000);
        masksun.graphics.drawRect(0, 150, 640, 550);
        masksun.graphics.endFill;
        this.addChild(masksun);
        this.sun_light.mask = masksun;
        this.tip_result = new egret.TextField();
        this.tip_result.size = 100;
        this.tip_result.textColor = 0x000000;
        this.tip_result.fontFamily = "fzdhjt";
        this.tip_result.width = 600;
        this.tip_result.height = 600;
        this.tip_result.anchorOffsetX = this.tip_result.width / 2;
        this.tip_result.anchorOffsetY = this.tip_result.height / 2;
        this.tip_result.x = 320;
        this.tip_result.y = 380;
        this.tip_result.textAlign = egret.HorizontalAlign.CENTER;
        this.tip_result.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.tip_result.textFlow = [
            { text: Util.cardTime + " 秒\n", style: { "size": 80, "textColor": 0xdb6638 } },
            { text: "与第一名仅有一步之遥\n", style: { "size": 35 } },
            { text: "继续下一关，还有翻盘的机会!", style: { "size": 35 } }
        ];
        this.tip_result.scaleX = 0.2;
        this.tip_result.scaleY = 0.2;
        this.tip_result.alpha = 0;
        this.addChild(this.tip_result);
        var ta = egret.Tween.get(this.tip_result).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 600, egret.Ease.backOut).call(this.nextGame, this);
    };
    CardGame.prototype.nextGame = function () {
        var _this = this;
        this.hero.tip.textColor = 0x000000;
        this.hero.tip.y = Util.h - 300;
        this.hero.tip.x = 70;
        this.hero.tip.textFlow = [
            { text: "分组小贴士：\n", style: { "size": 28 } },
            { text: "       词义相近\n", style: { "size": 28, "textColor": 0xdb6638 } },
            { text: "       词性相同\n", style: { "size": 28, "textColor": 0xdb6638 } },
            { text: "       主题唯一\n", style: { "size": 28, "textColor": 0xdb6638 } },
            { text: "牢记关键词分组三个原则，你将成为买家眼中的超级明星！", style: { "size": 28 } },
        ];
        // TyperText.getInstance().typerEffect(this.hero.tip,"觉得选词眼花，分组缭乱？其实，SO esay，只需保证每个单元关键词的词义相近，词性相同，主题唯一,你将成为他她它们眼中的超级明星",15);
        this.btn = new egret.Bitmap(RES.getRes("nextBtn_png"));
        this.addChild(this.btn);
        this.btn.anchorOffsetX = this.btn.width / 2;
        this.btn.anchorOffsetY = this.btn.height / 2;
        this.btn.x = 320;
        this.btn.y = 550;
        this.btn.alpha = 0;
        this.btn.scaleX = 0.1;
        this.btn.scaleY = 0.1;
        egret.Tween.get(this.btn).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 450, egret.Ease.backOut);
        this.btn.touchEnabled = true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var _sound = RES.getRes("qie_mp3");
            _sound.play(0, 1);
            _this.parent.del_cardGame();
        }, this);
    };
    return CardGame;
}(egret.DisplayObjectContainer));
__reflect(CardGame.prototype, "CardGame");
var RuleBoard = (function (_super) {
    __extends(RuleBoard, _super);
    function RuleBoard() {
        var _this = _super.call(this) || this;
        _this.rule_board = new egret.Bitmap(RES.getRes("rule_board_png"));
        _this.addChild(_this.rule_board);
        _this.rule_board.width = 550;
        _this.rule_board.height = 550 * 0.77;
        _this.tip = new egret.TextField();
        _this.tip.x = _this.rule_board.x + 25;
        _this.tip.y = _this.rule_board.y + 50;
        _this.tip.size = 30;
        _this.tip.textColor = 0x000000;
        _this.tip.fontFamily = "fzdhjt";
        _this.tip.width = 500;
        _this.tip.textAlign = egret.HorizontalAlign.CENTER;
        _this.tip.textFlow = [
            { text: "第一关 游戏规则\n", style: { "bold": true } },
            { text: "\n" },
            { text: "将同类词两两配对\n" },
            { text: "如：" },
            { text: "苹果-香蕉\n", style: { "textColor": 0xdb6638 } },
            { text: "配对成功即可形成推广词组，\n" },
            { text: "招徕顾客！\n" },
            { text: "用时越短，获胜几率越高！\n" },
        ];
        _this.addChild(_this.tip);
        return _this;
    }
    return RuleBoard;
}(egret.Sprite));
__reflect(RuleBoard.prototype, "RuleBoard");
//# sourceMappingURL=CardGame.js.map