 // Скрипт для работы вкладок
    document.addEventListener('DOMContentLoaded', function() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Удаляем active у всех кнопок и контента
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Добавляем active текущей кнопке и соответствующему контенту
                this.classList.add('active');
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Мобильное меню (дублируем функционал из script.js)
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        }
    });
    document.getElementById('clubForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Получаем значения полей
    const name = document.getElementById('clubName').value.trim();
    const description = document.getElementById('clubDescription').value.trim();
    const type = document.getElementById('clubType').value;
    const location = document.getElementById('clubLocation').value.trim();
    const time = document.getElementById('clubTime').value.trim();
    const imageUrl = document.getElementById('clubImage').value.trim();

    // Создаем карточку кружка
    const clubCard = document.createElement('div');
    clubCard.className = 'club-card';
    clubCard.innerHTML = `
        <div class="club-image" style="background-image: url('${imageUrl}');"></div>
        <div class="club-info">
            <h3 class="club-title">${name}</h3>
            <p class="club-description">${description}</p>
            <div class="club-meta">
                <span>${location}</span>
                <span>${time}</span>
            </div>
        </div>
    `;

    // Добавляем карточку в нужный контейнер
    const targetContainer = document.querySelector(`#${type} .clubs-grid`);
    if (targetContainer) {
        targetContainer.appendChild(clubCard);
        alert("Кружок успешно добавлен!");
        document.getElementById('clubForm').reset(); // очищаем форму
    } else {
        alert("Ошибка при добавлении кружка.");
    }
});