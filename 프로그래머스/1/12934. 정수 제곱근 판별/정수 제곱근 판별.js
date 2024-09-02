function solution(n) {
    for (x = 1; x <= n; x++){
        if (n == x**2){
            return (x+1)**2;
        }
    }
    return -1;
}