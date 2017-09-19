class CardGame extends egret.DisplayObjectContainer{
    
    public constructor(){
        super();
        this.createView();
    }
    private card:Card;
    private cards:Array<Card>=[];
    private first:number;
    private createView():void{
         for(var i=0;i<6;i++){
             var card=new Card(Util.op[i].id,Util.op[i].str,i);
             this.addChild(card);
             
             if(i<3){
                 card.y=200;
                 card.x=100+i*200;
             }else{
                 card.y=500;
                 card.x=100+(i-3)*200;
             }
             this.cards.push(card);
             card.touchEnabled=true;
            //  card.addEventListener(egret.TouchEvent.TOUCH_TAP,(evt:egret.TouchEvent)=>{
            //         this.turn(evt.target);
            //     },this);
            card.addEventListener(egret.TouchEvent.TOUCH_TAP,this.turn,this);
         }
    }
    private turn(evt:egret.Event):void{
        console.log(evt.target.id);
        var i=evt.target.id;
        this.cards[i].turn_ani();
    }
}