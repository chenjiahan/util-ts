/**
 * addEventListener,兼容IE8
 * @returns {{remove: Function}}  用于移除监听器
 */
function addEventListener(target, eventType, callback) {
    if (target.addEventListener) {
        target.addEventListener(eventType, callback, false);
        return {
            remove: function () {
                target.removeEventListener(eventType, callback, false);
            }
        };
    } else if (target.attachEvent) {
        target.attachEvent('on' + eventType, callback);
        return {
            remove: function () {
                target.detachEvent('on' + eventType, callback);
            }
        };
    }
}