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
    overlay.style.display = 'flex';
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

let lastBackPress = 0;
history.pushState({ app: true }, "");

window.addEventListener("popstate", () => {
  const now = Date.now();

  if (now - lastBackPress < 2000) {
    history.back();
    return;
  }

  lastBackPress = now;
  showToast("Zum Beenden erneut drücken");
  history.pushState({ app: true }, "");
});