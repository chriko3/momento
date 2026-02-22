function enableSwipeToDelete() {
    const elements = document.querySelectorAll('.element:not(.addButton)');

    elements.forEach(el => {
        const key = el.dataset.key;
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        el.addEventListener('pointerdown', e => {
            if (e.pointerType === 'mouse' && e.button !== 0) return;
            startX = e.clientX;
            isDragging = true;
            el.setPointerCapture(e.pointerId);
        });

        el.addEventListener('pointermove', e => {
            if (!isDragging) return;

            currentX = e.clientX - startX;

            if (currentX > 0) {
                el.style.transform = `translateX(${currentX}px)`;
            }
        });

        el.addEventListener('pointerup', async e => {
            isDragging = false;
            el.releasePointerCapture(e.pointerId);

            if (currentX > el.offsetWidth * 0.35) {
                el.style.transform = `translateX(120%)`;
                el.style.opacity = '0';

                setTimeout(async () => {
                    el.remove();
                    if (key) await deleateFromDB(key);
                }, 300);
            } else {
                el.style.transform = 'translateX(0)';
            }

            currentX = 0;
        });

        el.addEventListener('pointercancel', () => {
            isDragging = false;
            el.style.transform = 'translateX(0)';
            currentX = 0;
        });
    });
}