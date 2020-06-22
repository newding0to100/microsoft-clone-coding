const dropBtn = document.querySelector('.drop-btn')
const dropdown = document.querySelector('.drop-container')
const dropdownHandler = function () {
    dropdown.classList.toggle('flexAct')
}

dropBtn.addEventListener('click', dropdownHandler)
