/**
 *
 * @author 
 *
 */
class MovieclipController extends egret.EventDispatcher {
    private mImg: egret.Bitmap;
    public frameRate: number;
    private mResLoop: string[];
    private mCount: number = 0;
    private mResCount: number;

    private isBmp: boolean;

    private mPlayed: boolean;

    private mLoop: boolean;

    private yoyoMode: boolean;


    //TODO, yoyo以后就有BUG了
    private resBackLoop: string[];

    public static makeResLoop(formatStr, from: number, to: number): string[] {
        var arr: string[] = [];
        if (from < to) {
            for (var i = from; i <= to; i++) {
                arr.push(format_XY(formatStr, i));
            }
        } else {
            for (var i = from; i >= to; i--) {
                arr.push(format_XY(formatStr, i));
            }
        }
        console.log("donghua");
        return arr;
    }

    public constructor(target: egret.Bitmap, frameRate: number, resLoop: string[]) {
        super();
        this.mImg = target;
        this.frameRate = frameRate;
        this.mResLoop = resLoop;
        this.mResCount = resLoop.length;
    }

    public gotoAndStop(frameIndex: number): void {
        this.stop();
        if (frameIndex < 0) {
            frameIndex = 0;
        }
        if (frameIndex > this.mResCount - 1) {
            frameIndex = this.mResCount - 1;
        }

        this.mImg.texture = RES.getRes(this.mResLoop[frameIndex]);
    }

    public updateResLoop(resLoop: string[]): void {
        this.mResLoop = resLoop;
        this.mResCount = resLoop.length;
        if (this.mPlayed) {
            this.mCount = 0;
            this.mImg.texture = RES.getRes(this.mResLoop[0]);
        }
    }

    public playAsYoyo(): void {
        this.yoyoMode = true;
        this.mLoop = true;
        this.mCount = 0;
        EnterFrameCall.add(this.onRender, this);
        this.mPlayed = true;
    }

    public play(loop?: boolean): void {
        this.yoyoMode = false;
        this.mLoop = loop;
        EnterFrameCall.add(this.onRender, this);
        this.mPlayed = true;
    }

    public stop(): void {
        EnterFrameCall.del(this.onRender, this);
        this.mCount = 0;
        this.mPlayed = false;
        this.yoyoMode = false;
    }

    private onRender(tm: number): boolean {
        this.mCount++;

        if (this.mCount % this.frameRate == 0) {
            var v: number = int_XY(this.mCount / this.frameRate);
            var k: number = v % this.mResCount;

            if (!this.mLoop && v >= this.mResCount) {
                this.stop();
                this.dispatchEventWith(egret.Event.COMPLETE);
                return;
            }

            this.mImg.texture = RES.getRes(this.mResLoop[k]);

            if (k >= this.mResCount - 1 && this.yoyoMode) {
                this.mResLoop = this.mResLoop.reverse();
            }
        }

        return true;
    }

    public getResLoop(): string[] {
        return this.mResLoop;
    }

    public getTarget(): egret.Bitmap {
        return this.mImg;
    }
}
