/**
 * this function for checking value isString
 * @param {String} value
 * @returns {boolean}
 */
function isStringType(value){
    return (typeof value === 'string' || value instanceof String);
}


/**
 * this function for checking null and empty value
 * @param {String} value
 * @returns {boolean}
 */
function isNotBlank(value){
   return (value && isStringType(value) && value.trim()!=="");
}

/**
 * @param {String} value
 * @returns {boolean}
 */
function isBlank(value){
    return ! isNotBlank(value);
}

/**
 *
 * @param value
 * @returns {*}
 */
function stringToLowerCase(value){
	var result=value;
	if(isNotBlank(value)){
		result=value.toLowerCase();
	}
	return result;
}


/**
 *
 * @param {String} value
 * @param {Any} {defaultValue}
 * @returns {String}
 */
function getValue(value,defaultValue){
    if(isNotBlank(value)){
        value = value.trim();
    }else if(value){
        value = value;
    }else{
        if(defaultValue){
            value = defaultValue;
        }else{
            value="";
        }
    }
    return value;
}



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


/**
 * this function for count Upper Case Chars in string
 * @param {string} str
 * @returns {count}
 */
function countUpperCaseChars(str) {
	if(this.isNotBlank(str)){
		var count=0,len=str.length;
		  for(var i=0;i<len;i++) {
		    if(/[A-Z]/.test(str.charAt(i))) count++;
		  }
		  return count;
	}
	else{
		return 0;
	}
}


/**
 *
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
	if(isNotBlank(str)){
	  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
	    return index === 0 ? letter.toUpperCase() : letter.toLowerCase();
	  }).replace(/\s+/g, '');
	}else{
		
		return str;
	}
}

