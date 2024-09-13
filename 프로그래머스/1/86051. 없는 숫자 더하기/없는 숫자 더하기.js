function solution(numbers) {
    // 1부터 9까지 더해서 배열의 합을 빼보자
    // reduce 함수 사용
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}