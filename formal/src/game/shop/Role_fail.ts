class Role_fail extends egret.DisplayObjectContainer{
    private role:egret.Bitmap;
    private glass:egret.Bitmap;
    private dog:egret.Bitmap;
    public constructor(){
        super();
        this.role=new egret.Bitmap(RES.getRes("role_fail_png"));
        this.role.y=Util.h-255;
        this.role.x=640;
        this.addChild(this.role);
        var ta=egret.Tween.get(this.role).to({x:370},600,egret.Ease.sineIn).wait(300).call(this.show,this)
    }
    private show(){
        this.dog=new egret.Bitmap(RES.getRes("dog_png"));
        this.addChild(this.dog);
        this.dog.anchorOffsetX=this.dog.width/2;
        this.dog.anchorOffsetY=this.dog.height/2;
        this.dog.x=320;
        this.dog.y=500;
        this.dog.rotation=0;
        this.dog.scaleX=0.1;
        this.dog.scaleY=0.1;
        this.glass=new egret.Bitmap(RES.getRes("glass_png"));
        this.glass.alpha=0;
        this.addChild(this.glass)
        var ta=egret.Tween.get(this.dog).to({scaleX:1,scaleY:1,rotation:360},600).call(()=>{
            this.glass.alpha=1;
            var tb=egret.Tween.get(this.dog).wait(400).to({y:1500},1200,egret.Ease.sineOut).call(()=>{
                this.removeChild(this.glass);
                var ta=egret.Tween.get(this.role).to({x:640},600,egret.Ease.sineOut).call(()=>{
                    (<LastPage>this.parent).btnPage();
                });
            })
        })
    }
}