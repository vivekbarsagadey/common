/**
 * Created by vivek_000 on 11/01/2017.
 */


const EMPTY  = "";
class StringUtil {


    constructor(){

        //console.log("StringConstant" , StringConstant);

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
    }
    /**
     * this function for checking value isString
     * @param {String} value
     * @returns {boolean}
     */
    static isStringType(value) {
        return (typeof value === 'string' || value instanceof String);
    }


    /**
     * this function for checking null and empty value
     * @param {String} value
     * @returns {boolean}
     */
    static isNotBlank(value) {
        console.log(EMPTY);
        let result  = false;
        if(value){
            result = StringUtil.isStringType(value) && value.trim() !== EMPTY;
        }else{
            result = false;
        }
        return result;
        /*return (value && (StringUtil.isStringType(value) && value.trim() !== ""));*/
    }

    /**
     * @param {String} value
     * @returns {boolean}
     */
    static isBlank(value) {
        return !StringUtil.isNotBlank(value);
    }

    /**
     *
     * @param value
     * @returns {*}
     */
    static stringToLowerCase(value) {
        let result = value;
        if (isNotBlank(value)) {
            result = value.toLowerCase();
        }
        return result;
    }


    /**
     *
     * @param {String} value
     * @param {Any} {defaultValue}
     * @returns {String}
     */
    static getValue(value, defaultValue) {
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
    }


    /**
     * this function for count Upper Case Chars in string
     * @param {string} str
     * @returns {count}
     */
    static countUpperCaseChars(str) {
        if (StringUtil.isNotBlank(str)) {
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (/[A-Z]/.test(str.charAt(i))) count++;
            }
            return count;
        }
        else {
            return 0;
        }
    }


    /**
     *
     * @param {string} str
     * @returns {string}
     */
    static camelize(str) {
        if (StringUtil.isNotBlank(str)) {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
                return index === 0 ? letter.toUpperCase() : letter.toLowerCase();
            }).replace(/\s+/g, '');
        } else {

            return str;
        }
    }


}

new StringUtil();