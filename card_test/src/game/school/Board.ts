//学校牌子
class Board extends egret.Sprite{
    private board:egret.Bitmap;
    private tip:egret.TextField;
    public constructor(){
        super();
        this.board=new egret.Bitmap(RES.getRes("board_png"));
        this.board.anchorOffsetX=this.board.width/2;
        this.board.anchorOffsetY=this.board.height/2;
        this.board.x=320;
        this.board.y=Util.h-200;
        this.addChild(this.board);
        this.board.scaleX=0.1;
        this.board.scaleY=0.1;
        this.board.alpha=0;
        var ani=egret.Tween.get(this.board).to({scaleX:1,scaleY:1,alpha:1},800,egret.Ease.elasticInOut).call(this.show,this);
        //
        this.tip=new egret.TextField();       
        this.tip.x=385;
        this.tip.y=Util.h-200;
        this.tip.size=55;
        this.tip.textColor=0x000000
        this.tip.fontFamily="fzdhjt";
        this.tip.width=this.board.width;
        this.tip.height=this.board.height;
        this.tip.anchorOffsetX=this.tip.width/2;
        this.tip.anchorOffsetY=this.tip.height/2;
        this.tip.textAlign=egret.HorizontalAlign.LEFT;
        this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
        this.tip.text="";
       
        this.addChild(this.tip);      
        
        
    }
    public show(){
        TyperText.getInstance().typerEffect(this.tip,"搜狗商学院",200);
    }
    public del(){
        this.removeChild(this.tip);
        this.removeChild(this.board);
    }
}