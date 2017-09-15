class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        
    }

    private onAddToStage(event: egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        // this.loadingView = new LoadingUI();
        // this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("loading");
        Global.stage = this.stage;
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        Util.h=h*640/w;
        console.log(Util.h);
        Global.ss = 640 / 1050 * h / w;
        if (egret.Capabilities.os == "Windows PC" || egret.Capabilities.os == "Mac OS") {
            this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;          
        }
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "loading") {
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
            RES.loadGroup("p1");
        }
        else if (event.groupName == "p1") {
            this.stage.removeChild(this.loadingView);
            //            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            //            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            //            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene1();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "p1") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }
    public static loadNum = 0;
    private textfield: egret.TextField;
    private game:Game;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene1(): void {
        
        // this.loadps();
        // window['playSound']('resource/assets/bg.mp3', 'loop');
        this.game= new Game();
        this.addChild(this.game);
    }

    private loadps(): void {
        console.log("加载序列");
        if (Global.all.length > 0) {
            RES.loadGroup(Global.all.shift());
            this.loadps();
        } else {
            Main.loadNum = 1;
            console.log(Main.loadNum);

        }
    }
    public get _game():Game{
        return this.game
    }
}