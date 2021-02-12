const noun1Input = document.getElementById('noun1-input');
const noun2Input = document.getElementById('noun2-input');
const adjective1Input = document.getElementById('adjective1-input');
const verb1Input = document.getElementById('verb1-input');
const adjective2Input = document.getElementById('adjective2-input');
const verb2Input = document.getElementById('verb2-input');
const button = document.getElementById(buttonId);


function sync(noun1Input, noun2Input, adjective1Input, verb1Input, adjective2Input, verb2Input){
    button.addEventListener('click', () => {
        noun1Input = document.getElementById('noun1-output');
        noun2Input = document.getElementById('noun2-input');
        adjective1Input = document.getElementById('adjective1-input');
        verb1Input = document.getElementById('verb-1-input');
        adjective2Input = document.getElementById('adjective2-input');
        verb2Input = document.getElementById('verb-2-input');
    });
}