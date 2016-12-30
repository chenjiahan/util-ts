/**
 * 读取 cookie
 * 
 * ### Example
 * ```
 * const uuid = getCookie('uuid');
 * const token = getCookie('token');
 * ```
 */

import { decode } from './decode';

export function getCookie(name: string): string {
    const arr = document.cookie.split('; ');
    for (let i = 0, l = arr.length; i < l; i++) {
        const item = arr[i].split('=');
        if (item.shift() === name) {
            return decode(item.join('='));
        }
    }
    return '';
}
