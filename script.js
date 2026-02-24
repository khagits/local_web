// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const response = document.getElementById('response');
    response.innerText = `Thank you, ${name}! Your message has been received.`;
    this.reset();
});