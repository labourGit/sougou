class Game extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.createView();
    }
    private classroom:ClassRoom;
    private school:School;
    private shop:Shop;
    private choiceGame:ChoiceGame;
    private createView():void{
        //学校-牌子-打铃
       this.school=new School();
       this.addChild(this.school);
    }
    public del_school(){
        this.removeChild(this.school)
    }
    public reScene(){
       this.classroom=new ClassRoom();
       this.addChild(this.classroom);
    }
    public del_class(){
        this.removeChild(this.classroom)
    }
    public shopScene(){
        this.choiceGame=new ChoiceGame();
        this.addChild(this.choiceGame);
        this.choiceGame.init();
    }
    
}