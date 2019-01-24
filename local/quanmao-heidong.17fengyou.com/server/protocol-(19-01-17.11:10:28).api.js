
var client = window.client;
XHRMock.post(
    "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=6a6db26bab5a457db6c595341b94e63dKV4",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Thu, 17 Jan 2019 03:10:28 GMT').header('server', 'Apache-Coyote/1.1').header('access-control-allow-origin', '*').header('access-control-allow-headers', 'Origin,X-Requested-With,Content-Type,Accept').header('access-control-allow-methods', 'GET,PUT,DELETE,POST');
        resp = resp.body('{"code":1,"rspList":[{"className":"RspFight","isLarger":false,"list":[{"head":"https://wx.qlogo.cn/mmopen/vi_32/ibsqz8F3iaZzozF10P3eic3l88myYhZbBb3VjQeWWDabqOoIpicIFYCc8SZ7BQegiatbYk0NqiaU0lIoulnkQj0m7pibA/132","name":"快乐每一天"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJ3nP4gx2M441OVrAibZ455YNW8yWtCe2zptLooibPw8RnXxfGcfxAibbC9micNKVeibZ1VQbOoboQXnPQ/132","name":"兴"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/krHZrdnj7jqNzRgf1thDxlNWjicjRJuiakSdQFXhJzKNpVZ6dmP3xKnDk0Fr2FLa03xDLjHNmqia57wkKfSdjhxQg/132","name":"陆任由"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI3ZicXFBH8yvN8ffRl4wfhfe4MOemaN5jgm6rVicPrMJTR0RByv2o9FibTPNCkzPia3TLU87AFDTuolQ/132","name":"小兮兮"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/rFUia6e4StJW37Cibn5LMiazPywQ0FQLhY9Cic9iajkWqgfWhesLTW9ibib2VHlnwIaGYvoicR1rUDibR0UgO66pxwrib5Ag/132","name":"老范"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJqTakClpyjyJlGRhucjJY79jc0BBFMdr70ibBSCqSEkjoEFK82kayGWIApiclGFe2lwOYc6V9GmqYg/132","name":"途"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/IrcPibsgs9q05WMylhOMOha1zHy1gvI6z8V6yCibbEEglgLjdfG35gEl8dYxDWPxOyQb6CsSabicia7bYYPLhSI09w/132","name":"我就是不一样的自己"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/BXyK2cxpS72fqRYHhp3o6r3ibHLZvSUvM3ic2UNYz8xeKgrib6kxInt3KXFrvRCYMrQLAJ3guubibXlk1wOOqoL8Zw/132","name":"老杨"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/rZZypUELqMziaKSHpyhGw5icLeHpy0AWfib3Ib5R86bjnzSzib9rR7gHXLEUOV1PRZia5MCh4sv82GX8qeCa7SQNOibA/132","name":"尧尧"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJcaoMfmV4h7Z1NEia3I0c5FGbDFxhKcZWQicqsNBVVvYssAxibR9H9qDHTsMiaQANsiaaV95hRlQL3bibQ/132","name":"佳岳"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/98icB8RnPBHiaiae6oR0Cf4tFsAZWiarklvlGia0Sm9qx94hvu1V6fgyDTAanPPQqN2T0nflfnIe9sIn7NAwk0RMLgg/132","name":"简单一点"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/VP3qjMYEbtwg2OvJgGOdibicR5uloUd4AVBuicuhs4BmI06pRA2FY3VfbSBRJ9jbpKcVs4icSzRVoUplZJJSxEML9w/132","name":"紫色风铃"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Skau1fgn6h6QXOsicj1NPXc0hwJby349tUIM8Szpf4tic5yx73gq89dStib758k6q75yiaicBiaXYUia3uSyySibibQ6EdQ/132","name":"骑猪彡南夏ζ3"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/bujUfLrLmk9zKzBic0Kjl0pWjJcAH9fpn8vMD3ScFET1OuxUa2SiakAshAk1knJicPAibuhhjoZooffvwgMR8a9DPw/132","name":"摸黑把你吻一吻"},{"head":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIWufPjBQ7O2bCd27mv79t6WZ02f0ic2YVVUPNiaeloCMzSMYtQzbNHNvMjicQWiclgoGooujC10fRlFg/132","name":"米保辉"}]}]}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-17T11:10:28.476+08:00",
//     "time": 110,
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
//                 "value": "43"
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
//                     "name": "{\"className\":\"ReqFight\",\"opType\":1,\"id\":13}",
//                     "value": ""
//                 }
//             ]
//         },
//         "headersSize": 14,
//         "bodySize": 43
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
//                 "value": "Thu, 17 Jan 2019 03:10:28 GMT"
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
//             "size": 2489,
//             "mimeType": null,
//             "text": "eyJjb2RlIjoxLCJyc3BMaXN0IjpbeyJjbGFzc05hbWUiOiJSc3BGaWdodCIsImlzTGFyZ2VyIjpmYWxzZSwibGlzdCI6W3siaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL2lic3F6OEYzaWFaem96RjEwUDNlaWMzbDg4bXlZaFpiQmIzVmpRZVdXRGFicU9vSXBpY0lGWUNjOFNaN0JRZWdpYXRiWWswTnFpYVUwbElvdWxua1FqMG03cGliQS8xMzIiLCJuYW1lIjoi5b+r5LmQ5q+P5LiA5aSpIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUGlhanhTcUJSYUVKM25QNGd4Mk00NDFPVnJBaWJaNDU1WU5XOHlXdENlMnpwdExvb2liUHc4Um5YeGZHY2Z4QWliYkM5bWljTktWZWliWjFWUWJPb2JvUVhuUFEvMTMyIiwibmFtZSI6IuWFtCJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL2tySFpyZG5qN2pxTnpSZ2YxdGhEeGxOV2ppY2pSSnVpYWtTZFFGWGhKektOcFZaNmRtUDN4S25EazBGcjJGTGEwM3hETGpITm1xaWE1N3drS2ZTZGpoeFFnLzEzMiIsIm5hbWUiOiLpmYbku7vnlLEifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9RMGo0VHdHVGZUSTNaaWNYRkJIOHl2TjhmZlJsNHdmaGZlNE1PZW1hTjVqZ202clZpY1ByTUpUUjBSQnl2Mm85RmliVFBOQ2t6UGlhM1RMVTg3QUZEVHVvbFEvMTMyIiwibmFtZSI6IuWwj+WFruWFriJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL3JGVWlhNmU0U3RKVzM3Q2libjVMTWlhelB5d1EwRlFMaFk5Q2ljOWlhamtXcWdmV2hlc0xUVzlpYmliMlZIbG53SWFHWXZvaWNSMXJVRGliUjBVZ082NnB4d3JpYjVBZy8xMzIiLCJuYW1lIjoi6ICB6IyDIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUGlhanhTcUJSYUVKcVRha0NscHlqeUpsR1JodWNqSlk3OWpjMEJCRk1kcjcwaWJCU0NxU0Vram9FRks4MmtheUdXSUFwaWNsR0ZlMmx3T1ljNlY5R21xWWcvMTMyIiwibmFtZSI6IumAlCJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL0lyY1BpYnNnczlxMDVXTXlsaE9NT2hhMXpIeTFndkk2ejhWNnlDaWJiRUVnbGdMamRmRzM1Z0VsOGRZeERXUHhPeVFiNkNzU2FiaWNpYTdiWVlQTGhTSTA5dy8xMzIiLCJuYW1lIjoi5oiR5bCx5piv5LiN5LiA5qC355qE6Ieq5bexIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvQlh5SzJjeHBTNzJmcVJZSGhwM282cjNpYkhMWnZTVXZNM2ljMlVOWXo4eGVLZ3JpYjZreEludDNLWEZydlJDWU1yUUxBSjNndXViaWJYbGsxd09PcW9MOFp3LzEzMiIsIm5hbWUiOiLogIHmnagifSx7ImhlYWQiOiJodHRwczovL3d4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9yWlp5cFVFTHFNemlhS1NIcHloR3c1aWNMZUhweTBBV2ZpYjNJYjVSODZiam56U3ppYjlyUjdnSFhMRVVPVjFQUlppYTVNQ2g0c3Y4MkdYOHFlQ2E3U1FOT2liQS8xMzIiLCJuYW1lIjoi5bCn5bCnIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTBqNFR3R1RmVEpjYW9NZm1WNGg3WjFORWlhM0kwYzVGR2JERnhoS2NaV1FpY3FzTkJWVnZZc3NBeGliUjlIOXFESFRzTWlhUUFOc2lhYVY5NWhSbFFMM2JpYlEvMTMyIiwibmFtZSI6IuS9s+WysyJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyLzk4aWNCOFJuUEJIaWFpYWU2b1IwQ2Y0dEZzQVpXaWFya2x2bEdpYTBTbTlxeDk0aHZ1MVY2Zmd5RFRBYW5QUFFxTjJUMG5mbGZuSWU5c0luN05Bd2swUk1MZ2cvMTMyIiwibmFtZSI6IueugOWNleS4gOeCuSJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL1ZQM3FqTVlFYnR3ZzJPdkpnR09kaWJpY1I1dWxvVWQ0QVZCdWljdWhzNEJtSTA2cFJBMkZZM1ZmYlNCUko5amJwS2NWczRpY1N6UlZvVXBsWkpKU3hFTUw5dy8xMzIiLCJuYW1lIjoi57Sr6Imy6aOO6ZODIn0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvU2thdTFmZ242aDZRWE9zaWNqMU5QWGMwaHdKYnkzNDl0VUlNOFN6cGY0dGljNXl4NzNncTg5ZFN0aWI3NThrNnE3NXlpYWljQmlhWFlVaWEzdVN5eVNpYmliUTZFZFEvMTMyIiwibmFtZSI6IumqkeeMquW9oeWNl+Wkj862MyJ9LHsiaGVhZCI6Imh0dHBzOi8vd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL2J1alVmTHJMbWs5ekt6QmljMEtqbDBwV2pKY0FIOWZwbjh2TUQzU2NGRVQxT3V4VWEyU2lha0FzaEFrMWtuSmljUEFpYnVoaGpvWm9vZmZ2d2dNUjhhOURQdy8xMzIiLCJuYW1lIjoi5pG46buR5oqK5L2g5ZC75LiA5ZC7In0seyJoZWFkIjoiaHR0cHM6Ly93eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTBqNFR3R1RmVElXdWZQakJRN08yYkNkMjdtdjc5dDZXWjAyZjBpYzJZVlZVUE5pYWVsb0NNelNNWXRRemJOSE52TWppY1FXaWNsZ29Hb291akMxMGZSbEZnLzEzMiIsIm5hbWUiOiLnsbPkv53ovokifV19XX0=",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 163,
//         "bodySize": 2489
//     },
//     "serverIPAddress": "118.25.165.32",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 1,
//         "wait": 105,
//         "receive": 4
//     }
// }
