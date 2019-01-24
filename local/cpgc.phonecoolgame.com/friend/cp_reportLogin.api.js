
var client = window.client;
XHRMock.post(
    "https://cpgc.phonecoolgame.com/friend/cp_reportLogin",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 02:55:48 GMT').header('content-type', 'application/json; charset=utf-8').header('content-length', '13').header('x-powered-by', 'Express').header('etag', 'W/"d-LnvZimfRewSh+tLvGQvUbGBD6kk"');
        resp = resp.body(JSON.stringify({"ecode":114}));
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T10:55:48.887+08:00",
//     "time": 77,
//     "request": {
//         "method": "POST",
//         "url": "https://cpgc.phonecoolgame.com/friend/cp_reportLogin",
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
//                 "value": "/friend/cp_reportLogin"
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
//                 "name": "content-length",
//                 "value": "109"
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
//         "queryString": [],
//         "postData": {
//             "mimeType": "application/json",
//             "text": "{\"appid\":\"wx6ffff35bc5a94176\",\"uid\":\"oFJji5JjwbOZKzJWxEVK018LdQb4\",\"sign\":\"a993b303046c0cfb88842b8aa8c5c15b\"}"
//         },
//         "headersSize": 31,
//         "bodySize": 109
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
//                 "value": "Thu, 17 Jan 2019 02:55:48 GMT"
//             },
//             {
//                 "name": "content-type",
//                 "value": "application/json; charset=utf-8"
//             },
//             {
//                 "name": "content-length",
//                 "value": "13"
//             },
//             {
//                 "name": "x-powered-by",
//                 "value": "Express"
//             },
//             {
//                 "name": "etag",
//                 "value": "W/\"d-LnvZimfRewSh+tLvGQvUbGBD6kk\""
//             }
//         ],
//         "content": {
//             "size": 13,
//             "mimeType": "application/json; charset=utf-8",
//             "text": "eyJlY29kZSI6MTE0fQ==",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 106,
//         "bodySize": 13
//     },
//     "serverIPAddress": "212.64.116.136",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 5,
//         "wait": 70,
//         "receive": 2
//     }
// }
