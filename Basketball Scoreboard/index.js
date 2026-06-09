function updateScore(scoreId, points) {
    const scoreElement = document.getElementById(scoreId);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + points;
}

function resetScores() {
    document.getElementById('home-score').textContent = '0';
    document.getElementById('guest-score').textContent = '0';
}