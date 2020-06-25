const search = document.querySelector('.search-container')
const searchOpenBtn = document.querySelector('.search-btn')
const searchClose = document.querySelector('.search-close')
const visibleNavHandler = document.querySelector('.leftNav')

const searchToggleHandler = function () {
    search.classList.add('flexAct')
    visibleNavHandler.classList.add('hidden')
}
const searchRemoveFlexAct = function(){
    search.classList.remove('flexAct')
    visibleNavHandler.classList.remove('hidden')
}

searchOpenBtn.addEventListener('click', searchToggleHandler)


searchClose.addEventListener('click',searchRemoveFlexAct)