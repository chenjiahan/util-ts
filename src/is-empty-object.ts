/**
 * 是否为空对象
 * 
 * ### Example
 * ```
 * isEmptyObject({}); // => true
 * isEmptyObject({ a: 1 }) // => false
 * ```
 */

export function isEmptyObject(obj: Object): boolean {
    return Object.keys(obj).length === 0;
}
