function solution(s) {
    // 짝수
   if(s.length%2!==0){
       return s[Math.floor(s.length/2)]
   } else {  // 홀수
       return s[s.length/2-1] + s[s.length/2]
   }
}