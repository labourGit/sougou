class SimpleLoading {

	private static _instance: SimpleLoading;

	private str: string = "data:image/png;base64,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";
	public constructor() {

	}

	private __loadingTexture: egret.Texture;
	private loading: eui.Image;
	private sp: egret.Sprite;
	private loadingTime: egret.Timer = new egret.Timer(75, 0);
	private loadingTimeTxt: egret.TextField;
	public static getInstance(): SimpleLoading {
		if (!this._instance) {
			this._instance = new SimpleLoading();
		}
		return this._instance;
	}

	public static show(): void {
		SimpleLoading.getInstance().addLoading('Loading...');
	}

	public static hide(): void {
		SimpleLoading.getInstance().clearLoading();
	}

	public addLoading(loadingTxt: string = "数据加载中"): void {
		if (this.__loadingTexture == null) {
			this.__loadingTexture = base64ToTexture_XY(this.str);
			this.str = "";
		}
		this.clearLoading();
		this.sp = new egret.Sprite();
		this.sp.graphics.beginFill(0x000000, 0.5);
		this.sp.touchEnabled = true;
		this.sp.graphics.drawRect(0, 0, Global.stage.stageWidth, Global.stage.stageHeight);
		this.sp.graphics.endFill();
		Global.stage.addChild(this.sp);

		if (this.loading == null) {
			this.loading = new eui.Image();
			this.loading.scaleX = 0.35;
			this.loading.scaleY = 0.35;
			this.loading.texture = this.__loadingTexture;
			this.loading.anchorOffsetX = this.loading.width / 2;
			this.loading.anchorOffsetY = this.loading.height / 2;
		}
		this.loading.x = Global.stage.stageWidth / 2;

		Global.stage.addChild(this.loading);

		if (loadingTxt != "") {
			this.loadingTimeTxt = new egret.TextField();
			this.loadingTimeTxt.text = loadingTxt;
			this.loadingTimeTxt.textAlign = "center";
			Global.stage.addChild(this.loadingTimeTxt);

		} else {
			if (this.loadingTimeTxt)
				this.loadingTimeTxt.text = "";
		}

		if (this.loadingTimeTxt && this.loadingTimeTxt.parent) {
			this.loadingTimeTxt.x = Global.stage.stageWidth - this.loadingTimeTxt.width >> 1;
			this.loading.y = Global.stage.stageHeight - this.loadingTimeTxt.height >> 1;
			this.loadingTimeTxt.y = this.loading.y + this.loading.height / 2;
		} else {
			this.loading.y = Global.stage.stageHeight / 2;
		}

		if (this.loadingTime != null) {
			this.loadingTime.addEventListener(egret.TimerEvent.TIMER, this.updateRotation, this);
			this.loadingTime.start();
		}

		ResizeCall.addCall(this.resizePosition, this);
	}

	private resizePosition(): void {
		if (this.loadingTimeTxt && this.loadingTimeTxt.parent) {
			this.loadingTimeTxt.x = Global.stage.stageWidth - this.loadingTimeTxt.width >> 1;
			this.loading.y = Global.stage.stageHeight - this.loadingTimeTxt.height >> 1;
			this.loadingTimeTxt.y = this.loading.y + this.loading.height / 2;
		} else {
			this.loading.y = Global.stage.stageHeight / 2;
		}
		this.loading.x = Global.stage.stageWidth / 2;
	}

    private updateRotation(e: egret.TimerEvent): void {
        if (this.loading.rotation >= 360)
            this.loading.rotation = 0;
		this.loading.rotation += 30;
	}

	public clearLoading(): void {
		if (this.loading && this.loading.parent) {
			EnterFrameCall.del(this.updateRotation, this.loading);
			this.loading.parent.removeChild(this.loading);
		}
		if (this.sp && this.sp.parent) {
			this.sp.parent.removeChild(this.sp);
			this.sp = null;
		}
		this.str = "";
		if (this.loadingTimeTxt && this.loadingTimeTxt.parent) {
			this.loadingTimeTxt.text = "";
			this.loadingTimeTxt.parent.removeChild(this.loadingTimeTxt);
		}

		this.loadingTime.reset();
		this.loadingTime.stop();
		this.loadingTime.removeEventListener(egret.TimerEvent.TIMER, this.updateRotation, this);
	}
}