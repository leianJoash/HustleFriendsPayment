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
  