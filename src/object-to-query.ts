/**
 * 对象转 query string
 * 
 * ### Example
 * ```
 * const str = ObjectToQuery({
 *     a: 'name',
 *     b: 123,
 *     c: 'a b - c'
 * });
 * ```
 */

export function objectToQuery(obj: Object): string {
    return Object.keys(obj).map(key =>
        key + '=' + encodeURIComponent(obj[key] === void 0 ? '' : obj[key])
    ).join('&');
}
