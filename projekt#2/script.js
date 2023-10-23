const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 36

const funUp = () => {
	if (fontSize >= 71) return

	fontSize += 5
	p.style.fontSize = fontSize + 'px'
}
const funDown = () => {
	if (fontSize <= 11) return

	fontSize -= 5
	p.style.fontSize = fontSize + 'px'
}

const funColorChanger = () => {
	// const red = Math.floor(Math.random() * 255)
	// const green = Math.floor(Math.random() * 255)
	// const blue = Math.floor(Math.random() * 255)

	// p.style.color = `rgb(${red}, ${green}, ${blue})`

	p.style.color = `rgb(${(Math.random() * 255) | 0}, ${(Math.random() * 255) | 0}, ${(Math.random() * 255) | 0})`
}

sizeUp.addEventListener('click', funUp)
sizeDown.addEventListener('click', funDown)
colorBtn.addEventListener('click', funColorChanger)
