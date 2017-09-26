class LastPage extends egret.DisplayObjectContainer{
    private str_pk:string;
    private str_shop:string;
    public constructor(){
        super();
        switch(Util.id_shop){
            case 1:
                this.str_shop="全城做美容的都被你承包了！";
                break;
            case 2:
                this.str_shop="全城喝咖啡的都被你承包了！";
                break;
            case 3:
                this.str_shop="全城健身的都被你承包了！";
                break;
            default:
                this.str_shop="全城做美容的都被你承包了！";
                break;
        }
        if(Util.choiceScore>4){
            this.str_pk="PK成功"
        }else{
            this.str_pk="PK失败"
        }
        this.createView();
    }
    private sun_light:egret.Bitmap;
    private tip_result:egret.TextField;
    private board:Boardshop;
    private teacher1:TeacherThree;
    private role_fail:Role_fail;
    private last_rebtn:egret.Bitmap;
    private mijibtn:egret.Bitmap;
    
    private createView(){
        this.sun_light=new egret.Bitmap(RES.getRes("sun_light_png"));
        this.addChild(this.sun_light);
        this.board=new Boardshop(this.str_pk,40)
        this.addChild(this.board);
        this.sun_light.anchorOffsetX=325;
        this.sun_light.anchorOffsetY=342;
        this.sun_light.scaleX=1.5;
        this.sun_light.scaleY=1.5;
        this.sun_light.x=325;
        this.sun_light.y=400;
        var ta=egret.Tween.get(this.sun_light,{loop:true}).to({rotation:360},4500);
        var masksun=new egret.Shape();
        masksun.graphics.beginFill(0x000000);
        masksun.graphics.drawRect(0,150,640,550);
        masksun.graphics.endFill;
        this.addChild(masksun);
        this.sun_light.mask=masksun;
        
        
        this.tip_result=new egret.TextField();              
        this.tip_result.size=100;
        this.tip_result.textColor=0x000000;
        this.tip_result.fontFamily="fzdhjt";
        this.tip_result.width=620;   
        this.tip_result.height=600;        
        this.tip_result.anchorOffsetX=this.tip_result.width/2;
        this.tip_result.anchorOffsetY=this.tip_result.height/2;
        this.tip_result.x=320;
        this.tip_result.y=380;
        this.tip_result.textAlign=egret.HorizontalAlign.CENTER;
        this.tip_result.verticalAlign=egret.VerticalAlign.MIDDLE;
        if(Util.choiceScore>4){
        this.tip_result.textFlow = <Array<egret.ITextElement>>[
                {text:"颤抖吧！你已在\n",style:{"size":45,"textColor":0xdb6638}},
                {text:"0.1秒\n",style:{"size":55,"textColor":0xdb6638}},
                {text:"的时间KO所有对手！\n",style:{"size":45,"textColor":0xdb6638}},
                {text:this.str_shop+"",style:{"size":45,"textColor":0xdb6638}}
        ]
        this.teacher1=new TeacherThree("哇WOW~ 惊现百年一遇经营天才，店铺分分钟成爆款。人称“胡布斯” 新晋百强商界巨擘！！");
        this.addChild(this.teacher1);
        this.teacher1.init();
        var ta=egret.Tween.get(this.teacher1).wait(2500).to({x:-640},400).call(this.btnPage,this)
        }else{
            this.tip_result.textFlow = <Array<egret.ITextElement>>[
                {text:"我们抱歉的通知你，对手\n",style:{"size":35}},
                {text:"击败了你\n",style:{"size":50}},
                {text:"并向你扔了一只狗！最终，\n",style:{"size":35}},
                {text:"你的店铺由于无人问津而倒闭！",style:{"size":35}}

        ]
            this.role_fail=new Role_fail();
            this.addChild(this.role_fail);
        }
        this.tip_result.scaleX=0.2;
        this.tip_result.scaleY=0.2;
        this.tip_result.alpha=0;
        this.addChild(this.tip_result); 
        var ta=egret.Tween.get(this.tip_result).to({alpha:1,scaleX:1,scaleY:1},600,egret.Ease.backOut);
    }
    public btnPage():void{
        this.last_rebtn=new egret.Bitmap(RES.getRes("last_rebtn_png"));
        this.last_rebtn.x=70;
        this.last_rebtn.y=Util.h-200;
        this.last_rebtn.touchEnabled=true;
        this.addChild(this.last_rebtn);
        this.last_rebtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.reGame,this)
        

        this.mijibtn=new egret.Bitmap(RES.getRes("mijibtn_png"));
        this.mijibtn.x=350;
        this.mijibtn.y=Util.h-200;
        this.mijibtn.touchEnabled=true;
        this.addChild(this.mijibtn);
        this.mijibtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tieshiPage,this)
    }
    private reGame():void{
        let _sound: egret.Sound = RES.getRes("qie_mp3");
        _sound.play(0, 1);
        (<ChoiceGame>this.parent).restart();
    }
    private tieshiPage():void{
        let _sound: egret.Sound = RES.getRes("qie_mp3");
        _sound.play(0, 1);
        this.mijibtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tieshiPage,this);
        this.last_rebtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.reGame,this);
        var tieshi:egret.Bitmap=new egret.Bitmap(RES.getRes("tieshi_png"));
        this.addChild(tieshi);
        tieshi.touchEnabled=true;
        tieshi.addEventListener(egret.TouchEvent.TOUCH_TAP,(evt:egret.Event)=>{
            let _sound: egret.Sound = RES.getRes("qie_mp3");
            _sound.play(0, 1);
             this.removeChild(evt.target);
             this.mijibtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tieshiPage,this);
            this.last_rebtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.reGame,this);
        },this)
    }
}