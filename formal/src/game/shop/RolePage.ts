class RolePage extends egret.Sprite{
    private teacher:egret.Bitmap;
    private hand:BitmapMovie;
    private dialog:egret.Bitmap;
    private tip:egret.TextField;
    private clickeffect1:ClickEffect;
    private _string:string;
    public constructor(str:string){
        super();
        this._string=str;
        this.teacher=new egret.Bitmap(RES.getRes("logo_role_png"));
        this.addChild(this.teacher);
        this.teacher.x=640;
        this.teacher.y=400;    
    }
    public init(){
        var ta=egret.Tween.get(this.teacher).wait(600).to({x:400},400,egret.Ease.sineInOut).call(this.show,this)
    }
    private show(){
            this.dialog=new egret.Bitmap(RES.getRes("dialog_last_png"));
            this.addChild(this.dialog);
            this.dialog.x=20;
            this.dialog.y=400;
            this.tip=new egret.TextField();       
            this.tip.x=100;
            this.tip.y=470;
            this.tip.size=25;
            this.tip.textColor=0x000000
            this.tip.fontFamily="fzdhjt";
            this.tip.width=250;
            
            // this.tip.anchorOffsetX=this.tip.width/2;
            // this.tip.anchorOffsetY=this.tip.height/2;
            this.tip.textAlign=egret.HorizontalAlign.LEFT;
            // this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
            this.tip.text="";     
            this.addChild(this.tip);  
            this.addChild(this.teacher);
            TyperText.getInstance().typerEffect(this.tip,this._string,20);
            // egret.setTimeout(this.bai,this,4000);
      
    }
    public bai(){
        this.removeChild(this.tip);
        this.removeChild(this.dialog);
        var ta=egret.Tween.get(this.teacher).to({x:-400},400,egret.Ease.sineInOut).call(()=>{
            (<ShopScene>this.parent).del();
        });
    }
}