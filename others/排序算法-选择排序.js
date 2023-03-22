function sort(arr) {
    let selectIndex
    let temp
    for(let i = 0; i< arr.length - 1; i++) {
        selectIndex = i
        for(let j = i + 1; j < arr.length; j ++) {
            if(arr[selectIndex] < arr[j] ) {
                selectIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[selectIndex]
        arr[selectIndex] = temp
    }
    console.log('排序后: %j', arr)
}
const data = [14, 12, 1, 67, 98, 22, 22, 23, 4]
console.log('排序前: %j', data)
sort(data)
