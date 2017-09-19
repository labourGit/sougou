class Roles extends egret.DisplayObjectContainer{
    private role:egret.Bitmap;
    private roleLeft:egret.Bitmap;
    private roleRight:egret.Bitmap;
    private dialog_roleRight:egret.Bitmap;
    private text_roleRight:egret.TextField;
    private dialog_roleLeft:egret.Bitmap;
    private text_roleLeft:egret.TextField;
    private dialog_role:egret.Bitmap;
    private text_role:egret.TextField;
    public constructor(){
        super();
        this.roleRight=new egret.Bitmap(RES.getRes("roleRight_png"));
        this.roleRight.alpha=0;
        this.roleRight.x=200;
        this.roleRight.y=320;
        this.addChild(this.roleRight);
        
        
    }
    public init(){
        this.dialog_roleRight=new egret.Bitmap(RES.getRes("dialog_roleRight_png"));
        this.dialog_roleRight.alpha=0;
        this.dialog_roleRight.x=150;
        this.dialog_roleRight.y=450;
        this.addChild(this.dialog_roleRight)
        this.text_roleRight=new egret.TextField();       
        this.text_roleRight.x=200;
        this.text_roleRight.y=510;
        this.text_roleRight.size=25;
        this.text_roleRight.textColor=0x000000
        this.text_roleRight.fontFamily="fzdhjt";
        this.text_roleRight.width=200;
        this.text_roleRight.textAlign=egret.HorizontalAlign.LEFT;
        this.text_roleRight.text="";     
        this.addChild(this.text_roleRight);  
        var ani1=egret.Tween.get(this.roleRight).to({alpha:1,x:400},600,egret.Ease.sineInOut).call(()=>{
             
             TyperText.getInstance().typerEffect(this.text_roleRight,"来大干一场啊！！",100);
             var ta=egret.Tween.get(this.dialog_roleRight).to({alpha:1},10).wait(1000).call(this.left_show,this)
        });
        
    }
    private left_show(){
        this.dialog_roleRight.alpha=0;
        this.text_roleRight.alpha=0;
        this.roleLeft=new egret.Bitmap(RES.getRes("roleLeft_png"));
        this.roleLeft.x=200;
        this.roleLeft.y=370;
        this.roleLeft.alpha=0;
        this.addChild(this.roleLeft);
        this.dialog_roleLeft=new egret.Bitmap(RES.getRes("dialog_roleLeft_png"));
        this.dialog_roleLeft.alpha=0;
        this.dialog_roleLeft.x=200;
        this.dialog_roleLeft.y=450;
        this.addChild(this.dialog_roleLeft)
        this.text_roleLeft=new egret.TextField();       
        this.text_roleLeft.x=250;
        this.text_roleLeft.y=510;
        this.text_roleLeft.size=25;
        this.text_roleLeft.textColor=0x000000
        this.text_roleLeft.fontFamily="fzdhjt";
        this.text_roleLeft.width=200;
        this.text_roleLeft.textAlign=egret.HorizontalAlign.LEFT;
        this.text_roleLeft.text="";     
        this.addChild(this.text_roleLeft);  
        var ani2=egret.Tween.get(this.roleLeft).to({alpha:1,x:-100},600,egret.Ease.sineInOut).call(()=>{
             var ta=egret.Tween.get(this.dialog_roleLeft).to({alpha:1},10).wait(1000).call(this.role_show,this)
             TyperText.getInstance().typerEffect(this.text_roleLeft,"切，又是碾压局！",100);
        });
    }
    private role_show(){
        this.dialog_roleLeft.alpha=0;
        this.text_roleLeft.alpha=0;
        this.role=new egret.Bitmap(RES.getRes("role_png"));
        this.role.alpha=0;
        this.role.x=50;
        this.role.y=370;
        this.addChild(this.role);
        this.dialog_role=new egret.Bitmap(RES.getRes("dialog_role_png"));
        this.dialog_role.alpha=0;
        this.dialog_role.x=300;
        this.dialog_role.y=650;
        this.addChild(this.dialog_role)
        this.text_role=new egret.TextField();       
        this.text_role.x=370;
        this.text_role.y=740;
        this.text_role.size=30;
        this.text_role.textColor=0x000000
        this.text_role.fontFamily="fzdhjt";
        this.text_role.width=200;
        this.text_role.textAlign=egret.HorizontalAlign.LEFT;
        this.text_role.text="";     
        this.addChild(this.text_role);  
        var ani2=egret.Tween.get(this.role).to({alpha:1,y:300},600,egret.Ease.sineInOut).call(()=>{
             var ta=egret.Tween.get(this.dialog_role).to({alpha:1},10).wait(500).call(this.over,this);
             TyperText.getInstance().typerEffect(this.text_role,"冠军是我的！",100);
        });
    }
    private over(){
        this.dialog_role.alpha=0;
        this.text_role.alpha=0;
        var ani1=egret.Tween.get(this.roleRight).to({x:800},300,egret.Ease.sineInOut);
        var ani2=egret.Tween.get(this.roleLeft).to({x:-640},300,egret.Ease.sineInOut);
        var ani3=egret.Tween.get(this.role).to({y:2000},300,egret.Ease.sineInOut);
        var tb=egret.Tween.get((<ClassRoom>this.parent).line).to({scaleY:2.5},800,egret.Ease.sineInOut)
        var ta=egret.Tween.get((<ClassRoom>this.parent).maskBg).to({scaleY:2.5},800,egret.Ease.sineInOut).call(()=>{
            (<ClassRoom>this.parent).del();
        });    
    }
}