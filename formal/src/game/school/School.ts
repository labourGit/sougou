class School extends egret.DisplayObjectContainer{
    private schoolScene:SchoolScene;
    private ring:egret.Bitmap;
    private teacher:TeacherOne;
    public constructor(){
        super(); 
        this.createView();       
    }
    private createView():void{
        //学校-牌子-打铃
       this.schoolScene=new SchoolScene();
       this.addChild(this.schoolScene);
       this.schoolScene.anchorOffsetX=320;
       this.schoolScene.anchorOffsetY=525;
       this.schoolScene.x=320;
       this.schoolScene.y=525;
       this.ring=new egret.Bitmap(RES.getRes("ring_png"));
       this.addChild(this.ring);
       this.ring.alpha=0
    //    var board:Board=new Board();
    //    this.addChild(board);
    //    egret.setTimeout(function(){
    //         board.del(); 
    //    },this,2000);
       egret.setTimeout(function(){
            var ani=egret.Tween.get(this.ring).to({alpha:1},100).wait(1000).to({alpha:0},10).call(this.secScene,this);
            ShakeTool.getInstance().shakeObj(this.schoolScene,1,20,5);  
       },this,500);
    }
    private secScene():void{
        egret.Tween.get(this.schoolScene).to({scaleX:2.5,scaleY:2.5,alpha:0},500,egret.Ease.quadIn);
        console.log("33");
        (<Game>this.parent).reScene();
    }
    private secScene1():void{
        //老师表情
       this.teacher=new TeacherOne();
       this.addChild(this.teacher);
       this.teacher.init();
    }
    public del(){
        var ta=egret.Tween.get(this.teacher).to({x:-320},400,egret.Ease.sineInOut).call(()=>{
            (<Game>this.parent).reScene();
            (<Game>this.parent).del_school();
        })
        
    }
}