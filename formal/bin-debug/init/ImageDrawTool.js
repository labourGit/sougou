var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ImageDrawTool = (function () {
    function ImageDrawTool() {
    }
    ImageDrawTool.addToDraw = function (fileName, display, isPNG, x, y, width, height) {
        if (isPNG === void 0) { isPNG = true; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = -1; }
        if (height === void 0) { height = -1; }
        if (width <= 0) {
            width = display.width;
        }
        if (height <= 0) {
            height = display.height;
        }
        ImageDrawTool.helpRect.setTo(x, y, width, height);
        var texture = new egret.RenderTexture();
        texture.drawToTexture(display, ImageDrawTool.helpRect);
        ImageDrawTool.lib[fileName] = texture.toDataURL(isPNG ? 'image/png' : 'image/jpeg');
        trace('add', fileName, ' to lib done');
    };
    ImageDrawTool.download = function (autoClear) {
        if (autoClear === void 0) { autoClear = true; }
        var fileName = 'batchFile.txt';
        var content = JSON.stringify(ImageDrawTool.lib);
        var aLink = document.createElement('a');
        URL = window['webkitURL'] || window['mozURL'] || window.URL;
        var blob = new Blob([content], { type: 'application/zip' });
        var url = URL.createObjectURL(blob);
        aLink['download'] = fileName;
        aLink.href = url;
        aLink.click();
        URL.revokeObjectURL(url);
        if (autoClear) {
            ImageDrawTool.clear();
        }
    };
    ImageDrawTool.clear = function () {
        ImageDrawTool.lib = {};
    };
    return ImageDrawTool;
}());
ImageDrawTool.helpRect = new egret.Rectangle();
ImageDrawTool.lib = {};
__reflect(ImageDrawTool.prototype, "ImageDrawTool");
//# sourceMappingURL=ImageDrawTool.js.map