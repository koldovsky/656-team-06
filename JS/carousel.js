(function() {
    const slides = [
        '.w-block-1', '.w-block-2' , '.w-block-3' ];
    
    let currentSlidId = 0;
    
    function renderSlides() {
        const slidesContainer = document.querySelector('.track-clients');
        slidesContainer.innerHTML = slides[currentSlidId];
        if (window.innerWidth > 500) {
            const slide2Id = currentSlidId + 1 >= slides.length ? 0 : currentSlideId + 1;
            slidesContainer.innerHTML += slides[slide2Id];
            if (window.innerWidth > 900) {
                const slide2Id = currentSlidId + 1 >= slides.length ? 0 : currentSlideId + 1;
                slidesContainer.innerHTML += slides[slide2Id]; 
            }

        }
    }
    function nextSlide() {
        currentSlidId++;
        if (currentSlidId >= slides.length) currentSlidId = 0;
        renderSlides();
    }

    function prevSlide() {
        currentSlidId--;
        if (currentSlidId < 0) currentSlidId = slides.length - 1;
        renderSlides();
    }

    
})();