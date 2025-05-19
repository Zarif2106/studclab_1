document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatBox = document.getElementById('chatBox');

    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const messageText = chatInput.value.trim();
        if (messageText !== "") {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.innerHTML = `<strong>Вы:</strong> ${messageText}`;
            chatBox.appendChild(messageDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
            chatInput.value = '';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const nicknameForm = document.getElementById('nicknameForm');
    const nicknameInput = document.getElementById('nicknameInput');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatBox = document.getElementById('chatBox');

    let currentUser = '';

    // Вход в чат
    nicknameForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nickname = nicknameInput.value.trim();
        if (nickname !== "") {
            currentUser = nickname;
            nicknameForm.style.display = 'none';
            chatForm.style.display = 'flex';
        }
    });

    // Отправка сообщения
    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const messageText = chatInput.value.trim();
        if (messageText !== "" && currentUser) {
            addMessage(currentUser, messageText, 'you');
            chatInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight;

            // Симуляция ответа другого пользователя
            setTimeout(() => {
                addMessage("student_42", "Хорошо!", 'them');
            }, 1000);
        }
    });

    // Функция добавления сообщения
    function addMessage(nick, text, type) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', type);

        const nickSpan = document.createElement('span');
        nickSpan.classList.add('nick');
        nickSpan.textContent = nick;

        const textSpan = document.createElement('span');
        textSpan.classList.add('text');
        textSpan.textContent = text;

        msgDiv.appendChild(nickSpan);
        msgDiv.appendChild(textSpan);

        chatBox.appendChild(msgDiv);
    }
});