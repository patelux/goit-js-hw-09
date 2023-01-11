import Notiflix from 'notiflix';

const inputFormEl = document.querySelector('.form');
const inputFirstDelayEl = document.querySelector('input[name="delay"]');
const inputDelayStepEl = document.querySelector('input[name="step"]');
const inputAmountEl = document.querySelector('input[name="amount"]');

inputFormEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  
let delay = Number(inputFirstDelayEl.value);
let step = Number(inputDelayStepEl.value);
let amount = Number(inputAmountEl.value);
// console.log(delay, step, amount);
event.preventDefault();
for (let i=1; i <= amount; i += 1) {
  createPromise(i, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  })
  .catch(({ position, delay}) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  });
  delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
