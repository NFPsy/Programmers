function solution(phone_number) {
    // 마지막 4자리는 남아야하니깐 for 문이 돌아가는 횟수는 length-4
    // 돌아가는동안 문자를 * 로 대신 입력
    for(let i = 0; i < phone_number.length -4; i++){
        phone_number = phone_number.replace(phone_number[i],'*')
    }
    return phone_number;
}