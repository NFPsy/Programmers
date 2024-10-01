function solution(numbers) {
    // 1부터 9까지 더해서 배열의 합을 빼기
    // reduce 함수 사용
    // 45는 1~9 합
    // numbers 배열의 합을 구해서 45를 뺀다.
    return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}