
var client = window.client;
XHRMock.post(
    "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=6a6db26bab5a457db6c595341b94e63dKV4",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 03:06:41 GMT').header('server', 'Apache-Coyote/1.1').header('access-control-allow-origin', '*').header('access-control-allow-headers', 'Origin,X-Requested-With,Content-Type,Accept').header('access-control-allow-methods', 'GET,PUT,DELETE,POST');
        resp = resp.body('{"code":1,"rspList":[{"className":"RspFight","isLarger":true,"list":[{"head":"https://wx.qlogo.cn/mmopen/vi_32/7KavBMiaeqkvYIjpOII8glfI06rDfjoia9OcoTcsGcE8UYibMXLiaOC3aBHXNetVjRVy7PSTsKnZkibGW85QeSVwBoA/132","name":"美儿"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/e19zBYTeR9vCucK7ibw2NmgzNPD9k91AVjslJb4azwPjUxu138fibo0JsWJYj5Px4V7hJibD0LTCQEwG0KicO1UU3g/132","name":"好运伴生"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/eNX8UB9y7EfaHAm8FLh8tPPo8vpYePib2hLiaS66q9lNbCrACPfSL2iau64uLT38GdnTPETZiaRh26Ij8odlez97uw/132","name":"微尘"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/xJZ27RrhJgcgBa6zfDiczlYaICthdbRwnSRECnK3c9a0X5M6pqvjQfUUnia5KsPlJkddNRtiaUyYbwwZja77kVDfA/132","name":"启辰"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/YiaqMuyuROK5icbSIDjfQQIzqCH295FgIrzmRZkScLd5VKFgqJgkiaLrVUet8EiccLM4UicUYUibV2Vew8k0ttjicPf5w/132","name":"嗯啊"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/uJOJYBqNSX9Oia4D8XqwbrXStID5Q5SOpLlibmmvGPzmcA7W3k5lFUticvA5bg7w0eubgbOOl9v0oqficfyiazWsIWQ/132","name":"陈敦祺13158908755"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/rdpX04rcx6E2EVtAlcdEAqMPrE3JHia5gQ8JTtbjmYndKObuRQCS839aXRluMASYibTOfB0wE5MrEFibiaE3RTAOsg/132","name":"傻女人"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIcfvV95RPsWsGloMB6FxDDicVRZiafKYtibqrTbIsXyX6BQcUzUWGrE4diahSMrVC0338iaTP3MWQCa4w/132","name":"浅浅笑 💋"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIHsIuB9icCxQmJZ2EHkPFwN0VicO3vaNhrbABKJyvznGLl4VwaAokBxv9pHpvnGbNX1ycHfndHVvQA/132","name":"风云数卡"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/d7h7IjsfCM7GuJU23C2ZicBbQ6vzPQ1iblAMbf4TRbCsuxoe3mUk8cIb64f0HR61PwUc0VUwTkNxhsQ4xT0sibShQ/132","name":"巴黎没有摩天轮"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/YZVnS7ZtRTsuboKAy74NyvdP5ibXdWtyt0nhAjXtJxYrDYJ5bSPOQVnymhEMFYKO5VtZ5o5QuViaoSjAW8gI9bibA/132","name":"好好学习！"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/9dQBu9yruQLwk1VjibcUowdAPyAicQmChPbwdYiaKJ7WlcuvfZpSOBIJDra7SEvNBuiabDIqGlgZnRmmP8Gdb1E9eg/132","name":"张"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/WhoLIb4HZtsAMec7JSJKUYicMgkjdhdtNQIUq9CS5poum5LxJkznrbNXV9AQWibway3tMxfS6m3UY33aUeW03ia9A/132","name":"A🌻马琴"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/GvkkGphgWFh53whDMHYHnjUveSMYkFegcv48hEmib7FZfBE6icXDOxsDCuyrHhXicibj8ZIeIiaoMqVlDichxftMxK0A/132","name":"云水禅心"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eotaMCDHogj3u5IRibFJdjjAicHYpGdqzOJwia3hZyL30M9o7UkXZGG7NnFRmibY4s6CTTiat1a2dP4jiaw/132","name":"冯森博，"}]},{"className":"RspCommon","rspType":-30,"value":0}]}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T11:06:41.177+08:00",
//     "time": 68,
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
//                     "name": "{\"className\":\"ReqFight\",\"opType\":1,\"id\":7}",
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
//                 "value": "Thu, 17 Jan 2019 03:06:41 GMT"
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
//             "size": 2526,
//             "mimeType": null,
//             "text": "eyJjb2RlIjoxLCJyc3BMaXN0IjpbeyJjbGFzc05hbWUiOiJSc3BGaWdodCIsImlzTGFyZ2VyIjp0cnVlLCJsaXN0IjpbeyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvN0thdkJNaWFlcWt2WUlqcE9JSThnbGZJMDZyRGZqb2lhOU9jb1Rjc0djRThVWWliTVhMaWFPQzNhQkhYTmV0VmpSVnk3UFNUc0tuWmtpYkdXODVRZVNWd0JvQS8xMzIiLCJuYW1lIjoi576O5YS/In0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvZTE5ekJZVGVSOXZDdWNLN2lidzJObWd6TlBEOWs5MUFWanNsSmI0YXp3UGpVeHUxMzhmaWJvMEpzV0pZajVQeDRWN2hKaWJEMExUQ1FFd0cwS2ljTzFVVTNnLzEzMiIsIm5hbWUiOiLlpb3ov5DkvLTnlJ8ifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9lTlg4VUI5eTdFZmFIQW04RkxoOHRQUG84dnBZZVBpYjJoTGlhUzY2cTlsTmJDckFDUGZTTDJpYXU2NHVMVDM4R2RuVFBFVFppYVJoMjZJajhvZGxlejk3dXcvMTMyIiwibmFtZSI6IuW+ruWwmCJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL3hKWjI3UnJoSmdjZ0JhNnpmRGljemxZYUlDdGhkYlJ3blNSRUNuSzNjOWEwWDVNNnBxdmpRZlVVbmlhNUtzUGxKa2RkTlJ0aWFVeVlid3daamE3N2tWRGZBLzEzMiIsIm5hbWUiOiLlkK/ovrAifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9ZaWFxTXV5dVJPSzVpY2JTSURqZlFRSXpxQ0gyOTVGZ0lyem1SWmtTY0xkNVZLRmdxSmdraWFMclZVZXQ4RWljY0xNNFVpY1VZVWliVjJWZXc4azB0dGppY1BmNXcvMTMyIiwibmFtZSI6IuWXr+WViiJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL3VKT0pZQnFOU1g5T2lhNEQ4WHF3YnJYU3RJRDVRNVNPcExsaWJtbXZHUHptY0E3VzNrNWxGVXRpY3ZBNWJnN3cwZXViZ2JPT2w5djBvcWZpY2Z5aWF6V3NJV1EvMTMyIiwibmFtZSI6IumZiOaVpuelujEzMTU4OTA4NzU1In0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvcmRwWDA0cmN4NkUyRVZ0QWxjZEVBcU1QckUzSkhpYTVnUThKVHRiam1ZbmRLT2J1UlFDUzgzOWFYUmx1TUFTWWliVE9mQjB3RTVNckVGaWJpYUUzUlRBT3NnLzEzMiIsIm5hbWUiOiLlgrvlpbPkuroifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUSWNmdlY5NVJQc1dzR2xvTUI2RnhERGljVlJaaWFmS1l0aWJxclRiSXNYeVg2QlFjVXpVV0dyRTRkaWFoU01yVkMwMzM4aWFUUDNNV1FDYTR3LzEzMiIsIm5hbWUiOiLmtYXmtYXnrJEg8J+SiyJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1EwajRUd0dUZlRJSHNJdUI5aWNDeFFtSloyRUhrUEZ3TjBWaWNPM3ZhTmhyYkFCS0p5dnpuR0xsNFZ3YUFva0J4djlwSHB2bkdiTlgxeWNIZm5kSFZ2UUEvMTMyIiwibmFtZSI6IumjjuS6keaVsOWNoSJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL2Q3aDdJanNmQ003R3VKVTIzQzJaaWNCYlE2dnpQUTFpYmxBTWJmNFRSYkNzdXhvZTNtVWs4Y0liNjRmMEhSNjFQd1VjMFZVd1RrTnhoc1E0eFQwc2liU2hRLzEzMiIsIm5hbWUiOiLlt7Tpu47msqHmnInmkanlpKnova4ifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9ZWlZuUzdadFJUc3Vib0tBeTc0Tnl2ZFA1aWJYZFd0eXQwbmhBalh0SnhZckRZSjViU1BPUVZueW1oRU1GWUtPNVZ0WjVvNVF1Vmlhb1NqQVc4Z0k5YmliQS8xMzIiLCJuYW1lIjoi5aW95aW95a2m5Lmg77yBIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvOWRRQnU5eXJ1UUx3azFWamliY1Vvd2RBUHlBaWNRbUNoUGJ3ZFlpYUtKN1dsY3V2ZlpwU09CSUpEcmE3U0V2TkJ1aWFiRElxR2xnWm5SbW1QOEdkYjFFOWVnLzEzMiIsIm5hbWUiOiLlvKAifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9XaG9MSWI0SFp0c0FNZWM3SlNKS1VZaWNNZ2tqZGhkdE5RSVVxOUNTNXBvdW01THhKa3pucmJOWFY5QVFXaWJ3YXkzdE14ZlM2bTNVWTMzYVVlVzAzaWE5QS8xMzIiLCJuYW1lIjoiQfCfjLvpqaznkLQifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9HdmtrR3BoZ1dGaDUzd2hETUhZSG5qVXZlU01Za0ZlZ2N2NDhoRW1pYjdGWmZCRTZpY1hET3hzREN1eXJIaFhpY2liajhaSWVJaWFvTXFWbERpY2h4ZnRNeEswQS8xMzIiLCJuYW1lIjoi5LqR5rC056aF5b+DIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvRFlBSU9ncTgzZW90YU1DREhvZ2ozdTVJUmliRkpkampBaWNIWXBHZHF6T0p3aWEzaFp5TDMwTTlvN1VrWFpHRzdObkZSbWliWTRzNkNUVGlhdDFhMmRQNGppYXcvMTMyIiwibmFtZSI6IuWGr+ajruWNmu+8jCJ9XX0seyJjbGFzc05hbWUiOiJSc3BDb21tb24iLCJyc3BUeXBlIjotMzAsInZhbHVlIjowfV19",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 163,
//         "bodySize": 2526
//     },
//     "serverIPAddress": "118.25.165.32",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 1,
//         "wait": 66,
//         "receive": 1
//     }
// }
