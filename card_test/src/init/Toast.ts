class Toast extends egret.DisplayObjectContainer {
    private static mContainer: egret.Stage;

    constructor() {
        super();
    }

    public static init(stage: egret.Stage): void {
        this.mContainer = stage;
    }

    public static getStage(): egret.Stage {
        return Toast.mContainer;
    }

    /**
     * 创建一个Toast弹窗的方法,需game，tween库支持
     * 使用：Toast.show(html文本，消失时间（可选）)
     * 前提： 
     *       1.需要先在游戏初始化时，初始化Toast.init(主舞台)
     */
    public static show(htmlText: string, duration: number = 1200): void {
        if (this.mContainer) {
            var toast: ObjToast = ObjToast.make();
            this.mContainer.addChild(toast);
            toast.setHtmlText(htmlText);
            toast.x = (this.mContainer.stageWidth - toast.bg.width) / 2;
            var iy :number = (this.mContainer.stageHeight - toast.bg.height) * 0.4;

            toast.y = iy + 30;
            toast.alpha = 0;
            egret.Tween.get(toast)
                .to({ alpha: 1, y: iy }, 500, egret.Ease.quintOut)
                .wait(duration)
                .to({ alpha: 0, y: iy - 50 }, 500, egret.Ease.quintIn)
                .call((o: ObjToast) => {
                    ObjToast.collect(o);
                }, null, [toast]);
        }
    }
}

class ObjToast extends egret.Sprite {
    private static mPool: ObjToast[] = [];

    private tf: egret.TextField;
    public bg: egret.Shape;

    public static make(): ObjToast {
        if (ObjToast.mPool.length > 0) {
            return ObjToast.mPool.shift();
        }

        return new ObjToast();
    }

    public static collect(obj: ObjToast): void {
        egret.Tween.removeTweens(obj);
        if (obj.parent) {
            obj.parent.removeChild(obj);
        }

        egret.setTimeout((o: ObjToast) => {
            ObjToast.mPool.push(o);
        }, null, 1, obj);
    }

    constructor() {
        super();

        this.bg = new egret.Shape();
        this.addChild(this.bg);

        this.tf = new egret.TextField();
        this.tf.fontFamily = 'Microsoft Yahei';
        this.tf.size = 26;
        this.tf.lineSpacing = 8;
        this.tf.multiline = true;
        this.tf.wordWrap = true;
        this.addChild(this.tf);
    }

    public setHtmlText(value: string) {
        this.tf.width = Toast.getStage().stageWidth * 0.8;
        this.tf.height = Toast.getStage().stageHeight;
        if (this.tf) {
            this.tf.textFlow = new egret.HtmlTextParser().parser(value);
        }
        this.bg.graphics.clear();
        this.tf.width = this.tf.textWidth;
        this.tf.height = this.tf.textHeight;

        this.tf.x = 25;
        this.tf.y = 15;

        this.bg.graphics.beginFill(0x1E1E1E, 0.8);
        this.bg.graphics.drawRoundRect(0, 0, this.tf.width + 50, this.tf.height + 30, 15, 15);
        this.bg.graphics.endFill();
    }
}