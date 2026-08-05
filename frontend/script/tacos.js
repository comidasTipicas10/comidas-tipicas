const buttons = document.querySelectorAll('.btn-modal');
const closeBtns = document.querySelectorAll('.close-btn');
const overlays = document.querySelectorAll('.modal-overlay');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-modal');
        const targetModal = document.getElementById(targetId);
        targetModal.classList.add('active');
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal-overlay');
        modal.classList.remove('active');
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
    }
});