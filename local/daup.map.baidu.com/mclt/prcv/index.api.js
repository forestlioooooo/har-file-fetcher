
var client = window.client;
XHRMock.get(
    "https://daup.map.baidu.com/mclt/prcv/?act=ipr&cuid=5a7a78b6442107845c1fcede10cc6499&os=12.1.2&topic=Oi9B2X2q_ac7abf&sv=10.12.0&mb=iPhone9%2C3",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header('Content-Encoding', 'gzip').header('Content-Type', 'text/html').header('Date', 'Mon, 07 Jan 2019 03:50:06 GMT').header('Server', 'Apache').header('Tracecode', '30063087570569216778010711').header('Tracecode', '30063064030787447818010711').header('Vary', 'Accept-Encoding').header('Content-Length', '53').header('Connection', 'keep-alive');
        resp = resp.body('{"result":{"error":0,"msg":"ok"}}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-07T11:50:06.107+08:00",
//     "time": 137,
//     "request": {
//         "method": "GET",
//         "url": "https://daup.map.baidu.com/mclt/prcv/?act=ipr&cuid=5a7a78b6442107845c1fcede10cc6499&os=12.1.2&topic=Oi9B2X2q_ac7abf&sv=10.12.0&mb=iPhone9%2C3",
//         "httpVersion": "HTTP/1.1",
//         "cookies": [
//             {
//                 "name": "BAIDUID",
//                 "value": "2642C15626FCE4E60732BDDD5A3EE881:FG=1"
//             }
//         ],
//         "headers": [
//             {
//                 "name": "Host",
//                 "value": "daup.map.baidu.com"
//             },
//             {
//                 "name": "Accept",
//                 "value": "*/*"
//             },
//             {
//                 "name": "Cookie",
//                 "value": "BAIDUID=2642C15626FCE4E60732BDDD5A3EE881:FG=1"
//             },
//             {
//                 "name": "User-Agent",
//                 "value": "NoficationService/10.12.0.1 CFNetwork/976 Darwin/18.2.0"
//             },
//             {
//                 "name": "Accept-Language",
//                 "value": "zh-cn"
//             },
//             {
//                 "name": "Accept-Encoding",
//                 "value": "br, gzip, deflate"
//             },
//             {
//                 "name": "Connection",
//                 "value": "keep-alive"
//             }
//         ],
//         "queryString": [
//             {
//                 "name": "act",
//                 "value": "ipr"
//             },
//             {
//                 "name": "cuid",
//                 "value": "5a7a78b6442107845c1fcede10cc6499"
//             },
//             {
//                 "name": "os",
//                 "value": "12.1.2"
//             },
//             {
//                 "name": "topic",
//                 "value": "Oi9B2X2q_ac7abf"
//             },
//             {
//                 "name": "sv",
//                 "value": "10.12.0"
//             },
//             {
//                 "name": "mb",
//                 "value": "iPhone9,3"
//             }
//         ],
//         "headersSize": 379,
//         "bodySize": 0
//     },
//     "response": {
//         "_charlesStatus": "COMPLETE",
//         "status": 200,
//         "statusText": "OK",
//         "httpVersion": "HTTP/1.1",
//         "cookies": [],
//         "headers": [
//             {
//                 "name": "Content-Encoding",
//                 "value": "gzip"
//             },
//             {
//                 "name": "Content-Type",
//                 "value": "text/html"
//             },
//             {
//                 "name": "Date",
//                 "value": "Mon, 07 Jan 2019 03:50:06 GMT"
//             },
//             {
//                 "name": "Server",
//                 "value": "Apache"
//             },
//             {
//                 "name": "Tracecode",
//                 "value": "30063087570569216778010711"
//             },
//             {
//                 "name": "Tracecode",
//                 "value": "30063064030787447818010711"
//             },
//             {
//                 "name": "Vary",
//                 "value": "Accept-Encoding"
//             },
//             {
//                 "name": "Content-Length",
//                 "value": "53"
//             },
//             {
//                 "name": "Connection",
//                 "value": "keep-alive"
//             }
//         ],
//         "content": {
//             "size": 33,
//             "mimeType": "text/html",
//             "text": "{\"result\":{\"error\":0,\"msg\":\"ok\"}}"
//         },
//         "redirectURL": null,
//         "headersSize": 0,
//         "bodySize": 53
//     },
//     "serverIPAddress": "106.39.162.216",
//     "cache": {},
//     "timings": {
//         "dns": 12,
//         "connect": 86,
//         "ssl": 64,
//         "send": 1,
//         "wait": 37,
//         "receive": 1
//     }
// }
