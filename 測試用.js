let currentIndex = 0; // 目前輪播的位置
let totalImages = document.querySelectorAll('.character').length; // 總圖片數
const visibleImages = 5; // 顯示的圖片數
let maxIndex = totalImages - visibleImages; // 允許的最大索引

function updateCarousel() {
    const characters = document.querySelector('.characters');
    const character = document.querySelector('.character-container');
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



// 各分類對應的圖片資料
const imageMap = {
    "2D服裝": [
        { src: "./服裝/2D/實驗服.png", position: "75% 10%" },
        { src: "./服裝/2D/新年.png", position: "75% 10%" },
        { src: "./服裝/2D/連帽(沒戴帽.png", position: "19% 10%" },
        { src: "./服裝/2D/連帽(戴帽.png", position: "50% 10%" },
        { src: "./服裝/2D/連帽(敞開胸.png", position: "50% 10%" },
        { src: "./服裝/2D/泳裝.png", position: "46% 10%" },
        { src: "./服裝/2D/實驗泳裝.png", position: "46% 10%" },
        { src: "./服裝/2D/睡衣.png", position: "50% 10%" },
        { src: "./服裝/2D/制服.png", position: "50% 10%" },
        { src: "./服裝/2D/制服外套.png", position: "47% 10%" },       
        { src: "./服裝/2D/大衣.png", position: "49% 10%" },
        { src: "./服裝/2D/黑色外套.png", position: "48% 10%" }
    ],
    "3D服裝": [
        { src: "./服裝/3D/3D.png", position: "45% 10%" },
        { src: "./服裝/3D/偶像裝1.png", position: "75% 10%" },
        { src: "./服裝/3D/偶像裝2.png", position: "19% 10%" },
        { src: "./服裝/3D/偶像裝3.png", position: "46% 10%" },
        { src: "./服裝/3D/大媽泳裝.png", position: "50% 10%" },
        { src: "./服裝/3D/泳裝2.png", position: "50% 10%" },
        { src: "./服裝/3D/聖誕裝1.png", position: "49% 10%" },
        { src: "./服裝/3D/聖誕裝2.png", position: "49% 10%" },
        { src: "./服裝/3D/BJ裝.png", position: "49% 10%" },
        { src: "./服裝/3D/浴衣.png", position: "49% 10%" },
        { src: "./服裝/3D/earth服裝.png", position: "49% 10%" },
        { src: "./服裝/3D/練舞裝.png", position: "49% 10%" },
    ],
    "髮型與配件": [
        "./測試用.png",
        "./測試用.png",
        "./測試用.png",
        "./測試用.png",
        "./測試用.png"
    ]
};

// 點擊分類選項後更換圖片
const options = document.querySelectorAll('.服裝選項');
const characterContainer = document.querySelector('.characters');

options.forEach(option => {
    option.addEventListener('click', () => {
        
        options.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // 設定目前索引歸零
        currentIndex = 0;
        updateCarousel();

        // 移除原本圖片
        characterContainer.innerHTML = '';

        // 加入新圖片
        const category = option.textContent.trim();
        const images = imageMap[category] || [];

        images.forEach((item, index) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'character-container';
        
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = `角色${index + 1}`;
            img.className = 'character';
            img.setAttribute('onclick', `showDetail(${index})`);
            img.style.objectPosition = item.position || "50% 50%";
        
            wrapper.appendChild(img);
            characterContainer.appendChild(wrapper);
        });

        // 更新 maxIndex
        totalImages = images.length;
        maxIndex = Math.max(totalImages - visibleImages, 0);
        updateCarousel();
    });
});




// 模擬角色資料（你可以自己擴充）
const characterDetails = [
    {
        name: "實驗袍",
        image: "./測試.png",
        desc: '<span class="desc1"><a href="https://www.youtube.com/live/r3Ba-2Y5HDY?si=K8Vo0k0aWTh9pdM6" target="_blank">【初配信】スタートまでにTwitterの凍結は溶けるのか！？RTA開始！ふぁいっ！【博衣こより/ホロライブ】</a></span>' 
        // desc = description（描述、介紹）
    },
    {
        name: "新年裝",
        image: "./測試.png",
        desc: '<span class="desc1"><a href="https://www.youtube.com/live/cuOcGQdY9KE?si=jaGfw6ci-y48BkGQ" target="_blank">【#ホロライブ正月衣装】可愛すぎて失神注意♡【博衣こより/ホロライブ】</a></span>'      // desc = description（描述、介紹）
    },
    {
        name: "連帽衫",
        image: "./測試.png",
        desc: '<span class="desc1"><a href="https://www.youtube.com/live/eB-cI-PTOtI?si=DfA0avfmbfrvCsmr" target="_blank">【 #博衣こより新衣装 】初めての新衣装お披露目！3段階の変化…⁉えっっっ⁉【博衣こより/ホロライブ】</a></span>'      // desc = description（描述、介紹）
    },
    {
        name: "泳裝",
        image: "./測試.png",
        desc: '<span class="desc1"><a href="https://www.youtube.com/live/eB-cI-PTOtI?si=DfA0avfmbfrvCsmr" target="_blank">【 #博衣こより新衣装 】初めての新衣装お披露目！3段階の変化…⁉えっっっ⁉【博衣こより/ホロライブ】</a></span>'      // desc = description（描述、介紹）
    },
    {
        name: "睡衣",
        image: "./測試.png",
        desc: '<span class="desc1"><a href="https://www.youtube.com/live/eB-cI-PTOtI?si=DfA0avfmbfrvCsmr" target="_blank">【 #博衣こより新衣装 】初めての新衣装お披露目！3段階の変化…⁉えっっっ⁉【博衣こより/ホロライブ】</a></span>'      // desc = description（描述、介紹）
    },
    {
        name: "制服",
        image: "./測試.png",
        desc: '<span class="desc1"><a href="https://www.youtube.com/live/nJo4w9ceTK8?si=VQSxECghuqEJwi7f" target="_blank">【 #博衣こより新衣装 】1億年ぶり2回目の新衣装！！！！！遂にアレが・・・くるぞ・・・！！</a></span>'      // desc = description（描述、介紹）
    },
    {
        name: "大衣",
        image: "./測試.png",
        desc: '<span class="desc1"><a href="https://www.youtube.com/live/n3eDD5KwtbA?si=Q7iel513DGP7MbN8" target="_blank">【お披露目＆告知】ほぼ新衣装！？お披露目＆告知だよおおおおお！！！🍌✨歌みた公開もある！！！</a></span>'      // desc = description（描述、介紹）
    },
    {
        name: "黑色外套",
        image: "./測試.png",
        desc: '<span class="desc1"><a href="https://www.youtube.com/live/DvNg5BT7WKM?si=dAnSTBA-mQeDuvqE" target="_blank">【 #博衣こより3周年記念ゴリラ 】超重大発表アリ‼自費3Dスタジオでゴリラ人狼＆新曲お披露目...</a></span>'      // desc = description（描述、介紹）
    },
    // 依序加入角色3, 4...
];

function showDetail(index) {   //這是當你點角色圖片時呼叫的函式，它會「顯示該角色的詳情頁面」
    const detail = characterDetails[index];   //根據你點的角色（由索引 index 傳進來），抓出對應的角色資料
    document.getElementById('detail-title').textContent = detail.name;  // 把角色的 name 放進 HTML 中顯示（通常是 <h2> 或 <div> 元素）
    document.getElementById('detail-img').src = detail.image;           // 把圖片網址放進圖片標籤裡，顯示對應角色圖片。
    document.getElementById('detail-desc').innerHTML = detail.desc;     // textContent → 只會當作「純文字」來處理，不會解析超連結、粗體、圖片等等。     innerHTML → 可以把文字當作「HTML語法」來解析並渲染出來。
    document.getElementById('character-detail').style.display = 'flex'; //把整個詳情畫面顯示出來（它原本是 display: none 隱藏的）
}

function closeDetail() {
    document.getElementById('character-detail').style.display = 'none';  //這是「關閉詳情視窗」的函式，把整個詳情頁面隱藏起來
}


// 監聽鍵盤按鍵事件
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {  //按下esc便會關閉視窗
      closeDetail(); // 呼叫關閉詳情畫面的函式
    }
  });



  