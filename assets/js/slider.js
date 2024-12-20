    // Reviews Slider
    const slider = document.querySelector('.review-slider');
    const reviews = document.querySelectorAll('.review');
    let currentIndex = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            review.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextReview() {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    }

    function startSlider() {
        showReview(currentIndex);
        setInterval(nextReview, 5000);
    }

    startSlider();


    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });