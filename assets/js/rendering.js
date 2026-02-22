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

function renderLoveBox2(){
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML += elementBackButtonTemplate();

    let backButton = document.getElementById('backButton');
    backButton.classList.add('full-width');

    const targetDate = new Date('2025-11-28');
    mainContent.innerHTML += elementNormalTemplate('28.11.25 🫶🏻');

    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.abs(Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24)));
    mainContent.innerHTML += elementNormalTemplate(`${diffDays} Tage 📆`);

    mainContent.innerHTML += elementNormalTemplate('3.11.25 Erstes Date 👫🏼' + iframeTemplate());
    const elements = mainContent.querySelectorAll('.element');
    const lastElement = elements[elements.length - 1];
    lastElement.classList.add('full-width');

    mainContent.innerHTML += elementNormalTemplate(`
    6.11.25 Kino Good fortune 🎥
    <img src="assets/img/kino.png" alt="Kino" class="">
    `);

    mainContent.innerHTML += elementNormalTemplate(`
    10.11.25 Erster Kuss 😘
    <img src="assets/img/smarties.png" alt="Kino" class="">
    `);

    mainContent.innerHTML += elementNormalTemplate(`
    7.12.25 Nini Eltern 🍫`);
 
    mainContent.innerHTML += elementNormalTemplate(`
    13.12.25 Chrisi Eltern 💐`);

    mainContent.innerHTML += elementNormalTemplate(`
    1.1.26 Silvesterkuss 🎉`);

    mainContent.innerHTML += elementNormalTemplate(`
    14.02.26 El Picoso 🌵`);

    mainContent.innerHTML += elementNormalTemplate(`
    Viele weitere gemeinsame Momente warten auf uns 🌟`);
    const elements2 = mainContent.querySelectorAll('.element');
    const lastElement2 = elements2[elements2.length - 1];
    lastElement2.classList.add('full-width');
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