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
//task 3
const container = document.getElementById('container');
for(let i = 0; i < 5; i++) {
    const element = document.createElement('div');
    element.className = 'element';
    element.innerText = `Element ${i+1}`;
    container.append(element);
};
