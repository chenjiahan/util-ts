/**
 * 判断userAgent
 */
var userAgent = {
    isMobile : (/(mobile|iphone|ipod|ipad|ios|android|windows phone)/i).test(navigator.userAgent),
    isAndroid : (/android/i).test(navigator.userAgent),
    isWeixin : (/MicroMessenger/i).test(navigator.userAgent)
}