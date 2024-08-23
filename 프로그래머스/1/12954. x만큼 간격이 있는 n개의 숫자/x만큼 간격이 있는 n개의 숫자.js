function solution(x, n) {
    // 빈 배열
    let arr = [];
    // 배열 시작 x, 몇번 n번, 반복하면서 x만큼 더해야한다 
    for(i = x; arr.length < n; i+= x){
        // 반복하면서 배열에 넣는다
        arr.push(i);
    }
    return arr;
}