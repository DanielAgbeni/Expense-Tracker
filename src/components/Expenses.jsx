/** @format */
import ExpensesFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import './ExpenseItem.css'
import { useState } from 'react'

const local = Navigator.geolocation

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2023')
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	const formCurr = (value) =>
		new Intl.NumberFormat(local, {
			style: 'currency',
			currency: 'NGN',
		}).format(value)

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{filteredExpenses.length === 0 && <p>No Expenses Found</p>}
				{filteredExpenses.length > 0 &&
					filteredExpenses.map((expenses) => (
						<ExpenseItem
							key={expenses.id}
							title={expenses.title}
							amount={formCurr(expenses.amount)}
							date={expenses.date}
						/>
					))}
			</Card>
		</div>
	)
}

export default Expenses
