/**
 * 获取 query string
 * 
 * ### Example
 * ```
 * const token = getQueryString('token');
 * const entry = getQueryString('entry');
 * ```
 */

import { decode } from './decode';

export function getQueryString(name: string): string {
    const arr = location.search.substr(1).split('&');
    for (let i = 0, l = arr.length; i < l; i++) {
        const item = arr[i].split('=');
        if (item.shift() === name) {
            return decode(item.join('='));
        }
    }
    return '';
}
