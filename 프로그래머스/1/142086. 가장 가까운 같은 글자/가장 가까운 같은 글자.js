// 중첩 for문 사용
function solution(s) {
    // 결과 저장 빈 배열 초기화
    let answer = [];
    // 문자열 s 순회
    for (let i = 0; i < s.length; i++) {
        // 같은 문자가 이전에 등장했는지를 확인하기 위한 플래그를 초기화
        let check = false; 
        // i에서 왼쪽으로 이동하면서 이전 문자와 비교
        for (let j = i - 1; j >= 0; j--) {
            // 현재 문자 s[i]와 이전 문자 s[j]가 같으면 차이를 계산해 answer 배열에 저장
            if (s[i] === s[j]) {
                answer.push(i - j);
                // 같은 문자가 있는지 확인
                check = true;
                // 루프 종료
                break; 
            }
        }
        // 같은 문자가 없으면 배열에 -1 추가
        if (!check) {
            answer.push(-1); 
        }
    }
    // 결과 반환
    return answer;
}

// 긴 문자열에 비해 비효율적이다.