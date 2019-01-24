
var client = window.client;
XHRMock.post(
    "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=6a6db26bab5a457db6c595341b94e63dKV4",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 02:58:35 GMT').header('server', 'Apache-Coyote/1.1').header('access-control-allow-origin', '*').header('access-control-allow-headers', 'Origin,X-Requested-With,Content-Type,Accept').header('access-control-allow-methods', 'GET,PUT,DELETE,POST');
        resp = resp.body('{"code":1,"rspList":[{"className":"RspBagItem","item":{"amount":2,"id":402002,"type":1},"way":4112},{"className":"RspBagItem","item":{"amount":2,"id":402003,"type":1},"way":4112},{"className":"RspBagItem","item":{"amount":1,"id":300008,"type":1},"way":4112},{"className":"RspBagItem","item":{"amount":19200,"id":1,"type":1},"way":4112},{"className":"RspCommon","rspType":-33,"value":0}]}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T10:58:35.651+08:00",
//     "time": 148,
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
//                 "value": "34"
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
//                     "name": "{\"className\":\"ReqWeal\",\"opType\":7}",
//                     "value": ""
//                 }
//             ]
//         },
//         "headersSize": 11,
//         "bodySize": 34
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
//                 "value": "Thu, 17 Jan 2019 02:58:35 GMT"
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
//             "size": 387,
//             "mimeType": null,
//             "text": "eyJjb2RlIjoxLCJyc3BMaXN0IjpbeyJjbGFzc05hbWUiOiJSc3BCYWdJdGVtIiwiaXRlbSI6eyJhbW91bnQiOjIsImlkIjo0MDIwMDIsInR5cGUiOjF9LCJ3YXkiOjQxMTJ9LHsiY2xhc3NOYW1lIjoiUnNwQmFnSXRlbSIsIml0ZW0iOnsiYW1vdW50IjoyLCJpZCI6NDAyMDAzLCJ0eXBlIjoxfSwid2F5Ijo0MTEyfSx7ImNsYXNzTmFtZSI6IlJzcEJhZ0l0ZW0iLCJpdGVtIjp7ImFtb3VudCI6MSwiaWQiOjMwMDAwOCwidHlwZSI6MX0sIndheSI6NDExMn0seyJjbGFzc05hbWUiOiJSc3BCYWdJdGVtIiwiaXRlbSI6eyJhbW91bnQiOjE5MjAwLCJpZCI6MSwidHlwZSI6MX0sIndheSI6NDExMn0seyJjbGFzc05hbWUiOiJSc3BDb21tb24iLCJyc3BUeXBlIjotMzMsInZhbHVlIjowfV19",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 163,
//         "bodySize": 387
//     },
//     "serverIPAddress": "118.25.165.32",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 1,
//         "wait": 145,
//         "receive": 2
//     }
// }
