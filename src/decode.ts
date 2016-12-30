/**
 * 安全 decode
 * 
 * ### Example
 * ```
 * const value = decode('C%9E5%H__a100373__b4');
 * ```
 */

export function decode(value: string): string {
    try {
        return decodeURIComponent(value);
    } catch (e) {
        return void 0;
    }
}
