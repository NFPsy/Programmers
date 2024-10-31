function solution(s) {
    let result = [];
    let arr = s.split(" "); // 공백으로 두기
    
    // 상황에 따른 대문자 소문자 변환 for 문
    for(let i = 0; i<arr.length;i++){
        let str = ""; // 빈 문자열 str 만듬
        // j가 짝수면 문자를 대문자로 바꿔 str에 추가하고 홀수면 소문자로 바꿔 추가한다. (삼항 연산자 사용)
        for(let j = 0; j<arr[i].length;j++){
            j % 2 === 0 ? str += arr[i][j].toUpperCase() : str += arr[i][j].toLowerCase();
        }
        result.push(str); // 변환된 str을 result에 추가
        str = ""; // str을 빈 문자열로 초기화
    }
    return result.join(" "); // 결과를 공백으로 넣어 한 문자열로 만들어서 반환
}