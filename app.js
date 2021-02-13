

const noun1Input = document.getElementById('noun1-input');
const noun2Input = document.getElementById('noun2-input');
const adjective1Input = document.getElementById('adjective1-input');
const verb1Input = document.getElementById('verb1-input');
const adjective2Input = document.getElementById('adjective2-input');
const verb2Input = document.getElementById('verb2-input');

let noun1Output = document.getElementById('noun1-output');
let noun2Output = document.getElementById('noun1-output');
let adjective1Output = document.getElementById('noun1-output');
let verb1Output = document.getElementById('noun1-output');
let adjective2Output = document.getElementById('noun1-output');
let verb2Output = document.getElementById('noun1-output');



function sync(noun1Input, noun2Input, adjective1Input, verb1Input, adjective2Input, verb2Input){
    noun1Output.value = noun1Input.value;
    noun2Output.textContent = noun2Input.value;
    adjective1Output.textContent = adjective1Input.value;
    verb1Output.textContent = verb1Input.value;
    adjective2Output.textContent = adjective2Input.value;
    verb2Output.textContent = verb2Input.value;
}

const button = document.getElementById('buttonId');
button.addEventListener('click', () => {
    sync(noun1Input, noun2Input, adjective1Input, verb1Input, adjective2Input, verb2Input);
});


/* noun2Input.value = document.getElementById('noun2-output');
adjective1Input.value = document.getElementById('adjective1-output');
verb1Input.value = document.getElementById('verb1-output');
adjective2Input.value = document.getElementById('adjective2-output');
verb2Input.value = document.getElementById('verb2-output'); */