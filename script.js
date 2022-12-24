
let userName = document.querySelector('#name');
let userMale = document.getElementById('male').value;
let userFemale = document.getElementById('female').value;
let userHeight = document.querySelector('#height');
let userWaist = document.querySelector('#waist');
let result = document.querySelector('#result');
let submit = document.querySelector('#submit');

function count () {
    if (userMale === 'Мужчина') {
       let fatPercentage = Math.floor(64 - (20 * userHeight.value / userWaist.value));
       result.textContent = (userName.value + ", ваш процент жира в организме " + fatPercentage);
    }
    else if (userFemale === 'женщина') {
        fatPercentage = Math.floor(76 - (20 * userHeight.value / userWaist.value));
        result.textContent = (userName.value + ", ваш процент жира в организме " + fatPercentage);
    }

}
