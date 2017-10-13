class Hero2 extends egret.Sprite{
    private teacher:egret.Bitmap;
    private hand:BitmapMovie;
    private dialog:egret.Bitmap;
    public tip:egret.TextField;
    private clickeffect1:ClickEffect;
    public constructor(){
        super();
        this.teacher=new egret.Bitmap(RES.getRes("sg_hero_png"));
        this.addChild(this.teacher);
        this.teacher.anchorOffsetX=this.teacher.width/2;
        this.teacher.anchorOffsetY=this.teacher.height/2;
        this.teacher.scaleX=0.1;
        this.teacher.scaleY=0.1;
        this.teacher.x=500;
        this.teacher.y=Util.h-150; 
        this.teacher.alpha=0;   
    }
    public init(){
        var ta=egret.Tween.get(this.teacher).to({alpha:1,scaleX:1,scaleY:1},400,egret.Ease.backInOut).call(this.show,this);
    }
    private show(){
            this.dialog=new egret.Bitmap(RES.getRes("dialog1_hero_png"));
            this.addChild(this.dialog);
            this.dialog.x=5;
            this.dialog.y=Util.h-330;
            this.tip=new egret.TextField();       
            this.tip.x=50;
            this.tip.y=Util.h-290;
            this.tip.size=25;
            this.tip.textColor=0x000000
            this.tip.fontFamily="fzdhjt";
            this.tip.width=320;
            
            // this.tip.anchorOffsetX=this.tip.width/2;
            // this.tip.anchorOffsetY=this.tip.height/2;
            this.tip.textAlign=egret.HorizontalAlign.CENTER;
            // this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
            this.tip.textFlow = <Array<egret.ITextElement>>[
                {text:"第二关 游戏规则\n",style:{"bold":false}},
                {text:"\n"},
                {text:"选择你认为最能打动买家的\n"},
                 {text:"选项，并与其他竞争者进\n"},     
                 {text:"行PK。越受买家喜欢，则或\n"},
                 {text:"胜几率越大！\n"},
             ];   
            this.addChild(this.tip);  
            
            // TyperText.getInstance().typerEffect(this.tip,"规则Tips：请选择最能打动买家的选项，根据你选择的结果与其他竞争者进行pk，越多买家喜欢获胜几率也将越大。",10);
            
      
    }
    public bai(){
        this.removeChild(this.tip);
        this.removeChild(this.dialog);
        var ta=egret.Tween.get(this.teacher).to({x:-400},400,egret.Ease.sineInOut).call(()=>{
            // (<Shop>this.parent).del();
        });
    }
}