import qs from 'qs';

/**
 * 获取Cookie
 * @param key
 * @returns
 */
export const getCookie = (key) => {
    var name = key + '=',
        arr = document.cookie.split(';');
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i].trim();
        if (item.indexOf(name) === 0) {
            return item.substring(name.length, item.length);
        }
    }
    return '';
};

/**
 * 获取根元素大小
 * @returns
 */
export const getHtmlFontSize = () => {
    let fontSize = document.getElementsByTagName('html')[0].style.fontSize.replace('px', '');
    return Number(fontSize);
};

/**
 * 页面跳转
 */
export function goToPage(path, query) {
    let { origin } = window.location;
    window.location.href = `${origin}/${path}.html?${qs.stringify(query)}`;
}
/**
 * 获取链接参数值
 * @param name
 * @returns
 */
export function getUrlParam(queryName) {
    let headQueryArray = decodeURIComponent(window.location.href).split('#'),
        headQuery = headQueryArray.find((item) => item.indexOf('?') !== -1);
    const query = headQuery && headQuery.split('?')[1];
    if (!query) {
        return;
    }
    var vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if (pair[0] === queryName) {
            return pair[1];
        }
    }
    return null;
}
