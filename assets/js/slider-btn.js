document.addEventListener('DOMContentLoaded', function () {
    const wrappers = document.querySelectorAll('.card-wrapper');
    if (!wrappers) return;

    wrappers.forEach((wrapper) => {
        const prevBtn = wrapper.parentElement.querySelector('.slider-btn.prev');
        const nextBtn = wrapper.parentElement.querySelector('.slider-btn.next')   
        if (!prevBtn || !nextBtn) return;
        
        function getCardGap() {
            const gap = getComputedStyle(wrapper).gap || getComputedStyle(wrapper).columnGap;
            return parseInt(gap, 10) || 0;
        }

        function scrollByCard(dir = 1) {
            const firstCard = wrapper.querySelector('.card');
            if (!firstCard) return;
            const cardWidth = firstCard.getBoundingClientRect().width;
            const gap = getCardGap();
            const amount = (cardWidth + gap) * dir;
            wrapper.scrollBy({ left: amount, behavior: 'smooth' });
        }

        // enable/disable at edges
        function updateButtons() {
            const max = wrapper.scrollWidth - wrapper.clientWidth;
            prevBtn.disabled = wrapper.scrollLeft <= 0;
            nextBtn.disabled = wrapper.scrollLeft >= max - 1;
        }

        prevBtn.addEventListener('click', () => scrollByCard(-1));
        nextBtn.addEventListener('click', () => scrollByCard(1));
        wrapper.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);
        updateButtons();
    });
});