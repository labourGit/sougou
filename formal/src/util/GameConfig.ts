/**
 *
 * @author 
 *
 */
class GameConfig {
    
    public playerHp:number = 3;
    
    /**
     * 子弹 发射间隔，单位：毫秒
     */
    public bullectCd:number = 350;
    
    
    /**
     * 每秒移动多少像素
     */
    public bullectMoveSpeed:number = 400/30;
    
    public mapSpeed:number = 200/30;
    
    /**
     * 怪物数值
     */
    public mosnterCfg = {
        'm1': { 'speed': 200 / 30,'hp': 1, 'score':100 },
        'm2': { 'speed': 250 / 30,'hp': 1,'score': 200},
        'm3': { 'speed': 300 / 30,'hp': 1,'score': 300},
        'm4': { 'speed': 350 / 30,'hp': 1,'score': 400},
        'm5': { 'speed': 400 / 30,'hp': 2,'score': 500},
        'm6': { 'speed': 450 / 30,'hp': 2,'score': 600},
        'm7': { 'speed': 500 / 30,'hp': 2,'score': 700}
    };
     
    public makeMonTimeLimit: any = [[500,1000], [250, 500], [100, 250]];
    
    public timeScaleSpeed:number = 7000;
    
    public levelUpgradeTime:number[] = [3000, 5000];
}
