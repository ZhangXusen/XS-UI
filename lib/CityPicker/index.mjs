import { defineComponent as X, ref as o, onMounted as Y, resolveComponent as u, openBlock as n, createBlock as k, withCtx as i, createElementVNode as z, toDisplayString as j, createVNode as s, normalizeClass as Z, createElementBlock as d, Fragment as g, renderList as t, createTextVNode as S } from "vue";
const $ = {
  cities: {
    A: [
      {
        id: 56,
        spell: "aba",
        name: "\u963F\u575D"
      },
      {
        id: 57,
        spell: "akesu",
        name: "\u963F\u514B\u82CF"
      },
      {
        id: 58,
        spell: "alashanmeng",
        name: "\u963F\u62C9\u5584\u76DF"
      },
      {
        id: 59,
        spell: "aletai",
        name: "\u963F\u52D2\u6CF0"
      },
      {
        id: 60,
        spell: "ali",
        name: "\u963F\u91CC"
      },
      {
        id: 61,
        spell: "ankang",
        name: "\u5B89\u5EB7"
      },
      {
        id: 62,
        spell: "anqing",
        name: "\u5B89\u5E86"
      },
      {
        id: 63,
        spell: "anshan",
        name: "\u978D\u5C71"
      },
      {
        id: 64,
        spell: "anshun",
        name: "\u5B89\u987A"
      },
      {
        id: 65,
        spell: "anyang",
        name: "\u5B89\u9633"
      },
      {
        id: 338,
        spell: "acheng",
        name: "\u963F\u57CE"
      },
      {
        id: 339,
        spell: "anfu",
        name: "\u5B89\u798F"
      },
      {
        id: 340,
        spell: "anji",
        name: "\u5B89\u5409"
      },
      {
        id: 341,
        spell: "anning",
        name: "\u5B89\u5B81"
      },
      {
        id: 342,
        spell: "anqiu",
        name: "\u5B89\u4E18"
      },
      {
        id: 343,
        spell: "anxi",
        name: "\u5B89\u6EAA"
      },
      {
        id: 344,
        spell: "anyi",
        name: "\u5B89\u4E49"
      },
      {
        id: 345,
        spell: "anyuan",
        name: "\u5B89\u8FDC"
      }
    ],
    B: [
      {
        id: 1,
        spell: "beijing",
        name: "\u5317\u4EAC"
      },
      {
        id: 66,
        spell: "baicheng",
        name: "\u767D\u57CE"
      },
      {
        id: 67,
        spell: "baise",
        name: "\u767E\u8272"
      },
      {
        id: 68,
        spell: "baishan",
        name: "\u767D\u5C71"
      },
      {
        id: 69,
        spell: "baiyin",
        name: "\u767D\u94F6"
      },
      {
        id: 70,
        spell: "bangbu",
        name: "\u868C\u57E0"
      },
      {
        id: 71,
        spell: "baoding",
        name: "\u4FDD\u5B9A"
      },
      {
        id: 72,
        spell: "baoji",
        name: "\u5B9D\u9E21"
      },
      {
        id: 73,
        spell: "baoshan",
        name: "\u4FDD\u5C71"
      },
      {
        id: 74,
        spell: "baotou",
        name: "\u5305\u5934"
      },
      {
        id: 75,
        spell: "bayannaoer",
        name: "\u5DF4\u5F66\u6DD6\u5C14"
      },
      {
        id: 76,
        spell: "bayinguoleng",
        name: "\u5DF4\u97F3\u90ED\u695E"
      },
      {
        id: 77,
        spell: "bazhong",
        name: "\u5DF4\u4E2D"
      },
      {
        id: 78,
        spell: "beihai",
        name: "\u5317\u6D77"
      },
      {
        id: 79,
        spell: "benxi",
        name: "\u672C\u6EAA"
      },
      {
        id: 80,
        spell: "bijie",
        name: "\u6BD5\u8282"
      },
      {
        id: 81,
        spell: "binzhou",
        name: "\u6EE8\u5DDE"
      },
      {
        id: 82,
        spell: "boertala",
        name: "\u535A\u5C14\u5854\u62C9"
      },
      {
        id: 83,
        spell: "bozhou",
        name: "\u4EB3\u5DDE"
      },
      {
        id: 346,
        spell: "baoying",
        name: "\u5B9D\u5E94"
      },
      {
        id: 347,
        spell: "bayan",
        name: "\u5DF4\u5F66"
      },
      {
        id: 348,
        spell: "binhai",
        name: "\u6EE8\u6D77"
      },
      {
        id: 349,
        spell: "binxian",
        name: "\u5BBE\u53BF"
      },
      {
        id: 350,
        spell: "binyang",
        name: "\u5BBE\u9633"
      },
      {
        id: 351,
        spell: "bishan",
        name: "\u74A7\u5C71"
      },
      {
        id: 352,
        spell: "boai",
        name: "\u535A\u7231"
      },
      {
        id: 353,
        spell: "boluo",
        name: "\u535A\u7F57"
      },
      {
        id: 354,
        spell: "boxing",
        name: "\u535A\u5174"
      }
    ],
    C: [
      {
        id: 2,
        spell: "chongqing",
        name: "\u91CD\u5E86"
      },
      {
        id: 5,
        spell: "changchun",
        name: "\u957F\u6625"
      },
      {
        id: 6,
        spell: "changsha",
        name: "\u957F\u6C99"
      },
      {
        id: 7,
        spell: "changzhou",
        name: "\u5E38\u5DDE"
      },
      {
        id: 8,
        spell: "chengdu",
        name: "\u6210\u90FD"
      },
      {
        id: 84,
        spell: "cangzhou",
        name: "\u6CA7\u5DDE"
      },
      {
        id: 85,
        spell: "changde",
        name: "\u5E38\u5FB7"
      },
      {
        id: 86,
        spell: "changdu",
        name: "\u660C\u90FD"
      },
      {
        id: 87,
        spell: "changji",
        name: "\u660C\u5409"
      },
      {
        id: 88,
        spell: "changzhi",
        name: "\u957F\u6CBB"
      },
      {
        id: 89,
        spell: "chaohu",
        name: "\u5DE2\u6E56"
      },
      {
        id: 90,
        spell: "chaoyang",
        name: "\u671D\u9633"
      },
      {
        id: 91,
        spell: "chaozhou",
        name: "\u6F6E\u5DDE"
      },
      {
        id: 92,
        spell: "chengde",
        name: "\u627F\u5FB7"
      },
      {
        id: 93,
        spell: "chenzhou",
        name: "\u90F4\u5DDE"
      },
      {
        id: 94,
        spell: "chifeng",
        name: "\u8D64\u5CF0"
      },
      {
        id: 95,
        spell: "chizhou",
        name: "\u6C60\u5DDE"
      },
      {
        id: 96,
        spell: "chongzuo",
        name: "\u5D07\u5DE6"
      },
      {
        id: 97,
        spell: "chuxiong",
        name: "\u695A\u96C4"
      },
      {
        id: 98,
        spell: "chuzhou",
        name: "\u6EC1\u5DDE"
      },
      {
        id: 355,
        spell: "cangnan",
        name: "\u82CD\u5357"
      },
      {
        id: 356,
        spell: "cangshan",
        name: "\u82CD\u5C71"
      },
      {
        id: 357,
        spell: "caoxian",
        name: "\u66F9\u53BF"
      },
      {
        id: 358,
        spell: "changdao",
        name: "\u957F\u5C9B"
      },
      {
        id: 359,
        spell: "changfeng",
        name: "\u957F\u4E30"
      },
      {
        id: 360,
        spell: "changhai",
        name: "\u957F\u6D77"
      },
      {
        id: 361,
        spell: "changle",
        name: "\u957F\u4E50"
      },
      {
        id: 362,
        spell: "changle",
        name: "\u660C\u4E50"
      },
      {
        id: 363,
        spell: "changshan",
        name: "\u5E38\u5C71"
      },
      {
        id: 364,
        spell: "changshu",
        name: "\u5E38\u719F"
      },
      {
        id: 365,
        spell: "changtai",
        name: "\u957F\u6CF0"
      },
      {
        id: 366,
        spell: "changting",
        name: "\u957F\u6C40"
      },
      {
        id: 367,
        spell: "changxing",
        name: "\u957F\u5174"
      },
      {
        id: 368,
        spell: "changyi",
        name: "\u660C\u9091"
      },
      {
        id: 369,
        spell: "chaoan",
        name: "\u6F6E\u5B89"
      },
      {
        id: 370,
        spell: "chenggong",
        name: "\u5448\u8D21"
      },
      {
        id: 371,
        spell: "chengkou",
        name: "\u57CE\u53E3"
      },
      {
        id: 372,
        spell: "chengwu",
        name: "\u6210\u6B66"
      },
      {
        id: 373,
        spell: "chiping",
        name: "\u830C\u5E73"
      },
      {
        id: 374,
        spell: "chongren",
        name: "\u5D07\u4EC1"
      },
      {
        id: 375,
        spell: "chongyi",
        name: "\u5D07\u4E49"
      },
      {
        id: 376,
        spell: "chongzhou",
        name: "\u5D07\u5DDE"
      },
      {
        id: 377,
        spell: "chunan",
        name: "\u6DF3\u5B89"
      },
      {
        id: 378,
        spell: "cixi",
        name: "\u6148\u6EAA"
      },
      {
        id: 379,
        spell: "conghua",
        name: "\u4ECE\u5316"
      },
      {
        id: 380,
        spell: "congyang",
        name: "\u679E\u9633"
      }
    ],
    D: [
      {
        id: 9,
        spell: "dalian",
        name: "\u5927\u8FDE"
      },
      {
        id: 10,
        spell: "dongguan",
        name: "\u4E1C\u839E"
      },
      {
        id: 99,
        spell: "dali",
        name: "\u5927\u7406"
      },
      {
        id: 100,
        spell: "dandong",
        name: "\u4E39\u4E1C"
      },
      {
        id: 101,
        spell: "daqing",
        name: "\u5927\u5E86"
      },
      {
        id: 102,
        spell: "datong",
        name: "\u5927\u540C"
      },
      {
        id: 103,
        spell: "daxinganling",
        name: "\u5927\u5174\u5B89\u5CAD"
      },
      {
        id: 104,
        spell: "dazhou",
        name: "\u8FBE\u5DDE"
      },
      {
        id: 105,
        spell: "dehong",
        name: "\u5FB7\u5B8F"
      },
      {
        id: 106,
        spell: "deyang",
        name: "\u5FB7\u9633"
      },
      {
        id: 107,
        spell: "dezhou",
        name: "\u5FB7\u5DDE"
      },
      {
        id: 108,
        spell: "dingxi",
        name: "\u5B9A\u897F"
      },
      {
        id: 109,
        spell: "diqing",
        name: "\u8FEA\u5E86"
      },
      {
        id: 110,
        spell: "dongying",
        name: "\u4E1C\u8425"
      },
      {
        id: 381,
        spell: "dafeng",
        name: "\u5927\u4E30"
      },
      {
        id: 382,
        spell: "daishan",
        name: "\u5CB1\u5C71"
      },
      {
        id: 383,
        spell: "dangshan",
        name: "\u7800\u5C71"
      },
      {
        id: 384,
        spell: "dangtu",
        name: "\u5F53\u6D82"
      },
      {
        id: 385,
        spell: "danxian",
        name: "\u5355\u53BF"
      },
      {
        id: 386,
        spell: "danyang",
        name: "\u4E39\u9633"
      },
      {
        id: 387,
        spell: "dapu",
        name: "\u5927\u57D4"
      },
      {
        id: 388,
        spell: "datian",
        name: "\u5927\u7530"
      },
      {
        id: 389,
        spell: "dayi",
        name: "\u5927\u9091"
      },
      {
        id: 390,
        spell: "dayu",
        name: "\u5927\u4F59"
      },
      {
        id: 391,
        spell: "dazu",
        name: "\u5927\u8DB3"
      },
      {
        id: 392,
        spell: "dean",
        name: "\u5FB7\u5B89"
      },
      {
        id: 393,
        spell: "dehua",
        name: "\u5FB7\u5316"
      },
      {
        id: 394,
        spell: "dehui",
        name: "\u5FB7\u60E0"
      },
      {
        id: 395,
        spell: "dengfeng",
        name: "\u767B\u5C01"
      },
      {
        id: 396,
        spell: "deqing",
        name: "\u5FB7\u6E05"
      },
      {
        id: 397,
        spell: "deqing",
        name: "\u5FB7\u5E86"
      },
      {
        id: 398,
        spell: "dexing",
        name: "\u5FB7\u5174"
      },
      {
        id: 399,
        spell: "dianbai",
        name: "\u7535\u767D"
      },
      {
        id: 400,
        spell: "dianjiang",
        name: "\u57AB\u6C5F"
      },
      {
        id: 401,
        spell: "dingnan",
        name: "\u5B9A\u5357"
      },
      {
        id: 402,
        spell: "dingtao",
        name: "\u5B9A\u9676"
      },
      {
        id: 403,
        spell: "dingyuan",
        name: "\u5B9A\u8FDC"
      },
      {
        id: 404,
        spell: "donga",
        name: "\u4E1C\u963F"
      },
      {
        id: 405,
        spell: "donghai",
        name: "\u4E1C\u6D77"
      },
      {
        id: 406,
        spell: "dongming",
        name: "\u4E1C\u660E"
      },
      {
        id: 407,
        spell: "dongping",
        name: "\u4E1C\u5E73"
      },
      {
        id: 408,
        spell: "dongshan",
        name: "\u4E1C\u5C71"
      },
      {
        id: 409,
        spell: "dongtai",
        name: "\u4E1C\u53F0"
      },
      {
        id: 410,
        spell: "dongtou",
        name: "\u6D1E\u5934"
      },
      {
        id: 411,
        spell: "dongxiang",
        name: "\u4E1C\u4E61"
      },
      {
        id: 412,
        spell: "dongyang",
        name: "\u4E1C\u9633"
      },
      {
        id: 413,
        spell: "dongyuan",
        name: "\u4E1C\u6E90"
      },
      {
        id: 414,
        spell: "dongzhi",
        name: "\u4E1C\u81F3"
      },
      {
        id: 415,
        spell: "duchang",
        name: "\u90FD\u660C"
      },
      {
        id: 416,
        spell: "dujiangyan",
        name: "\u90FD\u6C5F\u5830"
      }
    ],
    E: [
      {
        id: 111,
        spell: "eerduosi",
        name: "\u9102\u5C14\u591A\u65AF"
      },
      {
        id: 112,
        spell: "enshi",
        name: "\u6069\u65BD"
      },
      {
        id: 113,
        spell: "ezhou",
        name: "\u9102\u5DDE"
      },
      {
        id: 417,
        spell: "enping",
        name: "\u6069\u5E73"
      }
    ],
    F: [
      {
        id: 11,
        spell: "foshan",
        name: "\u4F5B\u5C71"
      },
      {
        id: 12,
        spell: "fuzhou",
        name: "\u798F\u5DDE"
      },
      {
        id: 114,
        spell: "fangchenggang",
        name: "\u9632\u57CE\u6E2F"
      },
      {
        id: 115,
        spell: "fushun",
        name: "\u629A\u987A"
      },
      {
        id: 116,
        spell: "fuxin",
        name: "\u961C\u65B0"
      },
      {
        id: 117,
        spell: "fuyang",
        name: "\u961C\u9633"
      },
      {
        id: 118,
        spell: "fuzhou",
        name: "\u629A\u5DDE"
      },
      {
        id: 418,
        spell: "faku",
        name: "\u6CD5\u5E93"
      },
      {
        id: 419,
        spell: "fanchang",
        name: "\u7E41\u660C"
      },
      {
        id: 420,
        spell: "fangzheng",
        name: "\u65B9\u6B63"
      },
      {
        id: 421,
        spell: "feicheng",
        name: "\u80A5\u57CE"
      },
      {
        id: 422,
        spell: "feidong",
        name: "\u80A5\u4E1C"
      },
      {
        id: 423,
        spell: "feixi",
        name: "\u80A5\u897F"
      },
      {
        id: 424,
        spell: "feixian",
        name: "\u8D39\u53BF"
      },
      {
        id: 425,
        spell: "fengcheng",
        name: "\u4E30\u57CE"
      },
      {
        id: 426,
        spell: "fengdu",
        name: "\u4E30\u90FD"
      },
      {
        id: 427,
        spell: "fenghua",
        name: "\u5949\u5316"
      },
      {
        id: 428,
        spell: "fengjie",
        name: "\u5949\u8282"
      },
      {
        id: 429,
        spell: "fengkai",
        name: "\u5C01\u5F00"
      },
      {
        id: 430,
        spell: "fengshun",
        name: "\u4E30\u987A"
      },
      {
        id: 431,
        spell: "fengtai",
        name: "\u51E4\u53F0"
      },
      {
        id: 432,
        spell: "fengxian",
        name: "\u4E30\u53BF"
      },
      {
        id: 433,
        spell: "fengxin",
        name: "\u5949\u65B0"
      },
      {
        id: 434,
        spell: "fengyang",
        name: "\u51E4\u9633"
      },
      {
        id: 435,
        spell: "fenyi",
        name: "\u5206\u5B9C"
      },
      {
        id: 436,
        spell: "fogang",
        name: "\u4F5B\u5188"
      },
      {
        id: 437,
        spell: "fuan",
        name: "\u798F\u5B89"
      },
      {
        id: 438,
        spell: "fuding",
        name: "\u798F\u9F0E"
      },
      {
        id: 439,
        spell: "fuliang",
        name: "\u6D6E\u6881"
      },
      {
        id: 440,
        spell: "fumin",
        name: "\u5BCC\u6C11"
      },
      {
        id: 441,
        spell: "funan",
        name: "\u961C\u5357"
      },
      {
        id: 442,
        spell: "funing",
        name: "\u961C\u5B81"
      },
      {
        id: 443,
        spell: "fuqing",
        name: "\u798F\u6E05"
      },
      {
        id: 444,
        spell: "fuyang",
        name: "\u5BCC\u9633"
      }
    ],
    G: [
      {
        id: 13,
        spell: "guangzhou",
        name: "\u5E7F\u5DDE"
      },
      {
        id: 14,
        spell: "guiyang",
        name: "\u8D35\u9633"
      },
      {
        id: 119,
        spell: "gannan",
        name: "\u7518\u5357"
      },
      {
        id: 120,
        spell: "ganzhou",
        name: "\u8D63\u5DDE"
      },
      {
        id: 121,
        spell: "ganzi",
        name: "\u7518\u5B5C"
      },
      {
        id: 122,
        spell: "guangan",
        name: "\u5E7F\u5B89"
      },
      {
        id: 123,
        spell: "guangyuan",
        name: "\u5E7F\u5143"
      },
      {
        id: 124,
        spell: "guigang",
        name: "\u8D35\u6E2F"
      },
      {
        id: 125,
        spell: "guilin",
        name: "\u6842\u6797"
      },
      {
        id: 126,
        spell: "guoluo",
        name: "\u679C\u6D1B"
      },
      {
        id: 127,
        spell: "guyuan",
        name: "\u56FA\u539F"
      },
      {
        id: 445,
        spell: "ganxian",
        name: "\u8D63\u53BF"
      },
      {
        id: 446,
        spell: "ganyu",
        name: "\u8D63\u6986"
      },
      {
        id: 447,
        spell: "gaoan",
        name: "\u9AD8\u5B89"
      },
      {
        id: 448,
        spell: "gaocheng",
        name: "\u85C1\u57CE"
      },
      {
        id: 449,
        spell: "gaochun",
        name: "\u9AD8\u6DF3"
      },
      {
        id: 450,
        spell: "gaolan",
        name: "\u768B\u5170"
      },
      {
        id: 451,
        spell: "gaoling",
        name: "\u9AD8\u9675"
      },
      {
        id: 452,
        spell: "gaomi",
        name: "\u9AD8\u5BC6"
      },
      {
        id: 453,
        spell: "gaoqing",
        name: "\u9AD8\u9752"
      },
      {
        id: 454,
        spell: "gaotang",
        name: "\u9AD8\u5510"
      },
      {
        id: 455,
        spell: "gaoyao",
        name: "\u9AD8\u8981"
      },
      {
        id: 456,
        spell: "gaoyi",
        name: "\u9AD8\u9091"
      },
      {
        id: 457,
        spell: "gaoyou",
        name: "\u9AD8\u90AE"
      },
      {
        id: 458,
        spell: "gaozhou",
        name: "\u9AD8\u5DDE"
      },
      {
        id: 459,
        spell: "gongyi",
        name: "\u5DE9\u4E49"
      },
      {
        id: 460,
        spell: "guangchang",
        name: "\u5E7F\u660C"
      },
      {
        id: 461,
        spell: "guangde",
        name: "\u5E7F\u5FB7"
      },
      {
        id: 462,
        spell: "guangfeng",
        name: "\u5E7F\u4E30"
      },
      {
        id: 463,
        spell: "guangning",
        name: "\u5E7F\u5B81"
      },
      {
        id: 464,
        spell: "guangrao",
        name: "\u5E7F\u9976"
      },
      {
        id: 465,
        spell: "guangze",
        name: "\u5149\u6CFD"
      },
      {
        id: 466,
        spell: "guannan",
        name: "\u704C\u5357"
      },
      {
        id: 467,
        spell: "guanxian",
        name: "\u51A0\u53BF"
      },
      {
        id: 468,
        spell: "guanyun",
        name: "\u704C\u4E91"
      },
      {
        id: 469,
        spell: "guixi",
        name: "\u8D35\u6EAA"
      },
      {
        id: 470,
        spell: "gutian",
        name: "\u53E4\u7530"
      },
      {
        id: 471,
        spell: "guzhen",
        name: "\u56FA\u9547"
      }
    ],
    H: [
      {
        id: 15,
        spell: "haerbin",
        name: "\u54C8\u5C14\u6EE8"
      },
      {
        id: 16,
        spell: "haikou",
        name: "\u6D77\u53E3"
      },
      {
        id: 17,
        spell: "handan",
        name: "\u90AF\u90F8"
      },
      {
        id: 18,
        spell: "hangzhou",
        name: "\u676D\u5DDE"
      },
      {
        id: 19,
        spell: "hefei",
        name: "\u5408\u80A5"
      },
      {
        id: 20,
        spell: "huizhou",
        name: "\u60E0\u5DDE"
      },
      {
        id: 128,
        spell: "haibei",
        name: "\u6D77\u5317"
      },
      {
        id: 129,
        spell: "haidong",
        name: "\u6D77\u4E1C"
      },
      {
        id: 130,
        spell: "hainan",
        name: "\u6D77\u5357"
      },
      {
        id: 131,
        spell: "haixi",
        name: "\u6D77\u897F"
      },
      {
        id: 132,
        spell: "hami",
        name: "\u54C8\u5BC6"
      },
      {
        id: 133,
        spell: "hanzhong",
        name: "\u6C49\u4E2D"
      },
      {
        id: 134,
        spell: "hebi",
        name: "\u9E64\u58C1"
      },
      {
        id: 135,
        spell: "hechi",
        name: "\u6CB3\u6C60"
      },
      {
        id: 136,
        spell: "hegang",
        name: "\u9E64\u5C97"
      },
      {
        id: 137,
        spell: "heihe",
        name: "\u9ED1\u6CB3"
      },
      {
        id: 138,
        spell: "hengshui",
        name: "\u8861\u6C34"
      },
      {
        id: 139,
        spell: "hengyang",
        name: "\u8861\u9633"
      },
      {
        id: 140,
        spell: "hetiandi",
        name: "\u548C\u7530\u5730"
      },
      {
        id: 141,
        spell: "heyuan",
        name: "\u6CB3\u6E90"
      },
      {
        id: 142,
        spell: "heze",
        name: "\u83CF\u6CFD"
      },
      {
        id: 143,
        spell: "hezhou",
        name: "\u8D3A\u5DDE"
      },
      {
        id: 144,
        spell: "honghe",
        name: "\u7EA2\u6CB3"
      },
      {
        id: 145,
        spell: "huaian",
        name: "\u6DEE\u5B89"
      },
      {
        id: 146,
        spell: "huaibei",
        name: "\u6DEE\u5317"
      },
      {
        id: 147,
        spell: "huaihua",
        name: "\u6000\u5316"
      },
      {
        id: 148,
        spell: "huainan",
        name: "\u6DEE\u5357"
      },
      {
        id: 149,
        spell: "huanggang",
        name: "\u9EC4\u5188"
      },
      {
        id: 150,
        spell: "huangnan",
        name: "\u9EC4\u5357"
      },
      {
        id: 151,
        spell: "huangshan",
        name: "\u9EC4\u5C71"
      },
      {
        id: 152,
        spell: "huangshi",
        name: "\u9EC4\u77F3"
      },
      {
        id: 153,
        spell: "huhehaote",
        name: "\u547C\u548C\u6D69\u7279"
      },
      {
        id: 154,
        spell: "huludao",
        name: "\u846B\u82A6\u5C9B"
      },
      {
        id: 155,
        spell: "hulunbeier",
        name: "\u547C\u4F26\u8D1D\u5C14"
      },
      {
        id: 156,
        spell: "huzhou",
        name: "\u6E56\u5DDE"
      },
      {
        id: 472,
        spell: "haian",
        name: "\u6D77\u5B89"
      },
      {
        id: 473,
        spell: "haifeng",
        name: "\u6D77\u4E30"
      },
      {
        id: 474,
        spell: "haimen",
        name: "\u6D77\u95E8"
      },
      {
        id: 475,
        spell: "haining",
        name: "\u6D77\u5B81"
      },
      {
        id: 476,
        spell: "haiyan",
        name: "\u6D77\u76D0"
      },
      {
        id: 477,
        spell: "haiyang",
        name: "\u6D77\u9633"
      },
      {
        id: 478,
        spell: "hanshan",
        name: "\u542B\u5C71"
      },
      {
        id: 479,
        spell: "hechuan",
        name: "\u5408\u5DDD"
      },
      {
        id: 480,
        spell: "hengfeng",
        name: "\u6A2A\u5CF0"
      },
      {
        id: 481,
        spell: "hengxian",
        name: "\u6A2A\u53BF"
      },
      {
        id: 482,
        spell: "heping",
        name: "\u548C\u5E73"
      },
      {
        id: 483,
        spell: "heshan",
        name: "\u9E64\u5C71"
      },
      {
        id: 484,
        spell: "hexian",
        name: "\u548C\u53BF"
      },
      {
        id: 485,
        spell: "hongze",
        name: "\u6D2A\u6CFD"
      },
      {
        id: 486,
        spell: "huaan",
        name: "\u534E\u5B89"
      },
      {
        id: 487,
        spell: "huadian",
        name: "\u6866\u7538"
      },
      {
        id: 488,
        spell: "huaiji",
        name: "\u6000\u96C6"
      },
      {
        id: 489,
        spell: "huaining",
        name: "\u6000\u5B81"
      },
      {
        id: 490,
        spell: "huaiyuan",
        name: "\u6000\u8FDC"
      },
      {
        id: 491,
        spell: "huantai",
        name: "\u6853\u53F0"
      },
      {
        id: 492,
        spell: "huazhou",
        name: "\u5316\u5DDE"
      },
      {
        id: 493,
        spell: "huian",
        name: "\u60E0\u5B89"
      },
      {
        id: 494,
        spell: "huichang",
        name: "\u4F1A\u660C"
      },
      {
        id: 495,
        spell: "huidong",
        name: "\u60E0\u4E1C"
      },
      {
        id: 496,
        spell: "huilai",
        name: "\u60E0\u6765"
      },
      {
        id: 497,
        spell: "huimin",
        name: "\u60E0\u6C11"
      },
      {
        id: 498,
        spell: "hukou",
        name: "\u6E56\u53E3"
      },
      {
        id: 499,
        spell: "hulan",
        name: "\u547C\u5170"
      },
      {
        id: 500,
        spell: "huoqiu",
        name: "\u970D\u90B1"
      },
      {
        id: 501,
        spell: "huoshan",
        name: "\u970D\u5C71"
      },
      {
        id: 502,
        spell: "huxian",
        name: "\u6237\u53BF"
      }
    ],
    J: [
      {
        id: 21,
        spell: "jiaozuo",
        name: "\u7126\u4F5C"
      },
      {
        id: 22,
        spell: "jiaxing",
        name: "\u5609\u5174"
      },
      {
        id: 23,
        spell: "jilin",
        name: "\u5409\u6797"
      },
      {
        id: 24,
        spell: "jinan",
        name: "\u6D4E\u5357"
      },
      {
        id: 157,
        spell: "jiamusi",
        name: "\u4F73\u6728\u65AF"
      },
      {
        id: 158,
        spell: "jiangmen",
        name: "\u6C5F\u95E8"
      },
      {
        id: 159,
        spell: "jian",
        name: "\u5409\u5B89"
      },
      {
        id: 160,
        spell: "jiayuguan",
        name: "\u5609\u5CEA\u5173"
      },
      {
        id: 161,
        spell: "jieyang",
        name: "\u63ED\u9633"
      },
      {
        id: 162,
        spell: "jinchang",
        name: "\u91D1\u660C"
      },
      {
        id: 163,
        spell: "jincheng",
        name: "\u664B\u57CE"
      },
      {
        id: 164,
        spell: "jingdezhen",
        name: "\u666F\u5FB7\u9547"
      },
      {
        id: 165,
        spell: "jingmen",
        name: "\u8346\u95E8"
      },
      {
        id: 166,
        spell: "jingzhou",
        name: "\u8346\u5DDE"
      },
      {
        id: 167,
        spell: "jinhua",
        name: "\u91D1\u534E"
      },
      {
        id: 168,
        spell: "jining",
        name: "\u6D4E\u5B81"
      },
      {
        id: 169,
        spell: "jinzhong",
        name: "\u664B\u4E2D"
      },
      {
        id: 170,
        spell: "jinzhou",
        name: "\u9526\u5DDE"
      },
      {
        id: 171,
        spell: "jiujiang",
        name: "\u4E5D\u6C5F"
      },
      {
        id: 172,
        spell: "jiuquan",
        name: "\u9152\u6CC9"
      },
      {
        id: 173,
        spell: "jixi",
        name: "\u9E21\u897F"
      },
      {
        id: 503,
        spell: "jiande",
        name: "\u5EFA\u5FB7"
      },
      {
        id: 504,
        spell: "jiangdu",
        name: "\u6C5F\u90FD"
      },
      {
        id: 505,
        spell: "jiangjin",
        name: "\u6C5F\u6D25"
      },
      {
        id: 506,
        spell: "jiangle",
        name: "\u5C06\u4E50"
      },
      {
        id: 507,
        spell: "jiangshan",
        name: "\u6C5F\u5C71"
      },
      {
        id: 508,
        spell: "jiangyan",
        name: "\u59DC\u5830"
      },
      {
        id: 509,
        spell: "jiangyin",
        name: "\u6C5F\u9634"
      },
      {
        id: 510,
        spell: "jianhu",
        name: "\u5EFA\u6E56"
      },
      {
        id: 511,
        spell: "jianning",
        name: "\u5EFA\u5B81"
      },
      {
        id: 512,
        spell: "jianou",
        name: "\u5EFA\u74EF"
      },
      {
        id: 513,
        spell: "jianyang",
        name: "\u5EFA\u9633"
      },
      {
        id: 514,
        spell: "jian",
        name: "\u5409\u5B89"
      },
      {
        id: 515,
        spell: "jiaohe",
        name: "\u86DF\u6CB3"
      },
      {
        id: 516,
        spell: "jiaoling",
        name: "\u8549\u5CAD"
      },
      {
        id: 517,
        spell: "jiaonan",
        name: "\u80F6\u5357"
      },
      {
        id: 518,
        spell: "jiaozhou",
        name: "\u80F6\u5DDE"
      },
      {
        id: 519,
        spell: "jiashan",
        name: "\u5609\u5584"
      },
      {
        id: 520,
        spell: "jiaxiang",
        name: "\u5609\u7965"
      },
      {
        id: 521,
        spell: "jiedong",
        name: "\u63ED\u4E1C"
      },
      {
        id: 522,
        spell: "jieshou",
        name: "\u754C\u9996"
      },
      {
        id: 523,
        spell: "jiexi",
        name: "\u63ED\u897F"
      },
      {
        id: 524,
        spell: "jimo",
        name: "\u5373\u58A8"
      },
      {
        id: 525,
        spell: "jingan",
        name: "\u9756\u5B89"
      },
      {
        id: 526,
        spell: "jingde",
        name: "\u65CC\u5FB7"
      },
      {
        id: 527,
        spell: "jinggangshan",
        name: "\u4E95\u5188\u5C71"
      },
      {
        id: 528,
        spell: "jingjiang",
        name: "\u9756\u6C5F"
      },
      {
        id: 529,
        spell: "jingning",
        name: "\u666F\u5B81"
      },
      {
        id: 530,
        spell: "jingxian",
        name: "\u6CFE\u53BF"
      },
      {
        id: 531,
        spell: "jingxing",
        name: "\u4E95\u9649"
      },
      {
        id: 532,
        spell: "jinhu",
        name: "\u91D1\u6E56"
      },
      {
        id: 533,
        spell: "jinjiang",
        name: "\u664B\u6C5F"
      },
      {
        id: 534,
        spell: "jinmen",
        name: "\u91D1\u95E8"
      },
      {
        id: 535,
        spell: "jinning",
        name: "\u664B\u5B81"
      },
      {
        id: 536,
        spell: "jintan",
        name: "\u91D1\u575B"
      },
      {
        id: 537,
        spell: "jintang",
        name: "\u91D1\u5802"
      },
      {
        id: 538,
        spell: "jinxian",
        name: "\u8FDB\u8D24"
      },
      {
        id: 539,
        spell: "jinxi",
        name: "\u91D1\u6EAA"
      },
      {
        id: 540,
        spell: "jinxiang",
        name: "\u91D1\u4E61"
      },
      {
        id: 541,
        spell: "jinyun",
        name: "\u7F19\u4E91"
      },
      {
        id: 542,
        spell: "jinzhai",
        name: "\u91D1\u5BE8"
      },
      {
        id: 543,
        spell: "jinzhou",
        name: "\u664B\u5DDE"
      },
      {
        id: 544,
        spell: "jishui",
        name: "\u5409\u6C34"
      },
      {
        id: 545,
        spell: "jiujiang",
        name: "\u4E5D\u6C5F"
      },
      {
        id: 546,
        spell: "jiutai",
        name: "\u4E5D\u53F0"
      },
      {
        id: 547,
        spell: "jixi",
        name: "\u7EE9\u6EAA"
      },
      {
        id: 548,
        spell: "jiyang",
        name: "\u6D4E\u9633"
      },
      {
        id: 549,
        spell: "jiyuan",
        name: "\u6D4E\u6E90"
      },
      {
        id: 550,
        spell: "juancheng",
        name: "\u9104\u57CE"
      },
      {
        id: 551,
        spell: "junan",
        name: "\u8392\u5357"
      },
      {
        id: 552,
        spell: "jurong",
        name: "\u53E5\u5BB9"
      },
      {
        id: 553,
        spell: "juxian",
        name: "\u8392\u53BF"
      },
      {
        id: 554,
        spell: "juye",
        name: "\u5DE8\u91CE"
      }
    ],
    K: [
      {
        id: 25,
        spell: "kunming",
        name: "\u6606\u660E"
      },
      {
        id: 174,
        spell: "kaifeng",
        name: "\u5F00\u5C01"
      },
      {
        id: 175,
        spell: "kashidi",
        name: "\u5580\u4EC0\u5730"
      },
      {
        id: 176,
        spell: "kelamayi",
        name: "\u514B\u62C9\u739B\u4F9D"
      },
      {
        id: 177,
        spell: "kezile",
        name: "\u514B\u5B5C\u52D2"
      },
      {
        id: 555,
        spell: "kaihua",
        name: "\u5F00\u5316"
      },
      {
        id: 556,
        spell: "kaiping",
        name: "\u5F00\u5E73"
      },
      {
        id: 557,
        spell: "kaixian",
        name: "\u5F00\u53BF"
      },
      {
        id: 558,
        spell: "kaiyang",
        name: "\u5F00\u9633"
      },
      {
        id: 559,
        spell: "kangping",
        name: "\u5EB7\u5E73"
      },
      {
        id: 560,
        spell: "kenli",
        name: "\u57A6\u5229"
      },
      {
        id: 561,
        spell: "kunshan",
        name: "\u6606\u5C71"
      }
    ],
    L: [
      {
        id: 26,
        spell: "lanzhou",
        name: "\u5170\u5DDE"
      },
      {
        id: 27,
        spell: "liuzhou",
        name: "\u67F3\u5DDE"
      },
      {
        id: 28,
        spell: "luoyang",
        name: "\u6D1B\u9633"
      },
      {
        id: 178,
        spell: "laibin",
        name: "\u6765\u5BBE"
      },
      {
        id: 179,
        spell: "laiwu",
        name: "\u83B1\u829C"
      },
      {
        id: 180,
        spell: "langfang",
        name: "\u5ECA\u574A"
      },
      {
        id: 181,
        spell: "lasa",
        name: "\u62C9\u8428"
      },
      {
        id: 182,
        spell: "leshan",
        name: "\u4E50\u5C71"
      },
      {
        id: 183,
        spell: "liangshan",
        name: "\u51C9\u5C71"
      },
      {
        id: 184,
        spell: "lianyungang",
        name: "\u8FDE\u4E91\u6E2F"
      },
      {
        id: 185,
        spell: "liaocheng",
        name: "\u804A\u57CE"
      },
      {
        id: 186,
        spell: "liaoyang",
        name: "\u8FBD\u9633"
      },
      {
        id: 187,
        spell: "liaoyuan",
        name: "\u8FBD\u6E90"
      },
      {
        id: 188,
        spell: "lijiang",
        name: "\u4E3D\u6C5F"
      },
      {
        id: 189,
        spell: "lincang",
        name: "\u4E34\u6CA7"
      },
      {
        id: 190,
        spell: "linfen",
        name: "\u4E34\u6C7E"
      },
      {
        id: 191,
        spell: "linxia",
        name: "\u4E34\u590F"
      },
      {
        id: 192,
        spell: "linyi",
        name: "\u4E34\u6C82"
      },
      {
        id: 193,
        spell: "linzhi",
        name: "\u6797\u829D"
      },
      {
        id: 194,
        spell: "lishui",
        name: "\u4E3D\u6C34"
      },
      {
        id: 195,
        spell: "liuan",
        name: "\u516D\u5B89"
      },
      {
        id: 196,
        spell: "liupanshui",
        name: "\u516D\u76D8\u6C34"
      },
      {
        id: 197,
        spell: "longnan",
        name: "\u9647\u5357"
      },
      {
        id: 198,
        spell: "longyan",
        name: "\u9F99\u5CA9"
      },
      {
        id: 199,
        spell: "loudi",
        name: "\u5A04\u5E95"
      },
      {
        id: 200,
        spell: "luohe",
        name: "\u6F2F\u6CB3"
      },
      {
        id: 201,
        spell: "luzhou",
        name: "\u6CF8\u5DDE"
      },
      {
        id: 202,
        spell: "lvliang",
        name: "\u5415\u6881"
      },
      {
        id: 562,
        spell: "laian",
        name: "\u6765\u5B89"
      },
      {
        id: 563,
        spell: "laixi",
        name: "\u83B1\u897F"
      },
      {
        id: 564,
        spell: "laiyang",
        name: "\u83B1\u9633"
      },
      {
        id: 565,
        spell: "laizhou",
        name: "\u83B1\u5DDE"
      },
      {
        id: 566,
        spell: "langxi",
        name: "\u90CE\u6EAA"
      },
      {
        id: 567,
        spell: "lantian",
        name: "\u84DD\u7530"
      },
      {
        id: 568,
        spell: "lanxi",
        name: "\u5170\u6EAA"
      },
      {
        id: 569,
        spell: "lean",
        name: "\u4E50\u5B89"
      },
      {
        id: 570,
        spell: "lechang",
        name: "\u4E50\u660C"
      },
      {
        id: 571,
        spell: "leizhou",
        name: "\u96F7\u5DDE"
      },
      {
        id: 572,
        spell: "leling",
        name: "\u4E50\u9675"
      },
      {
        id: 573,
        spell: "leping",
        name: "\u4E50\u5E73"
      },
      {
        id: 574,
        spell: "leqing",
        name: "\u4E50\u6E05"
      },
      {
        id: 575,
        spell: "leting",
        name: "\u4E50\u4EAD"
      },
      {
        id: 576,
        spell: "liancheng",
        name: "\u8FDE\u57CE"
      },
      {
        id: 577,
        spell: "liangping",
        name: "\u6881\u5E73"
      },
      {
        id: 578,
        spell: "liangshan",
        name: "\u6881\u5C71"
      },
      {
        id: 579,
        spell: "lianhua",
        name: "\u83B2\u82B1"
      },
      {
        id: 580,
        spell: "lianjiang",
        name: "\u8FDE\u6C5F"
      },
      {
        id: 581,
        spell: "lianjiang",
        name: "\u5EC9\u6C5F"
      },
      {
        id: 582,
        spell: "liannan",
        name: "\u8FDE\u5357"
      },
      {
        id: 583,
        spell: "lianping",
        name: "\u8FDE\u5E73"
      },
      {
        id: 584,
        spell: "lianshan",
        name: "\u8FDE\u5C71"
      },
      {
        id: 585,
        spell: "lianshui",
        name: "\u6D9F\u6C34"
      },
      {
        id: 586,
        spell: "lianzhou",
        name: "\u8FDE\u5DDE"
      },
      {
        id: 587,
        spell: "liaozhong",
        name: "\u8FBD\u4E2D"
      },
      {
        id: 588,
        spell: "lichuan",
        name: "\u9ECE\u5DDD"
      },
      {
        id: 589,
        spell: "lijin",
        name: "\u5229\u6D25"
      },
      {
        id: 590,
        spell: "linan",
        name: "\u4E34\u5B89"
      },
      {
        id: 591,
        spell: "lingbi",
        name: "\u7075\u74A7"
      },
      {
        id: 592,
        spell: "lingshou",
        name: "\u7075\u5BFF"
      },
      {
        id: 593,
        spell: "lingxian",
        name: "\u9675\u53BF"
      },
      {
        id: 594,
        spell: "linhai",
        name: "\u4E34\u6D77"
      },
      {
        id: 595,
        spell: "linqing",
        name: "\u4E34\u6E05"
      },
      {
        id: 596,
        spell: "linquan",
        name: "\u4E34\u6CC9"
      },
      {
        id: 597,
        spell: "linqu",
        name: "\u4E34\u6710"
      },
      {
        id: 598,
        spell: "linshu",
        name: "\u4E34\u6CAD"
      },
      {
        id: 599,
        spell: "linyi",
        name: "\u4E34\u9091"
      },
      {
        id: 600,
        spell: "lishui",
        name: "\u6EA7\u6C34"
      },
      {
        id: 601,
        spell: "liucheng",
        name: "\u67F3\u57CE"
      },
      {
        id: 602,
        spell: "liujiang",
        name: "\u67F3\u6C5F"
      },
      {
        id: 603,
        spell: "liuyang",
        name: "\u6D4F\u9633"
      },
      {
        id: 604,
        spell: "lixin",
        name: "\u5229\u8F9B"
      },
      {
        id: 605,
        spell: "liyang",
        name: "\u6EA7\u9633"
      },
      {
        id: 606,
        spell: "longan",
        name: "\u9686\u5B89"
      },
      {
        id: 607,
        spell: "longchuan",
        name: "\u9F99\u5DDD"
      },
      {
        id: 608,
        spell: "longhai",
        name: "\u9F99\u6D77"
      },
      {
        id: 609,
        spell: "longkou",
        name: "\u9F99\u53E3"
      },
      {
        id: 610,
        spell: "longmen",
        name: "\u9F99\u95E8"
      },
      {
        id: 611,
        spell: "longnan",
        name: "\u9F99\u5357"
      },
      {
        id: 612,
        spell: "longquan",
        name: "\u9F99\u6CC9"
      },
      {
        id: 613,
        spell: "longyou",
        name: "\u9F99\u6E38"
      },
      {
        id: 614,
        spell: "luancheng",
        name: "\u683E\u57CE"
      },
      {
        id: 615,
        spell: "luanchuan",
        name: "\u683E\u5DDD"
      },
      {
        id: 616,
        spell: "luannan",
        name: "\u6EE6\u5357"
      },
      {
        id: 617,
        spell: "luanxian",
        name: "\u6EE6\u53BF"
      },
      {
        id: 618,
        spell: "lufeng",
        name: "\u9646\u4E30"
      },
      {
        id: 619,
        spell: "luhe",
        name: "\u9646\u6CB3"
      },
      {
        id: 620,
        spell: "lujiang",
        name: "\u5E90\u6C5F"
      },
      {
        id: 621,
        spell: "luoding",
        name: "\u7F57\u5B9A"
      },
      {
        id: 622,
        spell: "luoning",
        name: "\u6D1B\u5B81"
      },
      {
        id: 623,
        spell: "luoyuan",
        name: "\u7F57\u6E90"
      },
      {
        id: 624,
        spell: "luquan",
        name: "\u9E7F\u6CC9"
      },
      {
        id: 625,
        spell: "luquan",
        name: "\u7984\u529D"
      },
      {
        id: 626,
        spell: "luxi",
        name: "\u82A6\u6EAA"
      },
      {
        id: 627,
        spell: "luzhai",
        name: "\u9E7F\u5BE8"
      }
    ],
    M: [
      {
        id: 203,
        spell: "maanshan",
        name: "\u9A6C\u978D\u5C71"
      },
      {
        id: 204,
        spell: "maoming",
        name: "\u8302\u540D"
      },
      {
        id: 205,
        spell: "meishan",
        name: "\u7709\u5C71"
      },
      {
        id: 206,
        spell: "meizhou",
        name: "\u6885\u5DDE"
      },
      {
        id: 207,
        spell: "mianyang",
        name: "\u7EF5\u9633"
      },
      {
        id: 208,
        spell: "mudanjiang",
        name: "\u7261\u4E39\u6C5F"
      },
      {
        id: 628,
        spell: "mashan",
        name: "\u9A6C\u5C71"
      },
      {
        id: 629,
        spell: "meixian",
        name: "\u6885\u53BF"
      },
      {
        id: 630,
        spell: "mengcheng",
        name: "\u8499\u57CE"
      },
      {
        id: 631,
        spell: "mengjin",
        name: "\u5B5F\u6D25"
      },
      {
        id: 632,
        spell: "mengyin",
        name: "\u8499\u9634"
      },
      {
        id: 633,
        spell: "mengzhou",
        name: "\u5B5F\u5DDE"
      },
      {
        id: 634,
        spell: "mingguang",
        name: "\u660E\u5149"
      },
      {
        id: 635,
        spell: "mingxi",
        name: "\u660E\u6EAA"
      },
      {
        id: 636,
        spell: "minhou",
        name: "\u95FD\u4FAF"
      },
      {
        id: 637,
        spell: "minqing",
        name: "\u95FD\u6E05"
      },
      {
        id: 638,
        spell: "mulan",
        name: "\u6728\u5170"
      }
    ],
    N: [
      {
        id: 29,
        spell: "nanchang",
        name: "\u5357\u660C"
      },
      {
        id: 30,
        spell: "nanjing",
        name: "\u5357\u4EAC"
      },
      {
        id: 31,
        spell: "nanning",
        name: "\u5357\u5B81"
      },
      {
        id: 32,
        spell: "nantong",
        name: "\u5357\u901A"
      },
      {
        id: 33,
        spell: "ningbo",
        name: "\u5B81\u6CE2"
      },
      {
        id: 209,
        spell: "nanchong",
        name: "\u5357\u5145"
      },
      {
        id: 210,
        spell: "nanping",
        name: "\u5357\u5E73"
      },
      {
        id: 211,
        spell: "nanyang",
        name: "\u5357\u9633"
      },
      {
        id: 212,
        spell: "naqu",
        name: "\u90A3\u66F2"
      },
      {
        id: 213,
        spell: "neijiang",
        name: "\u5185\u6C5F"
      },
      {
        id: 214,
        spell: "ningde",
        name: "\u5B81\u5FB7"
      },
      {
        id: 215,
        spell: "nujiang",
        name: "\u6012\u6C5F"
      },
      {
        id: 639,
        spell: "nanan",
        name: "\u5357\u5B89"
      },
      {
        id: 640,
        spell: "nanao",
        name: "\u5357\u6FB3"
      },
      {
        id: 641,
        spell: "nancheng",
        name: "\u5357\u57CE"
      },
      {
        id: 642,
        spell: "nanchuan",
        name: "\u5357\u5DDD"
      },
      {
        id: 643,
        spell: "nanfeng",
        name: "\u5357\u4E30"
      },
      {
        id: 644,
        spell: "nanjing",
        name: "\u5357\u9756"
      },
      {
        id: 645,
        spell: "nankang",
        name: "\u5357\u5EB7"
      },
      {
        id: 646,
        spell: "nanling",
        name: "\u5357\u9675"
      },
      {
        id: 647,
        spell: "nanxiong",
        name: "\u5357\u96C4"
      },
      {
        id: 648,
        spell: "ningdu",
        name: "\u5B81\u90FD"
      },
      {
        id: 649,
        spell: "ningguo",
        name: "\u5B81\u56FD"
      },
      {
        id: 650,
        spell: "ninghai",
        name: "\u5B81\u6D77"
      },
      {
        id: 651,
        spell: "ninghua",
        name: "\u5B81\u5316"
      },
      {
        id: 652,
        spell: "ningjin",
        name: "\u5B81\u6D25"
      },
      {
        id: 653,
        spell: "ningxiang",
        name: "\u5B81\u4E61"
      },
      {
        id: 654,
        spell: "ningyang",
        name: "\u5B81\u9633"
      },
      {
        id: 655,
        spell: "nongan",
        name: "\u519C\u5B89"
      }
    ],
    P: [
      {
        id: 216,
        spell: "panjin",
        name: "\u76D8\u9526"
      },
      {
        id: 217,
        spell: "panzhihua",
        name: "\u6500\u679D\u82B1"
      },
      {
        id: 218,
        spell: "pingdingshan",
        name: "\u5E73\u9876\u5C71"
      },
      {
        id: 219,
        spell: "pingliang",
        name: "\u5E73\u51C9"
      },
      {
        id: 220,
        spell: "pingxiang",
        name: "\u840D\u4E61"
      },
      {
        id: 221,
        spell: "puer",
        name: "\u666E\u6D31"
      },
      {
        id: 222,
        spell: "putian",
        name: "\u8386\u7530"
      },
      {
        id: 223,
        spell: "puyang",
        name: "\u6FEE\u9633"
      },
      {
        id: 656,
        spell: "panan",
        name: "\u78D0\u5B89"
      },
      {
        id: 657,
        spell: "panshi",
        name: "\u78D0\u77F3"
      },
      {
        id: 658,
        spell: "peixian",
        name: "\u6C9B\u53BF"
      },
      {
        id: 659,
        spell: "penglai",
        name: "\u84EC\u83B1"
      },
      {
        id: 660,
        spell: "pengshui",
        name: "\u5F6D\u6C34"
      },
      {
        id: 661,
        spell: "pengze",
        name: "\u5F6D\u6CFD"
      },
      {
        id: 662,
        spell: "pengzhou",
        name: "\u5F6D\u5DDE"
      },
      {
        id: 663,
        spell: "pingdu",
        name: "\u5E73\u5EA6"
      },
      {
        id: 664,
        spell: "pinghe",
        name: "\u5E73\u548C"
      },
      {
        id: 665,
        spell: "pinghu",
        name: "\u5E73\u6E56"
      },
      {
        id: 666,
        spell: "pingnan",
        name: "\u5C4F\u5357"
      },
      {
        id: 667,
        spell: "pingshan",
        name: "\u5E73\u5C71"
      },
      {
        id: 668,
        spell: "pingtan",
        name: "\u5E73\u6F6D"
      },
      {
        id: 669,
        spell: "pingyang",
        name: "\u5E73\u9633"
      },
      {
        id: 670,
        spell: "pingyin",
        name: "\u5E73\u9634"
      },
      {
        id: 671,
        spell: "pingyi",
        name: "\u5E73\u9091"
      },
      {
        id: 672,
        spell: "pingyuan",
        name: "\u5E73\u539F"
      },
      {
        id: 673,
        spell: "pingyuan",
        name: "\u5E73\u8FDC"
      },
      {
        id: 674,
        spell: "pixian",
        name: "\u90EB\u53BF"
      },
      {
        id: 675,
        spell: "pizhou",
        name: "\u90B3\u5DDE"
      },
      {
        id: 676,
        spell: "poyang",
        name: "\u9131\u9633"
      },
      {
        id: 677,
        spell: "pucheng",
        name: "\u6D66\u57CE"
      },
      {
        id: 678,
        spell: "pujiang",
        name: "\u6D66\u6C5F"
      },
      {
        id: 679,
        spell: "pujiang",
        name: "\u84B2\u6C5F"
      },
      {
        id: 680,
        spell: "pulandian",
        name: "\u666E\u5170\u5E97"
      },
      {
        id: 681,
        spell: "puning",
        name: "\u666E\u5B81"
      }
    ],
    Q: [
      {
        id: 34,
        spell: "qingdao",
        name: "\u9752\u5C9B"
      },
      {
        id: 35,
        spell: "quanzhou",
        name: "\u6CC9\u5DDE"
      },
      {
        id: 224,
        spell: "qiandong",
        name: "\u9ED4\u4E1C"
      },
      {
        id: 225,
        spell: "qiannan",
        name: "\u9ED4\u5357"
      },
      {
        id: 226,
        spell: "qianxinan",
        name: "\u9ED4\u897F\u5357"
      },
      {
        id: 227,
        spell: "qingyang",
        name: "\u5E86\u9633"
      },
      {
        id: 228,
        spell: "qingyuan",
        name: "\u6E05\u8FDC"
      },
      {
        id: 229,
        spell: "qinhuangdao",
        name: "\u79E6\u7687\u5C9B"
      },
      {
        id: 230,
        spell: "qinzhou",
        name: "\u94A6\u5DDE"
      },
      {
        id: 231,
        spell: "qiqihaer",
        name: "\u9F50\u9F50\u54C8\u5C14"
      },
      {
        id: 232,
        spell: "qitaihe",
        name: "\u4E03\u53F0\u6CB3"
      },
      {
        id: 233,
        spell: "qujing",
        name: "\u66F2\u9756"
      },
      {
        id: 234,
        spell: "quzhou",
        name: "\u8862\u5DDE"
      },
      {
        id: 682,
        spell: "qianan",
        name: "\u8FC1\u5B89"
      },
      {
        id: 683,
        spell: "qianshan",
        name: "\u6F5C\u5C71"
      },
      {
        id: 684,
        spell: "qianshan",
        name: "\u94C5\u5C71"
      },
      {
        id: 685,
        spell: "qianxi",
        name: "\u8FC1\u897F"
      },
      {
        id: 686,
        spell: "qidong",
        name: "\u542F\u4E1C"
      },
      {
        id: 687,
        spell: "qihe",
        name: "\u9F50\u6CB3"
      },
      {
        id: 688,
        spell: "qijiang",
        name: "\u7DA6\u6C5F"
      },
      {
        id: 689,
        spell: "qimen",
        name: "\u7941\u95E8"
      },
      {
        id: 690,
        spell: "qingliu",
        name: "\u6E05\u6D41"
      },
      {
        id: 691,
        spell: "qingtian",
        name: "\u9752\u7530"
      },
      {
        id: 692,
        spell: "qingxin",
        name: "\u6E05\u65B0"
      },
      {
        id: 693,
        spell: "qingyang",
        name: "\u9752\u9633"
      },
      {
        id: 694,
        spell: "qingyuan",
        name: "\u5E86\u5143"
      },
      {
        id: 695,
        spell: "qingyun",
        name: "\u5E86\u4E91"
      },
      {
        id: 696,
        spell: "qingzhen",
        name: "\u6E05\u9547"
      },
      {
        id: 697,
        spell: "qingzhou",
        name: "\u9752\u5DDE"
      },
      {
        id: 698,
        spell: "qinyang",
        name: "\u6C81\u9633"
      },
      {
        id: 699,
        spell: "qionglai",
        name: "\u909B\u5D03"
      },
      {
        id: 700,
        spell: "qixia",
        name: "\u6816\u971E"
      },
      {
        id: 701,
        spell: "quanjiao",
        name: "\u5168\u6912"
      },
      {
        id: 702,
        spell: "quannan",
        name: "\u5168\u5357"
      },
      {
        id: 703,
        spell: "qufu",
        name: "\u66F2\u961C"
      },
      {
        id: 704,
        spell: "qujiang",
        name: "\u66F2\u6C5F"
      }
    ],
    R: [
      {
        id: 235,
        spell: "rikaze",
        name: "\u65E5\u5580\u5219"
      },
      {
        id: 236,
        spell: "rizhao",
        name: "\u65E5\u7167"
      },
      {
        id: 705,
        spell: "raoping",
        name: "\u9976\u5E73"
      },
      {
        id: 706,
        spell: "renhua",
        name: "\u4EC1\u5316"
      },
      {
        id: 707,
        spell: "rongan",
        name: "\u878D\u5B89"
      },
      {
        id: 708,
        spell: "rongchang",
        name: "\u8363\u660C"
      },
      {
        id: 709,
        spell: "rongcheng",
        name: "\u8363\u6210"
      },
      {
        id: 710,
        spell: "rongshui",
        name: "\u878D\u6C34"
      },
      {
        id: 711,
        spell: "rudong",
        name: "\u5982\u4E1C"
      },
      {
        id: 712,
        spell: "rugao",
        name: "\u5982\u768B"
      },
      {
        id: 713,
        spell: "ruian",
        name: "\u745E\u5B89"
      },
      {
        id: 714,
        spell: "ruichang",
        name: "\u745E\u660C"
      },
      {
        id: 715,
        spell: "ruijin",
        name: "\u745E\u91D1"
      },
      {
        id: 716,
        spell: "rushan",
        name: "\u4E73\u5C71"
      },
      {
        id: 717,
        spell: "ruyang",
        name: "\u6C5D\u9633"
      },
      {
        id: 718,
        spell: "ruyuan",
        name: "\u4E73\u6E90"
      }
    ],
    S: [
      {
        id: 3,
        spell: "shanghai",
        name: "\u4E0A\u6D77"
      },
      {
        id: 36,
        spell: "shenyang",
        name: "\u6C88\u9633"
      },
      {
        id: 37,
        spell: "shenzhen",
        name: "\u6DF1\u5733"
      },
      {
        id: 38,
        spell: "shijiazhuang",
        name: "\u77F3\u5BB6\u5E84"
      },
      {
        id: 39,
        spell: "suzhou",
        name: "\u82CF\u5DDE"
      },
      {
        id: 237,
        spell: "sanmenxia",
        name: "\u4E09\u95E8\u5CE1"
      },
      {
        id: 238,
        spell: "sanming",
        name: "\u4E09\u660E"
      },
      {
        id: 239,
        spell: "sanya",
        name: "\u4E09\u4E9A"
      },
      {
        id: 240,
        spell: "shangluo",
        name: "\u5546\u6D1B"
      },
      {
        id: 241,
        spell: "shangqiu",
        name: "\u5546\u4E18"
      },
      {
        id: 242,
        spell: "shangrao",
        name: "\u4E0A\u9976"
      },
      {
        id: 243,
        spell: "shannan",
        name: "\u5C71\u5357"
      },
      {
        id: 244,
        spell: "shantou",
        name: "\u6C55\u5934"
      },
      {
        id: 245,
        spell: "shanwei",
        name: "\u6C55\u5C3E"
      },
      {
        id: 246,
        spell: "shaoguan",
        name: "\u97F6\u5173"
      },
      {
        id: 247,
        spell: "shaoxing",
        name: "\u7ECD\u5174"
      },
      {
        id: 248,
        spell: "shaoyang",
        name: "\u90B5\u9633"
      },
      {
        id: 249,
        spell: "shiyan",
        name: "\u5341\u5830"
      },
      {
        id: 250,
        spell: "shizuishan",
        name: "\u77F3\u5634\u5C71"
      },
      {
        id: 251,
        spell: "shuangyashan",
        name: "\u53CC\u9E2D\u5C71"
      },
      {
        id: 252,
        spell: "shuozhou",
        name: "\u6714\u5DDE"
      },
      {
        id: 253,
        spell: "siping",
        name: "\u56DB\u5E73"
      },
      {
        id: 254,
        spell: "songyuan",
        name: "\u677E\u539F"
      },
      {
        id: 255,
        spell: "suihua",
        name: "\u7EE5\u5316"
      },
      {
        id: 256,
        spell: "suining",
        name: "\u9042\u5B81"
      },
      {
        id: 257,
        spell: "suizhou",
        name: "\u968F\u5DDE"
      },
      {
        id: 258,
        spell: "suqian",
        name: "\u5BBF\u8FC1"
      },
      {
        id: 259,
        spell: "suzhou",
        name: "\u5BBF\u5DDE"
      },
      {
        id: 719,
        spell: "sanjiang",
        name: "\u4E09\u6C5F"
      },
      {
        id: 720,
        spell: "sanmen",
        name: "\u4E09\u95E8"
      },
      {
        id: 721,
        spell: "saoan",
        name: "\u8BCF\u5B89"
      },
      {
        id: 722,
        spell: "shanggao",
        name: "\u4E0A\u9AD8"
      },
      {
        id: 723,
        spell: "shanghang",
        name: "\u4E0A\u676D"
      },
      {
        id: 724,
        spell: "shanghe",
        name: "\u5546\u6CB3"
      },
      {
        id: 725,
        spell: "shangli",
        name: "\u4E0A\u6817"
      },
      {
        id: 726,
        spell: "shanglin",
        name: "\u4E0A\u6797"
      },
      {
        id: 727,
        spell: "shangrao",
        name: "\u4E0A\u9976"
      },
      {
        id: 728,
        spell: "shangyou",
        name: "\u4E0A\u72B9"
      },
      {
        id: 729,
        spell: "shangyu",
        name: "\u4E0A\u865E"
      },
      {
        id: 730,
        spell: "shangzhi",
        name: "\u5C1A\u5FD7"
      },
      {
        id: 731,
        spell: "shaowu",
        name: "\u90B5\u6B66"
      },
      {
        id: 732,
        spell: "shaoxing",
        name: "\u7ECD\u5174"
      },
      {
        id: 733,
        spell: "shaxian",
        name: "\u6C99\u53BF"
      },
      {
        id: 734,
        spell: "shengsi",
        name: "\u5D4A\u6CD7"
      },
      {
        id: 735,
        spell: "shengzhou",
        name: "\u5D4A\u5DDE"
      },
      {
        id: 736,
        spell: "shenxian",
        name: "\u8398\u53BF"
      },
      {
        id: 737,
        spell: "shenze",
        name: "\u6DF1\u6CFD"
      },
      {
        id: 738,
        spell: "shexian",
        name: "\u6B59\u53BF"
      },
      {
        id: 739,
        spell: "sheyang",
        name: "\u5C04\u9633"
      },
      {
        id: 740,
        spell: "shicheng",
        name: "\u77F3\u57CE"
      },
      {
        id: 741,
        spell: "shilin",
        name: "\u77F3\u6797"
      },
      {
        id: 742,
        spell: "shishi",
        name: "\u77F3\u72EE"
      },
      {
        id: 743,
        spell: "shitai",
        name: "\u77F3\u53F0"
      },
      {
        id: 744,
        spell: "shixing",
        name: "\u59CB\u5174"
      },
      {
        id: 745,
        spell: "shizhu",
        name: "\u77F3\u67F1"
      },
      {
        id: 746,
        spell: "shouguang",
        name: "\u5BFF\u5149"
      },
      {
        id: 747,
        spell: "shouning",
        name: "\u5BFF\u5B81"
      },
      {
        id: 748,
        spell: "shouxian",
        name: "\u5BFF\u53BF"
      },
      {
        id: 749,
        spell: "shuangcheng",
        name: "\u53CC\u57CE"
      },
      {
        id: 750,
        spell: "shuangliu",
        name: "\u53CC\u6D41"
      },
      {
        id: 751,
        spell: "shucheng",
        name: "\u8212\u57CE"
      },
      {
        id: 752,
        spell: "shulan",
        name: "\u8212\u5170"
      },
      {
        id: 753,
        spell: "shunchang",
        name: "\u987A\u660C"
      },
      {
        id: 754,
        spell: "shuyang",
        name: "\u6CAD\u9633"
      },
      {
        id: 755,
        spell: "sihong",
        name: "\u6CD7\u6D2A"
      },
      {
        id: 756,
        spell: "sihui",
        name: "\u56DB\u4F1A"
      },
      {
        id: 757,
        spell: "sishui",
        name: "\u6CD7\u6C34"
      },
      {
        id: 758,
        spell: "sixian",
        name: "\u6CD7\u53BF"
      },
      {
        id: 759,
        spell: "siyang",
        name: "\u6CD7\u9633"
      },
      {
        id: 760,
        spell: "songming",
        name: "\u5D69\u660E"
      },
      {
        id: 761,
        spell: "songxi",
        name: "\u677E\u6EAA"
      },
      {
        id: 762,
        spell: "songxian",
        name: "\u5D69\u53BF"
      },
      {
        id: 763,
        spell: "songyang",
        name: "\u677E\u9633"
      },
      {
        id: 764,
        spell: "suichang",
        name: "\u9042\u660C"
      },
      {
        id: 765,
        spell: "suichuan",
        name: "\u9042\u5DDD"
      },
      {
        id: 766,
        spell: "suining",
        name: "\u7762\u5B81"
      },
      {
        id: 767,
        spell: "suixi",
        name: "\u6FC9\u6EAA"
      },
      {
        id: 768,
        spell: "suixi",
        name: "\u9042\u6EAA"
      },
      {
        id: 769,
        spell: "susong",
        name: "\u5BBF\u677E"
      },
      {
        id: 770,
        spell: "suyu",
        name: "\u5BBF\u8C6B"
      }
    ],
    T: [
      {
        id: 4,
        spell: "tianjin",
        name: "\u5929\u6D25"
      },
      {
        id: 40,
        spell: "taizhou",
        name: "\u53F0\u5DDE"
      },
      {
        id: 41,
        spell: "tangshan",
        name: "\u5510\u5C71"
      },
      {
        id: 260,
        spell: "tachengdi",
        name: "\u5854\u57CE\u5730"
      },
      {
        id: 261,
        spell: "taian",
        name: "\u6CF0\u5B89"
      },
      {
        id: 262,
        spell: "taiyuan",
        name: "\u592A\u539F"
      },
      {
        id: 263,
        spell: "taizhou",
        name: "\u6CF0\u5DDE"
      },
      {
        id: 264,
        spell: "tianshui",
        name: "\u5929\u6C34"
      },
      {
        id: 265,
        spell: "tieling",
        name: "\u94C1\u5CAD"
      },
      {
        id: 266,
        spell: "tongchuan",
        name: "\u94DC\u5DDD"
      },
      {
        id: 267,
        spell: "tonghua",
        name: "\u901A\u5316"
      },
      {
        id: 268,
        spell: "tongliao",
        name: "\u901A\u8FBD"
      },
      {
        id: 269,
        spell: "tongling",
        name: "\u94DC\u9675"
      },
      {
        id: 270,
        spell: "tongren",
        name: "\u94DC\u4EC1"
      },
      {
        id: 271,
        spell: "tulufan",
        name: "\u5410\u9C81\u756A"
      },
      {
        id: 771,
        spell: "taicang",
        name: "\u592A\u4ED3"
      },
      {
        id: 772,
        spell: "taihe",
        name: "\u592A\u548C"
      },
      {
        id: 773,
        spell: "taihe",
        name: "\u6CF0\u548C"
      },
      {
        id: 774,
        spell: "taihu",
        name: "\u592A\u6E56"
      },
      {
        id: 775,
        spell: "taining",
        name: "\u6CF0\u5B81"
      },
      {
        id: 776,
        spell: "taishan",
        name: "\u53F0\u5C71"
      },
      {
        id: 777,
        spell: "taishun",
        name: "\u6CF0\u987A"
      },
      {
        id: 778,
        spell: "taixing",
        name: "\u6CF0\u5174"
      },
      {
        id: 779,
        spell: "tancheng",
        name: "\u90EF\u57CE"
      },
      {
        id: 780,
        spell: "tanghai",
        name: "\u5510\u6D77"
      },
      {
        id: 781,
        spell: "tengzhou",
        name: "\u6ED5\u5DDE"
      },
      {
        id: 782,
        spell: "tianchang",
        name: "\u5929\u957F"
      },
      {
        id: 783,
        spell: "tiantai",
        name: "\u5929\u53F0"
      },
      {
        id: 784,
        spell: "tongcheng",
        name: "\u6850\u57CE"
      },
      {
        id: 785,
        spell: "tonggu",
        name: "\u94DC\u9F13"
      },
      {
        id: 786,
        spell: "tonghe",
        name: "\u901A\u6CB3"
      },
      {
        id: 787,
        spell: "tongliang",
        name: "\u94DC\u6881"
      },
      {
        id: 788,
        spell: "tongling",
        name: "\u94DC\u9675"
      },
      {
        id: 789,
        spell: "tonglu",
        name: "\u6850\u5E90"
      },
      {
        id: 790,
        spell: "tongnan",
        name: "\u6F7C\u5357"
      },
      {
        id: 791,
        spell: "tongshan",
        name: "\u94DC\u5C71"
      },
      {
        id: 792,
        spell: "tongxiang",
        name: "\u6850\u4E61"
      },
      {
        id: 793,
        spell: "tongzhou",
        name: "\u901A\u5DDE"
      }
    ],
    W: [
      {
        id: 42,
        spell: "weifang",
        name: "\u6F4D\u574A"
      },
      {
        id: 43,
        spell: "weihai",
        name: "\u5A01\u6D77"
      },
      {
        id: 44,
        spell: "wuhan",
        name: "\u6B66\u6C49"
      },
      {
        id: 45,
        spell: "wuxi",
        name: "\u65E0\u9521"
      },
      {
        id: 272,
        spell: "weinan",
        name: "\u6E2D\u5357"
      },
      {
        id: 273,
        spell: "wenshan",
        name: "\u6587\u5C71"
      },
      {
        id: 274,
        spell: "wenzhou",
        name: "\u6E29\u5DDE"
      },
      {
        id: 275,
        spell: "wuhai",
        name: "\u4E4C\u6D77"
      },
      {
        id: 276,
        spell: "wuhu",
        name: "\u829C\u6E56"
      },
      {
        id: 277,
        spell: "wulanchabu",
        name: "\u4E4C\u5170\u5BDF\u5E03"
      },
      {
        id: 278,
        spell: "wulumuqi",
        name: "\u4E4C\u9C81\u6728\u9F50"
      },
      {
        id: 279,
        spell: "wuwei",
        name: "\u6B66\u5A01"
      },
      {
        id: 280,
        spell: "wuzhong",
        name: "\u5434\u5FE0"
      },
      {
        id: 281,
        spell: "wuzhou",
        name: "\u68A7\u5DDE"
      },
      {
        id: 794,
        spell: "wafangdian",
        name: "\u74E6\u623F\u5E97"
      },
      {
        id: 795,
        spell: "wanan",
        name: "\u4E07\u5B89"
      },
      {
        id: 796,
        spell: "wangcheng",
        name: "\u671B\u57CE"
      },
      {
        id: 797,
        spell: "wangjiang",
        name: "\u671B\u6C5F"
      },
      {
        id: 798,
        spell: "wannian",
        name: "\u4E07\u5E74"
      },
      {
        id: 799,
        spell: "wanzai",
        name: "\u4E07\u8F7D"
      },
      {
        id: 800,
        spell: "weishan",
        name: "\u5FAE\u5C71"
      },
      {
        id: 801,
        spell: "wencheng",
        name: "\u6587\u6210"
      },
      {
        id: 802,
        spell: "wendeng",
        name: "\u6587\u767B"
      },
      {
        id: 803,
        spell: "wengyuan",
        name: "\u7FC1\u6E90"
      },
      {
        id: 804,
        spell: "wenling",
        name: "\u6E29\u5CAD"
      },
      {
        id: 805,
        spell: "wenshang",
        name: "\u6C76\u4E0A"
      },
      {
        id: 806,
        spell: "wenxian",
        name: "\u6E29\u53BF"
      },
      {
        id: 807,
        spell: "woyang",
        name: "\u6DA1\u9633"
      },
      {
        id: 808,
        spell: "wuchang",
        name: "\u4E94\u5E38"
      },
      {
        id: 809,
        spell: "wucheng",
        name: "\u6B66\u57CE"
      },
      {
        id: 810,
        spell: "wuchuan",
        name: "\u5434\u5DDD"
      },
      {
        id: 811,
        spell: "wudi",
        name: "\u65E0\u68E3"
      },
      {
        id: 812,
        spell: "wuhe",
        name: "\u4E94\u6CB3"
      },
      {
        id: 813,
        spell: "wuhu",
        name: "\u829C\u6E56"
      },
      {
        id: 814,
        spell: "wuhua",
        name: "\u4E94\u534E"
      },
      {
        id: 815,
        spell: "wuji",
        name: "\u65E0\u6781"
      },
      {
        id: 816,
        spell: "wujiang",
        name: "\u5434\u6C5F"
      },
      {
        id: 817,
        spell: "wulian",
        name: "\u4E94\u83B2"
      },
      {
        id: 818,
        spell: "wulong",
        name: "\u6B66\u9686"
      },
      {
        id: 819,
        spell: "wuming",
        name: "\u6B66\u9E23"
      },
      {
        id: 820,
        spell: "wuning",
        name: "\u6B66\u5B81"
      },
      {
        id: 821,
        spell: "wuping",
        name: "\u6B66\u5E73"
      },
      {
        id: 822,
        spell: "wushan",
        name: "\u5DEB\u5C71"
      },
      {
        id: 823,
        spell: "wuwei",
        name: "\u65E0\u4E3A"
      },
      {
        id: 824,
        spell: "wuxi",
        name: "\u5DEB\u6EAA"
      },
      {
        id: 825,
        spell: "wuyi",
        name: "\u6B66\u4E49"
      },
      {
        id: 826,
        spell: "wuyishan",
        name: "\u6B66\u5937\u5C71"
      },
      {
        id: 827,
        spell: "wuyuan",
        name: "\u5A7A\u6E90"
      },
      {
        id: 828,
        spell: "wuzhi",
        name: "\u6B66\u965F"
      }
    ],
    X: [
      {
        id: 46,
        spell: "xiamen",
        name: "\u53A6\u95E8"
      },
      {
        id: 47,
        spell: "xian",
        name: "\u897F\u5B89"
      },
      {
        id: 48,
        spell: "xuchang",
        name: "\u8BB8\u660C"
      },
      {
        id: 49,
        spell: "xuzhou",
        name: "\u5F90\u5DDE"
      },
      {
        id: 282,
        spell: "xiangfan",
        name: "\u8944\u6A0A"
      },
      {
        id: 283,
        spell: "xiangtan",
        name: "\u6E58\u6F6D"
      },
      {
        id: 284,
        spell: "xiangxi",
        name: "\u6E58\u897F"
      },
      {
        id: 285,
        spell: "xianning",
        name: "\u54B8\u5B81"
      },
      {
        id: 286,
        spell: "xianyang",
        name: "\u54B8\u9633"
      },
      {
        id: 287,
        spell: "xiaogan",
        name: "\u5B5D\u611F"
      },
      {
        id: 288,
        spell: "xilinguolemeng",
        name: "\u9521\u6797\u90ED\u52D2\u76DF"
      },
      {
        id: 289,
        spell: "xinganmeng",
        name: "\u5174\u5B89\u76DF"
      },
      {
        id: 290,
        spell: "xingtai",
        name: "\u90A2\u53F0"
      },
      {
        id: 291,
        spell: "xining",
        name: "\u897F\u5B81"
      },
      {
        id: 292,
        spell: "xinxiang",
        name: "\u65B0\u4E61"
      },
      {
        id: 293,
        spell: "xinyang",
        name: "\u4FE1\u9633"
      },
      {
        id: 294,
        spell: "xinyu",
        name: "\u65B0\u4F59"
      },
      {
        id: 295,
        spell: "xinzhou",
        name: "\u5FFB\u5DDE"
      },
      {
        id: 296,
        spell: "xishuangbanna",
        name: "\u897F\u53CC\u7248\u7EB3"
      },
      {
        id: 297,
        spell: "xuancheng",
        name: "\u5BA3\u57CE"
      },
      {
        id: 829,
        spell: "xiajiang",
        name: "\u5CE1\u6C5F"
      },
      {
        id: 830,
        spell: "xiajin",
        name: "\u590F\u6D25"
      },
      {
        id: 831,
        spell: "xiangshan",
        name: "\u8C61\u5C71"
      },
      {
        id: 832,
        spell: "xiangshui",
        name: "\u54CD\u6C34"
      },
      {
        id: 833,
        spell: "xianju",
        name: "\u4ED9\u5C45"
      },
      {
        id: 834,
        spell: "xianyou",
        name: "\u4ED9\u6E38"
      },
      {
        id: 835,
        spell: "xiaoxian",
        name: "\u8427\u53BF"
      },
      {
        id: 836,
        spell: "xiapu",
        name: "\u971E\u6D66"
      },
      {
        id: 837,
        spell: "xifeng",
        name: "\u606F\u70FD"
      },
      {
        id: 838,
        spell: "xinan",
        name: "\u65B0\u5B89"
      },
      {
        id: 839,
        spell: "xinchang",
        name: "\u65B0\u660C"
      },
      {
        id: 840,
        spell: "xinfeng",
        name: "\u4FE1\u4E30"
      },
      {
        id: 841,
        spell: "xinfeng",
        name: "\u65B0\u4E30"
      },
      {
        id: 842,
        spell: "xingan",
        name: "\u65B0\u5E72"
      },
      {
        id: 843,
        spell: "xingguo",
        name: "\u5174\u56FD"
      },
      {
        id: 844,
        spell: "xinghua",
        name: "\u5174\u5316"
      },
      {
        id: 845,
        spell: "xingning",
        name: "\u5174\u5B81"
      },
      {
        id: 846,
        spell: "xingtang",
        name: "\u884C\u5510"
      },
      {
        id: 847,
        spell: "xingyang",
        name: "\u8365\u9633"
      },
      {
        id: 848,
        spell: "xingzi",
        name: "\u661F\u5B50"
      },
      {
        id: 849,
        spell: "xinji",
        name: "\u8F9B\u96C6"
      },
      {
        id: 850,
        spell: "xinjian",
        name: "\u65B0\u5EFA"
      },
      {
        id: 851,
        spell: "xinjin",
        name: "\u65B0\u6D25"
      },
      {
        id: 852,
        spell: "xinle",
        name: "\u65B0\u4E50"
      },
      {
        id: 853,
        spell: "xinmin",
        name: "\u65B0\u6C11"
      },
      {
        id: 854,
        spell: "xinmi",
        name: "\u65B0\u5BC6"
      },
      {
        id: 855,
        spell: "xintai",
        name: "\u65B0\u6CF0"
      },
      {
        id: 856,
        spell: "xinxing",
        name: "\u65B0\u5174"
      },
      {
        id: 857,
        spell: "xinyi",
        name: "\u65B0\u6C82"
      },
      {
        id: 858,
        spell: "xinyi",
        name: "\u4FE1\u5B9C"
      },
      {
        id: 859,
        spell: "xinzheng",
        name: "\u65B0\u90D1"
      },
      {
        id: 860,
        spell: "xiuning",
        name: "\u4F11\u5B81"
      },
      {
        id: 861,
        spell: "xiushan",
        name: "\u79C0\u5C71"
      },
      {
        id: 862,
        spell: "xiushui",
        name: "\u4FEE\u6C34"
      },
      {
        id: 863,
        spell: "xiuwen",
        name: "\u4FEE\u6587"
      },
      {
        id: 864,
        spell: "xiuwu",
        name: "\u4FEE\u6B66"
      },
      {
        id: 865,
        spell: "xundian",
        name: "\u5BFB\u7538"
      },
      {
        id: 866,
        spell: "xunwu",
        name: "\u5BFB\u4E4C"
      },
      {
        id: 867,
        spell: "xuwen",
        name: "\u5F90\u95FB"
      },
      {
        id: 868,
        spell: "xuyi",
        name: "\u76F1\u7719"
      }
    ],
    Y: [
      {
        id: 50,
        spell: "yangzhou",
        name: "\u626C\u5DDE"
      },
      {
        id: 51,
        spell: "yantai",
        name: "\u70DF\u53F0"
      },
      {
        id: 298,
        spell: "yaan",
        name: "\u96C5\u5B89"
      },
      {
        id: 299,
        spell: "yanan",
        name: "\u5EF6\u5B89"
      },
      {
        id: 300,
        spell: "yanbian",
        name: "\u5EF6\u8FB9"
      },
      {
        id: 301,
        spell: "yancheng",
        name: "\u76D0\u57CE"
      },
      {
        id: 302,
        spell: "yangjiang",
        name: "\u9633\u6C5F"
      },
      {
        id: 303,
        spell: "yangquan",
        name: "\u9633\u6CC9"
      },
      {
        id: 304,
        spell: "yibin",
        name: "\u5B9C\u5BBE"
      },
      {
        id: 305,
        spell: "yichang",
        name: "\u5B9C\u660C"
      },
      {
        id: 306,
        spell: "yichun",
        name: "\u4F0A\u6625"
      },
      {
        id: 307,
        spell: "yichun",
        name: "\u5B9C\u6625"
      },
      {
        id: 308,
        spell: "yilihasake",
        name: "\u4F0A\u7281\u54C8\u8428\u514B"
      },
      {
        id: 309,
        spell: "yinchuan",
        name: "\u94F6\u5DDD"
      },
      {
        id: 310,
        spell: "yingkou",
        name: "\u8425\u53E3"
      },
      {
        id: 311,
        spell: "yingtan",
        name: "\u9E70\u6F6D"
      },
      {
        id: 312,
        spell: "yiyang",
        name: "\u76CA\u9633"
      },
      {
        id: 313,
        spell: "yongzhou",
        name: "\u6C38\u5DDE"
      },
      {
        id: 314,
        spell: "yueyang",
        name: "\u5CB3\u9633"
      },
      {
        id: 315,
        spell: "yulin",
        name: "\u7389\u6797"
      },
      {
        id: 316,
        spell: "yulin",
        name: "\u6986\u6797"
      },
      {
        id: 317,
        spell: "yuncheng",
        name: "\u8FD0\u57CE"
      },
      {
        id: 318,
        spell: "yunfu",
        name: "\u4E91\u6D6E"
      },
      {
        id: 319,
        spell: "yushu",
        name: "\u7389\u6811"
      },
      {
        id: 320,
        spell: "yuxi",
        name: "\u7389\u6EAA"
      },
      {
        id: 869,
        spell: "yangchun",
        name: "\u9633\u6625"
      },
      {
        id: 870,
        spell: "yangdong",
        name: "\u9633\u4E1C"
      },
      {
        id: 871,
        spell: "yanggu",
        name: "\u9633\u8C37"
      },
      {
        id: 872,
        spell: "yangshan",
        name: "\u9633\u5C71"
      },
      {
        id: 873,
        spell: "yangxin",
        name: "\u9633\u4FE1"
      },
      {
        id: 874,
        spell: "yangxi",
        name: "\u9633\u897F"
      },
      {
        id: 875,
        spell: "yangzhong",
        name: "\u626C\u4E2D"
      },
      {
        id: 876,
        spell: "yanshi",
        name: "\u5043\u5E08"
      },
      {
        id: 877,
        spell: "yanshou",
        name: "\u5EF6\u5BFF"
      },
      {
        id: 878,
        spell: "yanzhou",
        name: "\u5156\u5DDE"
      },
      {
        id: 879,
        spell: "yichuan",
        name: "\u4F0A\u5DDD"
      },
      {
        id: 880,
        spell: "yifeng",
        name: "\u5B9C\u4E30"
      },
      {
        id: 881,
        spell: "yihuang",
        name: "\u5B9C\u9EC4"
      },
      {
        id: 882,
        spell: "yilan",
        name: "\u4F9D\u5170"
      },
      {
        id: 883,
        spell: "yiliang",
        name: "\u5B9C\u826F"
      },
      {
        id: 884,
        spell: "yinan",
        name: "\u6C82\u5357"
      },
      {
        id: 885,
        spell: "yingde",
        name: "\u82F1\u5FB7"
      },
      {
        id: 886,
        spell: "yingshang",
        name: "\u988D\u4E0A"
      },
      {
        id: 887,
        spell: "yishui",
        name: "\u6C82\u6C34"
      },
      {
        id: 888,
        spell: "yiwu",
        name: "\u4E49\u4E4C"
      },
      {
        id: 889,
        spell: "yixian",
        name: "\u9EDF\u53BF"
      },
      {
        id: 890,
        spell: "yixing",
        name: "\u5B9C\u5174"
      },
      {
        id: 891,
        spell: "yiyang",
        name: "\u5F0B\u9633"
      },
      {
        id: 892,
        spell: "yiyang",
        name: "\u5B9C\u9633"
      },
      {
        id: 893,
        spell: "yiyuan",
        name: "\u6C82\u6E90"
      },
      {
        id: 894,
        spell: "yizheng",
        name: "\u4EEA\u5F81"
      },
      {
        id: 895,
        spell: "yongan",
        name: "\u6C38\u5B89"
      },
      {
        id: 896,
        spell: "yongchuan",
        name: "\u6C38\u5DDD"
      },
      {
        id: 897,
        spell: "yongchun",
        name: "\u6C38\u6625"
      },
      {
        id: 898,
        spell: "yongdeng",
        name: "\u6C38\u767B"
      },
      {
        id: 899,
        spell: "yongding",
        name: "\u6C38\u5B9A"
      },
      {
        id: 900,
        spell: "yongfeng",
        name: "\u6C38\u4E30"
      },
      {
        id: 901,
        spell: "yongji",
        name: "\u6C38\u5409"
      },
      {
        id: 902,
        spell: "yongjia",
        name: "\u6C38\u5609"
      },
      {
        id: 903,
        spell: "yongkang",
        name: "\u6C38\u5EB7"
      },
      {
        id: 904,
        spell: "yongning",
        name: "\u9095\u5B81"
      },
      {
        id: 905,
        spell: "yongtai",
        name: "\u6C38\u6CF0"
      },
      {
        id: 906,
        spell: "yongxin",
        name: "\u6C38\u65B0"
      },
      {
        id: 907,
        spell: "yongxiu",
        name: "\u6C38\u4FEE"
      },
      {
        id: 908,
        spell: "youxi",
        name: "\u5C24\u6EAA"
      },
      {
        id: 909,
        spell: "youyang",
        name: "\u9149\u9633"
      },
      {
        id: 910,
        spell: "yuanshi",
        name: "\u5143\u6C0F"
      },
      {
        id: 911,
        spell: "yucheng",
        name: "\u79B9\u57CE"
      },
      {
        id: 912,
        spell: "yudu",
        name: "\u4E8E\u90FD"
      },
      {
        id: 913,
        spell: "yuexi",
        name: "\u5CB3\u897F"
      },
      {
        id: 914,
        spell: "yugan",
        name: "\u4F59\u5E72"
      },
      {
        id: 915,
        spell: "yuhuan",
        name: "\u7389\u73AF"
      },
      {
        id: 916,
        spell: "yujiang",
        name: "\u4F59\u6C5F"
      },
      {
        id: 917,
        spell: "yunan",
        name: "\u90C1\u5357"
      },
      {
        id: 918,
        spell: "yunan",
        name: "\u4E91\u5B89"
      },
      {
        id: 919,
        spell: "yuncheng",
        name: "\u90D3\u57CE"
      },
      {
        id: 920,
        spell: "yunhe",
        name: "\u4E91\u548C"
      },
      {
        id: 921,
        spell: "yunxiao",
        name: "\u4E91\u9704"
      },
      {
        id: 922,
        spell: "yunyang",
        name: "\u4E91\u9633"
      },
      {
        id: 923,
        spell: "yushan",
        name: "\u7389\u5C71"
      },
      {
        id: 924,
        spell: "yushu",
        name: "\u6986\u6811"
      },
      {
        id: 925,
        spell: "yutai",
        name: "\u9C7C\u53F0"
      },
      {
        id: 926,
        spell: "yutian",
        name: "\u7389\u7530"
      },
      {
        id: 927,
        spell: "yuyao",
        name: "\u4F59\u59DA"
      },
      {
        id: 928,
        spell: "yuzhong",
        name: "\u6986\u4E2D"
      }
    ],
    Z: [
      {
        id: 52,
        spell: "zhangzhou",
        name: "\u6F33\u5DDE"
      },
      {
        id: 53,
        spell: "zhengzhou",
        name: "\u90D1\u5DDE"
      },
      {
        id: 54,
        spell: "zhongshan",
        name: "\u4E2D\u5C71"
      },
      {
        id: 55,
        spell: "zhuhai",
        name: "\u73E0\u6D77"
      },
      {
        id: 321,
        spell: "zaozhuang",
        name: "\u67A3\u5E84"
      },
      {
        id: 322,
        spell: "zhangjiajie",
        name: "\u5F20\u5BB6\u754C"
      },
      {
        id: 323,
        spell: "zhangjiakou",
        name: "\u5F20\u5BB6\u53E3"
      },
      {
        id: 324,
        spell: "zhangye",
        name: "\u5F20\u6396"
      },
      {
        id: 325,
        spell: "zhanjiang",
        name: "\u6E5B\u6C5F"
      },
      {
        id: 326,
        spell: "zhaoqing",
        name: "\u8087\u5E86"
      },
      {
        id: 327,
        spell: "zhaotong",
        name: "\u662D\u901A"
      },
      {
        id: 328,
        spell: "zhenjiang",
        name: "\u9547\u6C5F"
      },
      {
        id: 329,
        spell: "zhongwei",
        name: "\u4E2D\u536B"
      },
      {
        id: 330,
        spell: "zhoukou",
        name: "\u5468\u53E3"
      },
      {
        id: 331,
        spell: "zhoushan",
        name: "\u821F\u5C71"
      },
      {
        id: 332,
        spell: "zhumadian",
        name: "\u9A7B\u9A6C\u5E97"
      },
      {
        id: 333,
        spell: "zhuzhou",
        name: "\u682A\u6D32"
      },
      {
        id: 334,
        spell: "zibo",
        name: "\u6DC4\u535A"
      },
      {
        id: 335,
        spell: "zigong",
        name: "\u81EA\u8D21"
      },
      {
        id: 336,
        spell: "ziyang",
        name: "\u8D44\u9633"
      },
      {
        id: 337,
        spell: "zunyi",
        name: "\u9075\u4E49"
      },
      {
        id: 929,
        spell: "zanhuang",
        name: "\u8D5E\u7687"
      },
      {
        id: 930,
        spell: "zengcheng",
        name: "\u589E\u57CE"
      },
      {
        id: 931,
        spell: "zhangjiagang",
        name: "\u5F20\u5BB6\u6E2F"
      },
      {
        id: 932,
        spell: "zhangping",
        name: "\u6F33\u5E73"
      },
      {
        id: 933,
        spell: "zhangpu",
        name: "\u6F33\u6D66"
      },
      {
        id: 934,
        spell: "zhangqiu",
        name: "\u7AE0\u4E18"
      },
      {
        id: 935,
        spell: "zhangshu",
        name: "\u6A1F\u6811"
      },
      {
        id: 936,
        spell: "zhanhua",
        name: "\u6CBE\u5316"
      },
      {
        id: 937,
        spell: "zhaoxian",
        name: "\u8D75\u53BF"
      },
      {
        id: 938,
        spell: "zhaoyuan",
        name: "\u62DB\u8FDC"
      },
      {
        id: 939,
        spell: "zhengding",
        name: "\u6B63\u5B9A"
      },
      {
        id: 940,
        spell: "zhenghe",
        name: "\u653F\u548C"
      },
      {
        id: 941,
        spell: "zherong",
        name: "\u67D8\u8363"
      },
      {
        id: 942,
        spell: "zhongmou",
        name: "\u4E2D\u725F"
      },
      {
        id: 943,
        spell: "zhongxian",
        name: "\u5FE0\u53BF"
      },
      {
        id: 944,
        spell: "zhouning",
        name: "\u5468\u5B81"
      },
      {
        id: 945,
        spell: "zhouzhi",
        name: "\u5468\u81F3"
      },
      {
        id: 946,
        spell: "zhuanghe",
        name: "\u5E84\u6CB3"
      },
      {
        id: 947,
        spell: "zhucheng",
        name: "\u8BF8\u57CE"
      },
      {
        id: 948,
        spell: "zhuji",
        name: "\u8BF8\u66A8"
      },
      {
        id: 949,
        spell: "zijin",
        name: "\u7D2B\u91D1"
      },
      {
        id: 950,
        spell: "zixi",
        name: "\u8D44\u6EAA"
      },
      {
        id: 951,
        spell: "zoucheng",
        name: "\u90B9\u57CE"
      },
      {
        id: 952,
        spell: "zouping",
        name: "\u90B9\u5E73"
      },
      {
        id: 953,
        spell: "zunhua",
        name: "\u9075\u5316"
      }
    ]
  }
}, D = [
  {
    name: "\u5B89\u5FBD",
    id: "A",
    data: [
      "\u5408\u80A5",
      "\u829C\u6E56",
      "\u868C\u57E0",
      "\u6DEE\u5357",
      "\u9A6C\u978D\u5C71",
      "\u6DEE\u5317",
      "\u94DC\u9675",
      "\u5B89\u5E86",
      "\u9EC4\u5C71",
      "\u6EC1\u5DDE",
      "\u961C\u9633",
      "\u5BBF\u5DDE",
      "\u516D\u5B89",
      "\u4EB3\u5DDE",
      "\u6C60\u5DDE",
      "\u5BA3\u57CE"
    ]
  }
], M = [
  {
    name: "\u91CD\u5E86",
    id: "C",
    data: [
      "\u4E07\u5DDE",
      "\u6DAA\u9675",
      "\u6E1D\u4E2D",
      "\u5927\u6E21\u53E3",
      "\u6C5F\u5317",
      "\u6C99\u576A\u575D",
      "\u4E5D\u9F99\u5761",
      "\u5357\u5CB8",
      "\u5317\u789A",
      "\u7DA6\u6C5F",
      "\u5927\u8DB3",
      "\u6E1D\u5317",
      "\u5DF4\u5357",
      "\u9ED4\u6C5F",
      "\u957F\u5BFF",
      "\u6C5F\u6D25",
      "\u5408\u5DDD",
      "\u6C38\u5DDD",
      "\u5357\u5DDD",
      "\u74A7\u5C71",
      "\u94DC\u6881",
      "\u6F7C\u5357",
      "\u8363\u660C",
      "\u5F00\u5DDE",
      "\u6881\u5E73",
      "\u6B66\u9686",
      "\u57CE\u53E3\u53BF",
      "\u4E30\u90FD\u53BF",
      "\u57AB\u6C5F\u53BF",
      "\u5FE0\u53BF",
      "\u4E91\u9633\u53BF",
      "\u5949\u8282\u53BF",
      "\u5DEB\u5C71\u53BF",
      "\u5DEB\u6EAA\u53BF",
      "\u77F3\u67F1\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF",
      "\u79C0\u5C71\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      "\u9149\u9633\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      "\u5F6D\u6C34\u82D7\u65CF\u571F\u5BB6\u65CF\u81EA\u6CBB\u53BF"
    ]
  }
], U = [
  {
    name: "\u798F\u5EFA",
    id: "F",
    data: [
      "\u798F\u5DDE",
      "\u53A6\u95E8",
      "\u8386\u7530",
      "\u4E09\u660E",
      "\u6CC9\u5DDE",
      "\u6F33\u5DDE",
      "\u5357\u5E73",
      "\u9F99\u5CA9",
      "\u5B81\u5FB7"
    ]
  }
], K = [
  {
    name: "\u5E7F\u4E1C",
    id: "G",
    data: [
      "\u5E7F\u5DDE",
      "\u97F6\u5173",
      "\u6DF1\u5733",
      "\u73E0\u6D77",
      "\u6C55\u5934",
      "\u4F5B\u5C71",
      "\u6C5F\u95E8",
      "\u6E5B\u6C5F",
      "\u8302\u540D",
      "\u8087\u5E86",
      "\u60E0\u5DDE",
      "\u6885\u5DDE",
      "\u6C55\u5C3E",
      "\u6CB3\u6E90",
      "\u9633\u6C5F",
      "\u6E05\u8FDC",
      "\u4E1C\u839E",
      "\u4E2D\u5C71",
      "\u6F6E\u5DDE",
      "\u63ED\u9633",
      "\u4E91\u6D6E"
    ]
  },
  {
    name: "\u5E7F\u897F",
    data: [
      "\u5357\u5B81",
      "\u67F3\u5DDE",
      "\u6842\u6797",
      "\u68A7\u5DDE",
      "\u5317\u6D77",
      "\u9632\u57CE\u6E2F",
      "\u94A6\u5DDE",
      "\u8D35\u6E2F",
      "\u7389\u6797",
      "\u767E\u8272",
      "\u8D3A\u5DDE",
      "\u6CB3\u6C60",
      "\u6765\u5BBE",
      "\u5D07\u5DE6"
    ]
  },
  {
    name: "\u8D35\u5DDE",
    data: [
      "\u8D35\u9633",
      "\u516D\u76D8\u6C34",
      "\u9075\u4E49",
      "\u5B89\u987A",
      "\u6BD5\u8282",
      "\u94DC\u4EC1",
      "\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
      "\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE",
      "\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
    ]
  },
  {
    name: "\u7518\u8083",
    data: [
      "\u5170\u5DDE",
      "\u5609\u5CEA\u5173",
      "\u91D1\u660C",
      "\u767D\u94F6",
      "\u5929\u6C34",
      "\u6B66\u5A01",
      "\u5F20\u6396",
      "\u5E73\u51C9",
      "\u9152\u6CC9",
      "\u5E86\u9633",
      "\u5B9A\u897F",
      "\u9647\u5357",
      "\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE",
      "\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE"
    ]
  }
], R = [
  {
    name: "\u6CB3\u5317",
    id: "H",
    data: [
      "\u77F3\u5BB6\u5E84",
      "\u5510\u5C71",
      "\u79E6\u7687\u5C9B",
      "\u90AF\u90F8",
      "\u90A2\u53F0",
      "\u4FDD\u5B9A",
      "\u5F20\u5BB6\u53E3",
      "\u627F\u5FB7",
      "\u6CA7\u5DDE",
      "\u5ECA\u574A",
      "\u8861\u6C34"
    ]
  },
  {
    name: "\u9ED1\u9F99\u6C5F",
    data: [
      "\u54C8\u5C14\u6EE8",
      "\u9F50\u9F50\u54C8\u5C14",
      "\u9E21\u897F",
      "\u9E64\u5C97",
      "\u53CC\u9E2D\u5C71",
      "\u5927\u5E86",
      "\u4F0A\u6625",
      "\u4F73\u6728\u65AF",
      "\u4E03\u53F0\u6CB3",
      "\u7261\u4E39\u6C5F",
      "\u9ED1\u6CB3",
      "\u7EE5\u5316",
      "\u5927\u5174\u5B89\u5CAD\u5730"
    ]
  },
  {
    name: "\u6CB3\u5357",
    data: [
      "\u90D1\u5DDE",
      "\u5F00\u5C01",
      "\u6D1B\u9633",
      "\u5E73\u9876\u5C71",
      "\u5B89\u9633",
      "\u9E64\u58C1",
      "\u65B0\u4E61",
      "\u7126\u4F5C",
      "\u6FEE\u9633",
      "\u8BB8\u660C",
      "\u6F2F\u6CB3",
      "\u4E09\u95E8\u5CE1",
      "\u5357\u9633",
      "\u5546\u4E18",
      "\u4FE1\u9633",
      "\u5468\u53E3",
      "\u9A7B\u9A6C\u5E97",
      "\u6D4E\u6E90"
    ]
  },
  {
    name: "\u6E56\u5317",
    data: [
      "\u6B66\u6C49",
      "\u9EC4\u77F3",
      "\u5341\u5830",
      "\u5B9C\u660C",
      "\u8944\u9633",
      "\u9102\u5DDE",
      "\u8346\u95E8",
      "\u5B5D\u611F",
      "\u8346\u5DDE",
      "\u9EC4\u5188",
      "\u54B8\u5B81",
      "\u968F\u5DDE",
      "\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
      "\u4ED9\u6843",
      "\u6F5C\u6C5F",
      "\u5929\u95E8",
      "\u795E\u519C\u67B6\u6797"
    ]
  },
  {
    name: "\u6E56\u5357",
    data: [
      "\u957F\u6C99",
      "\u682A\u6D32",
      "\u6E58\u6F6D",
      "\u8861\u9633",
      "\u90B5\u9633",
      "\u5CB3\u9633",
      "\u5E38\u5FB7",
      "\u5F20\u5BB6\u754C",
      "\u76CA\u9633",
      "\u90F4\u5DDE",
      "\u6C38\u5DDE",
      "\u6000\u5316",
      "\u5A04\u5E95",
      "\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE"
    ]
  },
  {
    name: "\u6D77\u5357",
    data: [
      "\u6D77\u53E3",
      "\u4E09\u4E9A",
      "\u4E09\u6C99",
      "\u510B\u5DDE",
      "\u4E94\u6307\u5C71",
      "\u743C\u6D77",
      "\u6587\u660C",
      "\u4E07\u5B81",
      "\u4E1C\u65B9",
      "\u5B9A\u5B89\u53BF",
      "\u5C6F\u660C\u53BF",
      "\u6F84\u8FC8\u53BF",
      "\u4E34\u9AD8\u53BF",
      "\u767D\u6C99\u9ECE\u65CF\u81EA\u6CBB\u53BF",
      "\u660C\u6C5F\u9ECE\u65CF\u81EA\u6CBB\u53BF",
      "\u4E50\u4E1C\u9ECE\u65CF\u81EA\u6CBB\u53BF",
      "\u9675\u6C34\u9ECE\u65CF\u81EA\u6CBB\u53BF",
      "\u4FDD\u4EAD\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF",
      "\u743C\u4E2D\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF"
    ]
  }
], W = [
  {
    name: "\u5409\u6797",
    id: "J",
    data: [
      "\u957F\u6625",
      "\u5409\u6797",
      "\u56DB\u5E73",
      "\u8FBD\u6E90",
      "\u901A\u5316",
      "\u767D\u5C71",
      "\u677E\u539F",
      "\u767D\u57CE",
      "\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE"
    ]
  },
  {
    name: "\u6C5F\u82CF",
    data: [
      "\u5357\u4EAC",
      "\u65E0\u9521",
      "\u5F90\u5DDE",
      "\u5E38\u5DDE",
      "\u82CF\u5DDE",
      "\u5357\u901A",
      "\u8FDE\u4E91\u6E2F",
      "\u6DEE\u5B89",
      "\u76D0\u57CE",
      "\u626C\u5DDE",
      "\u9547\u6C5F",
      "\u6CF0\u5DDE",
      "\u5BBF\u8FC1"
    ]
  },
  {
    name: "\u6C5F\u897F",
    data: [
      "\u5357\u660C",
      "\u666F\u5FB7\u9547",
      "\u840D\u4E61",
      "\u4E5D\u6C5F",
      "\u65B0\u4F59",
      "\u9E70\u6F6D",
      "\u8D63\u5DDE",
      "\u5409\u5B89",
      "\u5B9C\u6625",
      "\u629A\u5DDE",
      "\u4E0A\u9976"
    ]
  }
], ee = [
  {
    name: "\u8FBD\u5B81",
    id: "L",
    data: [
      "\u6C88\u9633",
      "\u5927\u8FDE",
      "\u978D\u5C71",
      "\u629A\u987A",
      "\u672C\u6EAA",
      "\u4E39\u4E1C",
      "\u9526\u5DDE",
      "\u8425\u53E3",
      "\u961C\u65B0",
      "\u8FBD\u9633",
      "\u76D8\u9526",
      "\u94C1\u5CAD",
      "\u671D\u9633",
      "\u846B\u82A6\u5C9B"
    ]
  }
], ne = [
  {
    name: "\u5185\u8499\u53E4",
    id: "N",
    data: [
      "\u547C\u548C\u6D69\u7279",
      "\u5305\u5934",
      "\u4E4C\u6D77",
      "\u8D64\u5CF0",
      "\u901A\u8FBD",
      "\u9102\u5C14\u591A\u65AF",
      "\u547C\u4F26\u8D1D\u5C14",
      "\u5DF4\u5F66\u6DD6\u5C14",
      "\u4E4C\u5170\u5BDF\u5E03",
      "\u5174\u5B89\u76DF",
      "\u9521\u6797\u90ED\u52D2\u76DF",
      "\u963F\u62C9\u5584\u76DF"
    ]
  },
  {
    name: "\u5B81\u590F",
    data: [
      "\u94F6\u5DDD",
      "\u77F3\u5634\u5C71",
      "\u5434\u5FE0",
      "\u56FA\u539F",
      "\u4E2D\u536B"
    ]
  }
], le = [
  {
    name: "\u9752\u6D77",
    id: "Q",
    data: [
      "\u897F\u5B81",
      "\u6D77\u4E1C",
      "\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      "\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      "\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      "\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      "\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      "\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE"
    ]
  }
], ae = [
  {
    name: "\u5C71\u897F",
    id: "S",
    data: [
      "\u592A\u539F",
      "\u5927\u540C",
      "\u9633\u6CC9",
      "\u957F\u6CBB",
      "\u664B\u57CE",
      "\u6714\u5DDE",
      "\u664B\u4E2D",
      "\u8FD0\u57CE",
      "\u5FFB\u5DDE",
      "\u4E34\u6C7E",
      "\u5415\u6881"
    ]
  },
  {
    name: "\u4E0A\u6D77",
    data: [
      "\u9EC4\u6D66",
      "\u5F90\u6C47",
      "\u957F\u5B81",
      "\u9759\u5B89",
      "\u666E\u9640",
      "\u8679\u53E3",
      "\u6768\u6D66",
      "\u95F5\u884C",
      "\u5B9D\u5C71",
      "\u5609\u5B9A",
      "\u6D66\u4E1C\u65B0",
      "\u91D1\u5C71",
      "\u677E\u6C5F",
      "\u9752\u6D66",
      "\u5949\u8D24",
      "\u5D07\u660E"
    ]
  },
  {
    name: "\u5C71\u4E1C",
    data: [
      "\u6D4E\u5357",
      "\u9752\u5C9B",
      "\u6DC4\u535A",
      "\u67A3\u5E84",
      "\u4E1C\u8425",
      "\u70DF\u53F0",
      "\u6F4D\u574A",
      "\u6D4E\u5B81",
      "\u6CF0\u5B89",
      "\u5A01\u6D77",
      "\u65E5\u7167",
      "\u4E34\u6C82",
      "\u5FB7\u5DDE",
      "\u804A\u57CE",
      "\u6EE8\u5DDE",
      "\u83CF\u6CFD"
    ]
  },
  {
    name: "\u56DB\u5DDD",
    data: [
      "\u6210\u90FD",
      "\u81EA\u8D21",
      "\u6500\u679D\u82B1",
      "\u6CF8\u5DDE",
      "\u5FB7\u9633",
      "\u7EF5\u9633",
      "\u5E7F\u5143",
      "\u9042\u5B81",
      "\u5185\u6C5F",
      "\u4E50\u5C71",
      "\u5357\u5145",
      "\u7709\u5C71",
      "\u5B9C\u5BBE",
      "\u5E7F\u5B89",
      "\u8FBE\u5DDE",
      "\u96C5\u5B89",
      "\u5DF4\u4E2D",
      "\u8D44\u9633",
      "\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE",
      "\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE",
      "\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE"
    ]
  },
  {
    name: "\u9655\u897F",
    data: [
      "\u897F\u5B89",
      "\u94DC\u5DDD",
      "\u5B9D\u9E21",
      "\u54B8\u9633",
      "\u6E2D\u5357",
      "\u5EF6\u5B89",
      "\u6C49\u4E2D",
      "\u6986\u6797",
      "\u5B89\u5EB7",
      "\u5546\u6D1B"
    ]
  }
], ie = [
  {
    name: "\u5929\u6D25",
    id: "T",
    data: [
      "\u548C\u5E73",
      "\u6CB3\u4E1C",
      "\u6CB3\u897F",
      "\u5357\u5F00",
      "\u6CB3\u5317",
      "\u7EA2\u6865",
      "\u4E1C\u4E3D",
      "\u897F\u9752",
      "\u6D25\u5357",
      "\u5317\u8FB0",
      "\u6B66\u6E05",
      "\u5B9D\u577B",
      "\u6EE8\u6D77\u65B0",
      "\u5B81\u6CB3",
      "\u9759\u6D77",
      "\u84DF\u5DDE"
    ]
  }
], se = [
  {
    name: "\u897F\u85CF",
    id: "X",
    data: [
      "\u62C9\u8428",
      "\u65E5\u5580\u5219",
      "\u660C\u90FD",
      "\u6797\u829D",
      "\u5C71\u5357",
      "\u90A3\u66F2",
      "\u963F\u91CC\u5730"
    ]
  },
  {
    name: "\u65B0\u7586",
    data: [
      "\u4E4C\u9C81\u6728\u9F50",
      "\u514B\u62C9\u739B\u4F9D",
      "\u5410\u9C81\u756A",
      "\u54C8\u5BC6",
      "\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE",
      "\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE",
      "\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE",
      "\u963F\u514B\u82CF\u5730",
      "\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE",
      "\u5580\u4EC0\u5730",
      "\u548C\u7530\u5730",
      "\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE",
      "\u5854\u57CE\u5730",
      "\u963F\u52D2\u6CF0\u5730",
      "\u77F3\u6CB3\u5B50",
      "\u963F\u62C9\u5C14",
      "\u56FE\u6728\u8212\u514B",
      "\u4E94\u5BB6\u6E20",
      "\u5317\u5C6F",
      "\u94C1\u95E8\u5173",
      "\u53CC\u6CB3",
      "\u53EF\u514B\u8FBE\u62C9",
      "\u6606\u7389",
      "\u80E1\u6768\u6CB3"
    ]
  }
], de = [
  {
    name: "\u4E91\u5357",
    id: "Y",
    data: [
      "\u6606\u660E",
      "\u66F2\u9756",
      "\u7389\u6EAA",
      "\u4FDD\u5C71",
      "\u662D\u901A",
      "\u4E3D\u6C5F",
      "\u666E\u6D31",
      "\u4E34\u6CA7",
      "\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
      "\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE",
      "\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE",
      "\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE",
      "\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE",
      "\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE",
      "\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE",
      "\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE"
    ]
  }
], me = [
  {
    name: "\u6D59\u6C5F",
    id: "Z",
    data: [
      "\u676D\u5DDE",
      "\u5B81\u6CE2",
      "\u6E29\u5DDE",
      "\u5609\u5174",
      "\u6E56\u5DDE",
      "\u7ECD\u5174",
      "\u91D1\u534E",
      "\u8862\u5DDE",
      "\u821F\u5C71",
      "\u53F0\u5DDE",
      "\u4E3D\u6C34"
    ]
  }
], pe = {
  A: D,
  C: M,
  F: U,
  G: K,
  H: R,
  J: W,
  L: ee,
  N: ne,
  Q: le,
  S: ae,
  T: ie,
  X: se,
  Y: de,
  Z: me,
  \u76F4\u8F96\u5E02: [
    {
      name: "\u76F4\u8F96\u5E02",
      id: "\u76F4\u8F96\u5E02",
      data: [
        "\u5317\u4EAC",
        "\u5929\u6D25",
        "\u4E0A\u6D77",
        "\u91CD\u5E86"
      ]
    }
  ],
  \u6E2F\u6FB3: [
    {
      name: "\u6E2F\u6FB3",
      id: "\u6E2F\u6FB3",
      data: [
        "\u9999\u6E2F",
        "\u6FB3\u95E8"
      ]
    }
  ]
}, ge = { class: "result" }, ue = { class: "container" }, he = { class: "city" }, oe = ["onClick"], te = ["onClick"], ce = {
  key: 1,
  class: "province"
}, ye = ["onClick"], xe = ["onClick"], ze = /* @__PURE__ */ X({
  __name: "index",
  emits: ["chooseCity", "chooseProvince"],
  setup(_, { emit: r }) {
    const c = o("\u8BF7\u9009\u62E9"), y = o(!1), x = o("\u6309\u57CE\u5E02"), C = o(""), w = o($.cities), E = o(pe), V = o([]), v = o([]);
    Y(() => {
      let e = Object.values(w.value).flat(2);
      v.value = e, V.value = e;
    });
    const A = (e) => {
      let l = Object.values(w.value).flat(2);
      e === "" ? v.value = l : x.value === "\u6309\u57CE\u5E02" ? v.value = l.filter((h) => h.name.includes(e) || h.spell.includes(e)) : v.value = l.filter((h) => h.name.includes(e));
    }, L = (e) => {
      console.log(e);
      let l = V.value.find((h) => h.id === e);
      console.log(l), c.value = l.name, x.value === "\u6309\u57CE\u5E02" ? r("chooseCity", l) : r("chooseProvince", l.name);
    }, T = (e) => {
      c.value = e.name, y.value = !1, r("chooseCity", e);
    }, G = (e) => {
      c.value = e, y.value = !1, r("chooseProvince", e);
    }, F = (e) => {
      console.log(e);
      let l = document.getElementById(e);
      l && l.scrollIntoView();
    };
    return (e, l) => {
      const h = u("el-icon-arrowup"), B = u("el-radio-button"), H = u("el-radio-group"), f = u("el-col"), I = u("el-option"), J = u("el-select"), b = u("el-row"), N = u("el-scrollbar"), O = u("el-popover");
      return n(), k(O, {
        visible: y.value,
        "onUpdate:visible": l[2] || (l[2] = (a) => y.value = a),
        placement: "bottom-start",
        width: 500,
        trigger: "click"
      }, {
        reference: i(() => [
          z("div", ge, [
            z("div", null, j(c.value), 1),
            z("div", null, [
              s(h, {
                class: Z({ rotate: y.value })
              }, null, 8, ["class"])
            ])
          ])
        ]),
        default: i(() => [
          z("div", ue, [
            s(b, null, {
              default: i(() => [
                s(f, { span: 8 }, {
                  default: i(() => [
                    s(H, {
                      modelValue: x.value,
                      "onUpdate:modelValue": l[0] || (l[0] = (a) => x.value = a)
                    }, {
                      default: i(() => [
                        s(B, { label: "\u6309\u57CE\u5E02" }),
                        s(B, { label: "\u6309\u7701\u4EFD" })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                s(f, {
                  span: 14,
                  offset: 2
                }, {
                  default: i(() => [
                    s(J, {
                      modelValue: C.value,
                      "onUpdate:modelValue": l[1] || (l[1] = (a) => C.value = a),
                      filterable: "",
                      "filter-method": A,
                      placeholder: "\u8BF7\u8F93\u5165\u57CE\u5E02",
                      onChange: L
                    }, {
                      default: i(() => [
                        (n(!0), d(g, null, t(v.value, (a) => (n(), k(I, {
                          key: a.id,
                          label: a.name,
                          value: a.id
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            x.value === "\u6309\u57CE\u5E02" ? (n(), d(g, { key: 0 }, [
              s(b, null, {
                default: i(() => [
                  z("div", he, [
                    (n(!0), d(g, null, t(w.value, (a, p, m) => (n(), d("div", {
                      class: "city-item",
                      key: m,
                      onClick: (q) => F(p)
                    }, j(p), 9, oe))), 128))
                  ])
                ]),
                _: 1
              }),
              s(N, { "max-height": "300px" }, {
                default: i(() => [
                  (n(!0), d(g, null, t(w.value, (a, p) => (n(), k(b, {
                    key: p,
                    style: { "margin-bottom": "10px" },
                    id: p
                  }, {
                    default: i(() => [
                      s(f, { span: 2 }, {
                        default: i(() => [
                          S(j(p) + ":", 1)
                        ]),
                        _: 2
                      }, 1024),
                      s(f, {
                        span: 22,
                        class: "cities"
                      }, {
                        default: i(() => [
                          (n(!0), d(g, null, t(a, (m) => (n(), d("div", {
                            key: m.id,
                            onClick: (q) => T(m)
                          }, [
                            z("div", null, j(m.name), 1)
                          ], 8, te))), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["id"]))), 128))
                ]),
                _: 1
              })
            ], 64)) : (n(), d("div", ce, [
              (n(!0), d(g, null, t(E.value, (a, p, m) => (n(), d("div", {
                class: "province-item",
                key: m,
                onClick: (q) => F(a[0].id)
              }, j(p), 9, ye))), 128)),
              s(N, { "max-height": "300px" }, {
                default: i(() => [
                  (n(!0), d(g, null, t(Object.values(E.value), (a, p) => (n(), d(g, { key: p }, [
                    (n(!0), d(g, null, t(a, (m, q) => (n(), k(b, {
                      key: q,
                      style: { "margin-bottom": "10px" },
                      id: m.id
                    }, {
                      default: i(() => [
                        s(f, { span: 4 }, {
                          default: i(() => [
                            S(j(m.name) + ":", 1)
                          ]),
                          _: 2
                        }, 1024),
                        s(f, {
                          span: 20,
                          class: "cities"
                        }, {
                          default: i(() => [
                            (n(!0), d(g, null, t(m.data, (P, Q) => (n(), d("div", {
                              key: Q,
                              onClick: (fe) => G(P)
                            }, [
                              z("div", null, j(P), 1)
                            ], 8, xe))), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["id"]))), 128))
                  ], 64))), 128))
                ]),
                _: 1
              })
            ]))
          ])
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
});
const je = (_, r) => {
  const c = _.__vccOpts || _;
  for (const [y, x] of r)
    c[y] = x;
  return c;
}, re = /* @__PURE__ */ je(ze, [["__scopeId", "data-v-64776453"]]), ve = {
  install(_) {
    _.component("xs-cityPicker", re);
  }
};
export {
  ve as default
};
