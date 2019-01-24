
var client = window.client;
XHRMock.get(
    "https://cpgc.phonecoolgame.com/material/getMaterials?appid=wx6ffff35bc5a94176",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 02:55:47 GMT').header('content-type', 'application/json; charset=utf-8').header('content-length', '844').header('x-powered-by', 'Express').header('etag', 'W/"34c-aKUcYhas6F9szvGGB8qeQ6OUXRQ"');
        resp = resp.body(JSON.stringify({"ecode":0,"data":{"1":[{"materialID":"102","content":"前所未有的巨大吸力：超级生物Alpha-Ceph降临！","cdnurl":"https://cdn.phonecoolgame.com/wxgame/hezi/back/hddld15.jpg"}],"2":[{"materialID":"119","content":"究极黑洞“星空吞噬者”降临！！！","cdnurl":"https://cdn.phonecoolgame.com/wxgame/hezi/back/fddld10.jpg"},{"materialID":"163","content":"超强引力黑洞带你摆脱宇宙的束缚","cdnurl":"https://cdn.phonecoolgame.com/wxgame/hezi/back/hddld13.jpg"}],"3":[{"materialID":"124","content":"会吸人的飞碟来啦！逃命啊！！！！！","cdnurl":"https://cdn.phonecoolgame.com/wxgame/hezi/back/fddld07.jpg"},{"materialID":"141","content":"超强飞碟竟靠吞噬同类化身最大“风碟”！","cdnurl":"https://cdn.phonecoolgame.com/wxgame/hezi/back/fddld06.jpg"}],"4":[]},"sharePoints":{}}));
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T10:55:47.878+08:00",
//     "time": 255,
//     "request": {
//         "method": "GET",
//         "url": "https://cpgc.phonecoolgame.com/material/getMaterials?appid=wx6ffff35bc5a94176",
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
//                 "value": "/material/getMaterials?appid=wx6ffff35bc5a94176"
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
//             }
//         ],
//         "headersSize": 275,
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
//                 "value": "Thu, 17 Jan 2019 02:55:47 GMT"
//             },
//             {
//                 "name": "content-type",
//                 "value": "application/json; charset=utf-8"
//             },
//             {
//                 "name": "content-length",
//                 "value": "844"
//             },
//             {
//                 "name": "x-powered-by",
//                 "value": "Express"
//             },
//             {
//                 "name": "etag",
//                 "value": "W/\"34c-aKUcYhas6F9szvGGB8qeQ6OUXRQ\""
//             }
//         ],
//         "content": {
//             "size": 844,
//             "mimeType": "application/json; charset=utf-8",
//             "text": "eyJlY29kZSI6MCwiZGF0YSI6eyIxIjpbeyJtYXRlcmlhbElEIjoiMTAyIiwiY29udGVudCI6IuWJjeaJgOacquacieeahOW3qOWkp+WQuOWKm++8mui2hee6p+eUn+eJqUFscGhhLUNlcGjpmY3kuLTvvIEiLCJjZG51cmwiOiJodHRwczovL2Nkbi5waG9uZWNvb2xnYW1lLmNvbS93eGdhbWUvaGV6aS9iYWNrL2hkZGxkMTUuanBnIn1dLCIyIjpbeyJtYXRlcmlhbElEIjoiMTE5IiwiY29udGVudCI6Iueptuaegem7kea0nuKAnOaYn+epuuWQnuWZrOiAheKAnemZjeS4tO+8ge+8ge+8gSIsImNkbnVybCI6Imh0dHBzOi8vY2RuLnBob25lY29vbGdhbWUuY29tL3d4Z2FtZS9oZXppL2JhY2svZmRkbGQxMC5qcGcifSx7Im1hdGVyaWFsSUQiOiIxNjMiLCJjb250ZW50Ijoi6LaF5by65byV5Yqb6buR5rSe5bim5L2g5pGG6ISx5a6H5a6Z55qE5p2f57yaIiwiY2RudXJsIjoiaHR0cHM6Ly9jZG4ucGhvbmVjb29sZ2FtZS5jb20vd3hnYW1lL2hlemkvYmFjay9oZGRsZDEzLmpwZyJ9XSwiMyI6W3sibWF0ZXJpYWxJRCI6IjEyNCIsImNvbnRlbnQiOiLkvJrlkLjkurrnmoTpo57nop/mnaXllabvvIHpgIPlkb3llYrvvIHvvIHvvIHvvIHvvIEiLCJjZG51cmwiOiJodHRwczovL2Nkbi5waG9uZWNvb2xnYW1lLmNvbS93eGdhbWUvaGV6aS9iYWNrL2ZkZGxkMDcuanBnIn0seyJtYXRlcmlhbElEIjoiMTQxIiwiY29udGVudCI6Iui2heW8uumjnuein+ern+mdoOWQnuWZrOWQjOexu+WMlui6q+acgOWkp+KAnOmjjuein+KAne+8gSIsImNkbnVybCI6Imh0dHBzOi8vY2RuLnBob25lY29vbGdhbWUuY29tL3d4Z2FtZS9oZXppL2JhY2svZmRkbGQwNi5qcGcifV0sIjQiOltdfSwic2hhcmVQb2ludHMiOnt9fQ==",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 107,
//         "bodySize": 844
//     },
//     "serverIPAddress": "212.64.116.136",
//     "cache": {},
//     "timings": {
//         "dns": 7,
//         "connect": 188,
//         "ssl": 135,
//         "send": 2,
//         "wait": 55,
//         "receive": 3
//     }
// }
