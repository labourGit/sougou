//选店
class Boardshop extends egret.Sprite{
    private board:egret.Bitmap;
    public tip:egret.TextField;
    public constructor(){
        super();
        this.board=new egret.Bitmap(RES.getRes("board1_png"));
        this.board.anchorOffsetX=this.board.width/2;
        this.board.anchorOffsetY=this.board.height/2;
        this.board.x=320;
        this.board.y=100;
        this.addChild(this.board);
        this.board.scaleX=0.1;
        this.board.scaleY=0.1;
        this.board.alpha=0;
        var ani=egret.Tween.get(this.board).to({scaleX:1,scaleY:1,alpha:1},800,egret.Ease.elasticInOut).call(this.show,this);
        //
        
        
        
    }
    public show(){
        this.tip=new egret.TextField();       
        this.tip.x=320;
        this.tip.y=100;
        this.tip.size=35;
        this.tip.textColor=0x000000
        this.tip.fontFamily="fzdhjt";
        this.tip.width=this.board.width;
        this.tip.height=this.board.height;
        this.tip.anchorOffsetX=this.tip.width/2;
        this.tip.anchorOffsetY=this.tip.height/2;
        this.tip.textAlign=egret.HorizontalAlign.CENTER;
        this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
        this.tip.text="请选择下面一家商铺";
       
        this.addChild(this.tip);      
        // TyperText.getInstance().typerEffect(this.tip,"",100);
    }
    public del(){
        this.removeChild(this.tip);
        this.removeChild(this.board);
    }
}