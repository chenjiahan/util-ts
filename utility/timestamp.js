/**
 * 时间戳,返回1970-01-01至今的毫秒数
 */
export default function timestamp() {
    return Date.now() || new Date().getTime();
}