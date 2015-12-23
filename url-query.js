+function(global){
    'use strict';
    var _urlquery =  window.location.search.substring(1),
        _arr = new Array(),
        _return = {},
        _;
    
    var _toArray = function(){
        _arr = [];
        for(var i in _return){
            if(i=='toArray') break;
            _arr.push([i,_return[i]]);
        }
        return _arr;
    }
    
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
        global.UrlQuery = null;
    }
}(this);