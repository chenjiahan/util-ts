/**
 * 获取所有 query string
 * 
 * ### Example
 * ```
 * const queryString = getAllQueryString();
 * const { token, entry, version } = queryString;
 * ```
 */

import { decode } from './decode';

export type QueryStrings = {
    [key: string]: string;
};

export function getAllQueryString(): QueryStrings {
    const arr = location.search.substr(1).split('&');
    const result = {};
    for (let i = 0, l = arr.length; i < l; i++) {
        const item = arr[i].split('=');
        const key = item.shift();
        result[key] = decode(item.join('='));
    }
    return <QueryStrings> result;
}
