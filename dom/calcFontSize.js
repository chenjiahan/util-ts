/**
 * 根据屏幕宽度动态计算fontSize
 */
export default function() {
    const docEle = document.documentElement;
    const evt = "onorientationchange" in window ? "orientationchange" : "resize";
    const fn = () => {
        let width = docEle.clientWidth;
        width && (docEle.style.fontSize = 20 * (width / 320) + "px");
    };

    window.addEventListener(evt, fn, false);
    document.addEventListener("DOMContentLoaded", fn, false);
}