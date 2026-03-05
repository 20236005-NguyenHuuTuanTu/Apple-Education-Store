document.addEventListener('DOMContentLoaded', function() {
    const navGroups = document.querySelectorAll('.nav-group');

    navGroups.forEach(group => {
        const header = group.querySelector('h4');
        if (header) { 
            header.addEventListener('click', () => {
                if (window.innerWidth <= 1000) {
                    group.classList.toggle('active');
                }
            });
        }
    });
});