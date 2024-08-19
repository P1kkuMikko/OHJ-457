document.addEventListener('DOMContentLoaded', () => {
    let points = 0;
    let pointsPerClick = 1;
    let clickLevel = 1;
    let autoClickLevel = 0;

    const pointsDisplay = document.getElementById('pisteet');
    const pointsPerClickDisplay = document.getElementById('pisteetPerKlikki');
    const clickButton = document.getElementById('klikki');
    const upgradeClickButton = document.getElementById('kehitä');
    const autoClickButton = document.getElementById('autoklikki');
    const clickLevelDisplay = document.getElementById('kehitäTaso');
    const autoClickLevelDisplay = document.getElementById('autoklikkiTaso');

    clickButton.addEventListener('click', () => {
        points += pointsPerClick;
        pointsDisplay.textContent = `Pisteet: ${points}`;
    });

    upgradeClickButton.addEventListener('click', () => {
        if (points >= 25) {
            points -= 25;
            pointsPerClick += 1;
            clickLevel += 1;
            pointsDisplay.textContent = `Pisteet: ${points}`;
            pointsPerClickDisplay.textContent = `Pisteet per klikki: ${pointsPerClick}`;
            clickLevelDisplay.textContent = `Klikin taso: ${clickLevel}`;
        }
    });

    autoClickButton.addEventListener('click', () => {
        if (points >= 50) {
            points -= 50;
            autoClickLevel += 1;
            pointsDisplay.textContent = `Pisteet: ${points}`;
            autoClickLevelDisplay.textContent = `Autoklikin taso: ${autoClickLevel}`;
            setInterval(() => {
                points += autoClickLevel;
                pointsDisplay.textContent = `Pisteet: ${points}`;
            }, 1000);
        }
    });
});