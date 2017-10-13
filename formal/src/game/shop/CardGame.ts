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
    private firstBtn:egret.Bitmap;
    private rule_board:RuleBoard;
    private pei_str1:string;
    private pei_cx1:string;
    private pei_cx2:string;
    private pei_cx3:string;
    private pei_str2:string;
    private pei_str3:string;
    private createView():void{
         this.board=new Boardshop("同类词翻翻乐",50);
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
         this.rule_board=new RuleBoard();
         this.rule_board.anchorOffsetX=this.rule_board.width/2;
         this.rule_board.anchorOffsetY=this.rule_board.height/2;
         this.rule_board.x=320;
         this.rule_board.y=450;
         this.rule_board.alpha=0;
         this.rule_board.scaleX=0.4;
         this.rule_board.scaleY=0.4
         this.addChild(this.rule_board);
         egret.Tween.get(this.rule_board).wait(700).to({alpha:1,scaleX:1,scaleY:1},350,egret.Ease.backOut);
         this.firstBtn=new egret.Bitmap(RES.getRes("firstBtn_png"));
         this.addChild(this.firstBtn);
         this.firstBtn.anchorOffsetX=this.firstBtn.width/2;
         this.firstBtn.anchorOffsetY=this.firstBtn.height/2;
         this.firstBtn.x=320;
         this.firstBtn.y=600;
         this.firstBtn.alpha=0;
         this.firstBtn.scaleX=1;
         this.firstBtn.scaleY=1;
         egret.Tween.get(this.firstBtn).wait(1000).to({alpha:1,scaleX:1,scaleY:1},250,egret.Ease.backOut);
         this.firstBtn.touchEnabled=true;
         this.firstBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.start,this)    
    }
    private start(){
            this.removeChild(this.firstBtn);
            this.removeChild(this.rule_board);
            let _sound: egret.Sound = RES.getRes("goMusic_mp3");
            _sound.play(0, 1); 
            this.tip=new egret.TextField();              
            this.tip.size=75;
            this.tip.textColor=0x000000;
            this.tip.fontFamily="fzdhjt";
            this.tip.width=500;   
            this.tip.height=500;        
            this.tip.anchorOffsetX=this.tip.width/2;
            this.tip.anchorOffsetY=this.tip.height/2;
            this.tip.x=320;
            this.tip.y=450;
            this.tip.textAlign=egret.HorizontalAlign.CENTER;
            this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
            this.tip.text="Go!";
            this.tip.scaleX=1;
            this.tip.scaleY=1;
            this.tip.alpha=0;
            this.addChild(this.tip);
            var ta=egret.Tween.get(this.tip).wait(200).to({alpha:1},1).to({alpha:0,scaleX:4,scaleY:4},1000,egret.Ease.backIn).call(this.go,this);
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
            if(this.sucess_turn==1){
                this.pei_cx1=""+this.wordArry[this.cards[this.first].id_card].cx;
                this.pei_str1=""+this.wordArry[this.cards[this.first].id_card].str+"-"+this.wordArry[this.cards[n].id_card].str;
                console.log(this.pei_cx1);
                console.log(this.pei_str1);
                this.hero.tip.textColor=0xdb6638;
                this.hero.tip.y=Util.h-280;
                this.hero.tip.x=60;
                this.hero.tip.textFlow=<Array<egret.ITextElement>>[
                {text:"答对配对词666：\n",style:{"textColor":0x000000}},
                {text:this.pei_cx1+"：",style:{"textColor":0x000000}},
                {text:this.pei_str1+"\n",style:{"textColor":0xdb6638}}          
              ];
            }else if(this.sucess_turn==2){
                this.pei_cx2=""+this.wordArry[this.cards[this.first].id_card].cx;
                this.pei_str2=""+this.wordArry[this.cards[this.first].id_card].str+"-"+this.wordArry[this.cards[n].id_card].str
                this.hero.tip.textFlow=<Array<egret.ITextElement>>[
                {text:"答对配对词666：\n",style:{"textColor":0x000000}},
                {text:this.pei_cx1+"：",style:{"textColor":0x000000}},
                {text:this.pei_str1+"\n",style:{"textColor":0xdb6638}},
                {text:this.pei_cx2+"：",style:{"textColor":0x000000}},
                {text:this.pei_str2+"\n",style:{"textColor":0xdb6638}}
                ]
            }else{
                this.pei_cx3=""+this.wordArry[this.cards[this.first].id_card].cx;
                this.pei_str3=""+this.wordArry[this.cards[this.first].id_card].str+"-"+this.wordArry[this.cards[n].id_card].str
                this.hero.tip.textFlow=<Array<egret.ITextElement>>[
                {text:"答对配对词666：\n",style:{"textColor":0x000000}},
                {text:this.pei_cx1+"：",style:{"textColor":0x000000}},
                {text:this.pei_str1+"\n",style:{"textColor":0xdb6638}},
                {text:this.pei_cx2+"：",style:{"textColor":0x000000}},
                {text:this.pei_str2+"\n",style:{"textColor":0xdb6638}},
                {text:this.pei_cx3+"：",style:{"textColor":0x000000}},
                {text:this.pei_str3+"\n",style:{"textColor":0xdb6638}}
                ]
            }
            if(this.sucess_turn==3){
                console.log("完成") ;
                this.removeEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this); 
                egret.setTimeout(this.overGame,this,500);         
            }
            
            // egret.setTimeout(this.cards[this.first].sucess_light,this,200);
            // egret.setTimeout(this.cards[n].sucess_light,this,200);
            var _color=Util.colors.shift()
            this.cards[n].sucess_light(_color);
            this.cards[this.first].sucess_light(_color);
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
        this.board.tip.size=50;
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
                
                {text:Util.cardTime+" 秒\n",style:{"size":80,"textColor":0xdb6638}},
                {text:"与第一名仅有一步之遥\n",style:{"size":35}},
                {text:"继续下一关，还有翻盘的机会!",style:{"size":35}}
             ]
        this.tip_result.scaleX=0.2;
        this.tip_result.scaleY=0.2;
        this.tip_result.alpha=0;
        this.addChild(this.tip_result); 
        var ta=egret.Tween.get(this.tip_result).to({alpha:1,scaleX:1,scaleY:1},600,egret.Ease.backOut).call(this.nextGame,this);
    }
    private nextGame(){
        
        this.hero.tip.textColor=0x000000;
        this.hero.tip.y=Util.h-300;
        this.hero.tip.x=70;
        this.hero.tip.textFlow = <Array<egret.ITextElement>>[    
                {text:"分组小贴士：\n",style:{"size":28}},
                {text:"       词义相近\n",style:{"size":28,"textColor":0xdb6638}},
                {text:"       词性相同\n",style:{"size":28,"textColor":0xdb6638}},
                {text:"       主题唯一\n",style:{"size":28,"textColor":0xdb6638}},
                {text:"牢记关键词分组三个原则，你将成为买家眼中的超级明星！",style:{"size":28}},
                
             ]
        // TyperText.getInstance().typerEffect(this.hero.tip,"觉得选词眼花，分组缭乱？其实，SO esay，只需保证每个单元关键词的词义相近，词性相同，主题唯一,你将成为他她它们眼中的超级明星",15);
        this.btn=new egret.Bitmap(RES.getRes("nextBtn_png"));
        this.addChild(this.btn);
        this.btn.anchorOffsetX=this.btn.width/2;
        this.btn.anchorOffsetY=this.btn.height/2;
        this.btn.x=320;
        this.btn.y=550;
        this.btn.alpha=0;
        this.btn.scaleX=0.1;
        this.btn.scaleY=0.1;
        egret.Tween.get(this.btn).to({alpha:1,scaleX:1,scaleY:1},450,egret.Ease.backOut);
        this.btn.touchEnabled=true;
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            let _sound: egret.Sound = RES.getRes("qie_mp3");
            _sound.play(0, 1);
            (<ChoiceGame>this.parent).del_cardGame();
        },this);
    }
}
class RuleBoard extends egret.Sprite{
    private rule_board:egret.Bitmap;
    private tip:egret.TextField;
    public constructor(){
        super();
        this.rule_board=new egret.Bitmap(RES.getRes("rule_board_png"));
        this.addChild(this.rule_board);
        this.rule_board.width=550;
        this.rule_board.height=550*0.77;      
        this.tip=new egret.TextField();       
        this.tip.x=this.rule_board.x+25;
        this.tip.y=this.rule_board.y+50;
        this.tip.size=30;
        this.tip.textColor=0x000000
        this.tip.fontFamily="fzdhjt";
            this.tip.width=500;
            this.tip.textAlign=egret.HorizontalAlign.CENTER;
             this.tip.textFlow = <Array<egret.ITextElement>>[              
                {text:"第一关 游戏规则\n",style:{"bold":true}},
                {text:"\n"},
                {text:"将同类词两两配对\n"},
                 {text:"如："},
                 {text:"苹果-香蕉\n",style:{"textColor":0xdb6638}},
                 {text:"配对成功即可形成推广词组，\n"},
                 {text:"招徕顾客！\n"},
                 {text:"用时越短，获胜几率越高！\n"},
             ]   
            this.addChild(this.tip);  
    }
}