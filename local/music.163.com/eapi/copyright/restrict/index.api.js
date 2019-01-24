
var client = window.client;
XHRMock.post(
    "https://music.163.com/eapi/copyright/restrict/",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header('Server', 'nginx').header('Date', 'Thu, 17 Jan 2019 03:08:50 GMT').header('Content-Type', 'text/plain;charset=UTF-8').header('Transfer-Encoding', 'chunked').header('Vary', 'Accept-Encoding').header('Cache-Control', 'no-store').header('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT').header('Cache-Control', 'no-cache').header('X-Via', 'MusicServer').header('X-From-Src', '171.15.158.212').header('Content-Encoding', 'gzip').header('Connection', 'keep-alive');
        resp = resp.body('{"restrictedCopyright":[],"code":200}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T11:08:50.188+08:00",
//     "time": 332,
//     "request": {
//         "method": "POST",
//         "url": "https://music.163.com/eapi/copyright/restrict/",
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
//                 "value": "711"
//             }
//         ],
//         "queryString": [],
//         "postData": {
//             "mimeType": "application/x-www-form-urlencoded",
//             "params": [
//                 {
//                     "name": "params",
//                     "value": "A0AE6EDDC4121EC2282CAA37CD489B73AF4E58D50D15919830DAD37F63FF0840BA88E11B1E1C6DF3BE8EFA26177FCB6FEC8E4F0040A8BED119400F58B570BEEB90A2164847B43458FF078EA26A3DF631803911C127601FC2C2A9878876FE92A665217A66AE677BE36F2D6FB203F721CA1592EFDBED2FA4BB612DD34C3BE69C1CB997189A2D14BE23FACD2D81694F87D7568C8C9F82B23A67742C878C9B006DF0E9C9D5B50F45A7F1FA7F6A3CE08BCE3B922F6E72ECE5576BF6858374DE214380D4478C88E5D677655EB06A3A9D92D5637838F4672AE2407B0C96D4CC030D026054C3F27003D462B0C8F82AAA12D8EB1BA7AD438180878B7919F87F62CDC5B80C661778C8CA00415A258A4763158349642E5E4F2983FE74A04E3331EFFC113B3A82D585B02135C6C0B45683C7A87D7EDE553190460A6AC0B5CD5893F0F3D6B3BC8B2C98BFC038F5DEB53C7BBECE47A465F038789C1C431866F1345FE926886BBF"
//                 }
//             ]
//         },
//         "headersSize": 790,
//         "bodySize": 711
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
//                 "value": "Thu, 17 Jan 2019 03:08:50 GMT"
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
//             "size": 37,
//             "mimeType": "text/plain;charset=UTF-8",
//             "text": "{\"restrictedCopyright\":[],\"code\":200}"
//         },
//         "redirectURL": null,
//         "headersSize": 0,
//         "bodySize": 77
//     },
//     "serverIPAddress": "59.111.160.195",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": 137,
//         "ssl": 95,
//         "send": 140,
//         "wait": 53,
//         "receive": 2
//     }
// }
