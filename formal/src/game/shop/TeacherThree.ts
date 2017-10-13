class TeacherThree extends egret.Sprite{
    private teacher:egret.Bitmap;
    private hand:BitmapMovie;
    private dialog:egret.Bitmap;
    private tip:egret.TextField;
    private clickeffect1:ClickEffect;
    private _string:string;
    public constructor(str:string){
        super();
        this._string=str;
        this.teacher=new egret.Bitmap(RES.getRes("shop_teacher1_png"));
        this.addChild(this.teacher);
        this.teacher.x=-400;
        this.teacher.y=Util.h-250;    
    }
    public init(){
        var ta=egret.Tween.get(this.teacher).to({x:0},400,egret.Ease.sineInOut).call(this.show,this)
    }
    private show(){
            this.dialog=new egret.Bitmap(RES.getRes("board2_png"));
            this.addChild(this.dialog);
            this.dialog.x=20;
            this.dialog.y=Util.h-350;
            this.tip=new egret.TextField();       
            this.tip.x=180;
            this.tip.y=Util.h-270;
            this.tip.size=25;
            this.tip.textColor=0x000000
            this.tip.fontFamily="fzdhjt";
            this.tip.width=350;
            
            // this.tip.anchorOffsetX=this.tip.width/2;
            // this.tip.anchorOffsetY=this.tip.height/2;
            this.tip.textAlign=egret.HorizontalAlign.LEFT;
            // this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
            this.tip.text="";     
            this.addChild(this.tip);  
            this.addChild(this.teacher);
            TyperText.getInstance().typerEffect(this.tip,this._string,30);
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