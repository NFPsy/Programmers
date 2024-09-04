function solution(x) {
    // x 를 문자로 만들고 배열로 만들어 더한 수(정수로 다시 바꿔주기)가
    // 정수 x와 나누어 떨어지면 true 아니면 false 반환
    let sum = 0;
    let harshad = [...String(x)];
    for (let i = 0; i < harshad.length; i++){
        sum += Number(harshad[i]);
    }
    if ( x % sum === 0) {
        return true;
    }
    return false;
    // return x % sum == 0 ? true : false;
}