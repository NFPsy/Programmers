function solution(s) {
    // split으로 문자열을 나누고
    // sort로 문자들을 정렬하고
    // reverse로 소문자와 대문자의 위치를 바꾸고
    // join으로 나눠진 문자열을 다시 합친다.
  return s.split("").sort().reverse().join("");
}