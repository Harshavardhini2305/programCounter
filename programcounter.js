const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn"); // Removed extra space
const increaseBtn = document.getElementById("increaseBtn"); // Fixed typo in ID
const counterLabel = document.getElementById("counterLabel");
let count = 0;

// Increase button functionality
increaseBtn.onclick = function () {
    count++;
    counterLabel.textContent = count;
};

// Decrease button functionality
decreaseBtn.onclick = function () {
    count--;
    counterLabel.textContent = count;
};

// Reset button functionality
resetBtn.onclick = function () {
    count = 0;
    counterLabel.textContent = count;
};
