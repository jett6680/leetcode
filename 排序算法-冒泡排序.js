function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] >= arr[j + 1]) {
                const [a, b] = [arr[j + 1], arr[j]]
                arr[j + 1] = b
                arr[j] = a
            }
        }
    }
    console.log('排序后: %j', arr)
}
const data = [14, 12, 1, 67, 98, 22, 22, 23, 4]
console.log('排序前: %j', data)
sort(data)
