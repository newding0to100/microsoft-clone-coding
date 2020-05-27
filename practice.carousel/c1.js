function init() {
    let slideIndex = 1;
    slideshow(slideIndex);

    //prev랑 next 중복을 줄일 수 있는 방법 생각해보기
    document.querySelector('.prev').addEventListener('click', () => {
        slideshow(slideIndex -= 1)
    })

    document.querySelector('.next').addEventListener('click', () => {
        slideshow(slideIndex += 1)
    })

    let dot = document.querySelectorAll('.dot')
    for (let i = 0; i < dot.length; i++) {
        dot[i].addEventListener('click', () => {
            slideshow(slideIndex =+ i+1)
        })
    }

    function slideshow(n) {
        let i;
        const slides = document.querySelectorAll('.slide-contents')
        const dots = document.querySelectorAll('.dot')
        if (n < 1) { slideIndex = slides.length }
        if (n > slides.length) { slideIndex = 1 }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active')
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].classList.add('active')
    }
}
init();