document.getElementById('registerBtn').addEventListener('click', function() {
    alert('Botão de cadastro clicado! Aqui você pode redirecionar para a página de cadastro.');
    // Redirecionar para a página de cadastro (exemplo)
    // window.location.href = 'cadastro.html';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
    this.reset(); // Limpa o formulário
});
