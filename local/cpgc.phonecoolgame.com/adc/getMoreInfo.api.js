
var client = window.client;
XHRMock.get(
    "https://cpgc.phonecoolgame.com/adc/getMoreInfo?appid=wx6ffff35bc5a94176&ptform=1",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 02:55:47 GMT').header('content-length', '259').header('x-powered-by', 'Express');
        resp = resp.body('{"moreInfoList":[{"key":"wx845a2f34af2f4235","url":"","name":"更多游戏","icon":"https://cdn.phonecoolgame.com/wxgame/hezi/back/icon_fangkuaiwan.png","desc":"找小游戏，上方块玩~","jmpid":"wxc1aac55713b44003","parm":"pages/main/main"}],"forward":1}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T10:55:47.917+08:00",
//     "time": 64,
//     "request": {
//         "method": "GET",
//         "url": "https://cpgc.phonecoolgame.com/adc/getMoreInfo?appid=wx6ffff35bc5a94176&ptform=1",
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
//                 "value": "/adc/getMoreInfo?appid=wx6ffff35bc5a94176&ptform=1"
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
//         "headersSize": 48,
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
//                 "value": "259"
//             },
//             {
//                 "name": "x-powered-by",
//                 "value": "Express"
//             }
//         ],
//         "content": {
//             "size": 259,
//             "mimeType": null,
//             "text": "eyJtb3JlSW5mb0xpc3QiOlt7ImtleSI6Ind4ODQ1YTJmMzRhZjJmNDIzNSIsInVybCI6IiIsIm5hbWUiOiLmm7TlpJrmuLjmiI8iLCJpY29uIjoiaHR0cHM6Ly9jZG4ucGhvbmVjb29sZ2FtZS5jb20vd3hnYW1lL2hlemkvYmFjay9pY29uX2ZhbmdrdWFpd2FuLnBuZyIsImRlc2MiOiLmib7lsI/muLjmiI/vvIzkuIrmlrnlnZfnjql+Iiwiam1waWQiOiJ3eGMxYWFjNTU3MTNiNDQwMDMiLCJwYXJtIjoicGFnZXMvbWFpbi9tYWluIn1dLCJmb3J3YXJkIjoxfQ==",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 48,
//         "bodySize": 259
//     },
//     "serverIPAddress": "212.64.116.136",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 4,
//         "wait": 58,
//         "receive": 2
//     }
// }
