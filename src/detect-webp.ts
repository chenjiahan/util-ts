/**
 * 判断是否支持 webp (异步方法)
 * 
 * ### Example
 * ```
 * detectWebp(result => console.log(result));
 * ```
 */

import { LS } from './local-storage';

let support: boolean;

export function detectWebp(callback: (result: boolean) => void): void {

    if (support === void 0) {
        const local = LS.get('supportWebp');
        support = local === 'true' ? true : local === 'false' ? false : void 0;
    }

    if (support !== void 0) {
        return callback(support);
    }

    const img = new Image();
    img.onload = () => {
        support = img.width > 0 && img.height > 0;
        LS.set('supportWebp', support);
        callback(support);
    };
    img.onerror = () => {
        support = false;
        LS.set('supportWebp', support);
        callback(support);
    };
    img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
}
