const card = document.getElementById('inviteCard');
const music = document.getElementById('bgMusic');

setTimeout(() => {
    music.play();
}, 100);
// Khi click thiệp -> mở thiệp & bật nhạc + tạo bóng bay
card.addEventListener('click', () => {
    card.classList.toggle('open');
    if (card.classList.contains('open')) {
        // music.play().catch(() => {
        //     console.log('Không thể tự động phát nhạc (yêu cầu tương tác người dùng).');
        // });
        createBalloons(20); // tạo 10 bóng bay
    } else {
        // music.pause();
    }
});

// === Hoa rơi liên tục ===
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.animationDuration = (5 + Math.random() * 5) + 's';
    flower.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 10000);
}
function createFlower2() {
    const flower2 = document.createElement('div');
    flower2.classList.add('flower2');
    flower2.style.left = Math.random() * window.innerWidth + 'px';
    flower2.style.animationDuration = (5 + Math.random() * 5) + 's';
    flower2.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(flower2);
    setTimeout(() => flower2.remove(), 10000);
}
setInterval(createFlower, 500);
setInterval(createFlower2, 1000);

// === Tạo bóng bay khi mở thiệp ===
function createBalloons(count) {
    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        // Random màu sắc
        const colors = ['#ff6b81', '#ffb347', '#ffd700', '#9b59b6', '#5dade2', '#f1948a'];
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Vị trí & kích thước ngẫu nhiên
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        balloon.style.width = 30 + Math.random() * 20 + 'px';
        balloon.style.height = 45 + Math.random() * 15 + 'px';
        balloon.style.animationDuration = 5 + Math.random() * 3 + 's';

        document.body.appendChild(balloon);
        setTimeout(() => balloon.remove(), 8000);
    }
}
