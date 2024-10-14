function solution(arr1, arr2) {
    let answer = [];
    // i가 0부터 arr1 길이 전까지 순환하고 sum에 입력한다.
    for (let i=0; i < arr1.length; i++) {
        let sum = [];
        // sum에 arr1의 i번째 인덱스의 j번째와
        // arr2의 i번째 인덱스의 j번째를 합한 것을 입력한다.
        for(let j=0; j < arr1[i].length; j++) {
            sum.push(arr1[i][j] + arr2[i][j])
        }
        // sum을 answer에 넣는다.
        answer.push(sum)        
    }
    return answer;
}