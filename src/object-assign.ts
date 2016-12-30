/**
 * 合并对象（浅拷贝）
 * 
 * ### Example
 * ```
 * objectAssign({}, { a: 1, b: 1 }, { b: 2, c: 3 }); // { a: 1, b: 2, c: 3 }
 * ```
 */

const hasOwnProperty = Object.prototype.hasOwnProperty;

function fallback(to: Object, ...args: Object[]): Object {
    args.forEach(from => {
        for (let key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
    });
    return to;
}

export const objectAssign = Object.assign || fallback;
