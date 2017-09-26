/**
 *
 * @author 
 *
 */
class ConfigVO {
    public networkType:string = '';
    
    public index: string;
    public checklogin: string;
    public getsharecontent: string;
    public saveshare: string;

    /*****************************自定义逻辑变量start*********************************/
    public chanceName:string;
    public copyright:string;
    public ruleInfo:string;
    public defaultWaitTimeSec:number;
    public ballMoveSpeed:number;
    public safeDoorPercent:number;
    public fallToCSpeed:number;
    public percentRandomLib:number[];
    /*****************************自定义逻辑变量 end *********************************/

    public qa0:any[];
    public qa1:any[];
    public qa2:any[];

    public isAndroid: boolean;
    public resource: string;
    public needCheckLogin:boolean;
    public rootPath:string;
    public needCross: boolean;
    public shareUseTitle:boolean;


}
