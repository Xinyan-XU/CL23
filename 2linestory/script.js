// 1. identify and select the button
// 2. listen to event click on the button
// 3. change the blank img to the clue img

let button_1;
let button_2;
let img_1;
let img_2;
let clue_1;
let clue_2;

// DOMContentLoaded to ensure that your JavaScript code runs only after the HTML document has been loaded
document.addEventListener('DOMContentLoaded', function() {
    button_1 = document.getElementById('clue_1');
    button_2 = document.getElementById('clue_2');
    img_1 = document.getElementById('clue_1_img');
    img_2 = document.getElementById('clue_2_img');
    clue_1 = document.getElementById('clue_1');
    clue_2 = document.getElementById('clue_2');
    // console.log(button_1, button_2, img_1, img_2, clue_1, clue_2);

    // show clue img on click
    button_1.addEventListener('click', () => {
        console.log('button 1 clicked');
        if (img_1.classList.contains('hide')) {
            img_1.classList.remove('hide');
        } else {
            img_1.classList.add('hide');
        }
    });

    button_2.addEventListener('click', () => {
        console.log('button 2 clicked');
        if (img_2.classList.contains('hide')) {
            img_2.classList.remove('hide');
        } else {
            img_2.classList.add('hide');
        }
    });

    // scroll to the content
    button_1.addEventListener('click', function () {
        clue_1.scrollIntoView({ behavior: 'smooth' });
    });

    button_2.addEventListener('click', function () {
        clue_2.scrollIntoView({ behavior: 'smooth' });
    });
});
