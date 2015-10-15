/**
 * 检测userAgent
 */
export default {
    isMobile: function(ua) {
        const regExp = (/(mobile|iphone|ipod|ipad|ios|android|windows phone)/i);
        return regExp.test(ua || navigator.userAgent);
    },
    isAndroid: function(ua) {
        const regExp = (/android/i);
        return regExp.test(ua || navigator.userAgent);
    },
    isWeixin: function(ua) {
        const regExp =(/MicroMessenger/i);
        return regExp.test(ua || navigator.userAgent);
    }
}