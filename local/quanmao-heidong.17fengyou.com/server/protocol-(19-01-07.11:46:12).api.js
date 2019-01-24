
var client = window.client;
XHRMock.post(
    "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=undefined",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Mon, 07 Jan 2019 03:46:12 GMT').header('server', 'Apache-Coyote/1.1').header('access-control-allow-origin', '*').header('access-control-allow-headers', 'Origin,X-Requested-With,Content-Type,Accept').header('access-control-allow-methods', 'GET,PUT,DELETE,POST');
        resp = resp.body('{"code":1,"rspList":[{"className":"RspLoginAccount","resultMsg":"success","tokenId":"a24506ffa83f4736828fb841400f7ef4E4C","userId":290082},{"auto":false,"className":"RspNews"}]}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-07T11:46:12.308+08:00",
//     "time": 62,
//     "request": {
//         "method": "POST",
//         "url": "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=undefined",
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
//                 "value": "/server/protocol?sessionId=undefined"
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
//                 "value": "209"
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
//                 "value": "undefined"
//             }
//         ],
//         "postData": {
//             "mimeType": "application/x-www-form-urlencoded",
//             "params": [
//                 {
//                     "name": "{\"className\":\"ReqLoginAccount\",\"account\":\"oFJji5JjwbOZKzJWxEVK018LdQb4\",\"password\":\"oFJji5JjwbOZKzJWxEVK018LdQb4\",\"platform\":\"wx\",\"spId\":0,\"phoneVersion\":\"iPhone",
//                     "value": ""
//                 },
//                 {
//                     "name": "CPU iPhone OS 9_1 like Mac OS X\",\"login\":true}",
//                     "value": ""
//                 }
//             ]
//         },
//         "headersSize": 14,
//         "bodySize": 209
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
//                 "value": "Mon, 07 Jan 2019 03:46:12 GMT"
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
//             "size": 177,
//             "mimeType": null,
//             "text": "eyJjb2RlIjoxLCJyc3BMaXN0IjpbeyJjbGFzc05hbWUiOiJSc3BMb2dpbkFjY291bnQiLCJyZXN1bHRNc2ciOiJzdWNjZXNzIiwidG9rZW5JZCI6ImEyNDUwNmZmYTgzZjQ3MzY4MjhmYjg0MTQwMGY3ZWY0RTRDIiwidXNlcklkIjoyOTAwODJ9LHsiYXV0byI6ZmFsc2UsImNsYXNzTmFtZSI6IlJzcE5ld3MifV19",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 163,
//         "bodySize": 177
//     },
//     "serverIPAddress": "118.25.165.32",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 1,
//         "wait": 59,
//         "receive": 2
//     }
// }
