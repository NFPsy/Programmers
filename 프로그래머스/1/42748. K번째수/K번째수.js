// 배열에서 특정 범위를 자르고 정렬한 후 그 중 특정 위치의 값을 추출하는 방식

// array와 commands 두 개의 매개변수를 받는 solution 함수 만들기
function solution(array, commands) {
    
    // 빈 배열 result 초기화 (결과)
    const result = [];
    
    // commands 배열을 순회하는 반복문
    for (let command of commands) {
        
        // 세 개의 수를 변수에 할당 i와 j는 배열의 인덱스 범위, k는 선택할 요소 위치
        const [i, j, k] = command;
        
        // i - 1 부터 j 까지 부분 배열을 잘라내어 cutArray에 저장
        // 오름차순 정렬
        const cutArray = array.slice(i - 1, j).sort((a, b) => a - b);
        
        // cutArray에서 k - 1 번째를 result 배열에 추가
        // 인덱스는 0부터 시작 (k - 1)
        result.push(cutArray[k - 1]);
    }
    // 결과 반환
    return result;
}