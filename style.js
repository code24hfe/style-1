var imageElement = document.querySelector(".image-product img");
var bottomImage = document.querySelector(".bottom-image")
var buttonBuy = document.querySelector(".buy button")
var nameProduct = document.querySelector(".information .content span")
var price = document.querySelector(".navbar .title span")

function changeImage(index) {
    if (index === 1) {
        imageElement.setAttribute("src", "img/3520807_43ad8c6c-d85b-4670-b5e9-3cc221763bb4__1_-removebg-preview.png");
        bottomImage.classList.remove("image-2")
        bottomImage.classList.remove("image-3")
        bottomImage.classList.remove("image-4")
        bottomImage.classList.add("image-1")
        buttonBuy.classList.remove("button-2")
        buttonBuy.classList.remove("button-3")
        buttonBuy.classList.remove("button-4")
        buttonBuy.classList.add("button-1")
        nameProduct.innerHTML = "Kotion Each G2000 Gaming Headset Black Orange."
        price.innerHTML = "Price: 300$"
    }
    if (index === 2) {
        imageElement.setAttribute("src", "img/55855_tai_nghe_gaming_logitech_lightspeed_g733_wireless_7_1_rgb_0001_2-removebg-preview.png");
        bottomImage.classList.remove("image-1")
        bottomImage.classList.remove("image-3")
        bottomImage.classList.remove("image-4")
        bottomImage.classList.add("image-2")
        buttonBuy.classList.remove("button-1")
        buttonBuy.classList.remove("button-3")
        buttonBuy.classList.remove("button-4")
        buttonBuy.classList.add("button-2")
        nameProduct.innerHTML = "The Logitech G733 LIGHTSPEED Wireless Black headset."
        price.innerHTML = "Price: 200$"
    }
    if (index === 3) {
        imageElement.setAttribute("src", "img/56482_tai_nghe_gaming_logitech_g733_lightspeed_wireless_7_1_rgb_white_0002_3-removebg-preview.png");
        bottomImage.classList.remove("image-2")
        bottomImage.classList.remove("image-1")
        bottomImage.classList.remove("image-4")
        bottomImage.classList.add("image-3")
        buttonBuy.classList.remove("button-2")
        buttonBuy.classList.remove("button-1")
        buttonBuy.classList.remove("button-4")
        buttonBuy.classList.add("button-3")
        nameProduct.innerHTML = "The Logitech G733 LIGHTSPEED Wireless White headset."
        price.innerHTML = "Price: 250$"
    }
    if (index === 4) {
        imageElement.setAttribute("src", "img/1601003666-123261753-tai-nghe-dareu-eh469-rgb-pink-removebg-preview.png");
        bottomImage.classList.remove("image-2")
        bottomImage.classList.remove("image-3")
        bottomImage.classList.remove("image-1")
        bottomImage.classList.add("image-4")
        buttonBuy.classList.remove("button-2")
        buttonBuy.classList.remove("button-3")
        buttonBuy.classList.remove("button-1")
        buttonBuy.classList.add("button-4")
        nameProduct.innerHTML = "The Gaming Headset Dareu EH469 7.1 RGB Led - Genuine Product."
        price.innerHTML = "Price: 150$"
    }
}


const cardContainers = document.querySelectorAll('.card-container');

cardContainers.forEach(cardContainer => {
    let isDragging = false;
    let startX;
    let scrollLeft;

    let isAutoScrolling = false;
    let animationFrameId;

    function startAutoScrolling() {
        isAutoScrolling = true;
        animationFrameId = requestAnimationFrame(scrollStep);
    }

    function stopAutoScrolling() {
        isAutoScrolling = false;
        cancelAnimationFrame(animationFrameId);
    }

    function scrollStep() {
        cardContainer.scrollLeft += 1; // Adjust the scroll speed

        if (cardContainer.scrollLeft >= cardContainer.scrollWidth - cardContainer.clientWidth) {
            stopAutoScrolling();
        }

        if (isAutoScrolling) {
            animationFrameId = requestAnimationFrame(scrollStep);
        }
    }

    cardContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - cardContainer.offsetLeft;
        scrollLeft = cardContainer.scrollLeft;
    });

    cardContainer.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    cardContainer.addEventListener('mouseup', () => {
        isDragging = false;
    });

    cardContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - cardContainer.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the multiplier for smoother scrolling
        cardContainer.scrollLeft = scrollLeft - walk;
    });

    cardContainer.addEventListener('mouseenter', startAutoScrolling);
    cardContainer.addEventListener('mouseleave', stopAutoScrolling);
});



const scrollButton = document.getElementById('scroll-button');

scrollButton.addEventListener('click', () => {
    const scrollDuration = 1000; // Duration of scroll animation in milliseconds
    const startTime = performance.now(); // Get the current time

    function scroll(time) {
        const elapsedTime = time - startTime;
        const scrollProgress = Math.min(elapsedTime / scrollDuration, 1); // Limit progress to 1

        window.scrollTo(0, easeInOutCubic(scrollProgress) * window.innerHeight);

        if (scrollProgress < 1) {
            requestAnimationFrame(scroll);
        }
    }

    requestAnimationFrame(scroll);
});

// Easing function for smooth scroll
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
