import pathsData from '../assets/data/pageLinks.json';
import galleriesData from '../assets/data/galleries.json';

interface GalleryData {
    key: string,
    title: string,
    legend: string,
    url?: string,
    files: string[]
}

export function camelize(str: string) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
};

/**
 * puts on Capital the first letter of each word in a string. i.e. hola mundo! => Hola Mundo!
 * @param str the string to be capitalized
 * @returns the capitalized string
 */
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

export function getGalleryDataByKey(key: string, isExternal = true): GalleryData {
    const type = isExternal ? 'external' : 'static';
    const galleryData = galleriesData[type].find(
        (value) => value.key == key
    );
    if (galleryData) return galleryData;
    throw new Error(`The Gallery ${key} is not available in the page.`);
}