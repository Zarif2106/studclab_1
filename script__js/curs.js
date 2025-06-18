document.addEventListener("DOMContentLoaded", function () {
    const yandexCoursesContainer = document.getElementById("yandex-courses");
    const userCoursesContainer = document.getElementById("user-courses");
    const form = document.getElementById("create-course-form");

    // === СПИСОК КУРСОВ SKILLBOX (МОК) ===
    const skillboxCourses = [
        {
            title: "JavaScript-разработчик",
            description: "Станьте профессионалом за 9 месяцев. Практика, проекты, помощь в трудоустройстве.",
            url: "https://skillbox.ru/course/javascript-developer/" 
        },
        {
            title: "Python для начинающих",
            description: "Освойте язык Python с нуля. Разработка приложений, скриптов и аналитика данных.",
            url: "https://skillbox.ru/course/python/" 
        },
        {
            title: "Frontend-разработка",
            description: "Научитесь создавать современные веб-сайты и приложения.",
            url: "https://skillbox.ru/course/frontend/" 
        },
        {
            title: "Web-дизайн для начинающих",
            description: "Создание красивых и удобных сайтов даже без опыта в дизайне.",
            url: "https://skillbox.ru/course/web-dizayn-dlya-nachinayushchikh/" 
        },
        {
            title: "Тестирование. QA-инженер",
            description: "Научитесь находить баги и тестировать программы как профессионал.",
            url: "https://skillbox.ru/course/testirovanie-qa-inzhener/" 
        }
    ];

    // Подгружаем курсы из мока
    if (!skillboxCourses.length) {
        yandexCoursesContainer.innerHTML = "<p>Курсов пока нет.</p>";
        return;
    }

    skillboxCourses.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description.substring(0, 100)}...</p>
            <a href="${course.url}" target="_blank">Подробнее</a>
        `;
        yandexCoursesContainer.appendChild(card);
    });

    // Загрузка пользовательских курсов из localStorage
    function loadUserCourses() {
        const courses = JSON.parse(localStorage.getItem("userCourses")) || [];
        userCoursesContainer.innerHTML = "";
        if (!courses.length) {
            userCoursesContainer.innerHTML = "<p>Пока нет созданных курсов.</p>";
            return;
        }

        courses.forEach(course => {
            const card = document.createElement("div");
            card.className = "course-card";
            card.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description.substring(0, 100)}...</p>
                ${course.link ? `<a href="${course.link}" target="_blank">Материалы курса</a>` : ""}
            `;
            userCoursesContainer.appendChild(card);
        });
    }

    loadUserCourses();

    // Обработка формы
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const title = form[0].value.trim();
        const description = form[1].value.trim();
        const link = form[2].value.trim();

        if (!title || !description) {
            alert("Заполните название и описание курса.");
            return;
        }

        const newCourse = { title, description, link };

        const courses = JSON.parse(localStorage.getItem("userCourses")) || [];
        courses.unshift(newCourse); // Добавляем в начало
        localStorage.setItem("userCourses", JSON.stringify(courses));

        form.reset();
        loadUserCourses();
    });
});