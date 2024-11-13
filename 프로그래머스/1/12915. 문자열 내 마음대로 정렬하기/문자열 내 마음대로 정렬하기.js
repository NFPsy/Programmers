function solution(strings, n) {
    let result = []; // 빈 배열 초기화

    // 문자열의 n번째 문자를 앞에 붙인 새로운 배열 구성
    for (let i = 0; i < strings.length; i++) {
        result.push(strings[i][n] + strings[i]);
    }

    // 문자열 정렬
    result.sort();

    // 첫 번째 문자 제거후 최종 배열 구성
    let FinalResult = []; // 빈 배열 초기화
    for (let j = 0; j < result.length; j++) {
        FinalResult.push(result[j].slice(1));
    }

    return FinalResult;
}