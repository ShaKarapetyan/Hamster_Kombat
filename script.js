
document.getElementById('character').addEventListener('click', () => {
    let coinCount = document.getElementById('coin-count');
    coinCount.textContent = parseInt(coinCount.textContent.replace(/,/g, '')) + 12;
    coinCount.textContent = coinCount.textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

let percent = 15;
document.getElementById("progress").style.width = percent + "%";
function progressCount() {
    percent = percent === 100 ? 0 : percent + 5;
    document.getElementById("progress").style.width = percent + "%";
}
