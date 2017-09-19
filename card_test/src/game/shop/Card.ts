class Card extends egret.DisplayObjectContainer{
    private face:Face_card;
    private back:egret.Bitmap;
    private is_back:boolean;
    public id_word:number;
    public id:number;
    public constructor(id:number,str:string,n:number){
        super();
        this.id_word=id;
        var string=str;
        this.id=n;
        this.is_back=true;
        this.face=new Face_card(string);
        this.face.anchorOffsetX=64;
        this.addChild(this.face);
        this.face.scaleX=0;
        this.back=new egret.Bitmap(RES.getRes("card_back_png"));
        this.addChild(this.back); 
        this.back.anchorOffsetX=64;
    }
    public turn_ani(){
        if(this.is_back){ 
            this.is_back=false;          
            egret.Tween.get(this.back).to({ scaleX: 0 }, 80, egret.Ease.backIn).call(() => {
                   egret.Tween.get(this.face).to({ scaleX: 1 }, 80, egret.Ease.backOut);                
                  });
        }else{
            this.is_back=true;
            egret.Tween.get(this.face).to({ scaleX: 0 }, 80, egret.Ease.backIn).call(() => {
                   egret.Tween.get(this.back).to({ scaleX: 1 }, 80, egret.Ease.backOut);
                  });
        }
    }

}
class Face_card extends egret.Sprite{
    private tip:egret.TextField;
    public constructor(str:string){
        super();
        var face:egret.Bitmap=new egret.Bitmap(RES.getRes("card_face_png"));
        this.addChild(face);
        this.tip=new egret.TextField();       
        this.tip.size=30;
        this.tip.textColor=0x000000
        this.tip.fontFamily="fzdhjt";
        this.tip.width=128;
        this.tip.height=180;
        this.tip.textAlign=egret.HorizontalAlign.CENTER;
        this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
        this.tip.text=str;
        this.addChild(this.tip)
    }
}