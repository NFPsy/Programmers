function solution(n, m) {
    // 유클리드 호제법 이용
    // 최대 공약수(GCD)
    // b가 0이 될때까지 이 유클리드 호제법을 실행한다.
    function gcd(a, b) {
        while (b !== 0) {
            // 나머지 계산
            let r = a % b;
            a = b; // a를 b로
            b = r;  // b를 나머지로
        }
        return a;
    }

    // 최소 공배수(LCM)
    // 두 수를 곱해서 최대공약수로 나눈다.
    const lcm = (n * m) / gcd(n, m); // GCD 이용

    // GCD와 LCM 배열로
    return [gcd(n, m), lcm];
}
