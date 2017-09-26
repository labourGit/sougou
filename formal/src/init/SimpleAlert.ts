class SimpleAlert extends eui.Component {
	private static instance: SimpleAlert;

	private bmp: eui.Image;
	private call:Function;
	private thisObj:any;

	public static show(source:any, closeCall?: Function, obj?: any): void {
		SimpleAlert.getInstance().show(source, closeCall, obj);
	}

	public static hide(): void {
		SimpleAlert.getInstance().hide();
	}

	private static getInstance(): SimpleAlert {
		if (!SimpleAlert.instance) {
			SimpleAlert.instance = new SimpleAlert();
		}

		return SimpleAlert.instance;
	}

	public constructor() {
		super();
	}

	private show(source:any, closeCall?: Function, obj?: any): void {
		this.call = closeCall;
		this.thisObj = obj;
		this.setData(source);
		tween_XY_alphaShow(this);
		Global.stage.addChild(this);
	}

	private setData(source: any): void {
		if (!this.bmp) {
			this.bmp = new eui.Image(source);
			this.addChild(this.bmp);

			bindTapEvent_XY(this, this.onNext, this);
		}

		this.bmp.source = source;
	}

	private onNext(): void {
		if(this.call){
			this.call.apply(this.thisObj);
		}

		this.hide();
	}

	private hide(): void {
		remove_XY(this);
		this.call = null;
		this.thisObj = null;
	}
}