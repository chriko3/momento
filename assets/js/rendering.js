function renderDateIdeas(responseToJson) {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML += elementAddButtonTemplate();
    mainContent.innerHTML += elementBackButtonTemplate();

    const keys = Object.keys(responseToJson);
    for (let i = keys.length - 1; i >= 0; i--) {
        const key = keys[i];
        const dateIdea = responseToJson[key];

        mainContent.innerHTML += elementTemplate(dateIdea, key);
        applyFullWidthEveryFourth(mainContent);
    }
}

function applyFullWidthEveryFourth(mainContent) {
    const elements = mainContent.querySelectorAll('.element');
    const lastIndex = elements.length - 1;

    if ((lastIndex + 1) % 10 === 0) {
        elements[lastIndex].classList.add('full-width');
    }
}

function renderLoveBox2() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML += elementBackButtonTemplate();

    let backButton = document.getElementById('backButton');
    backButton.classList.add('full-width');

    const startDate = new Date('2025-11-28');

    mainContent.innerHTML += elementNormalTemplate('28.11.25 🫶🏻');

    mainContent.innerHTML += elementNormalTemplate('<span id="relationshipCounter" class="full-width"></span>');

    mainContent.innerHTML += elementNormalTemplate('3.11.25 Erstes Date 👫🏼' + iframeTemplate());
    const elements = mainContent.querySelectorAll('.element');
    const lastElement = elements[elements.length - 1];
    lastElement.classList.add('full-width');

    mainContent.innerHTML += elementNormalTemplate(`
    6.11.25 Erstes mal Kino 🎥
    <img src="assets/img/kino.png" alt="Kino" class="">
    `);

    mainContent.innerHTML += elementNormalTemplate(`
    10.11.25 Erster Kuss 😘
    <img src="assets/img/smarties.png" alt="Smarties" class="">
    `);

    mainContent.innerHTML += elementNormalTemplate(`
    7.12.25 Nini Eltern 🍫`);

    mainContent.innerHTML += elementNormalTemplate(`
    13.12.25 Chrisi Eltern 💐`);

    mainContent.innerHTML += elementNormalTemplate(`
    13.12.25 Gemeinsam gekocht 🍽️ 
    <img src="assets/img/food.png" alt="Essen" class="">
    `);
    const elements3 = mainContent.querySelectorAll('.element');
    const lastElement3 = elements3[elements3.length - 1];
    lastElement3.classList.add('full-width');

    mainContent.innerHTML += elementNormalTemplate(`
    1.1.26 Silvesterkuss 🎉`);

    mainContent.innerHTML += elementNormalTemplate(`
    14.02.26 El Picoso 🌵`);

    mainContent.innerHTML += elementNormalTemplate(`
    Viele weitere gemeinsame Momente warten auf uns 🌟
    <img src="assets/img/us.png" alt="Wir" class="">
    `);
    const elements2 = mainContent.querySelectorAll('.element');
    const lastElement2 = elements2[elements2.length - 1];
    lastElement2.classList.add('full-width');

    const units = ['Tage', 'Wochen', 'Stunden', 'Minuten'];
    let index = 0;
    const counter = document.getElementById('relationshipCounter');

    function updateRelationshipCounter() {
        const now = new Date();
        const diffMs = now - startDate;

        let text = '';
        switch (units[index]) {
            case 'Tage':
                const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                text = `${days} Tage 💓`;
                break;
            case 'Wochen':
                const weeks = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
                text = `${weeks} Wochen 💓`;
                break;
            case 'Stunden':
                const hours = Math.floor(diffMs / (1000 * 60 * 60));
                text = `${hours} Stunden 💓`;
                break;
            case 'Minuten':
                const minutes = Math.floor(diffMs / (1000 * 60));
                text = `${minutes} Minuten 💓`;
                break;
        }

        counter.textContent = text;
        index = (index + 1) % units.length;
    }

    updateRelationshipCounter();
    setInterval(updateRelationshipCounter, 1500);
}

function renderPhotobooth(){
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';

    mainContent.innerHTML += elementBackButtonTemplate();
    const elements = mainContent.querySelectorAll('.element');
    const lastElement = elements[elements.length - 1];
    lastElement.classList.add('full-width');
    
    mainContent.innerHTML += elementNormalTemplate(`
        <video id="video" autoplay playsinline></video>
        <div id="countdown"></div>
    `);
    const elements2 = mainContent.querySelectorAll('.element');
    const lastElement2 = elements2[elements2.length - 1];
    lastElement2.classList.add('full-width');
   
    mainContent.innerHTML += elementNormalTemplate(`
        <a id="startPhotobooth">
            Start 🖼️
        </a>
    `, 'startPhoto()');

    initPhotobooth();
}