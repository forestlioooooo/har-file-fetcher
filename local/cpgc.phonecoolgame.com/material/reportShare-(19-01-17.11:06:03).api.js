
var client = window.client;
XHRMock.get(
    "https://cpgc.phonecoolgame.com/material/reportShare?appid=wx6ffff35bc5a94176&materialID=124",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 03:06:03 GMT').header('content-type', 'application/json; charset=utf-8').header('content-length', '11').header('x-powered-by', 'Express').header('etag', 'W/"b-o7byiMkfh0qH8CUtSWby2EGa2w8"');
        resp = resp.body(JSON.stringify({"ecode":0}));
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T11:06:03.588+08:00",
//     "time": 427,
//     "request": {
//         "method": "GET",
//         "url": "https://cpgc.phonecoolgame.com/material/reportShare?appid=wx6ffff35bc5a94176&materialID=124",
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
//                 "value": "/material/reportShare?appid=wx6ffff35bc5a94176&materialID=124"
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
//                 "name": "materialID",
//                 "value": "124"
//             }
//         ],
//         "headersSize": 286,
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
//                 "value": "Thu, 17 Jan 2019 03:06:03 GMT"
//             },
//             {
//                 "name": "content-type",
//                 "value": "application/json; charset=utf-8"
//             },
//             {
//                 "name": "content-length",
//                 "value": "11"
//             },
//             {
//                 "name": "x-powered-by",
//                 "value": "Express"
//             },
//             {
//                 "name": "etag",
//                 "value": "W/\"b-o7byiMkfh0qH8CUtSWby2EGa2w8\""
//             }
//         ],
//         "content": {
//             "size": 11,
//             "mimeType": "application/json; charset=utf-8",
//             "text": "eyJlY29kZSI6MH0=",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 104,
//         "bodySize": 11
//     },
//     "serverIPAddress": "212.64.116.136",
//     "cache": {},
//     "timings": {
//         "dns": 16,
//         "connect": 203,
//         "ssl": 144,
//         "send": 2,
//         "wait": 205,
//         "receive": 1
//     }
// }
