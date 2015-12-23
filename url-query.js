+function(global){
    var _urlquery =  window.location.search.substring(1),
        _arr = new Array(),
        _return = {},
        _;
    if(_urlquery.length>0){
        _arr = _urlquery.split('&');
        for(var i =0; i<_arr.length; i++){
            _ = _arr[i].split("=");
            _return[_[0]]=_[1];
        }
        global.UrlQuery = _return;
    }
    else
    {
        global.UrlQuery = null;
    }
}(this);