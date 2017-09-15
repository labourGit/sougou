class ArrowManager {
	private static _ins: ArrowManager;

	private mImage: egret.Bitmap;

	public constructor() {
		this.mImage = newBitmap_XY('arrow_down2_png');
	}

	public static show(): void {
		ArrowManager.init();

		ArrowManager._ins.show();
	}

	public static setLocToRight():void{
		ArrowManager.init();

		ArrowManager._ins.setLocToRight();
	}

	public static hide(): void {
		ArrowManager.init();
		
		ArrowManager._ins.hide();
	}

	private static init():void{
		if (!ArrowManager._ins) {
			ArrowManager._ins = new ArrowManager();
		}
	}

	public show(): void {
		Global.stage.addChild(this.mImage);
		this.mImage.x = (640 - this.mImage.width) / 2;
		var locY: number = 1050 - 40 - this.mImage.height;
		this.mImage.y = locY;

		Tween$.get(this.mImage, { loop: true })
			.to({ y: locY + 20 }, 500)
			.to({ y: locY }, 500);
	}

	public setLocToRight():void{
		this.mImage.x = 640 - this.mImage.width - 100;
	}

	public hide(): void {
		remove_XY(this.mImage);
		Tween$.removeTweens(this.mImage);
	}
}