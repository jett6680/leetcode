function sort(arr) {
    let selectIndex = 0
    for(let i = 0; i< arr.length -1 ; i++) {
        selectIndex = i
        for(let j = i + 1; j< arr.length; j++) {
            if(arr[j] < arr[selectIndex]) {
                selectIndex = j
            }
        }
        const [a, b] = [ arr[i], arr[selectIndex]]
        arr[i] = b
        arr[selectIndex] = a
    }
    console.log('排序后: %j', arr)
}
const data = [14, 12, 1, 67, 98, 22, 22, 23, 4]
console.log('排序前: %j', data)
sort(data)
