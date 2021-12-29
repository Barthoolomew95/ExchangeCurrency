const amountOne = document.querySelector('.amount-one')
const currencyOne = document.querySelector('#currency-one')
const amountTwo = document.querySelector('.amount-two')
const currencyTwo = document.querySelector('#currency-two')
const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const calculate = () => {
	fetch(`https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`)
		.then(res => res.json())
		.then(data => {
			amountTwo.value = (data.result * amountOne.value).toFixed(2)
			rateInfo.textContent = `${amountOne.value} ${currencyOne.value} to : ${amountTwo.value} ${currencyTwo.value}`
		})
}

const swap = () => {
	const oldCurrency = currencyOne.value
	currencyOne.value = currencyTwo.value
	currencyTwo.value = oldCurrency
	calculate()
}

calculate()
currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
amountTwo.addEventListener('input', calculate)
swapBtn.addEventListener('click', swap)
