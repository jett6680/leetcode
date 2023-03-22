/**
 * 1. 解析 URL 中的 queryString，返回一个对象
 *
 * @example
 * {
 *  name: 'coder',
 *  age: '20',
 *  callback: 'https://baidu.com?name=test',
 *  list: [a,b, c],
 *  json: { str: 'abc', num: 123 },
 * }
 */

const testURL = 'https://www.baidu.com?name=coder&age=20&callback=https%3A%2F%2Fbaidu.com%3Fname%3Dtest&list[]=a&list[]=b&list[]=c&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D&illegal=C%9E5%H__a100373__b4';

function parseQueryString(url) {
  const u = new URL(url)
  const result = {}
  u.searchParams.forEach((value, key) => {
    let isArray = false
    let queryKey = key
    if(/\[]$/.test(key)) {
      queryKey = key.replace(/\[]$/, '')
      isArray = true
    }
    if(isArray) {
      if(!result[queryKey]) {
        result[queryKey] = []
      }
      result[queryKey].push(value)
    }else {
      const parsedValue = parseValue(value)
      if(parsedValue) {
        result[queryKey] = parsedValue
      }
    }
  })
  function parseValue(value) {
    try {
      return JSON.parse(value)
    }catch (e) {}
    try {
      return decodeURIComponent(value)
    }catch (e) {
      return ''
    }
  }
  return result
}

console.log(parseQueryString(testURL))
