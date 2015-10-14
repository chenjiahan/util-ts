/**
 * Github: https://github.com/JedWatson/classnames
 * 合并类名
 */
export default function classNames() {
    var classes = '';

    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
            classes += ' ' + arg;
        } else if (Array.isArray(arg)) {
            classes += ' ' + classNames.apply(null, arg);
        } else if (argType === 'object') {
            for (var key in arg) {
                if ({}.hasOwnProperty.call(arg, key) && arg[key]) {
                    classes += ' ' + key;
                }
            }
        }
    }

    return classes.substr(1);
}