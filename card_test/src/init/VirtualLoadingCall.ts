class VirtualLoadingCall {
    private static mCall: Function;
    private static mObj: any;
	private static startTime: number

	public static start(call:(num:number)=>void, thisObj: any): void {
		VirtualLoadingCall.mCall = call;
		VirtualLoadingCall.mObj = thisObj;

		EnterFrameCall.add(VirtualLoadingCall.onRender, VirtualLoadingCall);
		VirtualLoadingCall.startTime = egret.getTimer();
	}

	public static stop(): void {
		EnterFrameCall.del(VirtualLoadingCall.onRender, VirtualLoadingCall);
	}

	private static onRender(): void {
		var loadingPro: number = Math.sqrt(2 * 1.1 * (egret.getTimer() - VirtualLoadingCall.startTime));
		if (loadingPro >= 99) {
			loadingPro = 99;
			VirtualLoadingCall.stop();
		}

		VirtualLoadingCall.mCall.apply(VirtualLoadingCall.mObj, [loadingPro]);
	}

}