function clearMainContent(){
    document.getElementById('mainContent').innerHTML = '';
}

async function loadDateIdeas(){
    clearMainContent();
    document.getElementById('mainContent').innerHTML += elementTemplate('Ideen werden geladen 💡');
    
    setTimeout(() => {
    loadDateIdeasFromDB('');
    }, 1000);
}

function loadLoveBox2(){
    clearMainContent();
    renderLoveBox2();
}

function loadPhotobooth(){
    clearMainContent();
    renderPhotobooth();
}

function openAddNewDate() {
    let overlay = document.getElementById('overlay');

    if (!overlay) {
        document.body.insertAdjacentHTML('beforeend', overlayTemplate());
        overlay = document.getElementById('overlay');
    }

    overlay.style.display = 'flex';

    const input = document.getElementById('input');
    if (input) {
        setTimeout(() => {
            input.focus();
        }, 30);
    }
}

function closeAddNewDate() {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

function goHome(){
    location.reload();
}

function openSpotify(){
    window.open("https://open.spotify.com/playlist/0jwv5EfYUfpoUHdYfKYf1k?si=85dd91ad8eee4438,_blank");
}

function addRandomEmoji(text) {
    const emojis = [
        '🌟','💖','🍀','🎉','😊','🔥','🌸','🍕','☕','🎈',
        '🍩','🐶','🐱','🌈','⭐','🍎','🍓','🍌','🥑','🥳',
        '🎵','🎬','🏖️','🚀','💎','🏔️','🌊','🛶','🦋','🌻'
    ];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const checked = document.getElementById('checkbox').checked;
    if (checked) {
        return text + ' ' + randomEmoji;
    } else {
        return text;
    }
}