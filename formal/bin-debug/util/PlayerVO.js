var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var PlayerVO = (function () {
    function PlayerVO() {
    }
    PlayerVO.prototype.init = function () {
        this.name = this.nickname;
        this.head = this.headimg;
    };
    PlayerVO.randomOne = function () {
        var vo = new PlayerVO();
        vo.wxId = randomInt_XY(1, 9999) + '';
        vo.name = 'name' + vo.wxId;
        vo.head = 'http://www.nofastfat.com/h5/test_php/head.jpg';
        return vo;
    };
    return PlayerVO;
}());
__reflect(PlayerVO.prototype, "PlayerVO");
//# sourceMappingURL=PlayerVO.js.map