function elementTemplate(dateTitel, key){
    return `<div class='element' data-key='${key}'>
        ${dateTitel}
    </div>`;
}

function elementNormalTemplate(input, toDo){
    return `<div class='element' onclick="${toDo}">
        ${input}
    </div>`;
}


function elementAddButtonTemplate(){
  return `<div class='element addButton' id='addButton' onclick='openAddNewDate()'>
    Idee hinzufügen 📝
    </div>`;
}  

function elementBackButtonTemplate(){
  return `
    <div class='element backButton' id='backButton' onclick='goHome()'>
    Zurück 🔙
    </div>`;
}  

function iframeTemplate(){
    return`
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d810.4403797459418!2d16.72002487644746!3d48.34228647153582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sde!2sat!4v1771506364053!5m2!1sde!2sat" 
        width="100%" 
        height="250" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>`;
}