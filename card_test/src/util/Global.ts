/**
 *
 * @author 
 *
 */
class Global {
    public static eventCenter: egret.EventDispatcher = new egret.EventDispatcher();

    public static stage: egret.Stage;

    public static sourceVer: string;

    public static myData: PlayerVO;

    public static cfg: ConfigVO;

    public static sharePage: string;

    private static mEventAdded: boolean;

    private static mAutoQueueLoaderGroupName: string;

    public static Number_a:number;
    public static Number_b:number;
    public static Number_c:number;
    public static Number_d1:number;
    public static Number_d2:number;
    public static Number_e:number;
    public static Number_f1:number;
    public static Number_f2:number;

    public static ss:number;



    /*****************************自定义逻辑变量start*********************************/
    
    /*****************************自定义逻辑变量 end *********************************/


    public static blobKey: string = '_blob';

    public static all: string[] = [
        'p2','p3','p4','p5'
        // 'p2','p3','p4'
    ];
   

    /**
     * 自动加载策略：
     *     1.自动加载优先级是-1
     *     2.同一时刻保持只有一个自动加载组
     */
    public static initRESEvent(): void {
        if (!Global.mEventAdded) {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, Global.onGroupOk, Global);
            Global.mEventAdded = true;

            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, Global.onError, Global);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, Global.onError, Global);
        }
    }

    private static onError(e: RES.ResourceEvent): void {
        try {
            trace(e.type + ',' + JSON.stringify(e.resItem));
        } catch (e) {
            trace('error:' + JSON.stringify(e));
        }
    }

    private static onGroupOk(e: RES.ResourceEvent): void {
        trace(e.groupName + ' load complete!');
        Global.eventCenter.dispatchEventWith(e.groupName);

        if (e.groupName == Global.mAutoQueueLoaderGroupName) {
            Global.mAutoQueueLoaderGroupName = null;
        }

        if (Global.mAutoQueueLoaderGroupName == null && Global.all.length > 0) {
            var groupName: string = Global.all.shift();
            Global.mAutoQueueLoaderGroupName = groupName;
            RES.loadGroup(groupName, -1);
        }
    }

    public static onEvent(eName: string, data?: any): void {
        Global.eventCenter.dispatchEventWith(eName, false, data);
    }


    private static clone(obj): any {
        var n = {};
        for (var key in obj) {
            n[key] = obj[key];
        }
        return n;
    }

}
