function solution(n) {
    // n의 수만큼 수박수박 나열하기
  let answer = '';

  for (let i = 0; i < n; i++) {
    answer += i % 2 === 0 ? '수' : '박';
  }

  return answer;
}