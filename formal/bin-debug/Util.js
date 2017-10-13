var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Util = (function () {
    function Util() {
    }
    return Util;
}());
Util.colornum = [0, 1, 2];
Util.colors = [0xE76875, 0xFF8700, 0xddc733];
Util.op1 = [
    { id: 1, str: "美容院", cx: "通用词" },
    { id: 1, str: "美容中心", cx: "通用词" },
    { id: 2, str: "水光针", cx: "产品词" },
    { id: 2, str: "玻尿酸", cx: "产品词" },
    { id: 3, str: "如何变美", cx: "人群词" },
    { id: 3, str: "长相不满意", cx: "人群词" }
];
Util.op2 = [
    { id: 1, str: "美式咖啡", cx: "产品词" },
    { id: 1, str: "拿铁咖啡", cx: "产品词" },
    { id: 2, str: "咖啡店", cx: "通用词" },
    { id: 2, str: "咖啡厅", cx: "通用词" },
    { id: 3, str: "慢咖啡厅", cx: "竞品词" },
    { id: 3, str: "猫屎咖啡厅", cx: "竞品词" }
];
Util.op3 = [
    { id: 1, str: "游泳池", cx: "通用词" },
    { id: 1, str: "健身房", cx: "通用词" },
    { id: 2, str: "肚皮舞", cx: "产品词" },
    { id: 2, str: "动感单车", cx: "产品词" },
    { id: 3, str: "最强肌霸", cx: "品牌词" },
    { id: 3, str: "肌霸健身", cx: "品牌词" }
];
Util.xp1 = [
    { score: 0, str: "哪一个是买家最想看到的店招？" },
    { score: 3, str: "<美美 美容院>塑造自然美的你", texte: [
            { text: "<" },
            { text: "美美 美容院", style: { "textColor": 0xff160b } },
            { text: ">" },
            { text: "塑造自然美的你" },
        ] },
    { score: 1, str: "你的美容顾问，祝你开启美丽人生", texte: [
            { text: "你的" },
            { text: "美容", style: { "textColor": 0xff160b } },
            { text: "顾问，祝你开启" },
            { text: "美", style: { "textColor": 0xff160b } },
            { text: "丽人生" }
        ] },
    { score: 2, str: "整形美容，祝美梦成功", texte: [
            { text: "整形" },
            { text: "美容", style: { "textColor": 0xff160b } },
            { text: "祝" },
            { text: "美", style: { "textColor": 0xff160b } },
            { text: "梦成功" }
        ] },
    { score: 0, str: "哪一个是买家最想了解的产品卖点？" },
    { score: 30, str: "美美 美容院 20年品牌铸锭，国际一流水准，明星、大腕儿美容首选，值得信赖！", texte: [
            { text: "美美 美容院", style: { "textColor": 0xff160b } },
            { text: " 20年品牌铸锭，国际一流水准，明星、大腕儿" },
            { text: "美容", style: { "textColor": 0xff160b } },
            { text: "首选，值得信赖！" }
        ], texte2: [
            { text: "美美 美容院", style: { "textColor": 0xff160b } },
            { text: " 20年品牌铸锭，国际一流水准，明星、大腕儿" },
            { text: "美容", style: { "textColor": 0xff160b } },
            { text: "首选，值得信赖！\n" },
            { text: "查看菜单 | 热卖商品 | 门店查看 | 立即预定", style: { "size": 20, "textColor": 0x5d9fe9 } }
        ] },
    { score: 20, str: "爱美人士首选专业隆鼻，隆胸，抽脂，改脸型等美容整形医院，效果宛若天成! ", texte: [
            { text: "爱" },
            { text: "美", style: { "textColor": 0xff160b } },
            { text: "人士首选专业隆鼻，隆胸，抽脂，改脸型等" },
            { text: "美容", style: { "textColor": 0xff160b } },
            { text: "整形医院，效果宛若天成!" }
        ],
        texte2: [
            { text: "爱" },
            { text: "美", style: { "textColor": 0xff160b } },
            { text: "人士首选专业隆鼻，隆胸，抽脂，改脸型等" },
            { text: "美容", style: { "textColor": 0xff160b } },
            { text: "整形医院，效果宛若天成!\n" },
            { text: "查看菜单 | 热卖商品 | 门店查看 | 立即预定", style: { "size": 20, "textColor": 0x5d9fe9 } }
        ] },
    { score: 10, str: "网红最爱美容机构，助您从此走上人生巅峰！", texte: [
            { text: "网红最爱" },
            { text: "美容", style: { "textColor": 0xff160b } },
            { text: "机构，助您从此走上人生巅峰！" }
        ] },
];
Util.xp2 = [
    { score: 0, str: "哪一个是买家最想看到的店招？" },
    { score: 3, str: "<香榭丽舍的黄昏咖啡>浪漫的味道", texte: [
            { text: "<" },
            { text: "香榭丽舍的黄昏咖啡", style: { "textColor": 0xff160b } },
            { text: ">" },
            { text: "浪漫的味道" },
        ] },
    { score: 1, str: "远离疾病，从一天三杯咖啡开始", texte: [
            { text: "远离疾病，从一天三杯" },
            { text: "咖啡", style: { "textColor": 0xff160b } },
            { text: "开始" }
        ] },
    { score: 2, str: "极致精选猫屎咖啡，只给有品位的你", texte: [
            { text: "极致精选猫屎" },
            { text: "咖啡", style: { "textColor": 0xff160b } },
            { text: "，只给有品位的你" }
        ] },
    { score: 0, str: "哪一个是买家最想了解的产品卖点？" },
    { score: 30, str: "香榭丽舍的黄昏咖啡店，巴菲特最爱咖啡五折热卖，一杯咖啡拉近你与股神的距离，5km内20分钟免费送达！", texte2: [
            { text: "香榭丽舍的黄昏咖啡店", style: { "textColor": 0xff160b } },
            { text: "，巴菲特最爱咖啡五折热卖，一杯" },
            { text: "咖啡", style: { "textColor": 0xff160b } },
            { text: "拉近你与股神的距离，5km内20分钟免费送达！\n" },
            { text: "查看菜单 | 热卖商品 | 门店查看 | 立即预定", style: { "size": 20, "textColor": 0x5d9fe9 } }
        ], texte: [
            { text: "香榭丽舍的黄昏咖啡店", style: { "textColor": 0xff160b } },
            { text: "，巴菲特最爱咖啡五折热卖，一杯" },
            { text: "咖啡", style: { "textColor": 0xff160b } },
            { text: "拉近你与股神的距离，5km内20分钟免费送达！" }
        ]
    },
    { score: 10, str: "咖啡的烟碱酸含有维他命B，烘焙后的咖啡豆含量更高，一日三杯咖啡可预防胆结石，香榭丽舍的黄昏咖啡店，您的家庭医生。", texte: [
            { text: "咖啡", style: { "textColor": 0xff160b } },
            { text: "的烟碱酸含有维他命B，烘焙后的" },
            { text: "咖啡", style: { "textColor": 0xff160b } },
            { text: "豆含量更高，一日三杯" },
            { text: "咖啡", style: { "textColor": 0xff160b } },
            { text: "可预防胆结石，" },
            { text: "香榭丽舍的黄昏咖啡店", style: { "textColor": 0xff160b } },
            { text: "，您的家庭医生。" }
        ] },
    { score: 20, str: "香榭丽舍的黄昏咖啡店,精选巴西优质咖啡豆，手工现磨，慢煮回味，搭配多种精致糕点，畅饮一杯元气满满！", texte: [
            { text: "香榭丽舍的黄昏咖啡店", style: { "textColor": 0xff160b } },
            { text: ",精选巴西优质" },
            { text: "咖啡", style: { "textColor": 0xff160b } },
            { text: "豆，手工现磨，慢煮回味，搭配多种精致糕点，畅饮一杯元气满满！" },
        ], texte2: [
            { text: "香榭丽舍的黄昏咖啡店", style: { "textColor": 0xff160b } },
            { text: ",精选巴西优质" },
            { text: "咖啡", style: { "textColor": 0xff160b } },
            { text: "豆，手工现磨，慢煮回味，搭配多种精致糕点，畅饮一杯元气满满！\n" },
            { text: "查看菜单 | 热卖商品 | 门店查看 | 立即预定", style: { "size": 20, "textColor": 0x5d9fe9 } }
        ]
    },
];
Util.xp3 = [
    { score: 0, str: "哪一个是买家最想看到的店招？" },
    { score: 3, str: "<最强肌霸健身房>高颜值一对一健身教练", texte: [
            { text: "<" },
            { text: "最强肌霸健身房", style: { "textColor": 0xff160b } },
            { text: ">高颜值一对一健身教练" }
        ] },
    { score: 1, str: "最强肌霸 你值得拥有", texte: [
            { text: "最强肌霸", style: { "textColor": 0xff160b } },
            { text: " 你值得拥有" }
        ] },
    { score: 2, str: "不吃药 不打针30天快速瘦身", texte: [
            { text: "不吃药 不打针30天快速瘦身" }
        ] },
    { score: 0, str: "哪一个是买家最想了解的产品卖点？" },
    { score: 30, str: "最强肌霸健身房，高颜值教练专业一对一陪练，带你30天秀出好身材！", texte2: [
            { text: "最强肌霸健身房", style: { "textColor": 0xff160b } },
            { text: "，高颜值教练专业一对一陪练，带你30天秀出好身材！\n" },
            { text: "查看菜单 | 热卖商品 | 门店查看 | 立即预定", style: { "size": 20, "textColor": 0x5d9fe9 } }
        ], texte: [
            { text: "最强肌霸健身房", style: { "textColor": 0xff160b } },
            { text: "，高颜值教练专业一对一陪练，带你30天秀出好身材！" },
        ]
    },
    { score: 20, str: "齐全的器械设备，专业的教练进行指导，良好的健身氛围，168元单人游泳+汗蒸体验套餐 仅售99元", texte2: [
            { text: "齐全的器械设备，专业的教练进行指导，良好的" },
            { text: "健身", style: { "textColor": 0xff160b } },
            { text: "氛围，168元单人游泳+汗蒸体验套餐 仅售99元\n" },
            { text: "查看菜单 | 热卖商品 | 门店查看 | 立即预定", style: { "size": 20, "textColor": 0x5d9fe9 } }
        ], texte: [
            { text: "齐全的器械设备，专业的教练进行指导，良好的" },
            { text: "健身", style: { "textColor": 0xff160b } },
            { text: "氛围，168元单人游泳+汗蒸体验套餐 仅售99元" },
        ]
    },
    { score: 10, str: "人生的道路就像内裤没有一条不是自己选的，那么在健身的路上，你选择开始了吗？", texte: [
            { text: "人生的道路就像内裤没有一条不是自己选的，那么在" },
            { text: "健身", style: { "textColor": 0xff160b } },
            { text: "的路上，你选择开始了吗？" }
        ] },
];
__reflect(Util.prototype, "Util");
//# sourceMappingURL=Util.js.map