//选店
class Boardshop extends egret.Sprite{
    private board:egret.Bitmap;
    public tip:egret.TextField;
    private str:string;
    private _num:number;
    public constructor(string:string,_size:number){
        super();
        this.str=string;
        this._num=_size;
        this.tip=new egret.TextField(); 
        this.tip.text=this.str;    
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
           
        this.tip.x=320;
        this.tip.y=100;
        this.tip.size=this._num;
        this.tip.textColor=0x000000
        this.tip.fontFamily="fzdhjt";
        this.tip.width=this.board.width-100;
        this.tip.height=this.board.height;
        this.tip.anchorOffsetX=this.tip.width/2;
        this.tip.anchorOffsetY=this.tip.height/2;
        this.tip.textAlign=egret.HorizontalAlign.CENTER;
        this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
           
        this.addChild(this.tip);      
        // TyperText.getInstance().typerEffect(this.tip,"",100);
    }
    public del(){
        this.removeChild(this.tip);
        this.removeChild(this.board);
    }
}