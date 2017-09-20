class XuanGame extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.createView();
    }
    public hero:Hero2;
    private xuan:Xuan;
    private createView():void{
        Util.choiceScore=0;
        this.hero=new Hero2();
        this.addChild(this.hero);
        this.hero.init();
        this.xuan=new Xuan();
        this.addChild(this.xuan);
    }
    public restart():void{
        (<ChoiceGame>this.parent).reset_xuan();
    }
}