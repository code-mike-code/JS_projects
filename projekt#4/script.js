const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')

// zmienne globalne
let fahrenheit
let celsius

const funSwap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
	}
}

// T(°F) = T(°C) × 1,8 + 32  - wzór na farenheita
const fahrToCel = () => {
	fahrenheit = converter.value * 1.8 + 32
	result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(2)}°F`
    converter.value = ''
	
}

// T(°C) = (T(°F) - 32) / 1,8  - wzór na celcjusza
const celToFahr = () => {
	celsius = (converter.value - 32) / 1.8
	result.textContent = `${converter.value}°F to ${celsius.toFixed(2)}°C`
    converter.value = ''
	
}

changeBtn.addEventListener('click', funSwap)
convBtn.addEventListener('click', fahrToCel)

