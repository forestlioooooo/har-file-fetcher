
var client = window.client;
XHRMock.get(
    "https://cpgc.phonecoolgame.com/adc/getAdexpInfo?appid=wx6ffff35bc5a94176&ptform=1",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 02:55:47 GMT').header('content-length', '2614').header('x-powered-by', 'Express');
        resp = resp.body('{"adexpList":[{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/eluosipinpinicon002.png","name":"方块大消除","share":"","jmpid":"wxbd38a53f98386b63","parm":"pages/main/main?navigateto=elspp&from=12780034"},{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/chijishensheshouicon001.png","name":"吃鸡神射手","share":"","jmpid":"wx868c10731a7c9891","parm":"pages/main/main?navigateto=cjsss&from=12780034"},{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/gongchengsanguoicon.png","name":"霸业三国志","share":"https://cdn.phonecoolgame.com/wxgame/hezi/back/gongchengsanguo.jpg","jmpid":"","parm":"?from=12780034"},{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/144_3.png","name":"萌宠坦克","share":"","jmpid":"wxc7e310f0d21af54d","parm":"pages/main/main?navigateto=mctk&from=12780034"},{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/83688745937369359.jpg","name":"狂野飞球","share":"","jmpid":"wx73abab89c857c2d5","parm":"pages/main/main?navigateto=kyfq&from=12780034"},{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/niangniang.png","name":"娘娘驾到","share":"","jmpid":"wx750fda7033d2ed8f","parm":"pages/main/main?navigateto=hhszj&from=12780034"},{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/xyjico.png","name":"西游记","share":"https://cdn.phonecoolgame.com/wxgame/hezi/back/xiyouerweima.jpg","jmpid":"","parm":"?from=12780034"},{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/144-2.png","name":"决战沙城","share":"https://cdn.phonecoolgame.com/wxgame/hezi/back/1278.jpg","jmpid":"","parm":"?from=12780034"},{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/kuailezuma(1).png","name":"快乐祖玛","share":"","jmpid":"wx3d2e2fa8c4ca3eaf","parm":"pages/main/main?navigateto=klzm&from=12780034"},{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/xiguarenzheicon001.png","name":"西瓜忍者","share":"","jmpid":"wxc1aac55713b44003","parm":"pages/main/main?navigateto=xgrz&from=12780034"},{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/icon(1)(2).png","name":"狙击对决","share":"","jmpid":"wxb2644b7adc2de213","parm":"pages/main/main?navigateto=wpzjol&from=12780034"},{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/ryyuanzheng111.png","name":"荣耀与远征","share":"https://cdn.phonecoolgame.com/wxgame/hezi/back/rongyaoyuyanzheng.jpg","jmpid":"","parm":"?from=12780034"},{"icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/longjuanfengluandouicon002.jpg","name":"龙卷风乱斗","share":"","jmpid":"wxe57bfaaa884daed6","parm":"pages/main/main?navigateto=ljfld&from=12780034"}]}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T10:55:47.913+08:00",
//     "time": 62,
//     "request": {
//         "method": "GET",
//         "url": "https://cpgc.phonecoolgame.com/adc/getAdexpInfo?appid=wx6ffff35bc5a94176&ptform=1",
//         "httpVersion": "HTTP/2.0",
//         "cookies": [],
//         "headers": [
//             {
//                 "name": ":method",
//                 "value": "GET"
//             },
//             {
//                 "name": ":scheme",
//                 "value": "https"
//             },
//             {
//                 "name": ":path",
//                 "value": "/adc/getAdexpInfo?appid=wx6ffff35bc5a94176&ptform=1"
//             },
//             {
//                 "name": ":authority",
//                 "value": "cpgc.phonecoolgame.com"
//             },
//             {
//                 "name": "accept",
//                 "value": "*/*"
//             },
//             {
//                 "name": "content-type",
//                 "value": "application/json"
//             },
//             {
//                 "name": "accept-encoding",
//                 "value": "br, gzip, deflate"
//             },
//             {
//                 "name": "user-agent",
//                 "value": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16C101 MicroMessenger/7.0.2(0x17000222) NetType/WIFI Language/zh_CN"
//             },
//             {
//                 "name": "referer",
//                 "value": "https://servicewechat.com/wx6ffff35bc5a94176/6/page-frame.html"
//             },
//             {
//                 "name": "accept-language",
//                 "value": "zh-cn"
//             }
//         ],
//         "queryString": [
//             {
//                 "name": "appid",
//                 "value": "wx6ffff35bc5a94176"
//             },
//             {
//                 "name": "ptform",
//                 "value": "1"
//             }
//         ],
//         "headersSize": 49,
//         "bodySize": 0
//     },
//     "response": {
//         "_charlesStatus": "COMPLETE",
//         "status": 200,
//         "statusText": null,
//         "httpVersion": "HTTP/2.0",
//         "cookies": [],
//         "headers": [
//             {
//                 "name": ":status",
//                 "value": "200"
//             },
//             {
//                 "name": "date",
//                 "value": "Thu, 17 Jan 2019 02:55:47 GMT"
//             },
//             {
//                 "name": "content-length",
//                 "value": "2614"
//             },
//             {
//                 "name": "x-powered-by",
//                 "value": "Express"
//             }
//         ],
//         "content": {
//             "size": 2614,
//             "mimeType": null,
//             "text": "eyJhZGV4cExpc3QiOlt7Imljb24iOiJodHRwczovL2Nkbi5waG9uZWNvb2xnYW1lLmNvbS93eGdhbWUvaGV6aS9iYWNrL2VsdW9zaXBpbnBpbmljb24wMDIucG5nIiwibmFtZSI6IuaWueWdl+Wkp+a2iOmZpCIsInNoYXJlIjoiIiwiam1waWQiOiJ3eGJkMzhhNTNmOTgzODZiNjMiLCJwYXJtIjoicGFnZXMvbWFpbi9tYWluP25hdmlnYXRldG89ZWxzcHAmZnJvbT0xMjc4MDAzNCJ9LHsiaWNvbiI6Imh0dHBzOi8vY2RuLnBob25lY29vbGdhbWUuY29tL3d4Z2FtZS9oZXppL2JhY2svY2hpamlzaGVuc2hlc2hvdWljb24wMDEucG5nIiwibmFtZSI6IuWQg+m4oeelnuWwhOaJiyIsInNoYXJlIjoiIiwiam1waWQiOiJ3eDg2OGMxMDczMWE3Yzk4OTEiLCJwYXJtIjoicGFnZXMvbWFpbi9tYWluP25hdmlnYXRldG89Y2pzc3MmZnJvbT0xMjc4MDAzNCJ9LHsiaWNvbiI6Imh0dHBzOi8vY2RuLnBob25lY29vbGdhbWUuY29tL3d4Z2FtZS9oZXppL2JhY2svZ29uZ2NoZW5nc2FuZ3VvaWNvbi5wbmciLCJuYW1lIjoi6Zy45Lia5LiJ5Zu95b+XIiwic2hhcmUiOiJodHRwczovL2Nkbi5waG9uZWNvb2xnYW1lLmNvbS93eGdhbWUvaGV6aS9iYWNrL2dvbmdjaGVuZ3Nhbmd1by5qcGciLCJqbXBpZCI6IiIsInBhcm0iOiI/ZnJvbT0xMjc4MDAzNCJ9LHsiaWNvbiI6Imh0dHBzOi8vY2RuLnBob25lY29vbGdhbWUuY29tL3d4Z2FtZS9oZXppL2JhY2svMTQ0XzMucG5nIiwibmFtZSI6IuiQjOWuoOWdpuWFiyIsInNoYXJlIjoiIiwiam1waWQiOiJ3eGM3ZTMxMGYwZDIxYWY1NGQiLCJwYXJtIjoicGFnZXMvbWFpbi9tYWluP25hdmlnYXRldG89bWN0ayZmcm9tPTEyNzgwMDM0In0seyJpY29uIjoiaHR0cHM6Ly9jZG4ucGhvbmVjb29sZ2FtZS5jb20vd3hnYW1lL2hlemkvYmFjay84MzY4ODc0NTkzNzM2OTM1OS5qcGciLCJuYW1lIjoi54uC6YeO6aOe55CDIiwic2hhcmUiOiIiLCJqbXBpZCI6Ind4NzNhYmFiODljODU3YzJkNSIsInBhcm0iOiJwYWdlcy9tYWluL21haW4/bmF2aWdhdGV0bz1reWZxJmZyb209MTI3ODAwMzQifSx7Imljb24iOiJodHRwczovL2Nkbi5waG9uZWNvb2xnYW1lLmNvbS93eGdhbWUvaGV6aS9iYWNrL25pYW5nbmlhbmcucG5nIiwibmFtZSI6IuWomOWomOmpvuWIsCIsInNoYXJlIjoiIiwiam1waWQiOiJ3eDc1MGZkYTcwMzNkMmVkOGYiLCJwYXJtIjoicGFnZXMvbWFpbi9tYWluP25hdmlnYXRldG89aGhzemomZnJvbT0xMjc4MDAzNCJ9LHsiaWNvbiI6Imh0dHBzOi8vY2RuLnBob25lY29vbGdhbWUuY29tL3d4Z2FtZS9oZXppL2JhY2sveHlqaWNvLnBuZyIsIm5hbWUiOiLopb/muLjorrAiLCJzaGFyZSI6Imh0dHBzOi8vY2RuLnBob25lY29vbGdhbWUuY29tL3d4Z2FtZS9oZXppL2JhY2sveGl5b3VlcndlaW1hLmpwZyIsImptcGlkIjoiIiwicGFybSI6Ij9mcm9tPTEyNzgwMDM0In0seyJpY29uIjoiaHR0cHM6Ly9jZG4ucGhvbmVjb29sZ2FtZS5jb20vd3hnYW1lL2hlemkvYmFjay8xNDQtMi5wbmciLCJuYW1lIjoi5Yaz5oiY5rKZ5Z+OIiwic2hhcmUiOiJodHRwczovL2Nkbi5waG9uZWNvb2xnYW1lLmNvbS93eGdhbWUvaGV6aS9iYWNrLzEyNzguanBnIiwiam1waWQiOiIiLCJwYXJtIjoiP2Zyb209MTI3ODAwMzQifSx7Imljb24iOiJodHRwczovL2Nkbi5waG9uZWNvb2xnYW1lLmNvbS93eGdhbWUvaGV6aS9iYWNrL2t1YWlsZXp1bWEoMSkucG5nIiwibmFtZSI6IuW/q+S5kOellueOmyIsInNoYXJlIjoiIiwiam1waWQiOiJ3eDNkMmUyZmE4YzRjYTNlYWYiLCJwYXJtIjoicGFnZXMvbWFpbi9tYWluP25hdmlnYXRldG89a2x6bSZmcm9tPTEyNzgwMDM0In0seyJpY29uIjoiaHR0cHM6Ly9jZG4ucGhvbmVjb29sZ2FtZS5jb20vd3hnYW1lL2hlemkvYmFjay94aWd1YXJlbnpoZWljb24wMDEucG5nIiwibmFtZSI6Iuilv+eTnOW/jeiAhSIsInNoYXJlIjoiIiwiam1waWQiOiJ3eGMxYWFjNTU3MTNiNDQwMDMiLCJwYXJtIjoicGFnZXMvbWFpbi9tYWluP25hdmlnYXRldG89eGdyeiZmcm9tPTEyNzgwMDM0In0seyJpY29uIjoiaHR0cHM6Ly9jZG4ucGhvbmVjb29sZ2FtZS5jb20vd3hnYW1lL2hlemkvYmFjay9pY29uKDEpKDIpLnBuZyIsIm5hbWUiOiLni5nlh7vlr7nlhrMiLCJzaGFyZSI6IiIsImptcGlkIjoid3hiMjY0NGI3YWRjMmRlMjEzIiwicGFybSI6InBhZ2VzL21haW4vbWFpbj9uYXZpZ2F0ZXRvPXdwempvbCZmcm9tPTEyNzgwMDM0In0seyJpY29uIjoiaHR0cHM6Ly9jZG4ucGhvbmVjb29sZ2FtZS5jb20vd3hnYW1lL2hlemkvYmFjay9yeXl1YW56aGVuZzExMS5wbmciLCJuYW1lIjoi6I2j6ICA5LiO6L+c5b6BIiwic2hhcmUiOiJodHRwczovL2Nkbi5waG9uZWNvb2xnYW1lLmNvbS93eGdhbWUvaGV6aS9iYWNrL3Jvbmd5YW95dXlhbnpoZW5nLmpwZyIsImptcGlkIjoiIiwicGFybSI6Ij9mcm9tPTEyNzgwMDM0In0seyJpY29uIjoiaHR0cHM6Ly9jZG4ucGhvbmVjb29sZ2FtZS5jb20vd3hnYW1lL2hlemkvYmFjay9sb25nanVhbmZlbmdsdWFuZG91aWNvbjAwMi5qcGciLCJuYW1lIjoi6b6Z5Y236aOO5Lmx5paXIiwic2hhcmUiOiIiLCJqbXBpZCI6Ind4ZTU3YmZhYWE4ODRkYWVkNiIsInBhcm0iOiJwYWdlcy9tYWluL21haW4/bmF2aWdhdGV0bz1samZsZCZmcm9tPTEyNzgwMDM0In1dfQ==",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 49,
//         "bodySize": 2614
//     },
//     "serverIPAddress": "212.64.116.136",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 3,
//         "wait": 58,
//         "receive": 1
//     }
// }
