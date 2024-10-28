function solution(n) {
    // n을 3진법 문자열로 바꾸고 []로 배열로 바꾼다.
    // reverse, join을 이용해 앞뒤로 뒤짚어서 배열을 문자열로 다시 표현
    // parseInt(..., 3) 로 3진수를 10진수로 바꿔서 return한다.
    return parseInt([...n.toString(3)].reverse().join(""),3);
}