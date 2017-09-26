class CardGame extends egret.DisplayObjectContainer{
    private wordArry=[];
    public constructor(){
        super();
        switch(Util.id_shop){
            case 1:
                this.wordArry=Util.op1;
                break;
            case 2:
                this.wordArry=Util.op2;
                break;
            case 3:
                this.wordArry=Util.op3;
                break;
            default:
                this.wordArry=Util.op1;
                break;
        }
        this.wordArry.sort(function(){
                return Math.random()>.5 ? -1 : 1;      //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
        });
        this.createView();
    }
    private card:Card;
    private cards:Array<Card>=[];
    private first:number=-1;
    public is_lock:number;
    private sucess_turn:number=0;
    private board:Boardshop;
    private hero:Hero;
    private tip:egret.TextField;
    private tip_result:egret.TextField;
    private parentTime:number;
    private _lastTime:number;
    private sun_light:egret.Bitmap;
    private btn:egret.Bitmap;
    private createView():void{
         this.board=new Boardshop("同类词翻翻乐",30);
         this.addChild(this.board);
         for(var i=0;i<6;i++){
             var card=new Card(this.wordArry[i].id,this.wordArry[i].str,i);
             this.addChild(card);           
             if(i<3){
                 card.y=230;
                 card.x=130+i*200;
             }else{
                 card.y=450;
                 card.x=130+(i-3)*200;
             }
             this.cards.push(card);
             card.touchEnabled=true;
             card.addEventListener(egret.TouchEvent.TOUCH_TAP,this.turn,this);
         }
         this.is_lock=1;
         this.hero=new Hero();
         this.addChild(this.hero);
         this.hero.init();
         egret.setTimeout(this.start,this,3000);
    }
    private start(){
            this.tip=new egret.TextField();              
            this.tip.size=100;
            this.tip.textColor=0x000000;
            this.tip.fontFamily="fzdhjt";
            this.tip.width=250;   
            this.tip.height=250;        
            this.tip.anchorOffsetX=this.tip.width/2;
            this.tip.anchorOffsetY=this.tip.height/2;
            this.tip.x=320;
            this.tip.y=450;
            this.tip.textAlign=egret.HorizontalAlign.CENTER;
            this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
            this.tip.text="Go!";
            this.tip.scaleX=1;
            this.tip.scaleY=1;
            this.tip.alpha=1;
            this.addChild(this.tip); 
            var ta=egret.Tween.get(this.tip).to({alpha:0,scaleX:3,scaleY:3},1000,egret.Ease.backIn).call(this.go,this)
    }
    private go(){
        console.log("开始")
        this.removeChild(this.tip);
        this.is_lock=0;
        this.addEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this);
        this.parentTime = new Date().getTime();
    }
    private gameViewUpdate(evt:egret.Event):void{
        var nowTime:number = new Date().getTime();
        this._lastTime = nowTime - this.parentTime;
        var currentTime = Math.floor(this._lastTime/100)/10;
        Util.cardTime=currentTime;
        var str:string=currentTime.toFixed(1)+"秒";
        this.board.tip.text=str;
    }
    private turn(evt:egret.Event):void{
        if(this.is_lock==1){
            return;
        }
        console.log(evt.target.id_card);
        var i=evt.target.id_card;
        
        if(evt.target.is_turn==0){     //未翻开
            if(this.first==-1){     //第一次翻
                evt.target.turn_ani();
                evt.target.is_turn=1;
                this.first=i;
            }else{
                evt.target.turn_ani();
                evt.target.is_turn=1;
                this.check_turn(i)
            }
        }
        
    }
    private check_turn(n:number){
        this.is_lock=1
        
        if(this.cards[n].id_word==this.cards[this.first].id_word){
            this.sucess_turn++;
            let _sound: egret.Sound = RES.getRes("right_mp3");
            _sound.play(0, 1);
            if(this.sucess_turn==3){
                console.log("完成") ;
                this.removeEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this); 
                egret.setTimeout(this.overGame,this,500);         
            }
            
            // egret.setTimeout(this.cards[this.first].sucess_light,this,200);
            // egret.setTimeout(this.cards[n].sucess_light,this,200);
            this.cards[n].sucess_light();
            this.cards[this.first].sucess_light();
            this.first=-1;
            this.is_lock=0; 
        }else{
            let _sound: egret.Sound = RES.getRes("wrong_mp3");
            _sound.play(0, 1);
            egret.setTimeout(function(){
                this.cards[n].turn_ani();
                this.cards[n].is_turn=0;
                this.cards[this.first].turn_ani();
                this.cards[this.first].is_turn=0;
                this.first=-1;
                this.is_lock=0;
            },this,300)
        }
    }
    
    private overGame():void{
        this.sun_light=new egret.Bitmap(RES.getRes("sun_light_png"));
        this.addChild(this.sun_light);
        this.addChild(this.board);
        this.board.tip.text="比赛结果";
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
        this.tip_result.width=600;   
        this.tip_result.height=600;        
        this.tip_result.anchorOffsetX=this.tip_result.width/2;
        this.tip_result.anchorOffsetY=this.tip_result.height/2;
        this.tip_result.x=320;
        this.tip_result.y=380;
        this.tip_result.textAlign=egret.HorizontalAlign.CENTER;
        this.tip_result.verticalAlign=egret.VerticalAlign.MIDDLE;
        this.tip_result.textFlow = <Array<egret.ITextElement>>[
                {text:"你在同类词翻翻乐环节共用了\n",style:{"size":35}},
                {text:Util.cardTime+" 秒\n",style:{"size":50,"textColor":0xdb6638}},
                {text:"与第一名仅有一步之遥，继续下一关\n",style:{"size":35}},
                {text:"还有翻牌的机会，加油看好你",style:{"size":35}}
             ]
        this.tip_result.scaleX=0.2;
        this.tip_result.scaleY=0.2;
        this.tip_result.alpha=0;
        this.addChild(this.tip_result); 
        var ta=egret.Tween.get(this.tip_result).to({alpha:1,scaleX:1,scaleY:1},600,egret.Ease.backOut).call(this.nextGame,this);
    }
    private nextGame(){
        this.hero.tip.text="";
        TyperText.getInstance().typerEffect(this.hero.tip,"觉得选词眼花，分组缭乱？其实，SO esay，只需保证每个单元关键词的词义相近，词性相同，主题唯一,你将成为他她它们眼中的超级明星",50);
        this.btn=new egret.Bitmap(RES.getRes("nextBtn_png"));
        this.addChild(this.btn);
        this.btn.anchorOffsetX=this.btn.width/2;
        this.btn.x=320;
        this.btn.y=550;
        this.btn.touchEnabled=true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            (<ChoiceGame>this.parent).del_cardGame();
        },this);
    }
}