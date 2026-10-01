
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
});


const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const revealElements = document.querySelectorAll('.reveal');
const revealOptions = { threshold: 0.15 };

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => revealOnScroll.observe(el));


document.getElementById('current-year').textContent = new Date().getFullYear();


const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    
    if(name === '' || email === '' || message === '') {
        formMsg.textContent = 'Vui lòng điền đầy đủ các trường!';
        formMsg.style.display = 'block';
        return;
    }

    
    if(message.length < 10) {
        formMsg.textContent = 'Tin nhắn phải chứa ít nhất 10 ký tự.';
        formMsg.style.display = 'block';
        return;
    }

   
    formMsg.style.color = 'green';
    formMsg.textContent = 'Cảm ơn bạn! Tin nhắn đã được gửi thành công.';
    formMsg.style.display = 'block';
    form.reset();
    
    
    setTimeout(() => { formMsg.style.display = 'none'; formMsg.style.color = 'var(--primary-color)'; }, 3000);
});

const searchInput = document.getElementById('project-search');
const projectCards = document.querySelectorAll('.project-card');

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
       
        const searchTerm = e.target.value.toLowerCase().trim();

        projectCards.forEach(card => {
            
            const textContent = card.querySelector('h3').textContent.toLowerCase();

            
            if (textContent.includes(searchTerm)) {
                card.classList.remove('hide');
                card.classList.add('show');
            } else {
                
                card.classList.remove('show');
                card.classList.add('hide');
            }
        });
    });
}