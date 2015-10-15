/**
 * 数组去重
 */
export default function (arr) {
    return arr.filter((value, index) => {
        return arr.indexOf(value) === index
    });
}