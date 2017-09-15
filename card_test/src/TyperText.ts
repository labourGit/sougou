class TyperText{
    private static instance:TyperText;
    public static getInstance():TyperText{
            if(this.instance == null){
                this.instance = new TyperText();
            }
            return this.instance;
        }
     public typerEffect(obj:egret.TextField,content:string = "",interval:number = 200,backFun:Function=null):void{
        var strArr:Array<any> = content.split("");
        var len:number = strArr.length;
  
        for (var i = 0; i < len; i++){           
            egret.setTimeout(function () {            
                obj.appendText(strArr[Number(this)]); 
                if ((Number(this) >= len - 1) && (backFun != null)) {
                    backFun();
                    console.log("zhixing")
                }                                  
            }, i, interval*i);                    
        }
    }
}