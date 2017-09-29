cloudxns2bind
===================

事件： http://mp.weixin.qq.com/s/yGHn2PFN1XdvYz8xVsWmww

需要 Node 8。

1. `nvm use 8 && yarn`
1. 导出 CloudXNS 记录成 XML 格式。
1. `node index.js <XML文件名>`，如 `node index.js xxx.xml`。

可惜，当然不支持私货啦，比如 LINK, AX, CNAMEX, 301跳转, 302跳转, 隐式跳转。
