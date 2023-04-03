console.log('task 1')
let lineOrder = [3, 5, 2, 6, 4, 1]
for(let i = 0; i < lineOrder.length; i++) {
    console.log(document.getElementById(`string-${lineOrder[i]}`).childNodes[0].textContent);
};