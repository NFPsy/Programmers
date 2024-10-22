function solution(sizes)
{
    // wid(최대 가로) x hei(최대 세로) = 지갑의 크기
    // reduce 메서드를 사용하여 모든 명함의 최대 가로 및 세로 길이를 동시에 계산
    // Math.max 와 Math.min 사용
    [wid, hei] = sizes.reduce(([h, v],[a, b])=> [Math.max(h, Math.max(a,b)), Math.max(v, Math.min(a,b))],[0,0])
    return wid * hei;
}