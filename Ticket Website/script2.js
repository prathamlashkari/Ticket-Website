
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
};

document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', () => {
        const countElement = button.previousElementSibling;
        let count = parseInt(countElement.textContent, 10);
        count += 1;
        countElement.textContent = count;
    });
});
document.querySelectorAll('.coin').forEach(button => {
    button.addEventListener('click', () => {
        const countElement = button.previousElementSibling;
        let count = parseInt(countElement.textContent, 10);
        count -= 1;
        countElement.textContent = count;
    });
});
const buttons = document.querySelectorAll('.add-btn');
const summaryList = {
    'Two Wheeler': { count: 0, total: 0.0, elementCount: document.getElementById('two-wheeler-count'), elementTotal: document.getElementById('two-wheeler-total') },
    'Four Wheeler': { count: 0, total: 0, elementCount: document.getElementById('four-wheeler-count'), elementTotal: document.getElementById('four-wheeler-total') },
    'Taxi': { count: 0, total: 0, elementCount: document.getElementById('taxi-count'), elementTotal: document.getElementById('taxi-total') },
    'Bus / Heavy Vehicle': { count: 0, total: 0, elementCount: document.getElementById('bus-count'), elementTotal: document.getElementById('bus-total') },
    'Full Day': { count: 0, total: 0, elementCount: document.getElementById('full-day-count'), elementTotal: document.getElementById('full-day-total') }
};
const totalAmountElement = document.getElementById('total-amount');
const payButton = document.querySelector('.pay-btn');
let totalAmount = totalAmountElement;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const countElement = button.previousElementSibling;
        let count = parseInt(countElement.textContent, 10);
        const price = parseFloat(button.dataset.price);
        count += 1;
        countElement.textContent = count;
    }
    )});
        const type = button.closest('.container').querySelector('h4').textContent.split(' ')[0];
        summaryList[type].count = count;
        summaryList[type].total = (count * price).toFixed(1);
        summaryList[type].elementCount.textContent = count;
        summaryList[type].elementTotal.textContent = `₹${summaryList[type].total}`;

        totalAmount = Object.values(summaryList).reduce((sum, item) => sum + total);


        function payNow() {
            alert('Payment of ₹' + document.getElementById('payAmount').innerText + ' successful!');
        }
        