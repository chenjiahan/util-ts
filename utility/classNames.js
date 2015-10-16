/**
 * Github: https://github.com/JedWatson/classnames
 * 合并类名
 */
export default function classNames() {
    let classes = '';

    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        if (!arg) continue;

        let argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
            classes += ' ' + arg;
        } else if (Array.isArray(arg)) {
            classes += ' ' + classNames.apply(null, arg);
        } else if (argType === 'object') {
            for (let key in arg) {
                if ({}.hasOwnProperty.call(arg, key) && arg[key]) {
                    classes += ' ' + key;
                }
            }
        }
    }

    return classes.substr(1);
}