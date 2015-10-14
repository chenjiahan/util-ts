/**
 * 时间戳,返回 1970 年 1 月 1 日至今的毫秒数
 */
export default function timestamp() {
    return Date.now() || new Date().getTime();
}