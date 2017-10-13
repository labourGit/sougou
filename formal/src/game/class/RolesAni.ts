class RolesAni extends egret.DisplayObjectContainer{
    private bg:egret.Shape;
    private role1:egret.Bitmap;
    private role2:egret.Bitmap;
    private role3:egret.Bitmap;
    private boom:egret.Bitmap;
    public constructor(){
        super();
        // this.bg=new egret.Shape();
        // this.bg.graphics.beginFill(0xFFFFFF);
        // this.bg.graphics.drawRect(0,0,640,1050);
        // this.bg.graphics.endFill;
        // this.addChild(this.bg);
        this.createView();       
    }
    private createView():void{
        this.role1=new egret.Bitmap(RES.getRes("role1_png"));
        this.addChild(this.role1);
        this.role1.x=-640;
        egret.Tween.get(this.role1).to({x:0},350,egret.Ease.quadInOut);
        this.role2=new egret.Bitmap(RES.getRes("role2_png"));
        this.addChild(this.role2);
        this.role2.x=640;
        egret.Tween.get(this.role2).to({x:0},350,egret.Ease.quadInOut);
        this.role3=new egret.Bitmap(RES.getRes("role3_png"));
        this.addChild(this.role3);
        this.role3.x=-640;
        egret.Tween.get(this.role3).to({x:0},350,egret.Ease.quadInOut).call(this.boomAni,this)
    }
    private boomAni():void{
        this.boom=new egret.Bitmap(RES.getRes("boom_png"));
        this.addChild(this.boom);
        this.boom.alpha=0;
        this.boom.anchorOffsetX=this.boom.width/2;
        this.boom.anchorOffsetY=this.boom.height/2;
        this.boom.x=250;
        this.boom.y=500;
        this.boom.scaleX=0.1;
        this.boom.scaleY=0.1;
        egret.Tween.get(this.boom).wait(150).to({scaleX:1,scaleY:1,alpha:1},400,egret.Ease.elasticOut).wait(300).call(()=>{
            (<ClassRoom>this.parent).rolesShow();
        });
    }
}