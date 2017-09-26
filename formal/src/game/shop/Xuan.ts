class Xuan extends egret.DisplayObjectContainer{
    private wordArry=[];
    private str_bg:string;
    private str_sbg:string;
    private str_ss:string;
    public constructor(){
        super();
         switch(Util.id_shop){
            case 1:
                this.wordArry=Util.xp1;
                this.str_bg="beauty_alpha_png";
                this.str_sbg="shop_beauty_png";
                this.str_ss="美容院";
                break;
            case 2:
                this.wordArry=Util.xp2;
                this.str_bg="cafe_alpha_png"
                this.str_sbg="shop_cafe_png";
                this.str_ss="咖啡厅";
                break;
            case 3:
                this.wordArry=Util.xp3;
                this.str_bg="sport_alpha_png"
                this.str_sbg="shop_sport_png";
                this.str_ss="健身房";
                break;   
            default:
                this.wordArry=Util.xp1;
                this.str_bg="beauty_alpha_png"
                this.str_sbg="shop_beauty_png";
                this.str_ss="美容院";
                break;
        }
        this.createView();

    }
    private board:Boardshop;
    private c_A:choiceABC;
    private c_B:choiceABC;
    private c_C:choiceABC;
    private bg:egret.Bitmap;
    private choice1_num:number;
    private choice2_num:number;
    private result_page:Resut_page;
    private happyBtn:egret.Bitmap;
    private unhappyBtn:egret.Bitmap;
    private createView(){
        Util.choiceScore=0;
        this.choice1_num=0;
        this.choice2_num=0;
        this.bg=new egret.Bitmap(RES.getRes(this.str_bg));
        this.addChild(this.bg)
        this.board=new Boardshop(this.wordArry[0].str,40);
        this.addChild(this.board);
        
        this.c_A=new choiceABC(this.wordArry[1].str,"choiceA_png",25,this.wordArry[1].score,1);
        this.c_A.x=640;
        this.c_A.y=260;
        this.addChild(this.c_A);
        var ta=egret.Tween.get(this.c_A).to({x:50},600,egret.Ease.sineIn)
        
        this.c_B=new choiceABC(this.wordArry[2].str,"choiceB_png",25,this.wordArry[2].score,2);
        this.c_B.x=640;
        this.c_B.y=390;
        this.addChild(this.c_B);
        var ta=egret.Tween.get(this.c_B).wait(300).to({x:50},600,egret.Ease.sineIn)

        this.c_C=new choiceABC(this.wordArry[3].str,"choiceC_png",25,this.wordArry[3].score,3);
        this.c_C.x=640;
        this.c_C.y=520;
        this.addChild(this.c_C);
        var ta=egret.Tween.get(this.c_C).wait(600).to({x:50},600,egret.Ease.sineIn).call(this.touch1,this)
    }
    private touch1():void{
        this.c_A.touchEnabled=true;
        this.c_B.touchEnabled=true;
        this.c_C.touchEnabled=true;
        this.c_A.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touch1over,this);
        this.c_B.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touch1over,this);
        this.c_C.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touch1over,this);
    }
    private touch1over(evt:egret.Event):void{
        let _sound: egret.Sound = RES.getRes("qie_mp3");
        _sound.play(0, 1);
        this.c_A.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touch1over,this);
        this.c_B.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touch1over,this);
        this.c_C.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touch1over,this);
        console.log(evt.target.score);
        this.choice1_num=evt.target._id;
        evt.target.tip.textColor=0xdb6638;
        Util.choiceScore+=evt.target.score;
        var ta=egret.Tween.get(this.c_A).wait(100).to({x:-640},600,egret.Ease.sineIn);
        var ta=egret.Tween.get(this.c_B).wait(400).to({x:-640},600,egret.Ease.sineIn);
        var ta=egret.Tween.get(this.c_C).wait(700).to({x:-640},600,egret.Ease.sineIn).call(this.createView2,this)
    }
    private createView2(){
        this.board=new Boardshop(this.wordArry[4].str,40);
        this.addChild(this.board);
        
        this.c_A=new choiceABC(this.wordArry[5].str,"choiceA_png",18,this.wordArry[5].score,5);
        this.c_A.x=640;
        this.c_A.y=260;
        this.addChild(this.c_A);
        var ta=egret.Tween.get(this.c_A).to({x:50},600,egret.Ease.sineIn)
        
        this.c_B=new choiceABC(this.wordArry[6].str,"choiceB_png",18,this.wordArry[6].score,6);
        this.c_B.x=640;
        this.c_B.y=390;
        this.addChild(this.c_B);
        var ta=egret.Tween.get(this.c_B).wait(300).to({x:50},600,egret.Ease.sineIn)

        this.c_C=new choiceABC(this.wordArry[7].str,"choiceC_png",18,this.wordArry[7].score,7);
        this.c_C.x=640;
        this.c_C.y=520;
        this.addChild(this.c_C);
        var ta=egret.Tween.get(this.c_C).wait(600).to({x:50},600,egret.Ease.sineIn).call(this.touch2,this)
    }
    private touch2():void{
        this.c_A.touchEnabled=true;
        this.c_B.touchEnabled=true;
        this.c_C.touchEnabled=true;
        this.c_A.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touch2over,this);
        this.c_B.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touch2over,this);
        this.c_C.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touch2over,this);
    }
    private touch2over(evt:egret.Event):void{
        let _sound: egret.Sound = RES.getRes("qie_mp3");
        _sound.play(0, 1);
        this.c_A.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touch2over,this);
        this.c_B.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touch2over,this);
        this.c_C.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.touch2over,this);
        console.log(evt.target.score);
        this.choice2_num=evt.target._id;
        evt.target.tip.textColor=0xdb6638;
        Util.choiceScore+=evt.target.score;
        var ta=egret.Tween.get(this.c_A).wait(100).to({x:-640},600,egret.Ease.sineIn);
        var ta=egret.Tween.get(this.c_B).wait(400).to({x:-640},600,egret.Ease.sineIn);
        var ta=egret.Tween.get(this.c_C).wait(700).to({x:-640},600,egret.Ease.sineIn).call(this.result,this)
    }
    private result():void{
        this.board.tip.text='页面呈现';
        (<XuanGame>this.parent).hero.bai();
        this.result_page=new Resut_page(this.str_ss,this.wordArry[this.choice1_num].str,this.str_sbg,this.wordArry[this.choice2_num].str);
        this.addChild(this.result_page);
        this.happyBtn=new egret.Bitmap(RES.getRes("happyBtn_png"));
        this.happyBtn.x=140;
        this.happyBtn.y=Util.h-280;
        this.happyBtn.alpha=0;
        this.addChild(this.happyBtn);
        var ta=egret.Tween.get(this.happyBtn).wait(200).to({alpha:1},400);

        this.unhappyBtn=new egret.Bitmap(RES.getRes("unhappyBtn_png"));
        this.unhappyBtn.x=140;
        this.unhappyBtn.y=Util.h-180;
        this.unhappyBtn.alpha=0;
        this.addChild(this.unhappyBtn);
        var ta=egret.Tween.get(this.unhappyBtn).wait(200).to({alpha:1},400);

        this.unhappyBtn.touchEnabled=true;
        this.unhappyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.restart,this);

        this.happyBtn.touchEnabled=true;
        this.happyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.golast,this);
    }
    private restart():void{
        this.unhappyBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.restart,this);
        this.happyBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.golast,this);
        (<XuanGame>this.parent).restart();
    }
    private golast():void{
        this.unhappyBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.restart,this);
        this.happyBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.golast,this);
        (<XuanGame>this.parent).golast();
    }
}
class choiceABC extends egret.Sprite{
    public tip:egret.TextField;
    public score:number;
    public _id:number
    public constructor(str1:string,str2:string,_size:number,score:number,id:number){
        super();
        this.score=score;
        this._id=id;
        var bg:egret.Bitmap=new egret.Bitmap(RES.getRes(str2));
        this.addChild(bg);
        this.tip=new egret.TextField();       
            this.tip.x=100;
            this.tip.size=_size;
            this.tip.textColor=0xffffff
            this.tip.fontFamily="fzdhjt";
            this.tip.width=457;
            this.tip.height=88;
            
            // this.tip.anchorOffsetX=this.tip.width/2;
            // this.tip.anchorOffsetY=this.tip.height/2;
            this.tip.textAlign=egret.HorizontalAlign.LEFT;
            this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
            this.tip.text=str1;   
            this.addChild(this.tip);  
    }
}
class Resut_page extends egret.Sprite{
    public constructor(str1:string,str2:string,str3:string,str4:string){
        super();
        var s_bg:egret.Bitmap=new egret.Bitmap(RES.getRes("ss_png"));
        this.addChild(s_bg);
        s_bg.x=30;
        s_bg.y=250;
        var tip:egret.TextField=new egret.TextField();
        tip.x=100;
        tip.y=250;
        tip.size=25;
        tip.textColor=0x000000
        tip.fontFamily="fzdhjt";
        tip.width=200;
        tip.height=80;
        tip.textAlign=egret.HorizontalAlign.LEFT;
        tip.verticalAlign=egret.VerticalAlign.MIDDLE;
        tip.text=str1;   
        this.addChild(tip);
        
        var tip2:egret.TextField=new egret.TextField();
        tip2.x=50;
        tip2.y=320;
        tip2.size=28;
        tip2.textColor=0xdb6638;
        tip2.fontFamily="fzdhjt";
        tip2.width=570;
        tip2.height=100;
        tip2.textAlign=egret.HorizontalAlign.LEFT;
        tip2.verticalAlign=egret.VerticalAlign.MIDDLE;
        tip2.text=str2;   
        this.addChild(tip2);

        var bg_l:egret.Bitmap=new egret.Bitmap(RES.getRes(str3));
        bg_l.scaleX=0.5;
        bg_l.scaleY=0.5;
        bg_l.x=50;
        bg_l.y=400;
        this.addChild(bg_l);

        var tip4:egret.TextField=new egret.TextField();
        tip4.x=180;
        tip4.y=400;
        tip4.size=25;
        tip4.textColor=0x000000;
        tip4.fontFamily="fzdhjt";
        tip4.width=400;
        tip4.textAlign=egret.HorizontalAlign.LEFT;
        tip4.text=str4;   
        this.addChild(tip4);
    }
}