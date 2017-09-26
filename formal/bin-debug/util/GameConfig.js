var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var GameConfig = (function () {
    function GameConfig() {
        this.playerHp = 3;
        /**
         * 子弹 发射间隔，单位：毫秒
         */
        this.bullectCd = 350;
        /**
         * 每秒移动多少像素
         */
        this.bullectMoveSpeed = 400 / 30;
        this.mapSpeed = 200 / 30;
        /**
         * 怪物数值
         */
        this.mosnterCfg = {
            'm1': { 'speed': 200 / 30, 'hp': 1, 'score': 100 },
            'm2': { 'speed': 250 / 30, 'hp': 1, 'score': 200 },
            'm3': { 'speed': 300 / 30, 'hp': 1, 'score': 300 },
            'm4': { 'speed': 350 / 30, 'hp': 1, 'score': 400 },
            'm5': { 'speed': 400 / 30, 'hp': 2, 'score': 500 },
            'm6': { 'speed': 450 / 30, 'hp': 2, 'score': 600 },
            'm7': { 'speed': 500 / 30, 'hp': 2, 'score': 700 }
        };
        this.makeMonTimeLimit = [[500, 1000], [250, 500], [100, 250]];
        this.timeScaleSpeed = 7000;
        this.levelUpgradeTime = [3000, 5000];
    }
    return GameConfig;
}());
__reflect(GameConfig.prototype, "GameConfig");
//# sourceMappingURL=GameConfig.js.map