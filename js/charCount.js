exports.charCount = function(str) {
    str = str.replaceAll(' ', '');
    let countObj = {};
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] in countObj === false) {
            countObj[str[i]] = 1;
        } else {
            countObj[str[i]] += 1;
        }
    }
    
    objLength = Object.entries(countObj).length;
    for (let i = 0; i < objLength; i++) {
        result[i] = Object.entries(countObj)[i];
    }

    let sortedResult = result.sort((a,b) => {
        return a[1] === b[1] ? a[0].charCodeAt(0) - b[0].charCodeAt(0) : b[1] - a[1]
    })

    return sortedResult
};