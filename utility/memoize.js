/**
 * Github: https://github.com/addyosmani/memoize.js
 * 缓存计算结果
 */
export default  function memoize(func) {
    var stringifyJson = JSON.stringify;
    var cache = {};

    var cachedfun = function() {
        var hash = stringifyJson(arguments);
        return (hash in cache) ? cache[hash] : cache[hash] = func.apply(this, arguments);
    };

    cachedfun.__cache = (function() {
        cache.remove || (cache.remove = function() {
            var hash = stringifyJson(arguments);
            return (delete cache[hash]);
        });
        return cache;
    }).call(this);

    return cachedfun;
};