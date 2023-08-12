/** @format */
import { useEffect, useState } from 'react'
import './App.css'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense'

const initExpense = [
	{ id: 'e1', title: 'Book', amount: 56.21, date: new Date(2020, 7, 4) },
]

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
