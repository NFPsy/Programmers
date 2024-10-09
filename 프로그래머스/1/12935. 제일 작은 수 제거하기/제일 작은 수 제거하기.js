function solution(arr) {
    if (arr.length === 1) return [-1];
    
    let min = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[min]) {
            min = i;
        }
    }
    
    arr.splice(min, 1);
    
    return arr;
}