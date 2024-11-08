function solution(numbers) {
    let answer = []; // 빈 배열 생성
    
    // 이중 for문을 이용해 첫 위치와 다음 위치 합을 더해 answer 배열에 저장
    // 첫 번째 for문은 배열의 첫 번째 부터 마지막 까지 순회
    for(let i = 0; i < numbers.length; i++){
        // 두 번째 for문은 i의 다음 인덱스부터 배열의 끝까지 순회 (i + 1)
        for(let j = i + 1; j < numbers.length; j++){
            // 두 숫자를 더해 answer 배열에 추가
            answer.push(numbers[i] + numbers[j]);
        }
    }
    // 내장 객체 Set을 이용해 answer 배열에서 중복된 값을 제거 (중복값을 허용하지 않는 Set)
    // ... 스프레드를 이용해 Set을 배열로 변환
    let arr = [...new Set(answer)]
    // arr 배열을 Sort 메서드를 사용해 오름차순으로 정렬후 반환
    return arr.sort((a,b)=> a-b);
}