class ImageDrawTool {
	private static helpRect: egret.Rectangle = new egret.Rectangle();
	private static lib: any = {};

	public static addToDraw(fileName: string, display: egret.DisplayObject, isPNG: boolean = true, x: number = 0, y: number = 0, width: number = -1, height: number = -1): void {
		if (width <= 0) {
			width = display.width;
		}

		if (height <= 0) {
			height = display.height;
		}

		ImageDrawTool.helpRect.setTo(x, y, width, height);

		var texture: egret.RenderTexture = new egret.RenderTexture();
		texture.drawToTexture(display, ImageDrawTool.helpRect);

		ImageDrawTool.lib[fileName] = texture.toDataURL(isPNG ? 'image/png' : 'image/jpeg');

		trace('add', fileName, ' to lib done');
	}

	public static download(autoClear: boolean = true): void {
		var fileName: string = 'batchFile.txt';
		var content: string = JSON.stringify(ImageDrawTool.lib);
		var aLink: HTMLAnchorElement = document.createElement('a');
		URL = window['webkitURL'] || window['mozURL'] || window.URL;
		var blob = new Blob([content], { type: 'application/zip' });
		var url: string = URL.createObjectURL(blob);

		aLink['download'] = fileName;

		aLink.href = url;
		aLink.click();

		URL.revokeObjectURL(url);

		if (autoClear) {
			ImageDrawTool.clear();
		}
	}

	public static clear(): void {
		ImageDrawTool.lib = {};
	}
}