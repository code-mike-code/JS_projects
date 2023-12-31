const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const currentYear = document.querySelector('.current-year')

const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.',
]

// aktualny dzień
const day = new Date()
currentDay.textContent = day.toLocaleString('pl', { weekday: 'long' })

// console.log(facts);
const showRandomFact = () => {
	const number = Math.floor(Math.random() * (facts.length - 1))
	// console.log(number);

	funFact.textContent = facts[number]
}

showRandomFact()

//  aktualny rok - opcja przydatna np. do footera strony
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	currentYear.innerText = year
}
handleCurrentYear()
