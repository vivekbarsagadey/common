

function isNotBlank(value){
    var result = false;
    if(value && value.trim()!=""){
        result = true;
    }
    return result;
}

function isBlank(value){
    return ! isNotBlank(value);
}

function stringToLowerCase(value){
	var result=value;
	if(isNotBlank(value)){
		result=value.toLowerCase()
	}
	return result;
}

function getValue(value,defaultValue){
    if(value){
        value = value.trim();
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


function camelize(str) {
	if(str != null){
	  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
	    return index == 0 ? letter.toUpperCase() : letter.toLowerCase();
	  }).replace(/\s+/g, '');
	}else{
		
		return str;
	}
};

