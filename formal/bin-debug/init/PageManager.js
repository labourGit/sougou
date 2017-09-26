var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var PageManager = (function () {
    function PageManager() {
    }
    PageManager.init = function (root) {
        PageManager.mRoot = root;
    };
    PageManager.initSound = function () {
        if (PageManager.sound) {
            return;
        }
        PageManager.sound = new eui.Image();
        bindTapEvent_XY(PageManager.sound, PageManager.onSound, PageManager);
        addResizeHandler_XY(PageManager.soundResize, PageManager);
        PageManager.showSound();
        PageManager.isSoundOn = false;
        PageManager.onSound(null);
    };
    PageManager.showPageWidthMovie = function (pageIndex, swipe) {
        var oldPage = PageManager.dic['Page' + PageManager.pageIndex];
        if (!oldPage) {
            PageManager.showPage(pageIndex);
            return;
        }
        if (PageManager.pageIndex == pageIndex) {
            return;
        }
        PageManager.pageIndex = pageIndex;
        trace("current movie page:" + pageIndex);
        var pageName = "Page" + pageIndex;
        var page = PageManager.dic[pageName];
        if (!page) {
            var clazz = egret.getDefinitionByName(pageName);
            if (clazz) {
                page = new clazz();
                PageManager.dic[pageName] = page;
            }
        }
        if (page) {
            PageManager.mRoot.addChild(page);
        }
        egret.Tween.removeTweens(oldPage);
        egret.Tween.removeTweens(page);
        var tm = 500;
        if (swipe == 0) {
            oldPage.y = 0;
            page.y = Global.stage.stageHeight;
            egret.Tween.get(oldPage).to({ y: -Global.stage.stageHeight }, tm).call(PageManager.pageMovieComplete, PageManager, [page]);
            egret.Tween.get(page).to({ y: 0 }, tm);
        }
        else if (swipe == 2) {
            oldPage.x = 0;
            page.x = Global.stage.stageWidth;
            egret.Tween.get(oldPage).to({ x: -Global.stage.stageWidth }, tm).call(PageManager.pageMovieComplete, PageManager, [page]);
            egret.Tween.get(page).to({ x: 0 }, tm);
        }
        else {
            oldPage.y = 0;
            page.y = -Global.stage.stageHeight;
            egret.Tween.get(oldPage).to({ y: Global.stage.stageHeight }, tm).call(PageManager.pageMovieComplete, PageManager, [page]);
            egret.Tween.get(page).to({ y: 0 }, tm);
        }
        PageManager.initSound();
        PageManager.mRoot.addChild(PageManager.sound);
        PageManager.soundResize();
        return page;
    };
    PageManager.pageMovieComplete = function (page) {
        PageManager.clearAll(page);
        PageManager.mRoot.addChild(page);
        if (page['init']) {
            page['init']();
        }
        PageManager.mRoot.addChild(PageManager.sound);
        trace('clear');
        if (PageManager.pageIndex == 101 || PageManager.pageIndex == 0) {
            remove_XY(PageManager.sound);
        }
    };
    PageManager.clearAll = function (except) {
        for (var i = 0; i < PageManager.mRoot.numChildren; i++) {
            var cld = PageManager.mRoot.getChildAt(i);
            if (except != cld && cld.onHide) {
                cld.onHide();
            }
        }
        PageManager.mRoot.removeChildren();
    };
    PageManager.showPage = function (pageIndex, unclear) {
        // if(PageManager.pageIndex == pageIndex){
        //     return;
        // }
        PageManager.pageIndex = pageIndex;
        trace("currentPage:" + pageIndex);
        var pageName = "Page" + pageIndex;
        var page = PageManager.dic[pageName];
        if (!unclear) {
            PageManager.clearAll();
        }
        if (!page) {
            var clazz = egret.getDefinitionByName(pageName);
            if (clazz) {
                page = new clazz();
                PageManager.dic[pageName] = page;
            }
        }
        if (page) {
            page.x = 0;
            page.y = 0;
            PageManager.mRoot.addChild(page);
            page.init();
        }
        PageManager.initSound();
        PageManager.mRoot.addChild(PageManager.sound);
        PageManager.soundResize();
        if (PageManager.pageIndex == 73) {
            remove_XY(PageManager.sound);
        }
        return page;
    };
    PageManager.showPageWithEffect = function (pageIndex) {
        var oldPage = PageManager.dic['Page' + PageManager.pageIndex];
        if (!oldPage) {
            PageManager.showPage(pageIndex);
            return;
        }
        PageManager.pageIndex = pageIndex;
        trace("current effect page:" + pageIndex);
        var pageName = "Page" + pageIndex;
        var page = PageManager.dic[pageName];
        if (!page) {
            var clazz = egret.getDefinitionByName(pageName);
            if (clazz) {
                page = new clazz();
                PageManager.dic[pageName] = page;
            }
        }
        if (page) {
            PageManager.mRoot.addChildAt(page, 0);
        }
        egret.Tween.removeTweens(oldPage);
        var tm = 800;
        var oldx = oldPage.anchorOffsetX;
        var oldy = oldPage.anchorOffsetY;
        centerAnchor_XY(oldPage, [Global.stage.stageWidth, Global.stage.stageHeight]);
        egret.Tween.get(oldPage)
            .to({ alpha: 0, scaleX: 2, scaleY: 2 }, tm)
            .call(function (param, p1, ox, oy) {
            remove_XY(param);
            param.onHide();
            param.alpha = 1;
            param.scaleX = 1;
            param.scaleY = 1;
            param.anchorOffsetX = ox;
            param.anchorOffsetY = oy;
            p1.init();
        }, PageManager, [oldPage, page, oldx, oldy]);
        PageManager.initSound();
        PageManager.mRoot.addChild(PageManager.sound);
        PageManager.soundResize();
        return page;
    };
    PageManager.showPageWithEffect2 = function (pageIndex) {
        var oldPage = PageManager.dic['Page' + PageManager.pageIndex];
        if (!oldPage) {
            PageManager.showPage(pageIndex);
            return;
        }
        PageManager.pageIndex = pageIndex;
        trace("current effect page:" + pageIndex);
        var pageName = "Page" + pageIndex;
        var page = PageManager.dic[pageName];
        if (!page) {
            var clazz = egret.getDefinitionByName(pageName);
            if (clazz) {
                page = new clazz();
                PageManager.dic[pageName] = page;
            }
        }
        if (page) {
            PageManager.mRoot.addChildAt(page, 0);
            page.init();
        }
        egret.Tween.removeTweens(oldPage);
        remove_XY(oldPage);
        oldPage['onHide']();
        var tm = 400;
        centerAnchor_XY(page, [Global.stage.stageWidth, Global.stage.stageHeight]);
        page.scaleX = 2;
        page.scaleY = 2;
        page.alpha = 0;
        egret.Tween.get(page)
            .to({ alpha: 1, scaleX: 1, scaleY: 1 }, tm);
        PageManager.initSound();
        PageManager.mRoot.addChild(PageManager.sound);
        PageManager.soundResize();
        return page;
    };
    PageManager.showSound = function () {
        var sd = PageManager.sound;
        sd.source = RES.getRes('music_on_png');
        sd.anchorOffsetX = 25;
        sd.anchorOffsetY = 25;
        Global.stage.addChild(PageManager.sound);
        PageManager.soundResize();
    };
    PageManager.onSound = function (e) {
        var sd = PageManager.sound;
        if (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
        PageManager.isSoundOn = !PageManager.isSoundOn;
        sd.source = PageManager.isSoundOn ? RES.getRes('music_on_png') : RES.getRes('musicOff_png');
        PageManager.mRoot.addChild(PageManager.sound);
        if (window['setBgm']) {
            window['setBgm'](PageManager.isSoundOn);
        }
        if (PageManager.isSoundOn) {
            egret.Tween.get(sd, { loop: true }).to({ rotation: 360 + sd.rotation }, 3000);
        }
        else {
            egret.Tween.removeTweens(sd);
        }
    };
    PageManager.soundResize = function () {
        PageManager.sound.x = Global.stage.stageWidth - 50 - 15 + 25;
        PageManager.sound.y = 15 + 25;
    };
    return PageManager;
}());
PageManager.pageIndex = -1;
PageManager.dic = {};
PageManager.isSoundOn = true;
__reflect(PageManager.prototype, "PageManager");
//# sourceMappingURL=PageManager.js.map