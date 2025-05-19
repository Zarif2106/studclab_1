
    function filterClubs() {
        const costValue = parseInt(document.getElementById("filter-cost").value);
        const timeValue = parseInt(document.getElementById("filter-time").value);
        const typeValue = parseInt(document.getElementById("filter-type").value);

        const cards = document.querySelectorAll(".club-card");
        cards.forEach(card => {
            const cardCost = card.getAttribute("data-cost") === "free" ? 0 : 1;
            const cardTime = card.getAttribute("data-time");
            const cardType = card.getAttribute("data-type");

            let cardTimeValue;
            switch (cardTime) {
                case "morning": cardTimeValue = 0; break;
                case "day": cardTimeValue = 1; break;
                case "evening": cardTimeValue = 2; break;
                default: cardTimeValue = -1;
            }

            let cardTypeValue;
            switch (cardType) {
                case "sport": cardTypeValue = 0; break;
                case "science": cardTypeValue = 1; break;
                case "volunteer": cardTypeValue = 2; break;
                case "activist": cardTypeValue = 3; break;
                default: cardTypeValue = -1;
            }

            const matchCost = costValue === 0 || cardCost === costValue;
            const matchTime = timeValue === 0 || cardTimeValue === timeValue;
            const matchType = typeValue === 0 || cardTypeValue === typeValue;

            if (matchCost && matchTime && matchType) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Подписываем обработчики событий
    document.querySelectorAll(".filters input[type='range']").forEach(slider => {
        slider.addEventListener("input", filterClubs);
    });

    window.onload = filterClubs;
