let patternPhone = /^\+996\s\d{3}\s\d{2}\s\d{2}\s\d{2}/
let patternPhone2 = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}/
const phoneInput = document.querySelector('#phone')
const button = document.querySelector('button')
const flag = document.querySelector('#flag')

button.addEventListener('click',() => {
    if (patternPhone.test(phoneInput.value)) {
        flag.innerHTML = `
        <div> Номер - KG</div>
        `
    }else if (patternPhone2.test(phoneInput.value)) {
        flag.innerHTML = `
        <div> Номер - KZ</div>
        `
    }
})