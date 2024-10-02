function solution(left, right) {
    let answer = 0; 
    for(let i = left; i <= right; i++){
        let count = 0; // i의 약수 개수 저장
        
        // j는 1부터 i의 제곱근까지 반복
        for(let j = 1; j <= Math.sqrt(i); j++){   // j가 i의 약수인지 확인하는방법
            if(i % j === 0) { // i가 j로 나누어 떨어지면 그 수는 약수다.
                count++;
                if(i / j != j) count++;
            }
        }
        // 약수의 개수가 짝수면 더하고 홀수면 빼기
        count % 2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}