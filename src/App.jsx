/** @format */
import { useEffect, useState } from 'react'
import './App.css'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense'

const initExpense = []

const App = () => {
	const [expenses, setExpenses] = useState(initExpense)
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
