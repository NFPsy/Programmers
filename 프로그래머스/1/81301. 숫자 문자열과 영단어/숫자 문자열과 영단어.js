// 문자열을 여러 번 슬라이스하고 각 영단어를 반복해서 검색하는 방식
function solution(s) {
    let answer = ''; // 결과를 저장할 문자열
    // 숫자와 영단어의 매핑을 객체  매핑 : 두 개의 집합 관계를 정의
    const numbers = { // Map 대신 객체를 사용
        'zero': 0, 'one': 1, 'two': 2,
        'three': 3, 'four': 4, 'five': 5,
        'six': 6, 'seven': 7, 'eight': 8,
        'nine': 9,
    };
    
    let currentWord = ''; // 현재 영단어
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        // 숫자일 때
        if (char >= '0' && char <= '9') {
            answer += char; // 숫자를 결과에 추가
        } else { // 문자일때
            currentWord += char; // 슬라이스 대신 영단어를 구성
            // 현재 영단어가 numbers에 존재 유무 확인
            if (currentWord in numbers) {
                answer += numbers[currentWord]; // 숫자를 결과에 추가
                currentWord = ''; // 현재 영단어 초기화
            }
        }
    }
    
    return Number(answer); // 결과를 숫자로 변환하여 반환
}
