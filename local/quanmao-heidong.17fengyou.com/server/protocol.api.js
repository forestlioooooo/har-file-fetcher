
var client = window.client;
XHRMock.post(
    "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=6a6db26bab5a457db6c595341b94e63dKV4",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 02:55:49 GMT').header('server', 'Apache-Coyote/1.1').header('access-control-allow-origin', '*').header('access-control-allow-headers', 'Origin,X-Requested-With,Content-Type,Accept').header('access-control-allow-methods', 'GET,PUT,DELETE,POST');
        resp = resp.body('{"code":1,"rspList":[{"className":"RspLoginGame","resultMsg":"success","serverTime":1547693749085},{"adPrizeTimes":3,"bannerTime":5,"billDoubleTimes":0,"className":"RspRoleInfo","coin":1000,"effectId":310001,"eggFoodSign":0,"gjEggTimes":0,"gold":15,"isAgshapon":true,"isCanBillDoubleTv":true,"isFirstLoginToday":true,"isJcyx":false,"isMoreGame":true,"isOnlineCDReduce":false,"isOpenCC":0,"isQmrw":false,"isShopGuide":true,"isSupply":true,"itemBag":[{"amount":15,"id":2,"type":1},{"amount":1000,"id":1,"type":1},{"amount":2,"id":300005,"type":1}],"largerTimes":0,"maxScore":1777,"medal":10,"name":"玩家290082","onlinePrizeTime":0,"ownSkins":[300001,310001],"ptEggTimes":0,"resultShareCd":0,"scoreLv":1,"shareLifeCd":5,"simulateShareFg":"1#2000#4000","skinId":300001,"speedLv":1,"taskDoubleTimes":0,"tryReliveFlag":true,"turnFreeTimes":1,"turnTvTimes":5,"turnshareTimes":3,"userId":290082,"versFlag":20,"zp_flag":true},{"className":"RspSevenDayList","drawList":[true,false,false,false,false,false,false],"times":2}]}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T10:55:49.087+08:00",
//     "time": 67,
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
//                 "value": "194"
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
//                     "name": "{\"className\":\"ReqLoginGame\",\"serverId\":1,\"tokenId\":\"6a6db26bab5a457db6c595341b94e63dKV4\",\"spuid\":\"oFJji5JjwbOZKzJWxEVK018LdQb4\",\"spSessionId\":\"\",\"os\":\"ios\",\"shareParams\":\"\",\"channelId\":\"fkw001\"}",
//                     "value": ""
//                 }
//             ]
//         },
//         "headersSize": 61,
//         "bodySize": 194
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
//                 "value": "Thu, 17 Jan 2019 02:55:49 GMT"
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
//             "size": 1016,
//             "mimeType": null,
//             "text": "eyJjb2RlIjoxLCJyc3BMaXN0IjpbeyJjbGFzc05hbWUiOiJSc3BMb2dpbkdhbWUiLCJyZXN1bHRNc2ciOiJzdWNjZXNzIiwic2VydmVyVGltZSI6MTU0NzY5Mzc0OTA4NX0seyJhZFByaXplVGltZXMiOjMsImJhbm5lclRpbWUiOjUsImJpbGxEb3VibGVUaW1lcyI6MCwiY2xhc3NOYW1lIjoiUnNwUm9sZUluZm8iLCJjb2luIjoxMDAwLCJlZmZlY3RJZCI6MzEwMDAxLCJlZ2dGb29kU2lnbiI6MCwiZ2pFZ2dUaW1lcyI6MCwiZ29sZCI6MTUsImlzQWdzaGFwb24iOnRydWUsImlzQ2FuQmlsbERvdWJsZVR2Ijp0cnVlLCJpc0ZpcnN0TG9naW5Ub2RheSI6dHJ1ZSwiaXNKY3l4IjpmYWxzZSwiaXNNb3JlR2FtZSI6dHJ1ZSwiaXNPbmxpbmVDRFJlZHVjZSI6ZmFsc2UsImlzT3BlbkNDIjowLCJpc1FtcnciOmZhbHNlLCJpc1Nob3BHdWlkZSI6dHJ1ZSwiaXNTdXBwbHkiOnRydWUsIml0ZW1CYWciOlt7ImFtb3VudCI6MTUsImlkIjoyLCJ0eXBlIjoxfSx7ImFtb3VudCI6MTAwMCwiaWQiOjEsInR5cGUiOjF9LHsiYW1vdW50IjoyLCJpZCI6MzAwMDA1LCJ0eXBlIjoxfV0sImxhcmdlclRpbWVzIjowLCJtYXhTY29yZSI6MTc3NywibWVkYWwiOjEwLCJuYW1lIjoi546p5a62MjkwMDgyIiwib25saW5lUHJpemVUaW1lIjowLCJvd25Ta2lucyI6WzMwMDAwMSwzMTAwMDFdLCJwdEVnZ1RpbWVzIjowLCJyZXN1bHRTaGFyZUNkIjowLCJzY29yZUx2IjoxLCJzaGFyZUxpZmVDZCI6NSwic2ltdWxhdGVTaGFyZUZnIjoiMSMyMDAwIzQwMDAiLCJza2luSWQiOjMwMDAwMSwic3BlZWRMdiI6MSwidGFza0RvdWJsZVRpbWVzIjowLCJ0cnlSZWxpdmVGbGFnIjp0cnVlLCJ0dXJuRnJlZVRpbWVzIjoxLCJ0dXJuVHZUaW1lcyI6NSwidHVybnNoYXJlVGltZXMiOjMsInVzZXJJZCI6MjkwMDgyLCJ2ZXJzRmxhZyI6MjAsInpwX2ZsYWciOnRydWV9LHsiY2xhc3NOYW1lIjoiUnNwU2V2ZW5EYXlMaXN0IiwiZHJhd0xpc3QiOlt0cnVlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlXSwidGltZXMiOjJ9XX0=",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 163,
//         "bodySize": 1016
//     },
//     "serverIPAddress": "118.25.165.32",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 0,
//         "wait": 66,
//         "receive": 1
//     }
// }
