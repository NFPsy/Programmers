function solution(absolutes, signs) {
    let answer = 0;
    // 두 배열을 비교해 가면서 값을 더하거나 빼줄 것
    for (var i = 0; i < absolutes.length; i++) {
        if (signs[i] === true){
            // 값이 true
            answer = answer + absolutes[i];
        }else if (signs[i] === false) {
            // 값이 false
            answer = answer - absolutes[i];
        }
    }
    return answer;
}