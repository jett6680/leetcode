// 最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) {
        return ''
    }
    if(strs.length === 1) {
        return strs[0]
    }

    var common = strs[0]
    for (var i = 1; i < strs.length; i ++) {
        if(common.length === 0) {
            return ''
        }
        var current = strs[i]
        for(var j = 0; j < common.length; j++) {
            if(current[j] !== common[j]) {
                common = common.substr(0,j)
                break
            }
        }
    }
    return common
};

var strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))