const inputField = document.querySelectorAll('input');
const innerContainer = document.querySelector('.inner-container');

for (let i = 0; i < inputField.length; i++) {
  inputField[i].addEventListener("focus", function() {
    innerContainer.classList.add('transform')
  });
  inputField[i].addEventListener("blur", function() {
    innerContainer.classList.remove('transform')
  });
}