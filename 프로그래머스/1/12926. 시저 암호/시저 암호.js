function solution(s, n) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳
  let lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let text = s[i]; // 현 문자
    if (text == " ") { // 공백일 때
      answer += " "; // 그대로 추가
      continue; // 다음 문자로
    }
    
    let textChoice = upper.includes(text) ? upper : lower; // 대소문자 여부에 의한 알파벳 배열 선택
    let index = textChoice.indexOf(text) + n; // 현재 문자의 인덱스에 n만큼 이동
    if (index >= textChoice.length) index -= textChoice.length; // 배열을 벗어나면 원래 자리로
    answer += textChoice[index]; // 암호화 문자 추가
  }
  
  return answer; // 암호화 문자열 반환
}