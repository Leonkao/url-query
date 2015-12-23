# UrlQuery
The **_UrlQuery_**  is a url-query-params with javascript.
It will translates the url string to an javascript Object, and name as UrlQuery.

# API
**UrlQuery**

The UrlQuery object likes this:
```
{
    field1:value,
    field2:value,
    ...,
    toArray:function(){}
}
```

**UrlQuery.toArray**

The toArray action result:
```
[['key','value'],['key','value'],...]
```

# Example
Input:
```
//loacalhost/?action=view&articleid=999
<script src="url-query.min.js"></script>
```
Code:
```
console.log(UrlQuery);
console.log(UrlQuery.toArray());
```
Output:
```
Object {action: "view", articleid: "999"}
[['action','view'],['articleid','999']]
```
# LICENSE
The MIT License (MIT) Copyright (c) 2015 Leon kao