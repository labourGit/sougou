var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __rect_XY = new egret.Rectangle();
var __point_XY = new egret.Point();
var __soundIdMap = {};
var __soundIdCounter = 0;
var __shakeInfo = {};
var __htmlTextParser = new egret.HtmlTextParser();
function trace() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log.apply(console, rest);
}
function warn() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
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
function setScollerBarAlwaysShow_XY(scl) {
    if (!scl.verticalScrollBar) {
        return;
    }
    scl.verticalScrollBar.autoVisibility = false;
    scl.verticalScrollBar.visible = true;
}
function setImageUrl(img, url) {
    img.visible = false;
    RES.getResByUrl(url, function (data, ul) {
        img.source = data;
        img.visible = true;
    }, this, RES.ResourceItem.TYPE_IMAGE);
}
function tween_XY_hand(hand, startX, startY) {
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
function tween_XY_alphaShow(obj) {
    obj.alpha = 0;
    Tween$.get(obj).to({ alpha: 1 }, 300);
}
function exec(scriptCode, useScriptTag) {
    if (!scriptCode)
        return scriptCode;
    if (window['execScript'] && !useScriptTag) {
        window['execScript'](scriptCode);
    }
    else {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.text = scriptCode;
        document.body.appendChild(script);
        document.body.removeChild(script);
    }
    return scriptCode;
}
function loadJs_XY(url) {
    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}
function loadCss_XY(url) {
    var css = document.createElement('link');
    css.href = url;
    css.rel = "stylesheet";
    css.type = "text/css";
    css.charset = "utf-8";
    document.body.appendChild(css);
}
function newBitmap_XY(key) {
    return new egret.Bitmap(key ? RES.getRes(key) : null);
}
function newImage_XY(key) {
    return new eui.Image(key ? RES.getRes(key) : null);
}
function placeholder_XY(tf, defaultColor, defaultText, rsColor) {
    tf['__rsColor'] = rsColor;
    tf['__defaultText'] = defaultText;
    tf.textColor = defaultColor;
    tf.text = defaultText;
    bindTapEventOnce_XY(tf, function (e) {
        var ttf = e.currentTarget;
        ttf.text = '';
        ttf.textColor = ttf['__rsColor'];
    }, null);
}
function verifyPhone_XY(phone) {
    return (/^1[3|4|5|7|8]\d{9}$/.test(phone));
}
function verifyEmail_XY(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return filter.test(email);
}
function createUniqueArray_XY(arr) {
    if (!arr || arr.length <= 0) {
        return [];
    }
    var rs = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (rs.indexOf(arr[i]) == -1) {
            rs.push(arr[i]);
        }
    }
    return rs;
}
function validateAngle_XY(diff) {
    if (Math.abs(diff) > 270) {
        if (diff > 0) {
            diff -= 360;
        }
        else {
            diff += 360;
        }
    }
    return diff;
}
function updateHtmlTitle(title) {
    //利用iframe的onload事件刷新页面
    document.title = title;
    if (Global.cfg.isAndroid) {
        return;
    }
    var iframe = document.createElement('iframe');
    iframe.src = 'empty.html';
    iframe.onload = function () {
        setTimeout(function () {
            iframe.onload = null;
            document.body.removeChild(iframe);
        }, 0);
    };
    document.body.appendChild(iframe);
}
function copyChar_XY(char, count) {
    var rs = '';
    for (var i = 0; i < count; i++) {
        rs += char;
    }
    return rs;
}
/**
 * format 00:00
 * @param second
 */
function formatTime_XY(second) {
    var minute = Math.min(59, int_XY(second / 60));
    var minStr = minute + '';
    if (minute < 10) {
        minStr = '0' + minStr;
    }
    second = second % 60;
    var secStr = second + '';
    if (second < 10) {
        secStr = '0' + secStr;
    }
    return minStr + ':' + secStr;
}
function randomInt_XY(start, end) {
    return Math.floor(start + (end - start + 1) * Math.random());
}
function randomFromArray_XY(arr) {
    return arr[randomInt_XY(0, arr.length - 1)];
}
function randomUniqueFromArray_XY(arr, count) {
    count = verifyRange_XY(count, 0, arr.length);
    var rs = [];
    var max = 1000;
    while (count > 0 && max > 0) {
        var r = randomFromArray_XY(arr);
        if (rs.indexOf(r) == -1) {
            rs.push(r);
            count--;
        }
        max--;
    }
    return rs;
}
function trim_XY(str) {
    var reg = new RegExp(' ', 'g');
    str = str.replace(reg, '');
    return str;
}
function remove_XY(child) {
    if (child == null || child.parent == null) {
        return;
    }
    child.parent.removeChild(child);
}
function format_XY(format) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < args.length; ++i)
        format = format.replace(new RegExp("\\{" + i + "\\}", "g"), args[i]);
    return format;
}
function skipUrlParam_XY(url) {
    var idx = url.indexOf("?");
    if (idx == -1) {
        return url;
    }
    return url.substr(0, idx);
}
function centerAnchor_XY(target, size) {
    if (!size) {
        __rect_XY.setEmpty();
        target.anchorOffsetX = 0;
        target.anchorOffsetY = 0;
        target.getBounds(__rect_XY);
        target.anchorOffsetX = target.width / 2 + __rect_XY.x;
        target.anchorOffsetY = target.height / 2 + __rect_XY.y;
    }
    else {
        target.anchorOffsetX = size[0] / 2;
        target.anchorOffsetY = size[1] / 2;
    }
    target.x += target.anchorOffsetX;
    target.y += target.anchorOffsetY;
}
function setAnchor_XY(target, loc) {
    target.anchorOffsetX = loc[0];
    target.anchorOffsetY = loc[1];
    target.x += target.anchorOffsetX;
    target.y += target.anchorOffsetY;
}
function int_XY(value) {
    if (value == null) {
        return 0;
    }
    var rs = parseInt(value + '');
    if (isNaN(rs)) {
        return 0;
    }
    return rs;
}
function verifyRange_XY(value, min, max) {
    return Math.max(Math.min(value, max), min);
}
/**
 * 返回当前设备方向，0-横，1-竖
 */
function getCurrentDeviceOrient_XY() {
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
function setHtmlText(tf, htmlText) {
    tf.textFlow = __htmlTextParser.parser(htmlText);
}
function setDomByRect_XY(domId, rect) {
    var dom = document.getElementById(domId);
    if (!dom) {
        return;
    }
    dom.style.left = rect.x + 'px';
    dom.style.top = rect.y + 'px';
    dom.style.width = rect.width + 'px';
    dom.style.height = rect.height + 'px';
}
function egretToDomRect_XY(dis, stage, rect) {
    if (!dis.parent) {
        return null;
    }
    var rs = rect ? rect : new egret.Rectangle();
    var domWidth = egret.Capabilities.boundingClientWidth;
    var domHeight = egret.Capabilities.boundingClientHeight;
    var stageWidth = stage.stageWidth;
    var stageHeight = stage.stageHeight;
    if (getCurrentDeviceOrient_XY() == 1) {
        stageWidth = stage.stageHeight;
        stageHeight = Global.stage.stageWidth;
    }
    var e;
    // trace(domWidth + ',' + domHeight + ',' + stageWidth + ',' + stageHeight);
    dis.parent.localToGlobal(dis.x - dis.anchorOffsetX, dis.y - dis.anchorOffsetY, __point_XY);
    if (stage.scaleMode == egret.StageScaleMode.SHOW_ALL) {
        var sc = Math.min(domWidth / stageWidth, domHeight / stageHeight);
        rs.x = __point_XY.x * sc + (domWidth - stageWidth * sc) / 2;
        rs.y = __point_XY.y * sc + (domHeight - stageHeight * sc) / 2;
        rs.width = dis.width * sc;
        rs.height = dis.height * sc;
    }
    else if (stage.scaleMode == egret.StageScaleMode.EXACT_FIT) {
        sc = domWidth / stageWidth;
        var sc1 = domHeight / stageHeight;
        rs.x = __point_XY.x * sc;
        rs.y = __point_XY.y * sc1;
        rs.width = dis.width * sc;
        rs.height = dis.height * sc1;
    }
    else {
        trace('Error! 不支持的转换方式');
        return null;
    }
    return rs;
}
function bindTapEvent_XY(target, onHandler, obj) {
    if (obj == null) {
        obj = target;
    }
    target.addEventListener(egret.TouchEvent.TOUCH_TAP, onHandler, obj);
}
function setDirtyRender_XY(enable) {
    Global.stage.dirtyRegionPolicy = enable ? DirtyRegionPolicy$.ON : DirtyRegionPolicy$.OFF;
}
function bindTapEventOnce_XY(target, onHandler, obj) {
    if (obj == null) {
        obj = target;
    }
    target.once(egret.TouchEvent.TOUCH_TAP, onHandler, obj);
}
function bindEuiCreateOkEventOnce_XY(target, onHandler, obj) {
    if (obj == null) {
        obj = target;
    }
    target.once(eui.UIEvent.CREATION_COMPLETE, onHandler, obj);
}
var __moveSwipeDic = [];
var __moveStartLocation = new egret.Point();
/**
 * @param target
 * @param onHandler onHandler(swipe:number) 往拿个方向滑动？ 0-上， 1-下， 2-左， 3-右
 * @param obj
 */
function bindMoveSwipeEvent_XY(target, onHandler, obj) {
    if (obj == null) {
        obj = target;
    }
    __moveSwipeDic.push([target, onHandler, obj]);
    target.addEventListener(egret.TouchEvent.TOUCH_BEGIN, __onBeginTouchHandler, null);
    target.addEventListener(egret.TouchEvent.TOUCH_END, __onEndTouchHandler, null);
}
function __onBeginTouchHandler(e) {
    __moveStartLocation.setTo(e.stageX, e.stageY);
}
function __onEndTouchHandler(e) {
    var disX = e.stageX - __moveStartLocation.x;
    var disY = e.stageY - __moveStartLocation.y;
    var swipe = 0;
    if (Math.abs(disX) > Math.abs(disY)) {
        swipe = disX > 0 ? 3 : 2;
    }
    else {
        swipe = disY > 0 ? 1 : 0;
    }
    for (var i = 0; i < __moveSwipeDic.length; i++) {
        var arr = __moveSwipeDic[i];
        if (e.currentTarget == arr[0]) {
            var fun = arr[1];
            fun.apply(arr[2], [swipe]);
        }
    }
}
/**
 * 等待groupName加载完后执行
 * 如果已经加载完，则立刻执行
 */
function groupLoadExecute(groupName, fun, thisObj) {
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
function waitGroupAndExecute(groupName, fun, thisObj) {
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
function sendNotifacation_XY(name, body, type) {
    //puremvc.Facade.getInstance().sendNotification(name,body,type);
}
function http_XY(url, callback, obj, method, dataFormat, urlvars) {
    var http = Http.make();
    http.start(url, callback, obj, method, dataFormat, urlvars);
}
function httpPostSmart_XY(url, callback, obj, param) {
    var urlvars;
    if (param) {
        urlvars = new egret.URLVariables();
        urlvars.variables = param;
    }
    http_XY(url, callback, obj, egret.URLRequestMethod.POST, egret.URLLoaderDataFormat.TEXT, urlvars);
}
function httpPost_XY(url, callback, obj, urlvars) {
    http_XY(url, callback, obj, egret.URLRequestMethod.POST, egret.URLLoaderDataFormat.TEXT, urlvars);
}
function addResizeHandler_XY(call, obj) {
    ResizeCall.addCall(call, obj);
}
function base64ToTexture_XY(base64) {
    var img = new Image();
    img.src = base64;
    var texture = new egret.Texture();
    var bitmapdata = new egret.BitmapData(img);
    texture._setBitmapData(bitmapdata);
    return texture;
}
function parseJsonSafe_XY(str) {
    var json;
    try {
        json = JSON.parse(str);
    }
    catch (e) {
    }
    return json;
}
function stopAllEffectSound_XY() {
    for (var key in __soundIdMap) {
        var audioHtml = document.getElementById(__soundIdMap[key]);
        try {
            audioHtml.pause();
        }
        catch (error) {
        }
        try {
            audioHtml.remove();
        }
        catch (error) {
        }
    }
    __soundIdMap = {};
}
function readyEffectSound_XY(url, autoPath) {
    if (autoPath === void 0) { autoPath = true; }
    if (autoPath) {
        url = 'resource/media/' + url + '?v=' + Global.sourceVer;
    }
    var id = __soundIdMap[url];
    var audioHtml;
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
function playEffectSound_XY(url, loop, autoPath) {
    if (autoPath === void 0) { autoPath = true; }
    if (!PageManager.isSoundOn) {
        return;
    }
    if (autoPath) {
        url = 'resource/media/' + url + '?v=' + Global.sourceVer;
    }
    var id = __soundIdMap[url];
    var audioHtml;
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
    }
    else {
        audioHtml = document.getElementById(id);
    }
    try {
        audioHtml.currentTime = 0;
        audioHtml.loop = loop;
    }
    catch (e) { }
    try {
        audioHtml.play();
    }
    catch (e) { }
}
function startTrackShake_XY(countUpdateCall, callObj) {
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
        var speed = Math.abs(__shakeInfo.mx + __shakeInfo.my + __shakeInfo.mz - __shakeInfo.mlast_x - __shakeInfo.mlast_y - __shakeInfo.mlast_z) / diffTime * 10000;
        if (speed > __shakeInfo.mshake) {
            __shakeInfo.mcount++;
            __shakeInfo.call.apply(__shakeInfo.obj, [__shakeInfo.mcount]);
        }
        __shakeInfo.mlast_x = __shakeInfo.mx;
        __shakeInfo.mlast_y = __shakeInfo.my;
        __shakeInfo.mlast_z = __shakeInfo.mz;
    }
}
function stopTrackShake_XY() {
    window.removeEventListener("devicemotion", __deviceMotionHandler);
    __shakeInfo = {};
}
function textCount(text) {
    var count = 0;
    var pattern = /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/; //验证中文
    for (var i = 0; i < text.length; i++) {
        var stt = text.charAt(i);
        if (pattern.test(stt)) {
            count += 2;
        }
        else {
            count += 1;
        }
    }
    return count;
}
/**************************  class  *************************** */
var ResizeCall = (function () {
    function ResizeCall() {
    }
    ResizeCall.init = function (stage) {
        stage.addEventListener(egret.Event.RESIZE, ResizeCall.onCall, ResizeCall);
    };
    ResizeCall.addCall = function (call, obj) {
        ResizeCall.mCalls.push({ fun: call, obj: obj });
    };
    ResizeCall.del = function (call, obj) {
        for (var i = 0; i < ResizeCall.mCalls.length; i++) {
            var ob = ResizeCall.mCalls[i];
            if (ob.fun == call && ob.obj == obj) {
                ResizeCall.mCalls.splice(i, 1);
                i--;
            }
        }
    };
    ResizeCall.onCall = function () {
        for (var i = 0; i < ResizeCall.mCalls.length; i++) {
            var fun = ResizeCall.mCalls[i].fun;
            var obj = ResizeCall.mCalls[i].obj;
            fun.apply(obj);
        }
    };
    return ResizeCall;
}());
ResizeCall.mCalls = [];
__reflect(ResizeCall.prototype, "ResizeCall");
var Http = (function (_super) {
    __extends(Http, _super);
    function Http() {
        return _super.call(this) || this;
    }
    Http.make = function () {
        if (Http.mPool.length > 0) {
            return Http.mPool.shift();
        }
        return new Http();
    };
    Http.prototype.start = function (url, callback, obj, method, dataFormat, urlvars) {
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
        var req = new egret.URLRequest(url);
        req.method = method;
        if (urlvars) {
            req.data = urlvars;
        }
        self.load(req);
        self.addEventListener(egret.Event.COMPLETE, self.onComplete, self);
        self.addEventListener(egret.IOErrorEvent.IO_ERROR, self.onError, self);
        trace('发出请求:' + url + '\n param:' + JSON.stringify(urlvars));
    };
    Http.prototype.onComplete = function () {
        if (this.mCall) {
            this.mCall.apply(this.mObj, [this.data]);
        }
        trace('请求成功,返回:' + this.data);
        this.collect();
    };
    Http.prototype.onError = function (e) {
        if (this.mCall) {
            this.mCall.apply(this.mObj, [null]);
        }
        this.collect();
        trace('请求失败！');
    };
    Http.prototype.collect = function () {
        this.mCall = null;
        this.mObj = null;
        egret.setTimeout(Http.mPool.push, Http.mPool, 1, this);
    };
    return Http;
}(egret.URLLoader));
Http.mPool = [];
__reflect(Http.prototype, "Http");
//# sourceMappingURL=XYAPI.js.map