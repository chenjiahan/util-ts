/**
 * 简易ajax
 */
export default function ajax(conf) {
    let {url, data, success, type = 'get', dataType = 'json'} = conf;
    type = type.toLowerCase();
    dataType = dataType.toLowerCase();

    let params = [];
    for(let name in data) {
        params.push(encodeURIComponent(name) + "=" + encodeURIComponent(conf.data[name]));
    }
    data = params.join( "&" );

    let xhr = new XMLHttpRequest();

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