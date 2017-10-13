class ClassRoom extends egret.DisplayObjectContainer{
    private classbg:egret.Bitmap;
    public line:egret.Bitmap;
    private bg:egret.Bitmap;
    public maskBg:egret.Shape;
    private maskRoles:egret.Shape;
    private roles:Roles;
    private teacher:TeacherOne;
    private teacher2:TeacherTwo;
    private rolesani:RolesAni;
    private btn:egret.Bitmap;
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
    public roleShow():void{
        this.rolesani=new RolesAni();
        this.addChild(this.rolesani);
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
        this.maskBg.y=480; 
        this.bg.mask=this.maskBg;
        this.addChild(this.maskBg);
        
         
        this.line=new egret.Bitmap(RES.getRes("line_png"));
        this.line.anchorOffsetY=267;
        this.line.scaleY=0;      
        this.line.y=480;     
        this.addChild(this.line);
        var tb=egret.Tween.get(this.line).to({scaleY:0.75},400,egret.Ease.sineOut)
        var ta=egret.Tween.get(this.maskBg).to({scaleY:0.75},400,egret.Ease.sineOut).call(this.rolesAni,this);               
    }
    private teacherAni(){
         egret.setTimeout(this.roleShow,this,400);
    //    this.teacher=new TeacherOne();
    //    this.addChild(this.teacher);
    //    this.teacher.init();
    }
    public delAni(){
        this.removeChild(this.teacher)
    }
    private rolesAni(){
        this.teacher2=new TeacherTwo();
        this.addChild(this.teacher2);
        this.maskRoles=new egret.Shape();
        this.maskRoles.graphics.beginFill(0x000000);
        this.maskRoles.graphics.drawRect(0,0,640,665);
        this.maskRoles.graphics.endFill;
        this.addChild(this.maskRoles);
        this.teacher2.mask=this.maskRoles;
        this.teacher2.init();

    }
    public changeBtnAni():void{
        this.btn=new egret.Bitmap(RES.getRes("changeBtn_png"));
        this.addChild(this.btn);
        this.btn.anchorOffsetX=this.btn.width/2;
        this.btn.anchorOffsetY=this.btn.height/2;
        this.btn.x=320;
        this.btn.y=870;
        this.btn.touchEnabled=true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            let _sound: egret.Sound = RES.getRes("qie_mp3");
            _sound.play(0, 1);
            this.teacher2.bai();
        },this);
    }
    public maskAni(){
        var tc=egret.Tween.get(this.teacher2).to({x:-400},200,egret.Ease.sineOut)
        var tb=egret.Tween.get(this.line).to({scaleY:2.5},700,egret.Ease.sineOut);
        var ta=egret.Tween.get(this.maskBg).to({scaleY:2.5},700,egret.Ease.sineOut).call(this.del,this); 
    }
    public del(){
        (<Game>this.parent).shopScene();
        (<Game>this.parent).del_class();
    }
}