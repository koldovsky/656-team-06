(function() {
    const slides = [
        `<div class="w-block-1">
        <img class="w-image" src="img/cristmas-family-1.webp" alt="happy family with a dog">
        <p class="names">Dean and Alice Peterson</p>
        <p class="w-text-content">“Christmas is a special time! We always buy Christmas decorations in advance.
            For the third year now, we have been making orders in this store and are completely satisfied with the quality of each bauble
            purchased."
        </p>
        <p>December 19, 2021</p>
    </div>`,
    `<div class="w-block-2">
    <img class="w-image" src="img/cristmas-family-2.webp"  alt="mother and daughter">
    <p class="names">Susan Owler</p>
    <p class="w-text-content">“My daughter is 4 years old and she has been waiting for Christmas
        preparations since October! We start decorating the Christmas tree in early December, and I always buy something new at Christmas
        Decorations Shop.”</p>
    <p>December 21, 2021</p>
</div>`,
`<div class="w-block-3">
<img class="w-image"src="img/cristmas-family-3.webp"  alt="mother and daughter with the tree">
<p class="names">Daniella Lexington</p>
<p class="w-text-content"><span class="w-text-content" style="display: block;">“The anticipation of Christmas is the best thing in December. I like the
    feeling that magic is coming and try to start Christmas decorations in early December. This year, I've bought a new X-mas tree and lots
    of baubles.”</span>
</p>
<p>Decmber 23, 2021</p>
</div>
</div>`];
    
    let currentSlide = 0;
    
    function showCurrentSlide() {
        const slideContainer = document.querySelector('.track-clients');
        slidesContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 500) {
            const secondSlide = currentSlidId + 1 >= slides.length ? 0 : currentSlide + 1;
            slidesContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slidesContainer.innerHTML += slides[thirdSlide]; 
            }

        }
    }
    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        showCurrentSlide();
    }
    showCurrentSlide();

    document.querySelector('.next.button').addEventListener('click', nextSlide);
    document.querySelector('.prev.button').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide);
})();