
var _apiURL="http://www.unitechance.com/aqy/service/operAction.php?action=";
var _webUrl="http://www.unitechance.com/html5/sougou/";
var _shareUrl=_webUrl+"index.html?ac=";
var _shareTitle="哇WOW~ 惊现百年一遇经营天才，店铺分分钟成爆款。人称“胡布斯”新晋百强商界巨擘！！";
var _shareInfo="搜狗商学院——商战巅峰对决！";
var _shareImg=_webUrl+"share.png";
var _lan="cn";
setWeiXinShare();
console.log("yinyong")
//分享配置
function setWeiXinShare(){
    console.log("yinyong2")
    var _url=encodeURIComponent(location.href.split('#')[0]);
    var _jsonData = $.param({ "url": _url});
    $.ajax({
        url:_apiURL+'getWxConfig',
        type:"post",
        dataType:"json",
        data:_jsonData,
        success: function(backData){
            if(backData.code==1) {
                wx.config({
                    //debug: true,
                    appId: backData.msg.appId,
                    timestamp: backData.msg.timestamp,
                    nonceStr: backData.msg.nonceStr,
                    signature: backData.msg.signature,
                    jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage'
                    ]
                });
            }else{
                // alert(backData.msg);
                console.log(33);
            }
        }
    });
}

wx.ready(function () {
   var shareData = {
        title: _shareTitle,
        desc: _shareInfo,
        link: _shareUrl,
        imgUrl: _shareImg,   
        trigger: function (res) {           
        },      
        success: function (res) {
            //alert('已分享');                   
        },
        cancel: function (res) {
            //alert('已取消');
        }
        // ,
        // fail: function (res) {
        //   //alert(JSON.stringify(res));
        // }
    };
    wx.onMenuShareAppMessage(shareData);
    wx.onMenuShareTimeline(shareData);
});