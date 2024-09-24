function solution(price, money, count) {
    let answer = 0;
    // 순회마다 가격을 더해준다.
    // 이용하는 n번 만큼 그 가격은 n배 만큼 추가된다.
    for(let n = 1; n <= count; n++) {
        answer += price * n;
    }
    
    if(answer > money) { // 소지한돈이 가격보다 적으면
        return answer - money; // 필요한 돈이 얼마인지 리턴
    } else {    // 소지한돈이 가격보다 많으면
        return 0;  // 0리턴
    }
}