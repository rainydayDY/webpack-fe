const decive = {
    isAndroid: /android/i.test(window.navigator.userAgent),
    isIOS: !!(window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)),
    isWeChat: window.navigator.userAgent.toLowerCase().match(/micromessenger/i),
    isBrowser: !window.navigator.userAgent.toLowerCase().match(/mobile/i), // PC端浏览器
    isMacWeChat: window.navigator.userAgent.toLowerCase().match(/macwechat/i),
};

export default decive;