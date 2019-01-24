
var client = window.client;
XHRMock.get(
    "https://cpgc.phonecoolgame.com/adc/getAdFrame?appid=wx6ffff35bc5a94176&ptform=1",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 02:55:50 GMT').header('content-length', '717').header('x-powered-by', 'Express');
        resp = resp.body('{"adFrames":[{"url":"https://cdn.phonecoolgame.com/wxgame/hezi/back/2172xgrz.png","dt":1,"size":[3,3],"len":1,"id":"wxbd38a53f98386b63","share":"","jmpid":"wxbd38a53f98386b63","parm":"pages/main/main?navigateto=elspp&from=10660022","sex":"3"},{"url":"https://cdn.phonecoolgame.com/wxgame/hezi/back/217212.png","dt":1,"size":[3,3],"len":1,"id":"wxc1aac55713b44003","share":"","jmpid":"wxc1aac55713b44003","parm":"pages/main/main?navigateto=xgrz&from=10660022","sex":"3"},{"url":"https://cdn.phonecoolgame.com/wxgame/hezi/back/hhszj11.png","dt":1,"size":[3,3],"len":1,"id":"wx750fda7033d2ed8f","share":"","jmpid":"wx750fda7033d2ed8f","parm":"pages/main/main?navigateto=hhszj&from=10660022","sex":"3"}],"adSequences":[]}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T10:55:50.011+08:00",
//     "time": 61,
//     "request": {
//         "method": "GET",
//         "url": "https://cpgc.phonecoolgame.com/adc/getAdFrame?appid=wx6ffff35bc5a94176&ptform=1",
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
//                 "value": "/adc/getAdFrame?appid=wx6ffff35bc5a94176&ptform=1"
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
//                 "value": "application/x-www-form-urlencoded"
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
//         "headersSize": 73,
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
//                 "value": "Thu, 17 Jan 2019 02:55:50 GMT"
//             },
//             {
//                 "name": "content-length",
//                 "value": "717"
//             },
//             {
//                 "name": "x-powered-by",
//                 "value": "Express"
//             }
//         ],
//         "content": {
//             "size": 717,
//             "mimeType": null,
//             "text": "eyJhZEZyYW1lcyI6W3sidXJsIjoiaHR0cHM6Ly9jZG4ucGhvbmVjb29sZ2FtZS5jb20vd3hnYW1lL2hlemkvYmFjay8yMTcyeGdyei5wbmciLCJkdCI6MSwic2l6ZSI6WzMsM10sImxlbiI6MSwiaWQiOiJ3eGJkMzhhNTNmOTgzODZiNjMiLCJzaGFyZSI6IiIsImptcGlkIjoid3hiZDM4YTUzZjk4Mzg2YjYzIiwicGFybSI6InBhZ2VzL21haW4vbWFpbj9uYXZpZ2F0ZXRvPWVsc3BwJmZyb209MTA2NjAwMjIiLCJzZXgiOiIzIn0seyJ1cmwiOiJodHRwczovL2Nkbi5waG9uZWNvb2xnYW1lLmNvbS93eGdhbWUvaGV6aS9iYWNrLzIxNzIxMi5wbmciLCJkdCI6MSwic2l6ZSI6WzMsM10sImxlbiI6MSwiaWQiOiJ3eGMxYWFjNTU3MTNiNDQwMDMiLCJzaGFyZSI6IiIsImptcGlkIjoid3hjMWFhYzU1NzEzYjQ0MDAzIiwicGFybSI6InBhZ2VzL21haW4vbWFpbj9uYXZpZ2F0ZXRvPXhncnomZnJvbT0xMDY2MDAyMiIsInNleCI6IjMifSx7InVybCI6Imh0dHBzOi8vY2RuLnBob25lY29vbGdhbWUuY29tL3d4Z2FtZS9oZXppL2JhY2svaGhzemoxMS5wbmciLCJkdCI6MSwic2l6ZSI6WzMsM10sImxlbiI6MSwiaWQiOiJ3eDc1MGZkYTcwMzNkMmVkOGYiLCJzaGFyZSI6IiIsImptcGlkIjoid3g3NTBmZGE3MDMzZDJlZDhmIiwicGFybSI6InBhZ2VzL21haW4vbWFpbj9uYXZpZ2F0ZXRvPWhoc3pqJmZyb209MTA2NjAwMjIiLCJzZXgiOiIzIn1dLCJhZFNlcXVlbmNlcyI6W119",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 48,
//         "bodySize": 717
//     },
//     "serverIPAddress": "212.64.116.136",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 1,
//         "wait": 58,
//         "receive": 2
//     }
// }
