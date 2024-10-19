function solution(number) {
    let answer = 0;

    function backtrack(start, count, sum) {
        if (count === 3 && sum === 0) {
            answer++;
            return;
        }

        if (count > 3 || start >= number.length) {
            return;
        }

        for (var i = start; i < number.length; i++) {
            var current = number[i];
            backtrack(i + 1, count + 1, sum + current);
        }
    }

    backtrack(0, 0, 0);

    return answer;
}