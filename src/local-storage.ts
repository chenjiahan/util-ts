/**
 * localStorage 操作
 * 
 * ### Example
 * ```
 * LS.set('name', 'coder');
 * LS.get('name');
 * LS.remove('name');
 * ```
 */

const ls = window.localStorage;

export const LS = {
    set(key: string, value: any): boolean {
        if (ls) {
            try {
                ls.setItem(key, value);
                return true;
            } catch (e) {
                e.code === 22 && ls.clear();
            }
        }
        return false;
    },

    get(key: string): string {
        return ls ? ls.getItem(key) : void 0;
    },

    remove(key: string): void {
        ls && ls.removeItem(key);
    }
};
