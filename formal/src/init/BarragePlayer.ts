class BarragePlayer {
    private static ins: BarragePlayer;

    private tfs: egret.TextField[] = [];

    public static play(rect: egret.Rectangle, parent: egret.DisplayObjectContainer, text: string, color: number, minTimeDuration: number, maxTimeDuration: number, size:number): void {
        if(!BarragePlayer.ins){
            BarragePlayer.ins = new BarragePlayer();
        }
        BarragePlayer.ins.play(rect, parent, text, color, minTimeDuration, maxTimeDuration, size);
    }

    public play(rect: egret.Rectangle, parent: egret.DisplayObjectContainer, text: string, color: number, minTimeDuration: number, maxTimeDuration: number, size:number): void {
        var tf:egret.TextField = this.made();
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
            .to({x:rect.left - tf.width}, randomInt_XY(minTimeDuration, maxTimeDuration))
            .call(this.collect, this, [tf]);
    }

    private made(): egret.TextField {
        if (this.tfs.length > 0) {
            return this.tfs.shift();
        }

        var tf: egret.TextField = new egret.TextField();
        return tf;
    }

    private collect(tf: egret.TextField): void {
        Tween$.removeTweens(tf);
        remove_XY(tf);
        this.tfs.push(tf);
    }
}