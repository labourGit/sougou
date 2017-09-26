/**
 *
 * @author 
 *
 */
class ScaleYoYo {
    private static obj: egret.DisplayObject;
    private static adding: boolean;
    private static oldScale: egret.Point = new egret.Point();
    
    public static start(obj: egret.DisplayObject): void {
        ScaleYoYo.obj = null;
        
        var self = ScaleYoYo;
        
        EnterFrameCall.del(self.tickHandler,self); 
        
        self.obj = obj;
        
        self.oldScale.setTo(obj.scaleX,obj.scaleY);
        
        self.adding = true;
        
        
        EnterFrameCall.add(self.tickHandler,self);
    }
    
    private static tickHandler(sanp:number):boolean{
        
        var self = ScaleYoYo;
        if(self.adding) {
            self.obj.scaleX += self.oldScale.x*0.04;
            self.obj.scaleY += self.oldScale.y * 0.04;
            
            if(self.obj.scaleX >= self.oldScale.x*1){
                self.adding = false;
            }
        }else{

            self.obj.scaleX -= self.oldScale.x * 0.04;
            self.obj.scaleY -= self.oldScale.y * 0.04;

            if(self.obj.scaleX <= self.oldScale.x * 0.5) {
                self.adding = true;
            }
        }
        return true;
    }
    
    public static stop(): void {
        EnterFrameCall.del(ScaleYoYo.tickHandler,ScaleYoYo);
        ScaleYoYo.obj = null;
    }
}

/**
 *
 * @author 
 *
 */
class ScaleYoYo1 {
    private static obj: egret.DisplayObject;
    private static adding: boolean;
    private static oldScale: egret.Point = new egret.Point();
    
    public static start(obj: egret.DisplayObject): void {
        ScaleYoYo1.obj = null;
        
        var self = ScaleYoYo1;
        
        EnterFrameCall.del(self.tickHandler,self); 
        
        self.obj = obj;
        
        self.oldScale.setTo(obj.scaleX,obj.scaleY);
        
        self.adding = true;
        
        
        EnterFrameCall.add(self.tickHandler,self);
    }
    
    private static tickHandler(sanp:number):boolean{
        
        var self = ScaleYoYo1;
        if(self.adding) {
            self.obj.scaleX += self.oldScale.x*0.04;
            self.obj.scaleY += self.oldScale.y * 0.04;
            
            if(self.obj.scaleX >= self.oldScale.x*1){
                self.adding = false;
            }
        }else{

            self.obj.scaleX -= self.oldScale.x * 0.04;
            self.obj.scaleY -= self.oldScale.y * 0.04;

            if(self.obj.scaleX <= self.oldScale.x * 0.5) {
                self.adding = true;
            }
        }
        return true;
    }
    
    public static stop(): void {
        EnterFrameCall.del(ScaleYoYo1.tickHandler,ScaleYoYo1);
        ScaleYoYo1.obj = null;
    }
}
