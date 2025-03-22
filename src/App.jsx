import { useState, useEffect, useId } from 'react'
import { CurrencyBox } from './CurrencyBox'
import useCurrencyInfo from './currency-fetch'
import './App.css'


function App() {
	const [amount, setAmount] = useState(0)
	const [from, setFrom] = useState("usd")
	const [to, setTo]     = useState("brl")
	const [convertedAmount, setConvertedAmount] = useState(0)

	const currencyInfo = useCurrencyInfo(from)
	const currenciesList = Object.entries(currencyInfo)

	const swapCurrencies = () => {
		setFrom(to)
		setTo(from)
		setConvertedAmount(amount)
		setAmount(convertedAmount)

		console.log(amount)
		console.log(convertedAmount)
	}

	const convert = () => {
		setConvertedAmount((amount*currencyInfo[to]).toFixed(3))
	}

	useEffect(() => {

		convert()

	}, [amount, from, to, swapCurrencies])


	return (
		<div className='w-screen h-screen flex flex-col gap-y-20 bg-gradient-to-t justify-center items-center from-emerald-400 to-teal-500'>
			<div className='flex flex-row justify-center items-center gap-x-24'>
				<div>
					<h1 className='text-6xl font-extrabold text-white'>Currency Converter &#128184;</h1>
					<p className='text-xl text-white font-medium m-2 pt-3'>Seamless Currency Swaps: Convert, Compare, Conquer!</p>
				</div>
				<form onSubmit={(e) => {
					e.preventDefault()
					convert()
				}}>
					<div className='flex flex-col gap-y-5 items-center justify-center '>
						<CurrencyBox 
							text="From" 
							initial_value={from} 
							options={currenciesList} 
							amountValue={amount} 
							onAmountChange={(amount)=> setAmount(amount)}
							onCurrencyChange={(currency)=> {setFrom(currency)}}
							amountDisabled = {false}
							currencyDisabled= {false}
							>
						</CurrencyBox>
						<button 
							onClick={swapCurrencies} 
							className='text-3xl relative rounded-2xl flex h-[50px] w-40 items-center justify-center overflow-hidden bg-emerald-300 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-slate-400 before:duration-500 before:ease-out hover:shadow-emerald-800 hover:before:h-56 hover:before:w-56'>
							<img className='relative left-0 w-10 h-10' src="src/assets/up-down-arrows-icon.png" alt="Up and Down Arrows" width={40} height={30}/>
						</button>
						<CurrencyBox 
							text="To" 
							initial_value={to} 
							options={currenciesList} 
							amountValue={convertedAmount}
							onAmountChange={(amount)=> setConvertedAmount(amount)}
							onCurrencyChange={(currency)=> {setTo(currency)}}
							amountDisabled
							>
						</CurrencyBox>
					</div>
				</form>
			</div>
			<footer className='absolute w-screen top-210 left-220 flex flex-row items-center gap-x-5'>
				<p>Made by Marcos Vinícius - 2025</p>
				<a href="https://github.com/MarVinikoi" target='blank'>
					<img className='h-10 w-10' src="src/assets/github-mark.svg" alt="Githu Logo"/>
				</a>
			</footer>

		</div>
	)
}

export default App
