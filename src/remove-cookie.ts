/**
 * 销毁 cookie
 * 
 * ### Example
 * ```
 * setCookie('username', 'neverland');
 * removeCookie('username');
 * ```
 */

export function removeCookie(key: string): void {
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}
