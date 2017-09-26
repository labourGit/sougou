class ClassRoom extends egret.DisplayObjectContainer{
    private classbg:egret.Bitmap;
    public line:egret.Bitmap;
    private bg:egret.Bitmap;
    public maskBg:egret.Shape;
    private maskRoles:egret.Shape;
    private roles:Roles;
    private teacher:TeacherTwo;
    public constructor(){
        super();
        this.classbg=new egret.Bitmap(RES.getRes("classBg_jpg"));
        this.addChild(this.classbg);
        this.classbg.anchorOffsetX=320;
        this.classbg.anchorOffsetY=525;
        this.classbg.x=320;
        this.classbg.y=525;
        this.classbg.scaleX=0.2;
        this.classbg.scaleY=0.2;
        this.classbg.alpha=0;
        var ani=egret.Tween.get(this.classbg).wait(100).to({alpha:1,scaleX:1,scaleY:1},500,egret.Ease.quadIn).wait(400).call(this.teacherAni,this);

    }
    public shakeBg(){
        ShakeTool.getInstance().shakeObj(this.classbg,0.5,10,5);  
    }
    public rolesShow(){
        this.bg=new egret.Bitmap(RES.getRes("loading_bg_jpg"));
        this.addChild(this.bg);    
        this.maskBg=new egret.Shape();        
        this.maskBg.graphics.beginFill(0x000000);
        this.maskBg.graphics.drawRect(0,0,640,520);
        this.maskBg.graphics.endFill;
        this.maskBg.anchorOffsetY=260;

        this.maskBg.scaleY=0;
        this.maskBg.y=600; 
        this.bg.mask=this.maskBg;
        this.addChild(this.maskBg);
       
        
        
        this.line=new egret.Bitmap(RES.getRes("line_png"));
        this.line.anchorOffsetY=267;
        this.line.scaleY=0;      
        this.line.y=600;     
        this.addChild(this.line);
        var tb=egret.Tween.get(this.line).to({scaleY:1},400)
        var ta=egret.Tween.get(this.maskBg).to({scaleY:1},400).call(this.rolesAni,this);               
    }
    private teacherAni(){
       this.teacher=new TeacherTwo();
       this.addChild(this.teacher);
       this.teacher.init();
    }
    public delAni(){
        this.removeChild(this.teacher)
    }
    private rolesAni(){
        this.roles=new Roles();
        this.addChild(this.roles);
        this.maskRoles=new egret.Shape();
        this.maskRoles.graphics.beginFill(0x000000);
        this.maskRoles.graphics.drawRect(0,0,640,850);
        this.maskRoles.graphics.endFill;
        this.addChild(this.maskRoles);
        this.roles.mask=this.maskRoles;
        this.roles.init();

    }
    public del(){
        (<Game>this.parent).shopScene();
        (<Game>this.parent).del_class();
    }
}