/**
 *
 * @author 
 *
 */
class AlphaYoYo {
    private static obj: egret.DisplayObject;
    private static adding: boolean;
    
    public static start(obj: egret.DisplayObject): void {
        if(AlphaYoYo.obj){
            AlphaYoYo.stop();
        }
        
        AlphaYoYo.obj = null;
        
        var self = AlphaYoYo;
        
        EnterFrameCall.del(self.tickHandler,self); 
        
        self.obj = obj;
        
        self.adding = true;
        
        
        EnterFrameCall.add(self.tickHandler,self);
    }
    
    private static tickHandler(sanp:number):boolean{
        
        var self = AlphaYoYo;
        if(self.adding) {
            self.obj.alpha += 0.06;
            if ( self.obj.alpha >= 1){
                self.adding = false;
            }
        }else{

            self.obj.alpha -= 0.06;
            if ( self.obj.alpha <= 0 ) {
                self.adding = true;
            }
        }
        return true;
    }
    
    public static stop(): void {
        EnterFrameCall.del(AlphaYoYo.tickHandler,AlphaYoYo);
        AlphaYoYo.obj = null;
    }
}

/**
 *
 * @author 
 *
 */
class AlphaYoYo1 {
    private static obj: egret.DisplayObject;
    private static adding: boolean;
    
    public static start(obj: egret.DisplayObject): void {
        if(AlphaYoYo1.obj){
            AlphaYoYo1.stop();
        }
        
        AlphaYoYo1.obj = null;
        
        var self = AlphaYoYo1;
        
        EnterFrameCall.del(self.tickHandler,self); 
        
        self.obj = obj;
        
        self.adding = true;
        
        
        EnterFrameCall.add(self.tickHandler,self);
    }
    
    private static tickHandler(sanp:number):boolean{
        
        var self = AlphaYoYo1;
        if(self.adding) {
            self.obj.alpha += 0.06;
            if ( self.obj.alpha >= 1){
                self.adding = false;
            }
        }else{

            self.obj.alpha -= 0.06;
            if ( self.obj.alpha <= 0 ) {
                self.adding = true;
            }
        }
        return true;
    }
    
    public static stop(): void {
        EnterFrameCall.del(AlphaYoYo1.tickHandler,AlphaYoYo1);
        AlphaYoYo1.obj = null;
    }
}
