// import functions and grab DOM elements
const input1 = document.getElementById('verb1');
const input2 = document.getElementById('era');
const input3 = document.getElementById('adjective1');
const input4 = document.getElementById('name1');
const input5 = document.getElementById('noun1');
const input6 = document.getElementById('adj-adj-noun');
const input7 = document.getElementById('adjective2');
const input8 = document.getElementById('verb-in-action');
const input9 = document.getElementById('verb-in-action2');
const input10 = document.getElementById('adjective3');
const button = document.getElementById('button-madlib');

const output1 = document.getElementById('span-verb1');
const output2 = document.getElementById('span-era');
const output3 = document.getElementById('span-adjective1');
const output4 = document.getElementById('span-name1');
const output5 = document.getElementById('span-noun1');
const output6 = document.getElementById('span-adj-adj-noun');
const output7 = document.getElementById('span-adjective2');
const output8 = document.getElementById('span-verb-in-action');
const output9 = document.getElementById('span-verb-in-action2');
const output10 = document.getElementById('span-adjective3');


// initialize state
button.addEventListener('click', () => {
    output1.innerHTML = input1.value;
    output2.innerHTML = input2.value;
    output3.innerHTML = input3.value;
    output4.innerHTML = input4.value;
    output5.innerHTML = input5.value;
    output6.innerHTML = input6.value;
    output7.innerHTML = input7.value;
    output8.innerHTML = input8.value;
    output9.innerHTML = input9.value;
    output10.innerHTML = input10.value;
});




// set event listeners to update state and DOM





