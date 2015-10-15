/**
 * 判断是否是数组
 */
export default function isArray(arr) {
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }
    return Array.isArray(arr);
}