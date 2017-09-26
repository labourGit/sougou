/**
 *
 * @author 
 *
 */
class TopYoyo {
    private static obj: egret.DisplayObject;
    private static adding: boolean;
    private static mLoc:number;
    
    public static start(obj: egret.DisplayObject): void {
        TopYoyo.obj = null;
        
        var self = TopYoyo;
        
        self.obj = obj;
        
        self.adding = true;
        self.mLoc = obj.y;
        
        Tween$.removeTweens(obj);
        Tween$.get(obj, {loop:true})
            .to({y:self.mLoc - 20}, 500)
            .to({y:self.mLoc}, 500)
    }
    
    public static stop(): void {
        TopYoyo.obj.y = TopYoyo.mLoc;
        Tween$.removeTweens(TopYoyo.obj);
        TopYoyo.obj = null;
    }
}

class BottomYoyo {
    private static obj: egret.DisplayObject;
    private static adding: boolean;
    private static mLoc:number;
    
    public static start(obj: egret.DisplayObject): void {
        BottomYoyo.obj = null;
        
        var self = BottomYoyo;
        
        self.obj = obj;
        
        self.adding = true;
        self.mLoc = obj.y;
        
        Tween$.removeTweens(obj);
        Tween$.get(obj, {loop:true})
            .to({y:self.mLoc + 20}, 500)
            .to({y:self.mLoc}, 500)
    }
    
    public static stop(): void {
        BottomYoyo.obj.y = BottomYoyo.mLoc;
        Tween$.removeTweens(BottomYoyo.obj);
        BottomYoyo.obj = null;
    }
}

class LeftYoyo {
    private static obj: egret.DisplayObject;
    private static adding: boolean;
    private static mLoc:number;
    
    public static start(obj: egret.DisplayObject): void {
        LeftYoyo.obj = null;
        
        var self = LeftYoyo;
        
        self.obj = obj;
        
        self.adding = true;
        self.mLoc = obj.x;
        
        Tween$.removeTweens(obj);
        Tween$.get(obj, {loop:true})
            .to({x:self.mLoc - 20}, 500)
            .to({x:self.mLoc}, 500)
    }
    
    public static stop(): void {
        LeftYoyo.obj.x = LeftYoyo.mLoc;
        Tween$.removeTweens(LeftYoyo.obj);
        LeftYoyo.obj = null;
    }
}

class RightYoyo {
    private static obj: egret.DisplayObject;
    private static adding: boolean;
    private static mLoc:number;
    
    public static start(obj: egret.DisplayObject): void {
        RightYoyo.obj = null;
        
        var self = RightYoyo;
        
        self.obj = obj;
        
        self.adding = true;
        self.mLoc = obj.x;
        
        Tween$.removeTweens(obj);
        Tween$.get(obj, {loop:true})
            .to({x:self.mLoc + 20}, 500)
            .to({x:self.mLoc}, 500)
    }
    
    public static stop(): void {
        RightYoyo.obj.x = RightYoyo.mLoc;
        Tween$.removeTweens(RightYoyo.obj);
        RightYoyo.obj = null;
    }
}
