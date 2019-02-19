
### har-file-fetcher ###

> 支持普通的文本响应
> 二进制支持(目前并不完备)

还需要完善的工作
> 完备兼容XMLHttpRequest的支持，比如 `Blob` , `Arraybuffer` ... 

> 工具将会在har文件所在位置生成同名文件夹，里面将包含
> 1、`*.harmeta.json` 请求描述文件
> 2、`*.api[.date].js` xhr mock 文件，用来响应请求(相同api的多次请求，将加上时间后缀用于区分)
> 3、`report.txt` 报告文档

```
./cli.js /Users/mofier/site-home/har-file-fetcher/汤姆猫糖果跑酷.har
```

[支持异步的 xhr-mock >>](https://github.com/GENGSHUANGs/xhr-mock)
> XhrMock 用来替换浏览器提供的XMLHttpRequest 对象，将请求直接在本地拦截，并响应
> 配合 `har-file-fetcher` 生成的 `*.api.js` 响应文件使用
> 兼容(包括Facebook H5游戏)和微信小游戏环境

[redis-mock >>](https://github.com/GENGSHUANGs/redis-mock)
> 修改过的Redis接口实现，完全支持浏览器环境

持久化
```javascript
var str = localStorage.getItem('storage');
str && (window.RedisMockInstance.storage = JSON.parse(str));
setInterval(function(){
localStorage.setItem('storage',JSON.stringify(window.RedisMockInstance.storage));
},200);
Promise.promisifyAll(window.RedisMockInstance.RedisClient.prototype);
Promise.promisifyAll(window.RedisMockInstance.Multi.prototype);
var client = window.client = window.RedisMockInstance.createClient();
```
使用
```javascript
client.hsetAsync('player','nickName','Tom').then(console.log).catch(console.error);
```


### 接口本地化方案 ###

`har-file-fetcher`  +  `xhr-mock(请求拦截)`  +  `redis-mock(本地存储)`

> 该方案在无服务端支持的情况下，可以支持FB小游戏和微信小游戏中约 `90%` 的逻辑
> 不支持的部分目前主要集中在“好友助力”等依赖服务端的逻辑上