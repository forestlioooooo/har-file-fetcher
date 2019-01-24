
var client = window.client;
XHRMock.post(
    "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=a24506ffa83f4736828fb841400f7ef4E4C",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Mon, 07 Jan 2019 03:50:22 GMT').header('server', 'Apache-Coyote/1.1').header('access-control-allow-origin', '*').header('access-control-allow-headers', 'Origin,X-Requested-With,Content-Type,Accept').header('access-control-allow-methods', 'GET,PUT,DELETE,POST');
        resp = resp.body('{"code":1,"rspList":[{"className":"RspCommon","rspType":-7,"value":1},{"className":"RspBagItem","item":{"amount":15,"id":2,"type":1},"way":6101},{"className":"RspBagItem","item":{"amount":1,"id":300005,"type":1},"way":6101},{"className":"RspBagItem","item":{"amount":2,"id":300005,"type":1},"way":6102},{"className":"RspBagItem","item":{"amount":1000,"id":1,"type":1},"way":6102},{"className":"RspBill","gradePrizes":[{"amount":5,"id":2,"type":1},{"amount":1,"id":300005,"type":1}],"id":1,"maxScore":1777,"medal":10,"prizes":[{"amount":1,"id":300005,"type":1},{"amount":1000,"id":1,"type":1}]}]}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-07T11:50:22.405+08:00",
//     "time": 263,
//     "request": {
//         "method": "POST",
//         "url": "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=a24506ffa83f4736828fb841400f7ef4E4C",
//         "httpVersion": "HTTP/2.0",
//         "cookies": [],
//         "headers": [
//             {
//                 "name": ":method",
//                 "value": "POST"
//             },
//             {
//                 "name": ":scheme",
//                 "value": "https"
//             },
//             {
//                 "name": ":path",
//                 "value": "/server/protocol?sessionId=a24506ffa83f4736828fb841400f7ef4E4C"
//             },
//             {
//                 "name": ":authority",
//                 "value": "quanmao-heidong.17fengyou.com"
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
//                 "name": "content-length",
//                 "value": "116"
//             },
//             {
//                 "name": "accept-language",
//                 "value": "zh-cn"
//             },
//             {
//                 "name": "user-agent",
//                 "value": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16C101 MicroMessenger/7.0.1(0x17000120) NetType/WIFI Language/zh_CN"
//             },
//             {
//                 "name": "referer",
//                 "value": "https://servicewechat.com/wx6ffff35bc5a94176/6/page-frame.html"
//             },
//             {
//                 "name": "accept-encoding",
//                 "value": "br, gzip, deflate"
//             }
//         ],
//         "queryString": [
//             {
//                 "name": "sessionId",
//                 "value": "a24506ffa83f4736828fb841400f7ef4E4C"
//             }
//         ],
//         "postData": {
//             "mimeType": "application/x-www-form-urlencoded",
//             "params": [
//                 {
//                     "name": "{\"className\":\"ReqBill\",\"id\":1,\"killNum\":5,\"rank\":1,\"score\":1777,\"isNoReliveAd\":false,\"useItems\":\"402002:0_402003:0\"}",
//                     "value": ""
//                 }
//             ]
//         },
//         "headersSize": 308,
//         "bodySize": 116
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
//                 "value": "Mon, 07 Jan 2019 03:50:22 GMT"
//             },
//             {
//                 "name": "server",
//                 "value": "Apache-Coyote/1.1"
//             },
//             {
//                 "name": "access-control-allow-origin",
//                 "value": "*"
//             },
//             {
//                 "name": "access-control-allow-headers",
//                 "value": "Origin,X-Requested-With,Content-Type,Accept"
//             },
//             {
//                 "name": "access-control-allow-methods",
//                 "value": "GET,PUT,DELETE,POST"
//             }
//         ],
//         "content": {
//             "size": 595,
//             "mimeType": null,
//             "text": "eyJjb2RlIjoxLCJyc3BMaXN0IjpbeyJjbGFzc05hbWUiOiJSc3BDb21tb24iLCJyc3BUeXBlIjotNywidmFsdWUiOjF9LHsiY2xhc3NOYW1lIjoiUnNwQmFnSXRlbSIsIml0ZW0iOnsiYW1vdW50IjoxNSwiaWQiOjIsInR5cGUiOjF9LCJ3YXkiOjYxMDF9LHsiY2xhc3NOYW1lIjoiUnNwQmFnSXRlbSIsIml0ZW0iOnsiYW1vdW50IjoxLCJpZCI6MzAwMDA1LCJ0eXBlIjoxfSwid2F5Ijo2MTAxfSx7ImNsYXNzTmFtZSI6IlJzcEJhZ0l0ZW0iLCJpdGVtIjp7ImFtb3VudCI6MiwiaWQiOjMwMDAwNSwidHlwZSI6MX0sIndheSI6NjEwMn0seyJjbGFzc05hbWUiOiJSc3BCYWdJdGVtIiwiaXRlbSI6eyJhbW91bnQiOjEwMDAsImlkIjoxLCJ0eXBlIjoxfSwid2F5Ijo2MTAyfSx7ImNsYXNzTmFtZSI6IlJzcEJpbGwiLCJncmFkZVByaXplcyI6W3siYW1vdW50Ijo1LCJpZCI6MiwidHlwZSI6MX0seyJhbW91bnQiOjEsImlkIjozMDAwMDUsInR5cGUiOjF9XSwiaWQiOjEsIm1heFNjb3JlIjoxNzc3LCJtZWRhbCI6MTAsInByaXplcyI6W3siYW1vdW50IjoxLCJpZCI6MzAwMDA1LCJ0eXBlIjoxfSx7ImFtb3VudCI6MTAwMCwiaWQiOjEsInR5cGUiOjF9XX1dfQ==",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 163,
//         "bodySize": 595
//     },
//     "serverIPAddress": "118.25.165.32",
//     "cache": {},
//     "timings": {
//         "dns": 1,
//         "connect": 194,
//         "ssl": 135,
//         "send": 3,
//         "wait": 64,
//         "receive": 1
//     }
// }
