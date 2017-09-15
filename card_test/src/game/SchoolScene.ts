class SchoolScene extends egret.Sprite{
    public constructor(){
        super();
        this.createView();
    }
    private schoolBg:egret.Bitmap;
    private school:egret.Bitmap;
    private createView():void{
        this.schoolBg=new egret.Bitmap(RES.getRes("schoolBg_jpg"));
        this.addChild(this.schoolBg);
        var cloud1:egret.Bitmap=new egret.Bitmap(RES.getRes("cloud_png"));
        this.addChild(cloud1);
        cloud1.y=200;
        cloud1.x=-100;
        var ani1=egret.Tween.get(cloud1,{loop:true}).to({x:-900},30000).to({x:900},20).to({x:-100},30000);

        var cloud2:egret.Bitmap=new egret.Bitmap(RES.getRes("cloud_png"));
        this.addChild(cloud2);
        cloud2.y=200;
        cloud2.x=900;
        var ani1=egret.Tween.get(cloud2,{loop:true}).to({x:-900},60000);

        this.school=new egret.Bitmap(RES.getRes("school_png"));
        this.addChild(this.school);
    }
}