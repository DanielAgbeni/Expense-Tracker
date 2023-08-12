/** @format */

import ExpensesForm from './ExpensesForm'
import './ExpenseItem.css'

const NewExpense = (props) => {
	const saveExpense = (newExpenseData) => {
		const expenseData = {
			...newExpenseData,
			id: crypto.randomUUID(),
		}
		props.addExpense(expenseData)
	}

	return (
		<div>
			<ExpensesForm saveExpenseData={saveExpense} />
		</div>
	)
}
export default NewExpense
