/**
 * 检测userAgent
 */
export default {
    isMobile(ua) {
        const regExp = (/(mobile|iphone|ipod|ipad|ios|android|windows phone)/i);
        return regExp.test(ua || navigator.userAgent);
    },
    isAndroid(ua) {
        const regExp = (/android/i);
        return regExp.test(ua || navigator.userAgent);
    },
    isWeixin(ua) {
        const regExp =(/MicroMessenger/i);
        return regExp.test(ua || navigator.userAgent);
    }
}