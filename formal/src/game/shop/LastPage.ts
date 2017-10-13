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
        if(Util.sucess){
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
    private logo:egret.Bitmap;
    private createView(){
        if(Util.sucess){
            this.sun_light=new egret.Bitmap(RES.getRes("sunLight_fail_png"));
        }else{
            this.sun_light=new egret.Bitmap(RES.getRes("sun_light_png"));
        }
        
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
        this.tip_result.y=420;
        this.tip_result.textAlign=egret.HorizontalAlign.CENTER;
        this.tip_result.verticalAlign=egret.VerticalAlign.MIDDLE;

        //
        this.logo=new egret.Bitmap();
        if(Util.sucess){
            let _sound: egret.Sound = RES.getRes("music_succes_mp3");
            _sound.play(0, 1);
            this.logo=new egret.Bitmap(RES.getRes("logo_sucess_png"));
            this.tip_result.textFlow = <Array<egret.ITextElement>>[
                {text:"0.1秒\n",style:{"size":70,"textColor":0xdb6638}},
                {text:"KO所有对手！\n",style:{"size":40,"textColor":0xdb6638}},
                {text:"99%买家被你的创意征服\n",style:{"size":40,"textColor":0xdb6638}},
                {text:this.str_shop+"",style:{"size":40,"textColor":0xdb6638}}
        ]
        this.teacher1=new TeacherThree("哇WOW~ 惊现百年一遇经营天才，店铺分分钟成爆款。人称“胡布斯” 新晋百强商界巨擘！！");
        this.addChild(this.teacher1);
        this.teacher1.init();
        var ta=egret.Tween.get(this.teacher1).wait(2500).to({x:-640},400).call(this.btnPage,this);
        }else{
             let _sound: egret.Sound = RES.getRes("music_fail_mp3");
            _sound.play(0, 1);
            this.logo=new egret.Bitmap(RES.getRes("logo_fail_png"));
            this.tip_result.textFlow = <Array<egret.ITextElement>>[
                {text:"失败\n",style:{"size":80}},
                {text:"对手击败了你\n",style:{"size":40}},
                {text:"并向你扔了一只狗\n",style:{"size":40}},
                {text:"你的店铺由于无人问津而倒闭！",style:{"size":40}}

        ]
            this.role_fail=new Role_fail();
            this.addChild(this.role_fail);
        }
        this.tip_result.scaleX=0.2;
        this.tip_result.scaleY=0.2;
        this.tip_result.alpha=0;
        this.addChild(this.tip_result); 
        var ta=egret.Tween.get(this.tip_result).to({alpha:1,scaleX:1,scaleY:1},600,egret.Ease.backOut);
        this.logo.alpha=0;
        this.logo.anchorOffsetX=70;
        this.logo.anchorOffsetY=70;
        this.logo.x=550;
        this.logo.y=230;
        this.logo.scaleX=2;
        this.logo.scaleY=2;
        this.addChild(this.logo);
        var tb=egret.Tween.get(this.logo).wait(400).to({alpha:1,scaleX:1,scaleY:1},600,egret.Ease.backIn);
    }
    public btnPage():void{
        this.last_rebtn=new egret.Bitmap(RES.getRes("last_rebtn_png"));
        this.last_rebtn.x=70;
        this.last_rebtn.y=Util.h-200;
        this.last_rebtn.touchEnabled=true;
        this.addChild(this.last_rebtn);
        this.last_rebtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.reGame,this)
        
        if(Util.sucess){
            this.mijibtn=new egret.Bitmap(RES.getRes("mijibtn_png"));
        }else{
            this.mijibtn=new egret.Bitmap(RES.getRes("right_answer_png"));
        }
        // this.mijibtn=new egret.Bitmap(RES.getRes("mijibtn_png"));
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
        var tieshi:SharePage=new SharePage();
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
class SharePage extends egret.Sprite{
    private tip:egret.TextField;
    private btn:egret.Bitmap;
    private worryss=[];
    public constructor(){
        super();
        var tieshi:egret.Bitmap=new egret.Bitmap(RES.getRes("tieshi_png"));
        this.addChild(tieshi);

        var arrow:egret.Bitmap=new egret.Bitmap(RES.getRes("share_arrow_png"));
        this.addChild(arrow);
        arrow.x=640-140;
        arrow.y=0;
     
        var ta=egret.Tween.get(arrow,{loop:true}).wait(1000).to({alpha:0},300).to({alpha:1},300).to({alpha:0},300).to({alpha:1},300);

          this.tip=new egret.TextField();       
            this.tip.x=40;
            this.tip.y=290;
            this.tip.size=25;
            this.tip.textColor=0x000000
            this.tip.fontFamily="fzdhjt";
            this.tip.width=580;
            
            // this.tip.anchorOffsetX=this.tip.width/2;
            // this.tip.anchorOffsetY=this.tip.height/2;
            this.tip.textAlign=egret.HorizontalAlign.LEFT;
            // this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
            this.tip.textFlow = <Array<egret.ITextElement>>[
                {text:"想要店铺生意爆棚，从此走上人生巅峰！搜狗提示，搜索推广请牢记创意三要点：\n",style:{"bold":false,"size":32}},
                {text:"\n"},
                {text:"1、创意简明精练，言简意赅, 突出产品/服务特点、  公司优势；\n"},
                {text:"2、善用通配符；\n"},
                {text:"3、创意中包含关键词（标题＋网页描述 > 标题 >    网页描述 > 不出现关键词）"},           
             ];   
            this.addChild(this.tip); 
            if(Util.sucess){
             this.btn=new egret.Bitmap(RES.getRes("know_right_png"));
           }else{
                this.btn=new egret.Bitmap(RES.getRes("know_wrong_png"));
                switch(Util.id_shop){
                    case 1:
                            this.worryss=Util.xp1;
                            var str_sbg="shop_beauty_png";
                            break;
                    case 2:
                            this.worryss=Util.xp2;
                            var str_sbg="shop_cafe_png";
                            break;
                    case 3:
                            this.worryss=Util.xp3;
                            var str_sbg="shop_sport_png";
                            break;
                }
                var tips:egret.TextField=new egret.TextField();
                tips.x=50;
                tips.y=240;
                tips.size=32;
                tips.textColor=0x5d9fe9;
                tips.fontFamily="fzdhjt";
                tips.width=570;
                tips.height=100;
                tips.textAlign=egret.HorizontalAlign.LEFT;
                tips.verticalAlign=egret.VerticalAlign.MIDDLE;
                tips.text="牛X创意："; 
                this.addChild(tips); 

                var tip2:egret.TextField=new egret.TextField();
                tip2.x=50;
                tip2.y=300;
                tip2.size=28;
                tip2.textColor=0x5d9fe9;
                tip2.fontFamily="SongTi";
                tip2.width=570;
                tip2.height=100;
                tip2.textAlign=egret.HorizontalAlign.LEFT;
                tip2.verticalAlign=egret.VerticalAlign.MIDDLE;
                tip2.textFlow=this.worryss[1].texte; 
                this.addChild(tip2);

        
                var bg_l:egret.Bitmap=new egret.Bitmap(RES.getRes(str_sbg));
                            bg_l.scaleX=0.5;
                            bg_l.scaleY=0.5;
                            bg_l.x=50;
                            bg_l.y=380;
                            this.addChild(bg_l);
                var tip4:egret.TextField=new egret.TextField();
                tip4.x=180;
                tip4.y=380;
                tip4.size=25;
                tip4.textColor=0x000000;
                tip4.fontFamily="SongTi";
                tip4.width=420;
                tip4.textAlign=egret.HorizontalAlign.LEFT;
                tip4.textFlow=this.worryss[5].texte2;   
                this.addChild(tip4);
                this.tip.y=540;
            }
            
        this.addChild(this.btn);
        this.btn.anchorOffsetX=this.btn.width/2;
        this.btn.anchorOffsetY=this.btn.height/2;
        this.btn.x=320;
        this.btn.y=870;
        this.btn.touchEnabled=true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            window.location.href="http://fuwu.sogou.com"
        },this); 
    }
}