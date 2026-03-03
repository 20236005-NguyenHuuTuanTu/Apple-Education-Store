document.addEventListener('DOMContentLoaded', function () {
	const wrapper = document.querySelector('.card-wrapper');
	const prevBtn = document.querySelector('.slider-btn.prev');
	const nextBtn = document.querySelector('.slider-btn.next');

	if (!wrapper || !prevBtn || !nextBtn) return;

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

	prevBtn.addEventListener('click', () => scrollByCard(-1));
	nextBtn.addEventListener('click', () => scrollByCard(1));

	// enable/disable at edges
	function updateButtons() {
		const max = wrapper.scrollWidth - wrapper.clientWidth;
		prevBtn.disabled = wrapper.scrollLeft <= 0;
		nextBtn.disabled = wrapper.scrollLeft >= Math.round(max - 1);
	}

	wrapper.addEventListener('scroll', updateButtons);
	window.addEventListener('resize', updateButtons);
	updateButtons();
});
