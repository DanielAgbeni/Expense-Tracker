/** @format */
import './ExpenseItem.css'
import ExpenseItem from './ExpenseItem'
const formCurr = (value) =>
	new Intl.NumberFormat(local, {
		style: 'currency',
		currency: 'NGN',
	}).format(value)

const ExpensesList = (props) => {
	let expensesContent = <p>No Expenses Found</p>
	if (props.item.length > 0) {
		expensesContent = props.item.map((expenses) => (
			<ExpenseItem
				key={expenses.id}
				title={expenses.title}
				amount={formCurr(expenses.amount)}
				date={expenses.date}
			/>
		))
	}
}
export default ExpensesList
