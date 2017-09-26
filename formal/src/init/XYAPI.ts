
var __rect_XY: egret.Rectangle = new egret.Rectangle();
var __point_XY: egret.Point = new egret.Point();

var __soundIdMap: any = {};
var __soundIdCounter: number = 0;

var __shakeInfo: any = {};

var __htmlTextParser: egret.HtmlTextParser = new egret.HtmlTextParser();



function trace(...rest): void {
    console.log.apply(console, rest);
}

function warn(...rest): void {
    console.warn.apply(console, rest);
}

/**
 * 设置滚动条一直显示
 * 
 * 添加滚动条代码：
    <e:Skin>
        <e:VScrollBar id="verticalScrollBar" visible="true" autoVisibility="false" width="11" height="100%" right="-20">
            <e:Skin>
                <e:Image height="100%"  source="p4_2_png" x="5" scale9Grid="2,5,6,48" />
                <e:Image id="thumb" height="30" x="5" scale9Grid="2,5,6,20" source="p4_1_png" />
            </e:Skin>
        </e:VScrollBar>
    </e:Skin>
 */
function setScollerBarAlwaysShow_XY(scl: eui.Scroller): void {
    if (!scl.verticalScrollBar) {
        return;
    }
    scl.verticalScrollBar.autoVisibility = false;
    scl.verticalScrollBar.visible = true;
}

function setImageUrl(img: eui.Image, url: string): void {
    img.visible = false;
    RES.getResByUrl(url, (data, ul) => {

        img.source = data;
        img.visible = true;
    }, this, RES.ResourceItem.TYPE_IMAGE);
}

function tween_XY_hand(hand: egret.DisplayObject, startX?: number, startY?: number): void {
    if (isNaN(startX)) {
        if (!hand['__bornX']) {
            hand['__bornX'] = hand.x;
            hand['__bornY'] = hand.y;
        }
        startX = hand['__bornX'];
        startY = hand['__bornY'];
    }
    hand.x = startX;
    hand.y = startY;
    egret.Tween.get(hand, { loop: true })
        .to({ x: startX + 15, y: startY + 25 }, 500)
        .to({ x: startX, y: startY }, 300);
}

function tween_XY_alphaShow(obj: egret.DisplayObject): void {
    obj.alpha = 0;

    Tween$.get(obj).to({ alpha: 1 }, 300);
}

function exec(scriptCode: string, useScriptTag?: boolean): string {
    if (!scriptCode) return scriptCode;
    if (window['execScript'] && !useScriptTag) {
        window['execScript'](scriptCode);
    } else {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.text = scriptCode;
        document.body.appendChild(script);
        document.body.removeChild(script);
    }
    return scriptCode;
}

function loadJs_XY(url: string): void {
    var script: HTMLScriptElement = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}

function loadCss_XY(url: string): void {
    var css: HTMLLinkElement = document.createElement('link');
    css.href = url;
    css.rel = "stylesheet";
    css.type = "text/css";
    css.charset = "utf-8";
    document.body.appendChild(css);
}

function newBitmap_XY(key?: string): egret.Bitmap {
    return new egret.Bitmap(key ? RES.getRes(key) : null);
}

function newImage_XY(key?: string): eui.Image {
    return new eui.Image(key ? RES.getRes(key) : null);
}

function placeholder_XY(tf: egret.TextField, defaultColor: number, defaultText: string, rsColor: number): void {
    tf['__rsColor'] = rsColor;
    tf['__defaultText'] = defaultText;
    tf.textColor = defaultColor;
    tf.text = defaultText;

    bindTapEventOnce_XY(tf, (e: egret.TouchEvent) => {
        var ttf: egret.TextField = e.currentTarget as egret.TextField;
        ttf.text = '';
        ttf.textColor = ttf['__rsColor'];
    }, null);
}

function verifyPhone_XY(phone: string): boolean {
    return (/^1[3|4|5|7|8]\d{9}$/.test(phone));
}

function verifyEmail_XY(email: string): boolean {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return filter.test(email);
}

function createUniqueArray_XY(arr: any[]): any[] {
    if (!arr || arr.length <= 0) {
        return [];
    }
    var rs: any[] = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (rs.indexOf(arr[i]) == -1) {
            rs.push(arr[i]);
        }
    }
    return rs;
}

function validateAngle_XY(diff): number {
    if (Math.abs(diff) > 270) {
        if (diff > 0) {
            diff -= 360;
        } else {
            diff += 360;
        }
    }

    return diff;
}

function updateHtmlTitle(title: string): void {
    //利用iframe的onload事件刷新页面
    document.title = title;
    if (Global.cfg.isAndroid) {
        return;
    }
    var iframe: HTMLIFrameElement = document.createElement('iframe') as HTMLIFrameElement;
    iframe.src = 'empty.html';

    iframe.onload = function () {
        setTimeout(function () {
            iframe.onload = null;
            document.body.removeChild(iframe);
        }, 0);
    };
    document.body.appendChild(iframe);
}

function copyChar_XY(char: string, count: number): string {
    var rs: string = '';
    for (var i = 0; i < count; i++) {
        rs += char;
    }
    return rs;
}


/**
 * format 00:00
 * @param second
 */
function formatTime_XY(second: number): string {
    var minute: number = Math.min(59, int_XY(second / 60));
    var minStr: string = minute + '';
    if (minute < 10) {
        minStr = '0' + minStr;
    }

    second = second % 60;
    var secStr: string = second + '';

    if (second < 10) {
        secStr = '0' + secStr;
    }
    return minStr + ':' + secStr;
}

function randomInt_XY(start: number, end: number): number {
    return Math.floor(start + (end - start + 1) * Math.random());
}

function randomFromArray_XY(arr: Array<any>): any {
    return arr[randomInt_XY(0, arr.length - 1)];
}


function randomUniqueFromArray_XY(arr: Array<any>, count: number): any[] {
    count = verifyRange_XY(count, 0, arr.length);
    var rs: any[] = [];
    var max: number = 1000;

    while (count > 0 && max > 0) {
        var r: any = randomFromArray_XY(arr);
        if (rs.indexOf(r) == -1) {
            rs.push(r);
            count--;
        }

        max--;
    }

    return rs;
}

function trim_XY(str: string): string {
    var reg: RegExp = new RegExp(' ', 'g');
    str = str.replace(reg, '');
    return str;
}

function remove_XY(child: egret.DisplayObject): void {
    if (child == null || child.parent == null) {
        return;
    }

    child.parent.removeChild(child);
}

function format_XY(format: string, ...args): string {
    for (var i = 0; i < args.length; ++i)
        format = format.replace(new RegExp("\\{" + i + "\\}", "g"), args[i]);

    return format;
}

function skipUrlParam_XY(url: string): string {
    var idx: number = url.indexOf("?");
    if (idx == -1) {
        return url;
    }
    return url.substr(0, idx);
}

function centerAnchor_XY(target: egret.DisplayObject, size?: number[]): void {
    if (!size) {
        __rect_XY.setEmpty();
        target.anchorOffsetX = 0;
        target.anchorOffsetY = 0;
        target.getBounds(__rect_XY);
        target.anchorOffsetX = target.width / 2 + __rect_XY.x;
        target.anchorOffsetY = target.height / 2 + __rect_XY.y;
    } else {
        target.anchorOffsetX = size[0] / 2;
        target.anchorOffsetY = size[1] / 2;
    }

    target.x += target.anchorOffsetX;
    target.y += target.anchorOffsetY;
}

function setAnchor_XY(target: egret.DisplayObject, loc: number[]): void {
    target.anchorOffsetX = loc[0];
    target.anchorOffsetY = loc[1];
    target.x += target.anchorOffsetX;
    target.y += target.anchorOffsetY;
}

function int_XY(value: any): number {
    if (value == null) {
        return 0;
    }
    var rs: number = parseInt(value + '');
    if (isNaN(rs)) {
        return 0;
    }
    return rs;
}

function verifyRange_XY(value: number, min: number, max: number): number {
    return Math.max(Math.min(value, max), min);
}

/**
 * 返回当前设备方向，0-横，1-竖
 */
function getCurrentDeviceOrient_XY(): number {

    if (window.orientation === 180 || window.orientation === 0) {
        return 1;
    }
    return 0;

    // if (egret.Capabilities.boundingClientWidth > egret.Capabilities.boundingClientHeight) {
    //     return 0;
    // }

    // return 1;

    // if (window.orientation == 0 || window.orientation == 180){
    //     return 1;
    // }
    // return 0;
}


function setHtmlText(tf: egret.TextField, htmlText: string): void {
    tf.textFlow = __htmlTextParser.parser(htmlText);
}

function setDomByRect_XY(domId: string, rect: egret.Rectangle): void {
    var dom: HTMLElement = document.getElementById(domId);
    if (!dom) {
        return;
    }
    dom.style.left = rect.x + 'px';
    dom.style.top = rect.y + 'px';
    dom.style.width = rect.width + 'px';
    dom.style.height = rect.height + 'px';
}

function egretToDomRect_XY(dis: egret.DisplayObject, stage: egret.Stage, rect?: egret.Rectangle): egret.Rectangle {
    if (!dis.parent) {
        return null;
    }
    var rs: egret.Rectangle = rect ? rect : new egret.Rectangle();
    var domWidth: number = egret.Capabilities.boundingClientWidth;
    var domHeight: number = egret.Capabilities.boundingClientHeight;
    var stageWidth: number = stage.stageWidth;
    var stageHeight: number = stage.stageHeight;

    if (getCurrentDeviceOrient_XY() == 1) {
        stageWidth = stage.stageHeight;
        stageHeight = Global.stage.stageWidth;
    }

    var e: egret.StageOrientationEvent;

    // trace(domWidth + ',' + domHeight + ',' + stageWidth + ',' + stageHeight);

    dis.parent.localToGlobal(dis.x - dis.anchorOffsetX, dis.y - dis.anchorOffsetY, __point_XY);

    if (stage.scaleMode == egret.StageScaleMode.SHOW_ALL) {
        var sc: number = Math.min(domWidth / stageWidth, domHeight / stageHeight);
        rs.x = __point_XY.x * sc + (domWidth - stageWidth * sc) / 2;
        rs.y = __point_XY.y * sc + (domHeight - stageHeight * sc) / 2;

        rs.width = dis.width * sc;
        rs.height = dis.height * sc;
    } else if (stage.scaleMode == egret.StageScaleMode.EXACT_FIT) {
        sc = domWidth / stageWidth;
        var sc1: number = domHeight / stageHeight;
        rs.x = __point_XY.x * sc;
        rs.y = __point_XY.y * sc1;

        rs.width = dis.width * sc;
        rs.height = dis.height * sc1;
    } else {
        trace('Error! 不支持的转换方式');
        return null;
    }

    return rs;
}

function bindTapEvent_XY(target: egret.EventDispatcher, onHandler: Function, obj?: any): void {
    if (obj == null) {
        obj = target;
    }
    target.addEventListener(egret.TouchEvent.TOUCH_TAP, onHandler, obj);
}

function setDirtyRender_XY(enable: boolean): void {
    Global.stage.dirtyRegionPolicy = enable ? DirtyRegionPolicy$.ON : DirtyRegionPolicy$.OFF;
}


function bindTapEventOnce_XY(target: egret.EventDispatcher, onHandler: Function, obj?: any): void {
    if (obj == null) {
        obj = target;
    }
    target.once(egret.TouchEvent.TOUCH_TAP, onHandler, obj);
}


function bindEuiCreateOkEventOnce_XY(target: egret.EventDispatcher, onHandler: Function, obj?: any): void {
    if (obj == null) {
        obj = target;
    }
    target.once(eui.UIEvent.CREATION_COMPLETE, onHandler, obj);
}

var __moveSwipeDic: any[] = [];
var __moveStartLocation: egret.Point = new egret.Point();


/**
 * @param target
 * @param onHandler onHandler(swipe:number) 往拿个方向滑动？ 0-上， 1-下， 2-左， 3-右
 * @param obj
 */
function bindMoveSwipeEvent_XY(target: egret.EventDispatcher, onHandler: Function, obj?: any): void {
    if (obj == null) {
        obj = target;
    }

    __moveSwipeDic.push([target, onHandler, obj]);

    target.addEventListener(egret.TouchEvent.TOUCH_BEGIN, __onBeginTouchHandler, null);
    target.addEventListener(egret.TouchEvent.TOUCH_END, __onEndTouchHandler, null);
}

function __onBeginTouchHandler(e: egret.TouchEvent): void {
    __moveStartLocation.setTo(e.stageX, e.stageY);
}

function __onEndTouchHandler(e: egret.TouchEvent): void {
    var disX: number = e.stageX - __moveStartLocation.x;
    var disY: number = e.stageY - __moveStartLocation.y;
    var swipe: number = 0;
    if (Math.abs(disX) > Math.abs(disY)) {
        swipe = disX > 0 ? 3 : 2;
    } else {
        swipe = disY > 0 ? 1 : 0;
    }

    for (var i = 0; i < __moveSwipeDic.length; i++) {
        var arr: any[] = __moveSwipeDic[i];
        if (e.currentTarget == arr[0]) {
            var fun: Function = arr[1];
            fun.apply(arr[2], [swipe]);
        }
    }
}

/**
 * 等待groupName加载完后执行
 * 如果已经加载完，则立刻执行
 */
function groupLoadExecute(groupName: string, fun: Function, thisObj: any): void {
    trace(groupName + ', ' + RES.isGroupLoaded(groupName));
    if (RES.isGroupLoaded(groupName)) {
        fun.apply(thisObj);
        return;
    }

    if (thisObj['___' + groupName]) {
        return;
    }

    Global.eventCenter.once(groupName, fun, thisObj);

    RES.loadGroup(groupName);

    thisObj['___' + groupName] = true;
}

function waitGroupAndExecute(groupName: string, fun: Function, thisObj: any): void {
    if (RES.isGroupLoaded(groupName)) {
        fun.apply(thisObj);
        return;
    }

    if (thisObj['___' + groupName]) {
        return;
    }

    Global.eventCenter.once(groupName, fun, thisObj);

    thisObj['___' + groupName] = true;
}

function sendNotifacation_XY(name: string, body?: any, type?: any): void {
    //puremvc.Facade.getInstance().sendNotification(name,body,type);
}

function http_XY(url: string, callback: Function, obj: any, method?: string, dataFormat?: string, urlvars?: any): void {
    var http: Http = Http.make();
    http.start(url, callback, obj, method, dataFormat, urlvars);
}

function httpPostSmart_XY(url: string, callback: Function, obj: any, param?: any): void {
    var urlvars: egret.URLVariables;
    if (param) {
        urlvars = new egret.URLVariables();
        urlvars.variables = param;
    }
    http_XY(url, callback, obj, egret.URLRequestMethod.POST, egret.URLLoaderDataFormat.TEXT, urlvars);
}

function httpPost_XY(url: string, callback: Function, obj: any, urlvars?: egret.URLVariables): void {
    http_XY(url, callback, obj, egret.URLRequestMethod.POST, egret.URLLoaderDataFormat.TEXT, urlvars);
}

function addResizeHandler_XY(call: Function, obj: any): void {
    ResizeCall.addCall(call, obj);
}

function base64ToTexture_XY(base64: string): egret.Texture {
    var img: HTMLImageElement = new Image();
    img.src = base64;
    var texture = new egret.Texture();
    var bitmapdata = new egret.BitmapData(img);
    texture._setBitmapData(bitmapdata);
    return texture;
}

function parseJsonSafe_XY(str: string): any {
    var json: any;
    try {
        json = JSON.parse(str);
    } catch (e) {
    }

    return json;
}

function stopAllEffectSound_XY(): void {
    for (var key in __soundIdMap) {
        var audioHtml: HTMLAudioElement = document.getElementById(__soundIdMap[key]) as HTMLAudioElement;
        try {
            audioHtml.pause();
        } catch (error) {
        }

        try {
            audioHtml.remove();
        } catch (error) {

        }
    }
    __soundIdMap = {};
}

function readyEffectSound_XY(url: string, autoPath: boolean = true): void {
    if (autoPath) {
        url = 'resource/media/' + url + '?v=' + Global.sourceVer;
    }
    var id: string = __soundIdMap[url];
    var audioHtml: HTMLAudioElement;

    if (!id) {
        audioHtml = document.createElement('audio');
        id = 'effectSound_' + __soundIdCounter;
        audioHtml.id = id;
        audioHtml.className = 'music';
        audioHtml.style.position = 'absolute';
        audioHtml.style.top = '0px';
        audioHtml.style.left = '0px';
        audioHtml.style.zIndex = '-999';
        // audioHtml.style.display = 'none';
        __soundIdCounter++;

        document.body.appendChild(audioHtml);
        audioHtml.src = url;
        audioHtml.preload = 'preload';
        __soundIdMap[url] = id;
    }
}

function playEffectSound_XY(url: string, loop: boolean, autoPath: boolean = true): void {
    if (!PageManager.isSoundOn) {
        return;
    }
    if (autoPath) {
        url = 'resource/media/' + url + '?v=' + Global.sourceVer;
    }
    var id: string = __soundIdMap[url];
    var audioHtml: HTMLAudioElement;

    if (!id) {
        audioHtml = document.createElement('audio');
        id = 'effectSound_' + __soundIdCounter;
        audioHtml.id = id;
        audioHtml.style.position = 'absolute';
        audioHtml.style.top = '0px';
        audioHtml.style.left = '0px';
        audioHtml.style.zIndex = '-999';
        // audioHtml.style.display = 'none';
        __soundIdCounter++;

        document.body.appendChild(audioHtml);
        audioHtml.src = url;
        audioHtml.preload = 'preload';
        audioHtml.autoplay = true;
        __soundIdMap[url] = id;
    } else {
        audioHtml = document.getElementById(id) as HTMLAudioElement;
    }

    try {
        audioHtml.currentTime = 0;
        audioHtml.loop = loop;
    } catch (e) { }

    try {
        audioHtml.play();
    } catch (e) { }

}

function startTrackShake_XY(countUpdateCall: (count: number) => void, callObj: any): void {
    __shakeInfo = {
        mshake: 4000,
        mlast_update: 0,
        mcount: 0,
        mx: 0,
        my: 0,
        mz: 0,
        mlast_x: 0,
        mlast_y: 0,
        mlast_z: 0,
        call: countUpdateCall,
        obj: callObj
    };
    window.addEventListener("devicemotion", __deviceMotionHandler);
}

function __deviceMotionHandler(eventData) {
    var acceleration = eventData.accelerationIncludingGravity;
    var currTime = egret.getTimer();
    var diffTime = currTime - __shakeInfo.mlast_update;

    if (diffTime > 50) {
        __shakeInfo.mlast_update = currTime;
        __shakeInfo.mx = acceleration.x;
        __shakeInfo.my = acceleration.y;
        __shakeInfo.mz = acceleration.z;
        var speed = Math.abs(__shakeInfo.mx + __shakeInfo.my + __shakeInfo.mz - __shakeInfo.mlast_x - __shakeInfo.mlast_y - __shakeInfo.mlast_z) / diffTime * 10000
        if (speed > __shakeInfo.mshake) {
            __shakeInfo.mcount++;
            __shakeInfo.call.apply(__shakeInfo.obj, [__shakeInfo.mcount]);
        }
        __shakeInfo.mlast_x = __shakeInfo.mx;
        __shakeInfo.mlast_y = __shakeInfo.my;
        __shakeInfo.mlast_z = __shakeInfo.mz;
    }
}

function stopTrackShake_XY(): void {
    window.removeEventListener("devicemotion", __deviceMotionHandler);
    __shakeInfo = {};
}

function textCount(text: string): number {
    var count: number = 0;
    var pattern: RegExp = /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/; //验证中文
    for (var i: number = 0; i < text.length; i++) {
        var stt: string = text.charAt(i);
        if (pattern.test(stt)) {
            count += 2;
        } else {
            count += 1;
        }
    }
    return count;
}










/**************************  class  *************************** */

class ResizeCall {
    private static mCalls: any[] = [];

    public static init(stage: egret.Stage): void {
        stage.addEventListener(egret.Event.RESIZE, ResizeCall.onCall, ResizeCall);
    }

    public static addCall(call: Function, obj: any): void {
        ResizeCall.mCalls.push({ fun: call, obj: obj });
    }

    public static del(call: Function, obj: any): void {
        for (var i = 0; i < ResizeCall.mCalls.length; i++) {
            var ob: any = ResizeCall.mCalls[i];
            if (ob.fun == call && ob.obj == obj) {
                ResizeCall.mCalls.splice(i, 1);
                i--;
            }
        }
    }

    private static onCall(): void {
        for (var i = 0; i < ResizeCall.mCalls.length; i++) {
            var fun: Function = ResizeCall.mCalls[i].fun;
            var obj: any = ResizeCall.mCalls[i].obj;
            fun.apply(obj);
        }
    }
}

class Http extends egret.URLLoader {
    private static mPool: Http[] = [];

    public static make(): Http {
        if (Http.mPool.length > 0) {
            return Http.mPool.shift();
        }
        return new Http();
    }

    private mCall: Function;
    private mObj: any;

    public constructor() {
        super();
    }

    public start(url: string, callback: Function, obj: any, method?: string, dataFormat?: string, urlvars?: any): void {

        var self = this;
        if (!dataFormat) {
            dataFormat = egret.URLLoaderDataFormat.TEXT;
        }

        if (!method) {
            method = egret.URLRequestMethod.GET;
        }
        self.mCall = callback;
        self.mObj = obj;
        self.dataFormat = dataFormat;

        var req: egret.URLRequest = new egret.URLRequest(url);
        req.method = method;
        if (urlvars) {
            req.data = urlvars;
        }
        self.load(req);

        self.addEventListener(egret.Event.COMPLETE, self.onComplete, self);
        self.addEventListener(egret.IOErrorEvent.IO_ERROR, self.onError, self);
        trace('发出请求:' + url + '\n param:' + JSON.stringify(urlvars));
    }

    private onComplete(): void {
        if (this.mCall) {
            this.mCall.apply(this.mObj, [this.data]);
        }
        trace('请求成功,返回:' + this.data);
        this.collect();
    }

    private onError(e: any): void {
        if (this.mCall) {
            this.mCall.apply(this.mObj, [null]);
        }
        this.collect();
        trace('请求失败！');
    }

    private collect(): void {
        this.mCall = null;
        this.mObj = null;

        egret.setTimeout(Http.mPool.push, Http.mPool, 1, this);
    }

}
