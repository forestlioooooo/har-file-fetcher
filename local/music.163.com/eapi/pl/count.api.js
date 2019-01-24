
var client = window.client;
XHRMock.post(
    "https://music.163.com/eapi/pl/count",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header('Server', 'nginx').header('Date', 'Thu, 17 Jan 2019 03:08:28 GMT').header('Content-Type', 'text/plain;charset=UTF-8').header('Transfer-Encoding', 'chunked').header('Vary', 'Accept-Encoding').header('Cache-Control', 'no-store').header('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT').header('Cache-Control', 'no-cache').header('X-Via', 'MusicServer').header('X-From-Src', '171.15.158.212').header('Content-Encoding', 'gzip').header('Connection', 'keep-alive');
        resp = resp.body('{"code":200,"notice":0,"follow":0,"forward":0,"msg":0,"comment":0,"pushMsg":null,"friend":{"snsCount":0,"count":0,"celebrityCount":0},"lastPrivateMsg":null,"event":2,"newProgramCount":2,"createDJRadioCount":0,"newTheme":false,"battle":{"showQuizIcon":false,"startTime":0,"endTime":0,"nonStartIcon":null,"startIcon":null}}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T11:08:28.516+08:00",
//     "time": 409,
//     "request": {
//         "method": "POST",
//         "url": "https://music.163.com/eapi/pl/count",
//         "httpVersion": "HTTP/1.1",
//         "cookies": [
//             {
//                 "name": "appver",
//                 "value": "1.5.10"
//             },
//             {
//                 "name": "os",
//                 "value": "osx"
//             },
//             {
//                 "name": "MUSIC_U",
//                 "value": "9de0b492647e4661ee4dda00ae12f0bfbd58222d835fde8d281b07fa9ea6d3c3c6554ae027e43af7afebf8d72ff7aec38315fa1a17fa1b85daffd49d39fa5f0b86e425b9057634fc"
//             },
//             {
//                 "name": "deviceId",
//                 "value": "E85B8C99-4F1D-5651-A1BF-797E51185A52%7CA02897D9-D1E1-4C20-BF1F-9184AFCF59C2"
//             },
//             {
//                 "name": "__csrf",
//                 "value": "ddc74d1d0be3edb21a1f9856297f9ea4"
//             },
//             {
//                 "name": "channel",
//                 "value": "netease"
//             },
//             {
//                 "name": "__remember_me",
//                 "value": "true"
//             },
//             {
//                 "name": "osver",
//                 "value": "%E7%89%88%E6%9C%AC%2010.14.2%EF%BC%88%E7%89%88%E5%8F%B7%2018C54%EF%BC%89"
//             },
//             {
//                 "name": "",
//                 "value": null
//             }
//         ],
//         "headers": [
//             {
//                 "name": "Host",
//                 "value": "music.163.com"
//             },
//             {
//                 "name": "Accept",
//                 "value": "*/*"
//             },
//             {
//                 "name": "Content-Type",
//                 "value": "application/x-www-form-urlencoded"
//             },
//             {
//                 "name": "Origin",
//                 "value": "orpheus://orpheus"
//             },
//             {
//                 "name": "Connection",
//                 "value": "keep-alive"
//             },
//             {
//                 "name": "Cookie",
//                 "value": "appver=1.5.10; os=osx; MUSIC_U=9de0b492647e4661ee4dda00ae12f0bfbd58222d835fde8d281b07fa9ea6d3c3c6554ae027e43af7afebf8d72ff7aec38315fa1a17fa1b85daffd49d39fa5f0b86e425b9057634fc; deviceId=E85B8C99-4F1D-5651-A1BF-797E51185A52%7CA02897D9-D1E1-4C20-BF1F-9184AFCF59C2; __csrf=ddc74d1d0be3edb21a1f9856297f9ea4; channel=netease; __remember_me=true; osver=%E7%89%88%E6%9C%AC%2010.14.2%EF%BC%88%E7%89%88%E5%8F%B7%2018C54%EF%BC%89;"
//             },
//             {
//                 "name": "User-Agent",
//                 "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/605.1.15 (KHTML, like Gecko)"
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
//                 "name": "Content-Length",
//                 "value": "679"
//             }
//         ],
//         "queryString": [],
//         "postData": {
//             "mimeType": "application/x-www-form-urlencoded",
//             "params": [
//                 {
//                     "name": "params",
//                     "value": "24A014CFACF85FFBE94739C5A9168B2ED56B1256A55F49A5E850DC73EDDA2E94722922F8C862B9A5C365D9AB3EC6EF6B889470097C362CA8943B57D0549855049029141591D71B6CFBC8D654349BF37D962EB4884E6B06078491454F89E2C9E257E2DBB5C19220C20EE55DE2B6B8E0C0CC966047FAA6F248E367E56196463CCC8E380A89F241BB15938B11F864BD16AB152F32E6041176216F221644F252FAB39689D52F4C97A5C36CE69B08E744112DE777C67A3E5180D11D2648A6AC946BBCFC1E0C0FE7A4A572C0BA1E3AFB87D3F55DCD722F82D036E721518365DBF2B424FFA9F98C615BACC4583664E29F3E04E4EDEC8C6AB47F3BA540211D855D261A93735E6467F4C23C9B822A5066507AE2481C5D88244FAD08117EC34A30DD8C27E46475C42806AAF1923D36E3EBB3A251F4023FB5F47E5F96175429DAF69652DDDD3750CC8BD0F06120D9CC7AE377017ECD"
//                 }
//             ]
//         },
//         "headersSize": 779,
//         "bodySize": 679
//     },
//     "response": {
//         "_charlesStatus": "COMPLETE",
//         "status": 200,
//         "statusText": "OK",
//         "httpVersion": "HTTP/1.1",
//         "cookies": [],
//         "headers": [
//             {
//                 "name": "Server",
//                 "value": "nginx"
//             },
//             {
//                 "name": "Date",
//                 "value": "Thu, 17 Jan 2019 03:08:28 GMT"
//             },
//             {
//                 "name": "Content-Type",
//                 "value": "text/plain;charset=UTF-8"
//             },
//             {
//                 "name": "Transfer-Encoding",
//                 "value": "chunked"
//             },
//             {
//                 "name": "Vary",
//                 "value": "Accept-Encoding"
//             },
//             {
//                 "name": "Cache-Control",
//                 "value": "no-store"
//             },
//             {
//                 "name": "Expires",
//                 "value": "Thu, 01 Jan 1970 00:00:00 GMT"
//             },
//             {
//                 "name": "Cache-Control",
//                 "value": "no-cache"
//             },
//             {
//                 "name": "X-Via",
//                 "value": "MusicServer"
//             },
//             {
//                 "name": "X-From-Src",
//                 "value": "171.15.158.212"
//             },
//             {
//                 "name": "Content-Encoding",
//                 "value": "gzip"
//             },
//             {
//                 "name": "Connection",
//                 "value": "keep-alive"
//             }
//         ],
//         "content": {
//             "size": 321,
//             "compression": 96,
//             "mimeType": "text/plain;charset=UTF-8",
//             "text": "{\"code\":200,\"notice\":0,\"follow\":0,\"forward\":0,\"msg\":0,\"comment\":0,\"pushMsg\":null,\"friend\":{\"snsCount\":0,\"count\":0,\"celebrityCount\":0},\"lastPrivateMsg\":null,\"event\":2,\"newProgramCount\":2,\"createDJRadioCount\":0,\"newTheme\":false,\"battle\":{\"showQuizIcon\":false,\"startTime\":0,\"endTime\":0,\"nonStartIcon\":null,\"startIcon\":null}}"
//         },
//         "redirectURL": null,
//         "headersSize": 0,
//         "bodySize": 225
//     },
//     "serverIPAddress": "59.111.160.195",
//     "cache": {},
//     "timings": {
//         "dns": 35,
//         "connect": 253,
//         "ssl": 152,
//         "send": 1,
//         "wait": 119,
//         "receive": 1
//     }
// }
