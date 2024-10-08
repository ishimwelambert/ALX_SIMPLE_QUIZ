// Function to check the user's answer
function checkAnswer() {
    // Correct answer is 4
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Feedback element
    const feedback = document.getElementById("feedback");

    // Check if the user selected an answer
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green"; // Change feedback color to green for correct answer
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red"; // Change feedback color to red for incorrect answer
        }
    } else {
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "orange"; // Message if no option is selected
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
