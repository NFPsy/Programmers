function solution(n) {
    // 문자열 변환 > 한글자씩 배열로 변환 > 배열 뒤집기 > 숫자로 변환
    let arr = String(n).split("").reverse().map((data) => Number(data));
    return arr;
}