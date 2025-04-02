let currentIndex = 0; // 目前輪播的位置
const totalImages = document.querySelectorAll('.character').length; // 總圖片數
const visibleImages = 5; // 顯示的圖片數
const maxIndex = totalImages - visibleImages; // 允許的最大索引

function updateCarousel() {
    const characters = document.querySelector('.characters');
    const character = document.querySelector('.character');
    const width = character.offsetWidth;// 單張圖片寬度
    const imageWidth = width + 10; // 單張圖片寬度 + 間距
    characters.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

// 下一張
function nextSlide() {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
}

// 上一張
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}
