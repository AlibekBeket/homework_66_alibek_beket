console.log('task 1');
let lineOrder = [3, 5, 2, 6, 4, 1];
for(let i = 0; i < lineOrder.length; i++) {
    console.log(document.getElementById(`string-${lineOrder[i]}`).childNodes[0].textContent);
};
//task 2
const elements = document.querySelectorAll('.element');
for(let i = 0; i < elements.length; i++) {
    if (i < 3){
        elements[i].style.color = 'red';
    }
    else if (i < 6) {
        elements[i].style.color = 'green';
    };
};
//task 3 bonus
const container = document.getElementById('container');
for(let i = 0; i < 5; i++) {
    const element = document.createElement('div');
    element.className = 'element';
    const text = document.createElement('span');
    text.innerText = `${i + 1}`;
    text.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    element.innerText = 'Element ';
    element.append(text);
    container.append(element);
};