function ajax(conf) {

    var url = conf.url;
    var data = conf.data;
    var success = conf.success;
    var type = conf.type ? conf.type.toLowerCase() : 'get';
    var dataType = conf['dataType'] ? conf['dataType'].toLowerCase() : 'json';

    var params = [];
    for(var name in data) {
        params.push(encodeURIComponent(name) + "=" + encodeURIComponent(conf.data[name]));
    }
    data = params.join( "&" );

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200 && success) {
            if (dataType === "text") {
                success(xhr.responseText);
            } else if (dataType === "xml") {
                success(xhr.responseXML);
            } else if (dataType === "json") {
                success(JSON.parse(xhr.responseText));
            }
        }
    };

    if (type === 'get') {
        xhr.open(type, url + '?' + data, true);
        xhr.send(null);
    } else if (type === "post") {
        xhr.open(type, url, true);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
}