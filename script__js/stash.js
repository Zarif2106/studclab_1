 
        // Фильтрация стажировок
        document.addEventListener('DOMContentLoaded', function() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Удаляем active у всех кнопок
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    // Добавляем active текущей кнопке
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    const internships = document.querySelectorAll('.internship-card');
                    
                    internships.forEach(card => {
                        if (filter === 'all') {
                            card.style.display = 'block';
                        } else {
                            const categories = card.getAttribute('data-category').split(' ');
                            if (categories.includes(filter)) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        }
                    });
                });
            });
            
            // Мобильное меню
            const menuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            if (menuBtn && navLinks) {
                menuBtn.addEventListener('click', function() {
                    this.classList.toggle('active');
                    navLinks.classList.toggle('active');
                });
            }
        });
  