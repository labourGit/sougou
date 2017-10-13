class ShopScene extends eui.Component{
    public constructor() {
    	super();
    	this.skinName = "resource/assets/ShopSceneSkin.exml";

	}
	private board:Boardshop;
    private teacher1:TeacherThree;
    private btn:egret.Bitmap;
    private arrow_left:egret.Bitmap;
    private arrow_right:egret.Bitmap;
    private arrow_id:number;
    public scroll1:ScrollView;
	public childrenCreated(){
    	this.board=new Boardshop("请选择你要经营的店铺",32);
        this.addChild(this.board);
        Util.id_shop=1;
        this.teacher1=new TeacherThree("请从三家店铺中选择一家，点击确认，就可以开始游戏啦");
        this.addChild(this.teacher1);
        this.teacher1.init();
        this.arrow_left=new egret.Bitmap(RES.getRes("arrow_left_png"));
        this.arrow_right=new egret.Bitmap(RES.getRes("arrow_right_png"));
        this.arrow_left.alpha=0;
        this.arrow_right.alpha=0;
        this.addChild(this.arrow_left);
        this.addChild(this.arrow_right);
        
        // egret.Tween.get(this.arrow_left).to({x:0,alpha:0},600,egret.Ease.sineInOut);
        this.arrow_id=0;
        this.addEventListener(egret.Event.ENTER_FRAME,()=>{       
            this.arrow_left.alpha=0;
            this.arrow_right.alpha=0;  
             this.arrow_left.x=40;  
            this.arrow_right.x=520;   
            this.arrow_left.y=300;
            this.arrow_right.y=300;
            switch(Util.id_shop){
                case 1:
                        if(this.arrow_id==1){
                            return;
                        }
                        egret.Tween.removeTweens(this.arrow_right);
                        egret.Tween.removeTweens(this.arrow_left);
                        this.arrow_left.alpha=1; 
                        egret.Tween.get(this.arrow_left,{loop:true}).to({x:0,alpha:0},600,egret.Ease.sineInOut);
                        this.arrow_id=Util.id_shop;
                        this.arrow_left.touchEnabled=true;
                        this.arrow_left.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
                            this.scroll1.scrollToNext();
                        },this);
                      break;
                case 2:       
                       if(this.arrow_id==2){
                            return;
                        }
                        egret.Tween.removeTweens(this.arrow_left);
                        egret.Tween.removeTweens(this.arrow_right);
                        this.arrow_left.alpha=1; 
                        this.arrow_right.alpha=1; 
                        egret.Tween.get(this.arrow_left,{loop:true}).to({x:0,alpha:0},600,egret.Ease.sineInOut);
                        egret.Tween.get(this.arrow_right,{loop:true}).to({x:560,alpha:0},600,egret.Ease.sineInOut);
                        this.arrow_id=Util.id_shop;
                        this.arrow_right.touchEnabled=true;
                        this.arrow_left.touchEnabled=true;
                        this.arrow_right.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
                            this.scroll1.scrollToLast();
                        },this);
                        this.arrow_left.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
                            this.scroll1.scrollToNext();
                        },this);           
                      break;
                case 3:            
                       if(this.arrow_id==3){
                            return;
                        }
                        egret.Tween.removeTweens(this.arrow_left);
                        egret.Tween.removeTweens(this.arrow_right);
                        this.arrow_right.alpha=1; 
                        egret.Tween.get(this.arrow_right,{loop:true}).to({x:560,alpha:0},600,egret.Ease.sineInOut);
                        this.arrow_id=Util.id_shop;     
                        this.arrow_right.touchEnabled=true;    
                        this.arrow_right.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
                            this.scroll1.scrollToLast();
                        },this);                      
                      break;
            }

        },this)
        this.btn=new egret.Bitmap(RES.getRes("button1_png"));
        this.addChild(this.btn);
        this.btn.anchorOffsetX=this.btn.width/2;
        this.btn.anchorOffsetY=this.btn.height/2;
        this.btn.x=320;
        this.btn.y=630;
        var ta=egret.Tween.get(this.btn,{loop:true}).to({scaleX:1.1,scaleY:0.8},100).to({scaleX:0.8,scaleY:1.1},200).to({scaleX:1.07,scaleY:0.85},200).to({scaleX:0.85,scaleY:1.07},300).to({scaleX:1.05,scaleY:0.9},400).to({scaleX:0.95,scaleY:1.035},400).to({scaleX:1,scaleY:1},500)
        this.btn.touchEnabled=true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.choiceOver,this);
	}
    private choiceOver(){
        let _sound: egret.Sound = RES.getRes("qie_mp3");
        _sound.play(0, 1);
        this.teacher1.bai();
        this.btn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.choiceOver,this); 
        console.log(Util.id_shop);
        this.removeChild(this.btn);     
    }
    public del(){
        (<ChoiceGame>this.parent).del_shop();
    }
}