document.addEventListener('DOMContentLoaded', () => {
    const drawBtn = document.getElementById('draw-btn');
    const cardResult = document.getElementById('card-result');
    const cardImage = document.getElementById('card-image');
    const cardName = document.getElementById('card-name');
    const rarity = document.getElementById('rarity');

    const cardPool = {
        "SSR": { name: "SSR" },
        "UR": { name: "UR" },
        "SR": { name: "SR" },
        "R": { name: "R" },
        "N": { name: "N" },
        "◇N": { name: "◇N" },
        "CR": { name: "CR" }
    };

    const drawRates = {
        "SSR": 0.19,
        "UR": 0.1,
        "SR": 0.2,
        "R": 0.2,
        "N": 0.2,
        "◇N": 0.1,
        "CR": 0.01
    };

    function drawCard() {
        const rand = Math.random();
        let cumulative = 0;
        let selectedRarity = "";

        // 根据概率选择卡牌
        for (const rarityType in drawRates) {
            cumulative += drawRates[rarityType];
            if (rand <= cumulative) {
                selectedRarity = rarityType;
                break;
            }
        }

        // 显示结果
        const card = cardPool[selectedRarity];
        cardImage.src = card.image;
        cardName.textContent = card.name;
        rarity.textContent = selectedRarity;
        rarity.className = selectedRarity;  // 给 rarity 添加样式

        // 显示卡牌结果
        cardResult.style.display = "block";
    }

    // 抽卡按钮点击事件
    drawBtn.addEventListener('click', () => {
        drawBtn.disabled = true;
        drawBtn.textContent = "抽卡中...";

        // 延迟模拟抽卡动画
        setTimeout(() => {
            drawCard();
            drawBtn.disabled = false;
            drawBtn.textContent = "再次抽卡";
        }, 2);  // 延迟 2 秒
    });
});