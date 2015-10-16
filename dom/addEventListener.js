/**
 * addEventListener
 * @returns {{remove: Function}}  用于移除监听器
 */
export default function addEventListener(target, eventType, callback) {
    if (target.addEventListener) {
        target.addEventListener(eventType, callback, false);
        return {
            remove: () => {
                target.removeEventListener(eventType, callback, false);
            }
        };
    } else if (target.attachEvent) {
        target.attachEvent('on' + eventType, callback);
        return {
            remove: () => {
                target.detachEvent('on' + eventType, callback);
            }
        };
    }
}