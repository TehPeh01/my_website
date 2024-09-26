//display Sidebar and Nav since they are seperate files 
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('[data-include]');
    let filesToLoad = elements.length;
    
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
                    filesToLoad--;

                    if (filesToLoad === 0) {
                        document.dispatchEvent(new CustomEvent('includesLoaded'));
                    }
                })
                .catch(err => {
                    el.innerHTML = '<p>Error loading content.</p>';
                    console.error('Error loading the file:', err);
                });
        }
    });
});

