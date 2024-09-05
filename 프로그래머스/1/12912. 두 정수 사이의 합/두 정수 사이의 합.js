function solution(a, b) {
    // 두 수의 합을 구하는 공식을 이용한다.(큰수 * (큰수+1)) / 2 - ((작은수 - 1) * 작은수) / 2
    // Math 함수를 이용해 대 소를 구한다.
    let small = Math.min(a, b);
    let big = Math.max(a, b);
    
    let sum =  (big * (big + 1)) / 2 - ((small - 1) * small) / 2;
    
    return sum;
}