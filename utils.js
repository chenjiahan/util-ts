/**
 * Array
 */
import duplicate from './array/duplicate';
import isArray from './array/isArray';

/**
 * DOM
 */
import addEventListener from './dom/addEventListener';
import getUrlParam from './dom/getUrlParam';
import parseHTML from './dom/parseHTML';
import scrollTo from './dom/scrollTo';
import calcFontSize from './dom/calcFontSize';

/**
 * Utility
 */
import classNames from './utility/classNames';
import timestamp from './utility/timestamp';
import userAgent from './utility/userAgent';

/**
 * HTTP
 */
import ajax from './http/ajax';


export default {
    duplicate, isArray,
    addEventListener, getUrlParam, parseHTML, scrollTo, calcFontSize,
    classNames, timestamp, userAgent,
    ajax
};