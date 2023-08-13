/** @format */
import ExpensesFilter from './ExpenseFilter'
import Card from './Card'
import './ExpenseItem.css'
import ExpensesList from './ExpenseList'
import { useState } from 'react'
import ExpenseChart from './ExpenseChart'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2023')
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})
	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpenseChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	)
}

export default Expenses
