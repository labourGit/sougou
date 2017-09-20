class ChoiceGame extends egret.DisplayObjectContainer{
    private bg:egret.Bitmap;
    private content:egret.Bitmap;
    private shop:Shop;
    private cardGame:CardGame;
    private xuanGame:XuanGame;
    public constructor(){
        super();
        this.bg=new egret.Bitmap(RES.getRes("loading_bg_jpg"));
        this.addChild(this.bg);
        this.content=new egret.Bitmap(RES.getRes("content_png"));
        this.addChild(this.content);
        
    }
    public init(){
        this.shop=new Shop();
        this.addChild(this.shop);
        this.shop.init();
    }
    public del_shop():void{
        this.removeChild(this.shop);
        this.cardGame=new CardGame();
        this.addChild(this.cardGame);
    }
    public del_cardGame():void{
        this.removeChild(this.cardGame);
        this.xuanGame=new XuanGame();
        this.addChild(this.xuanGame)
    }
    public reset_xuan():void{
        this.removeChild(this.xuanGame);
        this.xuanGame=new XuanGame();
        this.addChild(this.xuanGame)
    }
}