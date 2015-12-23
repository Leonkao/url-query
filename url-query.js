+function(global){
    'use strict';
    var _urlquery =  window.location.search.substring(1),
        _arr = new Array(),
        _return = {},
        _;
    
    /**
     * Translates the object to Array
     * 转换对象为数组
     */
    var _toArray = function(){
        _arr = [];
        for(var i in _return){
            if(i=='toArray') break;
            _arr.push([i,_return[i]]);
        }
        return _arr;
    }
    
    /**
     * 判断 RUL 中是否含有查询信息
     */
    if(_urlquery.length>0){
        _arr = _urlquery.split('&');
        for(var i =0; i<_arr.length; i++){
            _ = _arr[i].split("=");
            _return[_[0]]=_[1];
        }
        _return.__proto__.toArray = _toArray;
        global.UrlQuery = _return;
    }
    else
    {
        // URL 中没有查询信息
        global.UrlQuery = null;
    }
}(this);