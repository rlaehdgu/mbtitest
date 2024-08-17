document.getElementById('mbtiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작 방지

    const answers = [];
    for (let i = 1; i <= 16; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            answers.push(answer.value);
        }
    }

    // 성격 유형 계산
    const personalityCounts = {
        'E': 0,
        'I': 0,
        'S': 0,
        'N': 0,
        'T': 0,
        'F': 0,
        'J': 0,
        'P': 0
    };

    answers.forEach((answer, index) => {
        if (index < 8) { // E/I 질문
            personalityCounts[answer] += 1;
        } else { // S/N, T/F, J/P 질문
            if (index % 2 === 0) {
                personalityCounts[answer] += 1;
            } else {
                personalityCounts[answer === 'S' ? 'N' : answer] += 1;
            }
        }
    });

    // MBTI 결과 생성
    const mbtiResult = 
        (personalityCounts['E'] > personalityCounts['I'] ? 'E' : 'I') +
        (personalityCounts['S'] > personalityCounts['N'] ? 'S' : 'N') +
        (personalityCounts['T'] > personalityCounts['F'] ? 'T' : 'F') +
        (personalityCounts['J'] > personalityCounts['P'] ? 'J' : 'P');

    // 결과 출력
    alert(`당신의 MBTI 성격 유형은: ${mbtiResult}`);
});
