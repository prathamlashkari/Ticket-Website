window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
};

const summaryList = {
    'Two Wheeler': { count: 0, total: 0.0, elementCount: document.getElementById('two-wheeler-count'), elementTotal: document.getElementById('two-wheeler-total') },
    'Four Wheeler': { count: 0, total: 0.0, elementCount: document.getElementById('four-wheeler-count'), elementTotal: document.getElementById('four-wheeler-total') },
    'Taxi': { count: 0, total: 0.0, elementCount: document.getElementById('taxi-count'), elementTotal: document.getElementById('taxi-total') },
    'Bus / Heavy Vehicle': { count: 0, total: 0.0, elementCount: document.getElementById('bus-count'), elementTotal: document.getElementById('bus-total') },
    'Truck / Loading Vehicle': { count: 0, total: 0.0, elementCount: document.getElementById('truck-count'), elementTotal: document.getElementById('truck-total') },
    'Construction Vehicle': { count: 0, total: 0.0, elementCount: document.getElementById('construction-count'), elementTotal: document.getElementById('construction-total') },
    'Full Day': { count: 0, total: 0.0, elementCount: document.getElementById('full-day-count'), elementTotal: document.getElementById('full-day-total') }
};

const totalAmountElement = document.getElementById('total-amount');
const payAmountElement = document.getElementById('payAmount');

document.querySelectorAll('.add-btn, .coin').forEach(button => {
    button.addEventListener('click', () => {
        const countElement = button.parentElement.querySelector('.count');
        let count = parseInt(countElement.textContent, 10);
        const price = parseFloat(button.dataset.price);
        const type = button.dataset.type;

        if (button.classList.contains('add-btn')) {
            count += 1;
        } else {
            count = Math.max(0, count - 1); // Prevent negative counts
        }

        countElement.textContent = count;
        summaryList[type].count = count;
        summaryList[type].total = (count * price).toFixed(2);
        summaryList[type].elementCount.textContent = count;
        summaryList[type].elementTotal.textContent = `₹${summaryList[type].total}`;

        let totalAmount = Object.values(summaryList).reduce((sum, item) => sum + parseFloat(item.total), 0).toFixed(2);
        totalAmountElement.textContent = `₹${totalAmount}`;
        payAmountElement.textContent = totalAmount;
    });
});

function payNow() {
    alert('Payment of ₹' + payAmountElement.textContent + ' successful!');
}
