document.addEventListener("DOMContentLoaded", function () {
    const vacancyContainer = document.getElementById("vacancy-container");
    const apiUrl = "https://api.hh.ru/vacancies?text=JavaScript&area=113"; // Например: поиск по "JavaScript" в России

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка сети или сервера");
            }
            return response.json();
        })
        .then(data => {
            vacancyContainer.innerHTML = ""; // очистить предыдущее содержимое

            if (data.items && data.items.length === 0) {
                vacancyContainer.innerHTML = "<p>Нет доступных вакансий.</p>";
                return;
            }

            data.items.forEach(vacancy => {
                const card = document.createElement("div");
                card.className = "vacancy-card";
                card.innerHTML = `
                    <h3>${vacancy.name}</h3>
                    <p><strong>Компания:</strong> ${vacancy.employer ? vacancy.employer.name : 'Не указана'}</p>
                    <p><strong>Место:</strong> ${vacancy.area ? vacancy.area.name : 'Не указано'}</p>
                    <p>${vacancy.snippet ? vacancy.snippet.responsibility || vacancy.snippet.requirement || 'Описание отсутствует' : 'Описание отсутствует'}</p>
                    <a href="${vacancy.alternate_url}" target="_blank">Подробнее</a>
                `;
                vacancyContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Ошибка загрузки вакансий:", error);
            vacancyContainer.innerHTML = "<p>Не удалось загрузить вакансии.</p>";
        });
});