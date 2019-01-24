
var client = window.client;
XHRMock.get(
    "https://cpgc.phonecoolgame.com/adc/getBannerAdInfo?appid=wx6ffff35bc5a94176&ptform=1",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 02:55:47 GMT').header('content-length', '295').header('x-powered-by', 'Express');
        resp = resp.body('{"bannerAdInfo":[{"id":"","wt":"1","jmpid":"","parm":""},{"id":"wx73abab89c857c2d5","url":"https://cdn.phonecoolgame.com/wxgame/hezi/back/kuangyefeiqiubanner(2).jpg","wt":"1","jmpid":"wx73abab89c857c2d5","parm":"?from=11640050","share":"","appname":"狂野飞球"}],"justgdt":1,"bannerAdType":0}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T10:55:47.912+08:00",
//     "time": 61,
//     "request": {
//         "method": "GET",
//         "url": "https://cpgc.phonecoolgame.com/adc/getBannerAdInfo?appid=wx6ffff35bc5a94176&ptform=1",
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
//                 "value": "/adc/getBannerAdInfo?appid=wx6ffff35bc5a94176&ptform=1"
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
//         "headersSize": 51,
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
//                 "value": "295"
//             },
//             {
//                 "name": "x-powered-by",
//                 "value": "Express"
//             }
//         ],
//         "content": {
//             "size": 295,
//             "mimeType": null,
//             "text": "eyJiYW5uZXJBZEluZm8iOlt7ImlkIjoiIiwid3QiOiIxIiwiam1waWQiOiIiLCJwYXJtIjoiIn0seyJpZCI6Ind4NzNhYmFiODljODU3YzJkNSIsInVybCI6Imh0dHBzOi8vY2RuLnBob25lY29vbGdhbWUuY29tL3d4Z2FtZS9oZXppL2JhY2sva3Vhbmd5ZWZlaXFpdWJhbm5lcigyKS5qcGciLCJ3dCI6IjEiLCJqbXBpZCI6Ind4NzNhYmFiODljODU3YzJkNSIsInBhcm0iOiI/ZnJvbT0xMTY0MDA1MCIsInNoYXJlIjoiIiwiYXBwbmFtZSI6IueLgumHjumjnueQgyJ9XSwianVzdGdkdCI6MSwiYmFubmVyQWRUeXBlIjowfQ==",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 48,
//         "bodySize": 295
//     },
//     "serverIPAddress": "212.64.116.136",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 3,
//         "wait": 56,
//         "receive": 2
//     }
// }
