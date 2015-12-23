# UrlQuery
**UrlQuery** 是一个获取 URL 请求信息的 javascript 类。
它会把 URL 中的请求字符串转换为 javascript 对象，URL 中的每一个字段都会对应到 UrlQuery 类的属性信息中。

# API
**UrlQuery** 类的信息如下：
```
{
    field1:value,
    field2:value,
    ...,
    toArray:function(){}
}
```

**UrlQuery.toArray**

toArray 方法返回的信息如下：
```
[['key','value'],['key','value'],...]
```

# 案例：
输入信息:
```
//loacalhost/?action=view&articleid=999
<script src="url-query.min.js"></script>
```
代码:
```
console.log(UrlQuery);
console.log(UrlQuery.toArray());
```
输出信息:
```
Object {action: "view", articleid: "999"}
[['action','view'],['articleid','999']]
```
# 授权协议 / LICENSE
The MIT License (MIT) Copyright (c) 2015 Leon kao