/**
 * mock api
 */
const mockApi = (() => {
  let id = 0
  return async (key) => {
    await new Promise((r) => setTimeout(r, 1000))
    return {
      req: key,
      id: id++,
    }
  }
})()
// 待实现
function cacheApi(callback) {
  const map = new Map()

  return (key) => {
    if(map.has(key)) {
      return map.get(key)
    }
    const req = callback(key)
    map.set(key, req)
    setTimeout(() => {
      map.clear()
    }, 1010)
    return req
  }
}
/**
 * 缓存的接口
 */
const cachedApi = cacheApi(mockApi);
(async () => {
  console.log('111',
    await Promise.all([cachedApi('a'), cachedApi('b'), cachedApi('a')])
  )
  // 一秒钟后输出 [ { req: "a", id: 0 }, { req: "b", id: 1 }, { req: "a", id: 0 } ]
  console.log(
    await Promise.all([cachedApi('a'), cachedApi('b'), cachedApi('a')]),
  )
  // 马上输出 [ { req: "a", id: 0 }, { req: "b", id: 1 }, { req: "a", id: 0 } ]
  await new Promise((r) => setTimeout(r, 1000))
  console.log(
    await Promise.all([cachedApi('a'), cachedApi('b'), cachedApi('a')]),
  )
  // 马上输出 [ { req: "a", id: 2 }, { req: "b", id: 3 }, { req: "a", id: 2 } ]
})()
