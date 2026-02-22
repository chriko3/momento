const BASE_URL = 'https://datepage-2811-default-rtdb.europe-west1.firebasedatabase.app/';

async function loadDateIdeasFromDB(path = ''){
    let response = await fetch(BASE_URL + path + '.json');
    let responseToJson = await response.json();
    clearMainContent();
    renderDateIdeas(responseToJson);
    enableSwipeToDelete();
}

async function addDateIdeaToDB() {
    const input = document.getElementById('input').value;
    if (input.trim() === '') return;
    const finalInput = addRandomEmoji(input);
    await fetch(BASE_URL + '.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalInput)
    });
    document.getElementById('input').value = '';
    loadDateIdeas();
    document.getElementById('overlay').style.display = 'none';
}

async function deleateFromDB(key) {
    await fetch(`${BASE_URL}${key}.json`, {
        method: 'DELETE'
    });
    loadDateIdeas();
}
