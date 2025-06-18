// script__js/group_chat.js

document.addEventListener('DOMContentLoaded', () => {
    const createForm = document.querySelector('.create-group-section form');
    const joinForm = document.querySelector('.join-group-section form');

    if (createForm) {
        createForm.addEventListener('submit', function (e) {
            const nameInput = this.querySelector('#group-name');
            const descriptionInput = this.querySelector('#group-description');

            if (!nameInput.value.trim()) {
                e.preventDefault();
                alert('Пожалуйста, введите название группы.');
                nameInput.focus();
            } else if (descriptionInput.value.length > 200) {
                e.preventDefault();
                alert('Описание не должно превышать 200 символов.');
            }
        });
    }

    if (joinForm) {
        joinForm.addEventListener('submit', function (e) {
            const codeInput = this.querySelector('#group-code');
            if (!codeInput.value.trim()) {
                e.preventDefault();
                alert('Введите код или название группы.');
                codeInput.focus();
            }
        });
    }

    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenuBtn.setAttribute('aria-expanded', !expanded);
            navLinks.classList.toggle('active');
        });
    }
});