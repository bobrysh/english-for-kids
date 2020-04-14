const mainMenu = document.getElementById('main_menu');
const mainPages = document.getElementById('main_pages');

const actionPage1 = document.getElementById('action1');
const actionPage2 = document.getElementById('action2');
const actionPage3 = document.getElementById('action3');
const adjectivePage = document.getElementById('adjective');
const animalPage1 = document.getElementById('animal1');
const animalPage2 = document.getElementById('animal2');
const weaponsPage = document.getElementById('weapons');
const colorsPage = document.getElementById('colors');

const actionPage1Inner = document.getElementById('action1inner');


window.onload = function init() {
    actionPage1.addEventListener('click', () => {
        mainPages.style = "opacity: 0;"
        actionPage1Inner.style = "opacity: 1;"
    })

    
}