console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = 'Loading...';
messageTwo.textContent = '';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const { value: locationWeather } = search;

    fetch(`http://localhost:3000/weather?address=${locationWeather}`).then((response) => {
    response.json().then(({ error, location, forecast }) => {
        if (error) {
            console.log(error);
            messageOne.textContent = error;
        } else {
            messageOne.textContent = location;
            messageTwo.textContent = forecast;
        }
    });
});
});
