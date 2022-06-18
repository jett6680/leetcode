/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const words = s.split(' ').filter(item => item)
    const len = words.length
    let temp
    for(var i = 0; i < len / 2; i ++) {
        temp = words[len - 1 - i]
        words[len - 1 - i] = words[i]
        words[i] = temp
    }

    return words.join(' ')
};

console.log(reverseWords('  Bob    Loves  Alice   '))