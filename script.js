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

    const modeCheck = () => {
        document.getElementById('switch').onclick = function() {
            var chk = document.getElementById('switch');
            if (chk.checked) {
                document.querySelectorAll('.cards').forEach(el => el.classList.toggle('train-state'))
                document.getElementById('switch').classList.toggle('colored');
            }else{
                document.querySelectorAll('.cards').forEach(el => el.classList.toggle('train-state'))
                document.getElementById('switch').classList.toggle('colored');
            }
        }
    }

    modeCheck()
}