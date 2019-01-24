
var client = window.client;
XHRMock.post(
    "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=a24506ffa83f4736828fb841400f7ef4E4C",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Mon, 07 Jan 2019 03:47:13 GMT').header('server', 'Apache-Coyote/1.1').header('access-control-allow-origin', '*').header('access-control-allow-headers', 'Origin,X-Requested-With,Content-Type,Accept').header('access-control-allow-methods', 'GET,PUT,DELETE,POST');
        resp = resp.body('{"code":1,"rspList":[{"className":"RspFight","isLarger":false,"list":[{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTId98GLibMtmNvMFX9lMJCQGgmHXjPmJQEYdcJhCJWJldy4gJCRQ5En9Nia6dsBGOPSpwdbiadGlkcQw/132","name":"渊渊"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/WmYqyVkyS0DMRBIS2alJZfnwXs3Gugyy3qUxb69FicMMSM90o5OVp5ejQ0xW9QJVpZ5D9NUviajpqj318WNbefJg/132","name":"为尔商城胡彩霞"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/H1iaoUFcKHYxamT2S6tvZHVTtHGkNfgdiab2oYTtibkTI0auBqSHEWQzbccTsbicq3neaTgKfGZwSx2rKp1nPicog7A/132","name":"   淼  "},{"head":"https://wx.qlogo.cn/mmopen/vi_32/RfXDGzwNudIEH2sk3xjKibQ9DqnNPicGXVqZ2ydH4vvNEB6LeaLusWPmhWauIfyy3lWxyq8h1mf1DlpsJ55XlcPQ/132","name":"东"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/uSUjPmcB9UFo2icPY3TJakk1wR6JoC6oTSakdDaavNoODFibqJsteUAGQXQ5VgqMIlibr0CWl79cj2WV40n8GMlFw/132","name":"杨子萱，学无止境！"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/nAZZxj5LwCPv0sUSSgcalQCZcgmptfpOzsqGtKRKAeD2Xs1TlpSvibKtdYMbf6pZEpmjJF6IE7of4dIKCuYrtXA/132","name":"芬雪曼"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Z3Hxs67YuyyxyPWy27Lo4IApfHtBqqO9W1UwauF8uFm7McOWaHuc0dicen4VtHoZLsIjaRYyO8OAsVGH2IMYHrw/132","name":"A亿万家张霞18317625584"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIibkFYEGldKhA3zHQsn62oOE1M6FcuXDKFz30PaF82ricUibT3T6QT9uCyB6RMXvIzezxcOjXCwZvvQ/132","name":"云"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEL7p1sdM7dQ0f5fUEJPc7dvX9ZibBZVB5gUORa9tHVUHbGhhicK4snt7lSr1CMOqQzGicX2uXCMDnfjQ/132","name":"敏G"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTITBWsJ5rgKk0ALFkCGNcUv0ica0x2iaLIzNORLC6EqBpIia0Fxe2l7OqeByMKvbictv1abC690EBGE2A/132","name":"申喜莲"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKyxbj8vt9pbdmcospvrrcAqH2bJgctuNIUKMHZmvR9OIK47Yee3BHFeo5ibOAEw5FdGvIsFGBVkbA/132","name":"简.爱"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoEWDIUb5Iec1ctwMTibmDy3dmlp3lficWYEn1IscHHCibJanLpTU7PklD0cnc7ZibxRlZwkbAOb87ibcw/132","name":"龍180.2271.8269"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/XCZeFosxgpIEyrZJqsYrZicqdu99CKicWMAvRuHiacWpW4dyXnGEhdicjicQEn1ib1Zd2CVT2SuKn8mCqhXR9v8Biat2w/132","name":"天天快乐"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/qroLPve18jSkLNgiaSVHTX7MvHAWz0Twcye0FlibyG9UZ90LN4hZUQLlBTH8PxZXOmo03iaDNraZ2ufQLcW5jBXfA/132","name":"转身《爱上你》"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/LH99GfeT31iaLqiaS4iaDeJdcvtnlKaxtBcZlmbA4XV7dPCxXqAVEPZOianqoYP2RNKQ6PPG8hsAmBZtTcEfDobuEQ/132","name":"蓉儿"}]}]}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-07T11:47:13.075+08:00",
//     "time": 61,
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
//                 "value": "42"
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
//                     "name": "{\"className\":\"ReqFight\",\"opType\":1,\"id\":1}",
//                     "value": ""
//                 }
//             ]
//         },
//         "headersSize": 11,
//         "bodySize": 42
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
//                 "value": "Mon, 07 Jan 2019 03:47:13 GMT"
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
//             "size": 2490,
//             "mimeType": null,
//             "text": "eyJjb2RlIjoxLCJyc3BMaXN0IjpbeyJjbGFzc05hbWUiOiJSc3BGaWdodCIsImlzTGFyZ2VyIjpmYWxzZSwibGlzdCI6W3siaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1EwajRUd0dUZlRJZDk4R0xpYk10bU52TUZYOWxNSkNRR2dtSFhqUG1KUUVZZGNKaENKV0psZHk0Z0pDUlE1RW45TmlhNmRzQkdPUFNwd2RiaWFkR2xrY1F3LzEzMiIsIm5hbWUiOiLmuIrmuIoifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9XbVlxeVZreVMwRE1SQklTMmFsSlpmbndYczNHdWd5eTNxVXhiNjlGaWNNTVNNOTBvNU9WcDVlalEweFc5UUpWcFo1RDlOVXZpYWpwcWozMThXTmJlZkpnLzEzMiIsIm5hbWUiOiLkuLrlsJTllYbln47og6HlvanpnJ4ifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9IMWlhb1VGY0tIWXhhbVQyUzZ0dlpIVlR0SEdrTmZnZGlhYjJvWVR0aWJrVEkwYXVCcVNIRVdRemJjY1RzYmljcTNuZWFUZ0tmR1p3U3gycktwMW5QaWNvZzdBLzEzMiIsIm5hbWUiOiLugLAg7oCwICDmt7zukYcg7oCwIO6AsCJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1JmWERHendOdWRJRUgyc2szeGpLaWJROURxbk5QaWNHWFZxWjJ5ZEg0dnZORUI2TGVhTHVzV1BtaFdhdUlmeXkzbFd4eXE4aDFtZjFEbHBzSjU1WGxjUFEvMTMyIiwibmFtZSI6IuS4nCJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL3VTVWpQbWNCOVVGbzJpY1BZM1RKYWtrMXdSNkpvQzZvVFNha2REYWF2Tm9PREZpYnFKc3RlVUFHUVhRNVZncU1JbGlicjBDV2w3OWNqMldWNDBuOEdNbEZ3LzEzMiIsIm5hbWUiOiLmnajlrZDokLHvvIzlrabml6DmraLlooPvvIEifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9uQVpaeGo1THdDUHYwc1VTU2djYWxRQ1pjZ21wdGZwT3pzcUd0S1JLQWVEMlhzMVRscFN2aWJLdGRZTWJmNnBaRXBtakpGNklFN29mNGRJS0N1WXJ0WEEvMTMyIiwibmFtZSI6IuiKrOmbquabvCJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1ozSHhzNjdZdXl5eHlQV3kyN0xvNElBcGZIdEJxcU85VzFVd2F1Rjh1Rm03TWNPV2FIdWMwZGljZW40VnRIb1pMc0lqYVJZeU84T0FzVkdIMklNWUhydy8xMzIiLCJuYW1lIjoiQeS6v+S4h+WutuW8oOmcnjE4MzE3NjI1NTg0In0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTBqNFR3R1RmVElpYmtGWUVHbGRLaEEzekhRc242Mm9PRTFNNkZjdVhES0Z6MzBQYUY4MnJpY1VpYlQzVDZRVDl1Q3lCNlJNWHZJemV6eGNPalhDd1p2dlEvMTMyIiwibmFtZSI6IuS6kSJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1BpYWp4U3FCUmFFTDdwMXNkTTdkUTBmNWZVRUpQYzdkdlg5WmliQlpWQjVnVU9SYTl0SFZVSGJHaGhpY0s0c250N2xTcjFDTU9xUXpHaWNYMnVYQ01EbmZqUS8xMzIiLCJuYW1lIjoi5pWPRyJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1EwajRUd0dUZlRJVEJXc0o1cmdLazBBTEZrQ0dOY1V2MGljYTB4MmlhTEl6Tk9STEM2RXFCcElpYTBGeGUybDdPcWVCeU1LdmJpY3R2MWFiQzY5MEVCR0UyQS8xMzIiLCJuYW1lIjoi55Sz5Zac6I6yIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTBqNFR3R1RmVEt5eGJqOHZ0OXBiZG1jb3NwdnJyY0FxSDJiSmdjdHVOSVVLTUhabXZSOU9JSzQ3WWVlM0JIRmVvNWliT0FFdzVGZEd2SXNGR0JWa2JBLzEzMiIsIm5hbWUiOiLnroAu54ixIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZW9FV0RJVWI1SWVjMWN0d01UaWJtRHkzZG1scDNsZmljV1lFbjFJc2NISENpYkphbkxwVFU3UGtsRDBjbmM3WmlieFJsWndrYkFPYjg3aWJjdy8xMzIiLCJuYW1lIjoi6b6NMTgwLjIyNzEuODI2OSJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1hDWmVGb3N4Z3BJRXlyWkpxc1lyWmljcWR1OTlDS2ljV01BdlJ1SGlhY1dwVzRkeVhuR0VoZGljamljUUVuMWliMVpkMkNWVDJTdUtuOG1DcWhYUjl2OEJpYXQydy8xMzIiLCJuYW1lIjoi5aSp5aSp5b+r5LmQIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvcXJvTFB2ZTE4alNrTE5naWFTVkhUWDdNdkhBV3owVHdjeWUwRmxpYnlHOVVaOTBMTjRoWlVRTGxCVEg4UHhaWE9tbzAzaWFETnJhWjJ1ZlFMY1c1akJYZkEvMTMyIiwibmFtZSI6Iui9rOi6q+OAiueIseS4iuS9oOOAiyJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL0xIOTlHZmVUMzFpYUxxaWFTNGlhRGVKZGN2dG5sS2F4dEJjWmxtYkE0WFY3ZFBDeFhxQVZFUFpPaWFucW9ZUDJSTktRNlBQRzhoc0FtQlp0VGNFZkRvYnVFUS8xMzIiLCJuYW1lIjoi6JOJ5YS/In1dfV19",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 163,
//         "bodySize": 2490
//     },
//     "serverIPAddress": "118.25.165.32",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 0,
//         "wait": 51,
//         "receive": 10
//     }
// }
