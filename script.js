document.getElementById('btn').addEventListener('click', () => {
    alert('Ты jonka!');
});

let form = document.getElementById('myForm')
let text = document.getElementById('text')

form.addEventListener('submit', function(e) {
    e.preventDefault(); // отменяем перезагрузку
    console.log('Форма отправлена!');
    console.log(`Ты написал ${text.value}`);
});

let element = document.getElementById('element');

element.addEventListener('mousedown', () => {
    element.style.backgroundColor = 'aqua'
});

element.addEventListener('mouseup', () => {
    element.style.backgroundColor = 'green'
});

document.getElementById('input').addEventListener('keyup', (event) => {
    console.log("Отпущена клавиша: " + event.key);
});
