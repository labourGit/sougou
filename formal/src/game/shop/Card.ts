class Card extends egret.DisplayObjectContainer{
    private face:Face_card;
    private back:egret.Bitmap;
    private is_back:boolean;//是否是反面
    public id_word:number;//牌的属性
    public id_card:number;//id
    public is_turn:number;
    public constructor(id:number,str:string,n:number){
        super();
        this.id_word=id;
        var string=str;
        this.id_card=n;
        this.is_back=true;
        this.is_turn=0;
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
    public sucess_light(_color){
    //     var color:number = 0xdb6638;        /// 光晕的颜色，十六进制，不包含透明度
    //     var alpha:number = 0.8;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
    //     var blurX:number = 15;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
    //     var blurY:number = 15;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
    //     var strength:number = 2;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
    //     var quality:number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
    //     var inner:boolean = false;            /// 指定发光是否为内侧发光，暂未实现
    //     var knockout:boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
    //     var glowFilter= new egret.GlowFilter( color, alpha, blurX, blurY,
    // strength, quality, inner, knockout );
    //     this.face.filters=[glowFilter];
            this.face.tip.textColor=_color;
    }

}
class Face_card extends egret.Sprite{
    public tip:egret.TextField;
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