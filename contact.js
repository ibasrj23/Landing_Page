emailjs.init("zPqezSM5mVGx0NDpD"); 

const contactForm = document.getElementById('contactForm');
const submitBtn = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('input', () => {
    submitBtn.disabled = !contactForm.checkValidity();
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Mengirim...';
    
    emailjs.sendForm('service_gzvixqj', 'template_s1c7sk7', contactForm)
        .then(() => {
            alert('Pesan berhasil dikirim! 🎉');
            contactForm.reset();
        })
        .catch(() => {
            alert('Gagal mengirim pesan, coba lagi!');
        })
        .finally(() => {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Kirim Pesan</span>';
        });
});