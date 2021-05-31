const removeListenerBtn = document.querySelector('.subtract');
const addListenerBtn = document.querySelector('.add');
const  counterValue = document.querySelector("#value");


// додає 1 до числа в інпут
const increment = () => {
    
    return counterValue.value = Number(counterValue.value) + 1;
};

// віднімає 1 до числа в інпут

const decrement = () => {
    return counterValue.value = Number(counterValue.value) - 1;
};


// запускаємо функції додавання та відніманн по кліку
addListenerBtn.addEventListener('click', increment);
removeListenerBtn.addEventListener('click', decrement)