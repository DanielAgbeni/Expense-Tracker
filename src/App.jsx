/** @format */
import { useEffect, useState } from 'react'
import './App.css'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense'
import ReactGA from react-ga

const TRACKING_ID = 'G-XHY96KT5Y3'
ReactGA.initialize(TRACKING_ID)

const initExpense = []

const App = () => {
	const [expenses, setExpenses] = useState(initExpense)
	// Load expenses from local storage when the component mounts
	useEffect(() => {
		const storedExpenses = localStorage.getItem('expenses')
		if (storedExpenses) {
			setExpenses(JSON.parse(storedExpenses))
		}
	}, [])

	// Save expenses to local storage whenever the expenses state changes
	useEffect(() => {
		localStorage.setItem('expenses', JSON.stringify(expenses))
	}, [expenses])
	const addExpenseForm = (expense) => {
		setExpenses((prevExpenses) => [expense, ...prevExpenses])
	}
	return (
		<>
			<div>
				<NewExpense addExpense={addExpenseForm} />
				<Expenses items={expenses} />
			</div>
		</>
	)
}

export default App
