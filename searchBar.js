const search = document.querySelector('.search-container')
const searchOpenBtn = document.querySelectorAll('.search-btn')
const searchClose = document.querySelector('.search-close')
const searchToggleHandler = function () {
    search.classList.toggle('flexAct')
}
const searchRemoveFlexAct = function(){
    search.classList.remove('flexAct')
}
for (let i = 0; i < searchOpenBtn.length; i++) {
    searchOpenBtn[i].addEventListener('click', searchToggleHandler)
}

searchClose.addEventListener('click',searchRemoveFlexAct)