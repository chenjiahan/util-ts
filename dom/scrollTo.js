/**
 * 滚动到指定位置
 */
export default function scrollTo(target, time = 200) {

    //若target为元素,则获取其与顶部距离
    if(typeof target.offsetTop === 'number') {
        target = target.offsetTop
    }

    let offset = document.body.scrollTop;             //滚动条位置
    const step = Math.abs(offset - target) * 5 / time ; //滚动步长

    //滚动位置不超过底部
    offset = preventOutOfPage(offset);

    //定时器
    var scroll = window.setInterval(function() {
        if ( target == offset ) {
            window.clearInterval( scroll );
        } else if ( offset - target > step ) {
            offset -= step;
        } else if ( target - offset > step ) {
            offset += step;
        } else {
            offset = target;
        }
        window.scrollTo(0, offset);
    }, 5);
}

function preventOutOfPage(target) {
    var clientHeight = document.documentElement.clientHeight;
    var scrollHeight = document.body.scrollHeight;
    if(target + clientHeight > scrollHeight) {
        return scrollHeight - clientHeight;
    }
    return target;
}