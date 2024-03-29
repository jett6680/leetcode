
function partition(arr, l, r) {
    const value = arr[l]
    let j = l
    for(let i = l + 1; i <= r; i++ ) {
        if(value> arr[i]) {
            [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]]
            j ++
        }
    }
    [arr[l], arr[j]] = [arr[j], arr[l]]
    return j
}

function _sort(arr, l, r) {
    if(l >= r) {
        return
    }
    const p = partition(arr, l, r)
    _sort(arr, l, p - 1)
    _sort(arr, p + 1, r)
}

function sort(arr) {
    _sort(arr, 0, arr.length - 1)
    console.log('排序后: %j', arr)
}

const data = [14, 12, 1, 67, 98, 22, 22, 23, 4]
console.log('排序前: %j', data)
sort(data)
