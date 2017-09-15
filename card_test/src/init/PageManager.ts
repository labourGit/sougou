/**
 *
 * @author 
 *
 */
class PageManager {
    public static pageIndex: number = -1;
    private static dic: any = {};

    private static resizeAdded: boolean;

    private static mRoot: egret.DisplayObjectContainer;

    private static sound: eui.Image;
    public static isSoundOn: boolean = true;
    private static bgmChannel: egret.SoundChannel;

    public static init(root: egret.DisplayObjectContainer): void {
        PageManager.mRoot = root;
    }

    private static initSound(): void {
        if (PageManager.sound) {
            return;
        }
        PageManager.sound = new eui.Image();
        bindTapEvent_XY(PageManager.sound, PageManager.onSound, PageManager);
        addResizeHandler_XY(PageManager.soundResize, PageManager);

        PageManager.showSound();


        PageManager.isSoundOn = false;
        PageManager.onSound(null);
    }


    public static showPageWidthMovie(pageIndex: number, swipe: number): egret.DisplayObject {
        var oldPage: egret.DisplayObject = PageManager.dic['Page' + PageManager.pageIndex];
        if (!oldPage) {
            PageManager.showPage(pageIndex);
            return;
        }

        if(PageManager.pageIndex == pageIndex){
            return;
        }

        PageManager.pageIndex = pageIndex;

        trace("current movie page:" + pageIndex);

        var pageName: string = "Page" + pageIndex;
        var page: any = PageManager.dic[pageName];

        if (!page) {
            var clazz: any = egret.getDefinitionByName(pageName);
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

        var tm: number = 500;

        if (swipe == 0) {
            oldPage.y = 0;
            page.y = Global.stage.stageHeight;

            egret.Tween.get(oldPage).to({ y: -Global.stage.stageHeight }, tm).call(PageManager.pageMovieComplete, PageManager, [page]);
            egret.Tween.get(page).to({ y: 0 }, tm);
        } else if (swipe == 2) {
            oldPage.x = 0;
            page.x = Global.stage.stageWidth;
            egret.Tween.get(oldPage).to({ x: -Global.stage.stageWidth }, tm).call(PageManager.pageMovieComplete, PageManager, [page]);
            egret.Tween.get(page).to({ x: 0 }, tm);
        } else {
            oldPage.y = 0;
            page.y = -Global.stage.stageHeight;

            egret.Tween.get(oldPage).to({ y: Global.stage.stageHeight }, tm).call(PageManager.pageMovieComplete, PageManager, [page]);
            egret.Tween.get(page).to({ y: 0 }, tm);
        }

        PageManager.initSound();

        PageManager.mRoot.addChild(PageManager.sound);
        PageManager.soundResize();

        return page;
    }

    private static pageMovieComplete(page: egret.DisplayObject): void {
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
    }

    private static clearAll(except?: egret.DisplayObject): void {
        for (var i: number = 0; i < PageManager.mRoot.numChildren; i++) {
            var cld: any = PageManager.mRoot.getChildAt(i);

            if (except != cld && cld.onHide) {
                cld.onHide();
            }
        }
        PageManager.mRoot.removeChildren();
    }


    public static showPage(pageIndex: number, unclear?: Boolean): egret.DisplayObject {
        // if(PageManager.pageIndex == pageIndex){
        //     return;
        // }

        PageManager.pageIndex = pageIndex;

        trace("currentPage:" + pageIndex);

        var pageName: string = "Page" + pageIndex;
        var page: any = PageManager.dic[pageName];

        if (!unclear) {
            PageManager.clearAll();
        }

        if (!page) {
            var clazz: any = egret.getDefinitionByName(pageName);
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

        if (PageManager.pageIndex == 73 ) {
            remove_XY(PageManager.sound);
        }

        return page;
    }



    public static showPageWithEffect(pageIndex: number): egret.DisplayObject {
        var oldPage: egret.DisplayObject = PageManager.dic['Page' + PageManager.pageIndex];
        if (!oldPage) {
            PageManager.showPage(pageIndex);
            return;
        }

        PageManager.pageIndex = pageIndex;

        trace("current effect page:" + pageIndex);

        var pageName: string = "Page" + pageIndex;
        var page: any = PageManager.dic[pageName];

        if (!page) {
            var clazz: any = egret.getDefinitionByName(pageName);
            if (clazz) {
                page = new clazz();
                PageManager.dic[pageName] = page;
            }
        }


        if (page) {
            PageManager.mRoot.addChildAt(page, 0);
        }

        egret.Tween.removeTweens(oldPage);

        var tm: number = 800;

        var oldx:number = oldPage.anchorOffsetX;
        var oldy:number = oldPage.anchorOffsetY;
        centerAnchor_XY(oldPage, [Global.stage.stageWidth, Global.stage.stageHeight]);

        egret.Tween.get(oldPage)
            .to({ alpha: 0, scaleX: 2, scaleY: 2 }, tm)
            .call((param, p1, ox, oy) => { 
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
    }

    public static showPageWithEffect2(pageIndex: number): egret.DisplayObject {
        var oldPage: egret.DisplayObject = PageManager.dic['Page' + PageManager.pageIndex];
        if (!oldPage) {
            PageManager.showPage(pageIndex);
            return;
        }

        PageManager.pageIndex = pageIndex;

        trace("current effect page:" + pageIndex);

        var pageName: string = "Page" + pageIndex;
        var page: any = PageManager.dic[pageName];

        if (!page) {
            var clazz: any = egret.getDefinitionByName(pageName);
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

        var tm: number = 400;

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
    }


    private static showSound(): void {
        var sd: eui.Image = PageManager.sound;
        sd.source = RES.getRes('music_on_png');
        sd.anchorOffsetX = 25;
        sd.anchorOffsetY = 25;
        Global.stage.addChild(PageManager.sound);
        PageManager.soundResize();
    }

    private static onSound(e: egret.Event): void {
        var sd: eui.Image = PageManager.sound;

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
        } else {
            egret.Tween.removeTweens(sd);
        }
    }

    public static soundResize(): void {
        PageManager.sound.x = Global.stage.stageWidth - 50 - 15 + 25;
        PageManager.sound.y = 15 + 25;
    }

//     public static setSoundVisible(): void {
//         PageManager.mRoot.addChild(PageManager.sound);
//         if($('music')){
//             $('music').style.display = '';
//         }
//     }
//     public static setSoundHide(): void {
//         remove_XY(PageManager.sound);
//         if($('music')){
//             $('music').style.display = 'none';
//         }
//     }
}
