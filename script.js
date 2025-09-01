const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const diceButton = document.getElementById('dice-button');

async function fetchAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    adviceId.textContent = `Advice #${data.slip.id}`;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error('Error fetching advice:', error);
    adviceText.textContent = 'Something went wrong. Please try again!';
  }
}

diceButton.addEventListener('click', fetchAdvice);

// Fetch initial advice on page load
fetchAdvice();