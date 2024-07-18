// main.js

document.addEventListener('DOMContentLoaded', () => {
    const cashOnDelivery = document.getElementById('cash-on-delivery');
    const gcash = document.getElementById('gcash');

    if (cashOnDelivery) {
        cashOnDelivery.addEventListener('click', () => {
            window.location.href = 'form.html';
        });
    }

    if (gcash) {
        gcash.addEventListener('click', () => {
            window.location.href = 'gcash.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('body').classList.add('transition-opacity', 'duration-1000', 'opacity-0');
    setTimeout(() => {
        document.querySelector('body').classList.remove('opacity-0');
    }, 100);
});
