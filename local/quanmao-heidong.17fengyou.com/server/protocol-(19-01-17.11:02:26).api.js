
var client = window.client;
XHRMock.post(
    "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=6a6db26bab5a457db6c595341b94e63dKV4",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 03:02:26 GMT').header('server', 'Apache-Coyote/1.1').header('access-control-allow-origin', '*').header('access-control-allow-headers', 'Origin,X-Requested-With,Content-Type,Accept').header('access-control-allow-methods', 'GET,PUT,DELETE,POST');
        resp = resp.body('{"code":1,"rspList":[{"className":"RspFight","isLarger":true,"list":[{"head":"https://wx.qlogo.cn/mmopen/vi_32/jY5s7yHmibbXhtIaibTXBZL4AxaBmdkMBhgpUfQxKrYicEsbWH5Pl6yZqK2HudSsIJSBZDK80OM7UWsyhlY8Ls9cQ/132","name":"樱桃🍒"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/ZGwIagWHbWU3b0O7BUhzb98ROJSqEhylnWVAuetzMqtK8Ewu82CickbgRtibsARLg6OZia0B3NiajA5Wtj1sz2SvMg/132","name":"李喜荣"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/HaiaJALO7IMJvSvFOO0cwzTLU7AF13FItTbFicnolCxMR4HtCvGj5ic3TYETBja6B556vMa4hIag2Kq2h3Ua5tgicg/132","name":"娜娜"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJLlom1qibibtX4f4jRZoINXEvDTkKibLma2I9S3qEsLaYvI7qrsE3M4zzp1T16uZvh06WcP7mibaHkUw/132","name":"¥精€彩${de}@世￡界%"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/gzMS93L5HxBIUOmToniaWqlWZRrudZF9PibthxNibfgnoU6zt0EchE2wesyVjk5cicdHNBqWFaq75v3FXyj2EvGmPQ/132","name":"王子涵"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83er80BEk1DESpqFZJHH299icrLnfMDibNjOmSAQIo1Zhh2JQy5NbxnnSaF3vXSgOYkTMibcUXpaxIdK1A/132","name":"快快乐乐"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/kDcfe75DUw4lnBI5wkmzy4ibuLQhDw62yaalwNCa4FNdUR0nyn1HkXe4VBwyZMeVDCjeu0qRGcGKbGbXTOsA9nA/132","name":"太平人寿张美婷"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Ya7Zl2lVYdzx3WgicN5clGWuomvjfpPvicSo1oFZ4FVE3jqPmISq3TVv8aLo9kxVgVB0vVQCUPK1dz2p1swGnd4w/132","name":"谢姨"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/2ajIF4r02Navmx1xFQvDavyecvsuIvDdbKFwLzhLrPZ3N3KQvcRk8wTtMjxPrGLoibvll4jsMVbCmmKPO5fKHpg/132","name":"不老青山"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q02yeejica3Kp3Yv2sQ5icZ4714TT1aF73sZy7RhEoPYuZVTSTSCd2rBulCNgDuI8UCOibuRYPApicyBsJmN8UoibjQ/132","name":"舒大姐"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/6K6WB0ELibOJPHZFU185Voic63u2O8y7DOzSUPu5KWywgswGLcInnz1nImtwTldZfzFylASwfuRSEUehBPUkP6vQ/132","name":"wi"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKfUHxqhtMfS91xeo58gXNH9QJWwNJLuE2ibW7AEquI4c84GxvfDcSUPecO0BZkYUntFautplgHIBw/132","name":"张银萍"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/bIJk7hrdtgTNaWlPGMUq4O1NcchceuJmgeon2SHVzbicAhLRAxby0WTia0JHsgskQIx1qOFdUgzalLhGmMRjtdTw/132","name":"Peri"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJNDDXoKypnshj3MUHWlMZ643Pl5vFPfkryHSmn7cHyrMtkNgZG70vricPMFOibPVZveILiaDTkFeo5w/132","name":"诗语"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIWufPjBQ7O2bCd27mv79t6WZ02f0ic2YVVUPNiaeloCMzSMYtQzbNHNvMjicQWiclgoGooujC10fRlFg/132","name":"米保辉"}]},{"className":"RspCommon","rspType":-30,"value":1}]}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T11:02:26.483+08:00",
//     "time": 216,
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
//                 "value": "42"
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
//                     "name": "{\"className\":\"ReqFight\",\"opType\":1,\"id\":2}",
//                     "value": ""
//                 }
//             ]
//         },
//         "headersSize": 14,
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
//                 "value": "Thu, 17 Jan 2019 03:02:26 GMT"
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
//             "size": 2491,
//             "mimeType": null,
//             "text": "eyJjb2RlIjoxLCJyc3BMaXN0IjpbeyJjbGFzc05hbWUiOiJSc3BGaWdodCIsImlzTGFyZ2VyIjp0cnVlLCJsaXN0IjpbeyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvalk1czd5SG1pYmJYaHRJYWliVFhCWkw0QXhhQm1ka01CaGdwVWZReEtyWWljRXNiV0g1UGw2eVpxSzJIdWRTc0lKU0JaREs4ME9NN1VXc3lobFk4THM5Y1EvMTMyIiwibmFtZSI6Iuaoseahg/CfjZIifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9aR3dJYWdXSGJXVTNiME83QlVoemI5OFJPSlNxRWh5bG5XVkF1ZXR6TXF0SzhFd3U4MkNpY2tiZ1J0aWJzQVJMZzZPWmlhMEIzTmlhakE1V3RqMXN6MlN2TWcvMTMyIiwibmFtZSI6IuadjuWWnOiNoyJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL0hhaWFKQUxPN0lNSnZTdkZPTzBjd3pUTFU3QUYxM0ZJdFRiRmljbm9sQ3hNUjRIdEN2R2o1aWMzVFlFVEJqYTZCNTU2dk1hNGhJYWcyS3EyaDNVYTV0Z2ljZy8xMzIiLCJuYW1lIjoi5aic5aicIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTBqNFR3R1RmVEpMbG9tMXFpYmlidFg0ZjRqUlpvSU5YRXZEVGtLaWJMbWEySTlTM3FFc0xhWXZJN3Fyc0UzTTR6enAxVDE2dVp2aDA2V2NQN21pYmFIa1V3LzEzMiIsIm5hbWUiOiLCpeeyvuKCrOW9qSR7ZGV9QOS4lu+/oeeVjCUifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9nek1TOTNMNUh4QklVT21Ub25pYVdxbFdaUnJ1ZFpGOVBpYnRoeE5pYmZnbm9VNnp0MEVjaEUyd2VzeVZqazVjaWNkSE5CcVdGYXE3NXYzRlh5ajJFdkdtUFEvMTMyIiwibmFtZSI6IueOi+WtkOa2tSJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL0RZQUlPZ3E4M2VyODBCRWsxREVTcHFGWkpISDI5OWljckxuZk1EaWJOak9tU0FRSW8xWmhoMkpReTVOYnhublNhRjN2WFNnT1lrVE1pYmNVWHBheElkSzFBLzEzMiIsIm5hbWUiOiLlv6vlv6vkuZDkuZAifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9rRGNmZTc1RFV3NGxuQkk1d2ttenk0aWJ1TFFoRHc2MnlhYWx3TkNhNEZOZFVSMG55bjFIa1hlNFZCd3laTWVWRENqZXUwcVJHY0dLYkdiWFRPc0E5bkEvMTMyIiwibmFtZSI6IuWkquW5s+S6uuWvv+W8oOe+juWptyJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1lhN1psMmxWWWR6eDNXZ2ljTjVjbEdXdW9tdmpmcFB2aWNTbzFvRlo0RlZFM2pxUG1JU3EzVFZ2OGFMbzlreFZnVkIwdlZRQ1VQSzFkejJwMXN3R25kNHcvMTMyIiwibmFtZSI6IuiwouWnqCJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyLzJhaklGNHIwMk5hdm14MXhGUXZEYXZ5ZWN2c3VJdkRkYktGd0x6aExyUFozTjNLUXZjUms4d1R0TWp4UHJHTG9pYnZsbDRqc01WYkNtbUtQTzVmS0hwZy8xMzIiLCJuYW1lIjoi5LiN6ICB6Z2S5bGxIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTAyeWVlamljYTNLcDNZdjJzUTVpY1o0NzE0VFQxYUY3M3NaeTdSaEVvUFl1WlZUU1RTQ2QyckJ1bENOZ0R1SThVQ09pYnVSWVBBcGljeUJzSm1OOFVvaWJqUS8xMzIiLCJuYW1lIjoi6IiS5aSn5aeQIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvNks2V0IwRUxpYk9KUEhaRlUxODVWb2ljNjN1Mk84eTdET3pTVVB1NUtXeXdnc3dHTGNJbm56MW5JbXR3VGxkWmZ6RnlsQVN3ZnVSU0VVZWhCUFVrUDZ2US8xMzIiLCJuYW1lIjoid2kifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUS2ZVSHhxaHRNZlM5MXhlbzU4Z1hOSDlRSld3TkpMdUUyaWJXN0FFcXVJNGM4NEd4dmZEY1NVUGVjTzBCWmtZVW50RmF1dHBsZ0hJQncvMTMyIiwibmFtZSI6IuW8oOmTtuiQjSJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL2JJSms3aHJkdGdUTmFXbFBHTVVxNE8xTmNjaGNldUptZ2VvbjJTSFZ6YmljQWhMUkF4YnkwV1RpYTBKSHNnc2tRSXgxcU9GZFVnemFsTGhHbU1SanRkVHcvMTMyIiwibmFtZSI6IlBlcmkifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUSk5ERFhvS3lwbnNoajNNVUhXbE1aNjQzUGw1dkZQZmtyeUhTbW43Y0h5ck10a05nWkc3MHZyaWNQTUZPaWJQVlp2ZUlMaWFEVGtGZW81dy8xMzIiLCJuYW1lIjoi6K+X6K+tIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTBqNFR3R1RmVElXdWZQakJRN08yYkNkMjdtdjc5dDZXWjAyZjBpYzJZVlZVUE5pYWVsb0NNelNNWXRRemJOSE52TWppY1FXaWNsZ29Hb291akMxMGZSbEZnLzEzMiIsIm5hbWUiOiLnsbPkv53ovokifV19LHsiY2xhc3NOYW1lIjoiUnNwQ29tbW9uIiwicnNwVHlwZSI6LTMwLCJ2YWx1ZSI6MX1dfQ==",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 163,
//         "bodySize": 2491
//     },
//     "serverIPAddress": "118.25.165.32",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 0,
//         "wait": 214,
//         "receive": 2
//     }
// }
