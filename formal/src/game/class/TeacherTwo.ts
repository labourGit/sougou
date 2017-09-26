class TeacherTwo extends egret.Sprite{
    private teacher:egret.Bitmap;
    private hand:BitmapMovie;
    private dialog:egret.Bitmap;
    private tip:egret.TextField;
    public constructor(){
        super();
        this.teacher=new egret.Bitmap(RES.getRes("teacher_1_png"));
        this.addChild(this.teacher);
        this.teacher.x=-320;
        this.teacher.y=Util.h-400;
        this.hand=new BitmapMovie();
        this.hand.initByTile('teacher1_hand','png',7);
        this.hand.delay=1000/10;
        this.hand.x=-320;
        this.hand.y=Util.h-400;
        this.addChild(this.hand);        
    }
    public init(){
        var ta=egret.Tween.get(this.hand).to({x:0},400,egret.Ease.sineIn)
        var ta=egret.Tween.get(this.teacher).to({x:0},400,egret.Ease.sineIn).call(this.hanani,this)
    }
    private hanani(){
        var ta=egret.Tween.get(this.hand).to({y:this.hand.y-10},300).to({y:this.hand.y},300).call(this.show,this) 
    }
    private show(){
           this.hand.play(1);
            this.dialog=new egret.Bitmap(RES.getRes("dialog1_png"));
            this.addChild(this.dialog);
            this.dialog.x=230;
            this.dialog.y=Util.h-450;
            this.tip=new egret.TextField();       
            this.tip.x=300;
            this.tip.y=Util.h-370;
            this.tip.size=35;
            this.tip.textColor=0x000000
            this.tip.fontFamily="fzdhjt";
            this.tip.width=300;
            
            // this.tip.anchorOffsetX=this.tip.width/2;
            // this.tip.anchorOffsetY=this.tip.height/2;
            this.tip.textAlign=egret.HorizontalAlign.LEFT;
            // this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
            this.tip.text="";     
            this.addChild(this.tip);  
            TyperText.getInstance().typerEffect(this.tip,"争夺商学院最高荣誉，就看你了！！",100);
            egret.setTimeout(this.bai,this,2500);
      
    }
    public bai(){
        // (<ClassRoom>this.parent).shakeBg();
        (<ClassRoom>this.parent).rolesShow();
        (<ClassRoom>this.parent).delAni();
    }
}