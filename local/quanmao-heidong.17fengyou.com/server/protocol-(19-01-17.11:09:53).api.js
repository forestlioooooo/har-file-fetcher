
var client = window.client;
XHRMock.post(
    "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=6a6db26bab5a457db6c595341b94e63dKV4",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 03:09:53 GMT').header('server', 'Apache-Coyote/1.1').header('access-control-allow-origin', '*').header('access-control-allow-headers', 'Origin,X-Requested-With,Content-Type,Accept').header('access-control-allow-methods', 'GET,PUT,DELETE,POST');
        resp = resp.body('{"code":1,"rspList":[{"className":"RspCommon","rspType":-7,"value":1},{"className":"RspBagItem","item":{"amount":0,"id":402002,"type":1},"way":6102},{"className":"RspBagItem","item":{"amount":1,"id":402003,"type":1},"way":6102},{"className":"RspBagItem","item":{"amount":10,"id":2,"type":1},"way":6101},{"className":"RspBagItem","item":{"amount":1,"id":310006,"type":1},"way":6101},{"className":"RspBagItem","item":{"amount":4,"id":300005,"type":1},"way":6102},{"className":"RspBagItem","item":{"amount":29700,"id":1,"type":1},"way":6102},{"className":"RspBill","gradePrizes":[{"amount":10,"id":2,"type":1},{"amount":1,"id":310006,"type":1}],"id":7,"maxScore":1973,"medal":24,"prizes":[{"amount":1,"id":300005,"type":1},{"amount":200,"id":1,"type":1}]}]}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T11:09:53.868+08:00",
//     "time": 300,
//     "request": {
//         "method": "POST",
//         "url": "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=6a6db26bab5a457db6c595341b94e63dKV4",
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
//                 "value": "/server/protocol?sessionId=6a6db26bab5a457db6c595341b94e63dKV4"
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
//                 "value": "115"
//             },
//             {
//                 "name": "accept-language",
//                 "value": "zh-cn"
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
//                 "name": "accept-encoding",
//                 "value": "br, gzip, deflate"
//             }
//         ],
//         "queryString": [
//             {
//                 "name": "sessionId",
//                 "value": "6a6db26bab5a457db6c595341b94e63dKV4"
//             }
//         ],
//         "postData": {
//             "mimeType": "application/x-www-form-urlencoded",
//             "params": [
//                 {
//                     "name": "{\"className\":\"ReqBill\",\"id\":7,\"killNum\":2,\"rank\":6,\"score\":359,\"isNoReliveAd\":false,\"useItems\":\"402002:2_402003:1\"}",
//                     "value": ""
//                 }
//             ]
//         },
//         "headersSize": 308,
//         "bodySize": 115
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
//                 "value": "Thu, 17 Jan 2019 03:09:53 GMT"
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
//             "size": 754,
//             "mimeType": null,
//             "text": "eyJjb2RlIjoxLCJyc3BMaXN0IjpbeyJjbGFzc05hbWUiOiJSc3BDb21tb24iLCJyc3BUeXBlIjotNywidmFsdWUiOjF9LHsiY2xhc3NOYW1lIjoiUnNwQmFnSXRlbSIsIml0ZW0iOnsiYW1vdW50IjowLCJpZCI6NDAyMDAyLCJ0eXBlIjoxfSwid2F5Ijo2MTAyfSx7ImNsYXNzTmFtZSI6IlJzcEJhZ0l0ZW0iLCJpdGVtIjp7ImFtb3VudCI6MSwiaWQiOjQwMjAwMywidHlwZSI6MX0sIndheSI6NjEwMn0seyJjbGFzc05hbWUiOiJSc3BCYWdJdGVtIiwiaXRlbSI6eyJhbW91bnQiOjEwLCJpZCI6MiwidHlwZSI6MX0sIndheSI6NjEwMX0seyJjbGFzc05hbWUiOiJSc3BCYWdJdGVtIiwiaXRlbSI6eyJhbW91bnQiOjEsImlkIjozMTAwMDYsInR5cGUiOjF9LCJ3YXkiOjYxMDF9LHsiY2xhc3NOYW1lIjoiUnNwQmFnSXRlbSIsIml0ZW0iOnsiYW1vdW50Ijo0LCJpZCI6MzAwMDA1LCJ0eXBlIjoxfSwid2F5Ijo2MTAyfSx7ImNsYXNzTmFtZSI6IlJzcEJhZ0l0ZW0iLCJpdGVtIjp7ImFtb3VudCI6Mjk3MDAsImlkIjoxLCJ0eXBlIjoxfSwid2F5Ijo2MTAyfSx7ImNsYXNzTmFtZSI6IlJzcEJpbGwiLCJncmFkZVByaXplcyI6W3siYW1vdW50IjoxMCwiaWQiOjIsInR5cGUiOjF9LHsiYW1vdW50IjoxLCJpZCI6MzEwMDA2LCJ0eXBlIjoxfV0sImlkIjo3LCJtYXhTY29yZSI6MTk3MywibWVkYWwiOjI0LCJwcml6ZXMiOlt7ImFtb3VudCI6MSwiaWQiOjMwMDAwNSwidHlwZSI6MX0seyJhbW91bnQiOjIwMCwiaWQiOjEsInR5cGUiOjF9XX1dfQ==",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 163,
//         "bodySize": 754
//     },
//     "serverIPAddress": "118.25.165.32",
//     "cache": {},
//     "timings": {
//         "dns": 46,
//         "connect": 194,
//         "ssl": 141,
//         "send": 3,
//         "wait": 56,
//         "receive": 1
//     }
// }
