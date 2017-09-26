/**
 *
 * @author 
 *
 */
class PlayerVO {
    public wxId: string;
    public id: string;
    public name: string;
    public head: string;

    public headimg: string;
    public nickname: string;

    public  is_winner: number;//  is_winner | int | 1=已中奖，0=未中奖
    public  winner_status: number;//  winner_status | int | 1=未兑奖，2=已兑奖
    public justWin:boolean;
    public initWin:boolean;

    public init() {
        this.name = this.nickname;
        this.head = this.headimg;
    }

    public static randomOne(): PlayerVO {
        var vo: PlayerVO = new PlayerVO();

        vo.wxId = randomInt_XY(1, 9999) + '';
        vo.name = 'name' + vo.wxId;
        vo.head = 'http://www.nofastfat.com/h5/test_php/head.jpg';

        return vo;
    }
}
