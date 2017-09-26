/**
 *
 * @author 
 *
 */
class EnterFrameCall {
    private static mStage:egret.Stage;
    private static mCalls:any[] = [];
    
    public static init(stage:egret.Stage):void{
        EnterFrameCall.mStage = stage;
        
        stage.addEventListener(egret.Event.ENTER_FRAME, EnterFrameCall.onEnterFrame, EnterFrameCall)
    }
    
    private static onEnterFrame(e:any):void{
        for(var i = 0;i < EnterFrameCall.mCalls.length;i++) {
            var obj: any = EnterFrameCall.mCalls[i];
            obj[0].apply(obj[1]);
        }
    }
    
    public static add(call:Function, thisObj:any):void{
        for(var i = 0;i < EnterFrameCall.mCalls.length; i++) {
            var obj:any = EnterFrameCall.mCalls[i];
            if(obj[0] == call && obj[1] == thisObj){
                return;
            }
        }
        
        EnterFrameCall.mCalls.push([call, thisObj]);
    }
    
    public static del(call:Function, thisObj:any):void{
        for(var i = 0;i < EnterFrameCall.mCalls.length;i++) {
            var obj: any = EnterFrameCall.mCalls[i];
            if(obj[0] == call && obj[1] == thisObj) {
                EnterFrameCall.mCalls.splice(i, 1);
                return;
            }
        }
    }
}
