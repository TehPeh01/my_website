document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('[data-include]');
    
    elements.forEach(el => {
        const file = el.getAttribute('data-include');
        
        if (file) {
            fetch(file)
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        throw new Error('File not found');
                    }
                })
                .then(data => {
                    el.innerHTML = data;
                })
                .catch(err => {
                    el.innerHTML = '<p>Error loading content.</p>';
                    console.error('Error loading the file:', err);
                });
        }
    });
});
