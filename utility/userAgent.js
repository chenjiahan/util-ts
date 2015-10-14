/**
 * 检测userAgent
 */
export default {
    isMobile: function(ua) {
        var regExp = (/(mobile|iphone|ipod|ipad|ios|android|windows phone)/i);
        return regExp.test(ua || navigator.userAgent);
    },
    isAndroid: function(ua) {
        var regExp = (/android/i);
        return regExp.test(ua || navigator.userAgent);
    },
    isWeixin: function(ua) {
        var regExp =(/MicroMessenger/i);
        return regExp.test(ua || navigator.userAgent);
    }
}