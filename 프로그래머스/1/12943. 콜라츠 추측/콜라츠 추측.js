function solution(num) {
    // for문을 돌려 500번까지 돌리게 하고 1이 안되면 -1 을 반환하게한다.
    // 삼항 연산자를 이용해 짝수와 홀수 일때 계산하는것들을 각각 표현한다.
    // 1이 되면 반복한 횟수 i를 리턴한다.
    for (let i = 0; i < 500; i++){
        if (num != 1){
            num = num % 2 == 0 ? num / 2 : num * 3 + 1;
        }else{
            return i;
        }
    }
    return -1;
}