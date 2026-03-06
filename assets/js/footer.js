document.addEventListener('DOMContentLoaded', function() {
    const navGroups = document.querySelectorAll('.nav-group');

    navGroups.forEach(group => {
        const header = group.querySelector('h4');
        
        if (header) {
            ['click', 'touchstart'].forEach(eventType => {
                header.addEventListener(eventType, function(e) {
                    if (window.matchMedia('(max-width: 832px)').matches) {
                        e.preventDefault(); 
                        group.classList.toggle('active');
                    }
                }, { passive: false }); 
            });
        }
    });
});