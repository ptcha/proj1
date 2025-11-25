// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            // Анимация гамбургера
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Плавная прокрутка к якорям
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Закрываем мобильное меню при клике на ссылку
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                
                // Плавная прокрутка
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Обработка формы обратной связи
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем значения полей
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Простая валидация
            if (name && email && message) {
                // Здесь можно добавить отправку формы на сервер
                alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
                
                // Очищаем форму
                contactForm.reset();
            } else {
                alert('Пожалуйста, заполните все поля формы.');
            }
        });
    }
    
    // Анимация при скролле
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками продуктов и преимуществами
    document.querySelectorAll('.product-card, .advantage-item').forEach(el => {
        observer.observe(el);
    });
});