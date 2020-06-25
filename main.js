function init() {
    let slideIndex = 1;
    showslide(slideIndex)
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')

    prev.addEventListener('click', () => {
        showslide(slideIndex += -1)
    })

    next.addEventListener('click', () => {
        showslide(slideIndex += 1)
    })

    function showslide(n) {
        let slides = document.querySelectorAll('.slideContent')
        const dots = document.querySelectorAll('.dots')
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        // if( slideIndex === 3) {
        //     next.style.backgroundColor="#FAFAFA"
        //     prev.style.backgroundColor="#FAFAFA"
        // }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block"
    }
    const slides = document.querySelectorAll('.slideContent')

    /* Prev, Next button mouseover effect */

    for (i = 0; i < slides.length; i++) {
        slides[i].addEventListener('mouseover', () => {
            prev.classList.add('active')
            next.classList.add('active')
        })

        prev.addEventListener('mouseover', () => {
            prev.classList.add('active')
            next.classList.add('active')
        })

        next.addEventListener('mouseover', () => {
            prev.classList.add('active')
            next.classList.add('active')
        })

        slides[i].addEventListener('mouseout', () => {
            prev.classList.remove('active')
            next.classList.remove('active')
        })
    }
}

init()