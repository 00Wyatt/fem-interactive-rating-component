const ratingState = document.querySelector('.card__rating-state');
const thankYouState = document.querySelector('.card__thank-you-state');
const ratingNumbers = document.querySelectorAll('.card__number');
const submit = document.querySelector('.card__submit');
let yourRating = ''; // Holds the selected rating number.
const score = document.querySelector('.card__score'); // Displays the selected rating number.

ratingNumbers.forEach(number => {
    number.addEventListener('click', handleNumberClick); // Listens for which rating number is selected.
});


function handleNumberClick(event) {
    ratingNumbers.forEach(number => {
        number.classList.remove('selected'); // Clears any highlights on rating numbers.
    });
    event.target.classList.add('selected'); // Adds highlight to selected rating number.
    yourRating = event.target.textContent; // Sets yourRating to the selected rating number's value.
};

submit.addEventListener('click', onSubmit); // When the submit button is clicked.

function onSubmit() {
    if (yourRating) { // Only runs if there is a rating number selected.
        ratingState.classList.add('hide'); // Hides the rating state card.
        score.textContent = yourRating; // Sets selected rating number to score to be displayed.
        thankYouState.classList.remove('hide'); // Shows the thank you state card.
    };
};