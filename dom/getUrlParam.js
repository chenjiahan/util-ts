/**
 * 获取地址栏URL参数
 */
export default function getUrlParam(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  //构造正则表达式对象
    const r = decodeURI(window.location.search).substr(1).match(reg);  //匹配目标参数
    return r === null ? '' : r[2];
}