// getting the input

const nameInput = document.getElementById('name-input');
const button = document.getElementById('button');
const generateImage = () => {
    const nameInput = document.getElementById('name-input');
    const nameInputValue = nameInput.value;
    const heading = document.getElementById('heading');
    heading.innerText = nameInputValue;
    /* heading.innerText.style.backgroundImage = "url('../assests/pic.jpg')" */
}