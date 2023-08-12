/** @format */
import './ExpenseItem.css'
import ExpenseItem from './ExpenseItem'
const formCurr = (value) =>
	new Intl.NumberFormat(local, {
		style: 'currency',
		currency: 'NGN',
	}).format(value)

const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
	}
	return (
		<ul className='expenses-list'>
			{props.item.map((expenses) => (
				<ExpenseItem
					key={expenses.id}
					title={expenses.title}
					amount={formCurr(expenses.amount)}
					date={expenses.date}
				/>
			))}
		</ul>
	)
}
export default ExpensesList
