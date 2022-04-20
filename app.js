const navigation = document.querySelector('.navigation');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    navigation.classList.toggle('opened');
    button.classList.toggle('opened');
})