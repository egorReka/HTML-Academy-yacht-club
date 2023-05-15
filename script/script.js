// преключатель темы
let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');

themeButtonDark.onclick = function() {
    document.body.classList.add('dark');
    themeButtonLight.classList.remove('active');
    themeButtonDark.classList.add('active');
};

themeButtonLight.onclick = function() {
    document.body.classList.remove('dark');
    themeButtonLight.classList.add('active');
    themeButtonDark.classList.remove('active');
};

// преключатель шрифта
let fontButtonSerif = document.querySelector('.font-button-serif');
let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');

fontButtonSerif.onclick = function() {
    document.body.classList.add('serif');
    fontButtonSerif.classList.add('active');
    fontButtonSansSerif.classList.remove('active');
};

fontButtonSansSerif.onclick = function() {
    document.body.classList.remove('serif');
    fontButtonSerif.classList.remove('active');
    fontButtonSansSerif.classList.add('active');
};

// кнопка раскрыть текст
let articleSections = document.querySelectorAll('.blog-article.short');

for (let articleSection of articleSections) {
    articleSection.querySelector('.more').onclick = function() {
        articleSection.classList.remove('short')
        console.log('кнопка нажата');
    }
};

// смена раскладки карточек
let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');

let cards = document.querySelector('.cards');

cardViewButtonGrid.onclick = function() {
    cards.classList.remove('list');
    cardViewButtonGrid.classList.add('active');
    cardViewButtonList.classList.remove('active');
};

cardViewButtonList.onclick = function() {
    cards.classList.add('list');
    cardViewButtonGrid.classList.remove('active');
    cardViewButtonList.classList.add('active');
};

// слайдер 
let mainPhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for (let preview of previews) {
    preview.onclick = function(evt) {
        evt.preventDefault()
        mainPhoto.src = preview.href;

        let currentItem = document.querySelector('.preview-list a.active-item');
        currentItem.classList.remove('active-item');
        preview.classList.add('active-item');
    }
};