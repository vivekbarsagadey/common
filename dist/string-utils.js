/**
 * Created by vivek_000 on 11/01/2017.
 */

var StringUtil = (function(){"use strict";var PRS$0 = (function(o,t){o["__proto__"]={"a":t};return o["a"]===t})({},{});var DP$0 = Object.defineProperty;var GOPD$0 = Object.getOwnPropertyDescriptor;var MIXIN$0 = function(t,s){for(var p in s){if(s.hasOwnProperty(p)){DP$0(t,p,GOPD$0(s,p));}}return t};var static$0={};

    function StringUtil(){
        if (typeof String.prototype.startsWith !== 'function') {
            String.prototype.startsWith = function (str){
                return this.indexOf(str) === 0;
            };
        }

        if (typeof String.prototype.isExists !== 'function') {
            String.prototype.isExists = function (str){
                return this.search(str) >= 0;
            };
        }

        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            };
        }
    }DP$0(StringUtil,"prototype",{"configurable":false,"enumerable":false,"writable":false});
    /**
     * this function for checking value isString
     * @param {String} value
     * @returns {boolean}
     */
    static$0.isStringType = function(value) {
        return (typeof value === 'string' || value instanceof String);
    };


    /**
     * this function for checking null and empty value
     * @param {String} value
     * @returns {boolean}
     */
    static$0.isNotBlank = function(value) {
        var result  = false;
        if(value){
            result = StringUtil.isStringType(value) && value.trim() !== "";
        }else{
            result = false;
        }
        return result;
        /*return (value && (StringUtil.isStringType(value) && value.trim() !== ""));*/
    };

    /**
     * @param {String} value
     * @returns {boolean}
     */
    static$0.isBlank = function(value) {
        return !StringUtil.isNotBlank(value);
    };

    /**
     *
     * @param value
     * @returns {*}
     */
    static$0.stringToLowerCase = function(value) {
        var result = value;
        if (isNotBlank(value)) {
            result = value.toLowerCase();
        }
        return result;
    };


    /**
     *
     * @param {String} value
     * @param {Any} {defaultValue}
     * @returns {String}
     */
    static$0.getValue = function(value, defaultValue) {
        if (StringUtil.isNotBlank(value)) {
            value = value.trim();
        } else if (value) {
            value = value;
        } else {
            if (defaultValue) {
                value = defaultValue;
            } else {
                value = "";
            }
        }
        return value;
    };


    /**
     * this function for count Upper Case Chars in string
     * @param {string} str
     * @returns {count}
     */
    static$0.countUpperCaseChars = function(str) {
        if (StringUtil.isNotBlank(str)) {
            var count = 0;
            for (var i = 0; i < str.length; i++) {
                if (/[A-Z]/.test(str.charAt(i))) count++;
            }
            return count;
        }
        else {
            return 0;
        }
    };


    /**
     *
     * @param {string} str
     * @returns {string}
     */
    static$0.camelize = function(str) {
        if (StringUtil.isNotBlank(str)) {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
                return index === 0 ? letter.toUpperCase() : letter.toLowerCase();
            }).replace(/\s+/g, '');
        } else {

            return str;
        }
    };


MIXIN$0(StringUtil,static$0);static$0=void 0;return StringUtil;})();

new StringUtil();