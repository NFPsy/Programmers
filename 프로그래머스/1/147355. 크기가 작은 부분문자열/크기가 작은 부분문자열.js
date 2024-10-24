function solution(t, p) {
    let answer = 0;
    // 0부터 (문자열t 길이 - 문자열p 길이 + 1)전까지 반복
    // 자릿수를 맞추기 위해
    for(i=0;i<t.length - p.length + 1;i++){
        // t를 인덱스 i부터 i+문자열p 길이까지 자른 문자열이 p보다 작으면 answer에 1을 더한다
        t.slice(i,i+p.length) <= p ? answer++ : answer;
    }
    return answer;
}