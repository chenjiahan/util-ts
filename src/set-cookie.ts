/**
 * 设置 cookie
 * 
 * ### Example
 * ```
 * setCookie('name', 'neverland');
 * ```
 */

export function setCookie(key: string, value: string): void {
    document.cookie = key + '=' + encodeURIComponent(value) + '; ';
}
