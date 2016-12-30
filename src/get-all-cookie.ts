/**
 * 获取所有 cookie
 * 
 * ### Example
 * ```
 * const cookies = getAllCookie();
 * const { uuid, token, userid } = cookies;
 * ```
 */

import { decode } from './decode';

export type Cookies = {
    [key: string]: string;
};

export function getAllCookie(): Cookies {
    const cookies = document.cookie.split('; ');
    const result = {};
    for (let i = 0, l = cookies.length; i < l; i++) {
        const item = cookies[i].split('=');
        const key = item.shift();
        result[key] = decode(item.join('='));
    }
    return <Cookies> result;
}
