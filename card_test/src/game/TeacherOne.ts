class TeacherOne extends egret.Sprite{
    private teacher:egret.Bitmap;
    private hand:BitmapMovie;
    private dialog:egret.Bitmap;
    private tip:egret.TextField;
    public constructor(){
        super();
        this.teacher=new egret.Bitmap(RES.getRes("teacher_1_png"));
        this.addChild(this.teacher);
        this.teacher.x=-320;
        this.teacher.y=Util.h-350;
        this.hand=new BitmapMovie();
        this.hand.initByTile('teacher1_hand','png',7);
        this.hand.delay=1000/10;
        this.hand.x=-320;
        this.hand.y=Util.h-350;
        this.addChild(this.hand);        
    }
    public init(){
        var ta=egret.Tween.get(this.hand).to({x:0},400,egret.Ease.sineIn)
        var ta=egret.Tween.get(this.teacher).to({x:0},400,egret.Ease.sineIn).call(this.show,this)
    }
    public show(){
        var ta=egret.Tween.get(this.hand).to({y:this.hand.y-10},300).to({y:this.hand.y},300).wait(200).call(()=>{
            this.hand.play(1);
            this.dialog=new egret.Bitmap(RES.getRes("dialog1_png"));
            this.addChild(this.dialog);
            this.dialog.x=180;
            this.dialog.y=Util.h-450;
            this.tip=new egret.TextField();       
            this.tip.x=250;
            this.tip.y=Util.h-390;
            this.tip.size=25;
            this.tip.textColor=0x000000
            this.tip.fontFamily="fzdhjt";
            this.tip.width=300;
            
            // this.tip.anchorOffsetX=this.tip.width/2;
            // this.tip.anchorOffsetY=this.tip.height/2;
            this.tip.textAlign=egret.HorizontalAlign.LEFT;
            // this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
            this.tip.text="";     
            this.addChild(this.tip);  
            TyperText.getInstance().typerEffect(this.tip,"这个铃声！！上上次听到它是二十年前，不久后，健林完成了他的小目标！而上一次，是潘石屹，它拿下了人生的第一个10亿。这次...",100,(<Game>this.parent).reScene); 
        },this);
    }
}