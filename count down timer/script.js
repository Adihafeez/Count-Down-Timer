let countdownInterval;

document.getElementById("start-button").addEventListener("click", function () {
    // Hide the start button and show the input container
    document.getElementById("start-button").classList.add("hidden");
    document.getElementById("input-container").classList.remove("hidden");
});

document.getElementById("submit-button").addEventListener("click", function () {
    const days = parseInt(document.getElementById("days-input").value) || 0;
    const hours = parseInt(document.getElementById("hours-input").value) || 0;
    const minutes = parseInt(document.getElementById("minutes-input").value) || 0;
    const seconds = parseInt(document.getElementById("seconds-input").value) || 0;

    const totalSeconds =
        days * 24 * 60 * 60 +
        hours * 60 * 60 +
        minutes * 60 +
        seconds;

    if (totalSeconds <= 0) {
        alert("Please set a valid countdown time.");
        return;
    }

    // Hide the input area and show the countdown timer
    document.getElementById("input-container").classList.add("hidden");
    document.getElementById("countdown-container").classList.remove("hidden");
    document.getElementById("reset-button").classList.remove("hidden");

    startCountdown(totalSeconds);
});

document.getElementById("reset-button").addEventListener("click", function () {
    // Clear the interval
    clearInterval(countdownInterval);

    // Reset all fields
    document.getElementById("days-input").value = "";
    document.getElementById("hours-input").value = "";
    document.getElementById("minutes-input").value = "";
    document.getElementById("seconds-input").value = "";

    // Reset the countdown display
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    // Hide the countdown timer, show the input container
    document.getElementById("countdown-container").classList.add("hidden");
    document.getElementById("input-container").classList.remove("hidden");
    document.getElementById("reset-button").classList.remove("hidden");
});

function startCountdown(totalSeconds) {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(function () {
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);

            // Reset the countdown display to "00"
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            // Play the beep sound (no alert)
            const beepSound = new Audio("beep.mp3");
            beepSound.play();

            return;
        }

        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

        totalSeconds--;
    }, 1000);
}
