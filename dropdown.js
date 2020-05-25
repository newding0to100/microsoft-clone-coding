function allDropdown(){
    document.querySelector('.all-dropdown-contents').classList.toggle('show')
}

window.onclick = function(e) {
    if(!e.target.matches('.all-dropdown-btn')){
        const dropdown = document.querySelectorAll('.all-dropdown-contents')
        for(let i=0; i<dropdown.length; i++){
            if(dropdown[i].classList.contains('show')){
                dropdown[i].classList.remove('show')
            }
        }
    }
}