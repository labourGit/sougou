var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BarragePlayer = (function () {
    function BarragePlayer() {
        this.tfs = [];
    }
    BarragePlayer.play = function (rect, parent, text, color, minTimeDuration, maxTimeDuration, size) {
        if (!BarragePlayer.ins) {
            BarragePlayer.ins = new BarragePlayer();
        }
        BarragePlayer.ins.play(rect, parent, text, color, minTimeDuration, maxTimeDuration, size);
    };
    BarragePlayer.prototype.play = function (rect, parent, text, color, minTimeDuration, maxTimeDuration, size) {
        var tf = this.made();
        tf.width = rect.width;
        tf.height = 500;
        tf.touchEnabled = false;
        tf.textColor = color;
        tf.text = text;
        tf.fontFamily = '微软雅黑';
        tf.size = size;
        tf.width = tf.textWidth;
        tf.height = tf.textHeight;
        parent.addChild(tf);
        tf.x = rect.right;
        tf.y = randomInt_XY(rect.top, rect.bottom);
        Tween$.get(tf)
            .to({ x: rect.left - tf.width }, randomInt_XY(minTimeDuration, maxTimeDuration))
            .call(this.collect, this, [tf]);
    };
    BarragePlayer.prototype.made = function () {
        if (this.tfs.length > 0) {
            return this.tfs.shift();
        }
        var tf = new egret.TextField();
        return tf;
    };
    BarragePlayer.prototype.collect = function (tf) {
        Tween$.removeTweens(tf);
        remove_XY(tf);
        this.tfs.push(tf);
    };
    return BarragePlayer;
}());
__reflect(BarragePlayer.prototype, "BarragePlayer");
//# sourceMappingURL=BarragePlayer.js.map