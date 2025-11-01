function binary_search(arr, n) {
    let lo = 0;
    let hi = arr.length - 1;
    let steps = 0;

    while (lo < hi) {
        steps += 1;
        let mid = Math.floor((lo + hi) / 2);
        if (arr[mid] === n) {
            return steps;
        } else if (arr[mid] < n) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return -1;
}
const a = [1,2,3,4,5]
const b = [1,2,3,4,5,6,7,8,9,10]
const c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const d = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 31,32,33,34,35,36,37,38,39,40]

console.log(binary_search(a, 3))
console.log(binary_search(b, 3))
console.log(binary_search(c, 3))
console.log(binary_search(d, 3))
