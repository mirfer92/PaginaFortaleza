import pathsData from '../assets/data/pageLinks.json';

export function camelize(str: string) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
};

export function capitalize(str: string) {
    return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
};

/**
 * given an array of strings representing url paths from '../assets/data/pageLinks.json' file; gets the current url's path in the browser and remove it from the list if it's found.
 * return - the array of urls where the current Url path was removed.
 */
export function removeCurrentUrlPath() {
    const pathsArray = pathsData;
    const currentUrl = window.location.pathname;
    const index = pathsArray.findIndex(
        (item) => item.url === currentUrl
    );
    if (index > -1) {
        pathsArray.splice(index, 1);
    }
    return pathsArray;
}