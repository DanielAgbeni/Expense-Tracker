/** @format */
import './ExpenseItem.css'
const ExpenseDate = (props) => {
	if (!(props.date instanceof Date)) {
		console.log(props.date)
		return <div className='expense-date__year'>2023</div>
	}
	const month = props.date.toLocaleString('en-NG', { month: 'long' })
	const day = props.date.toLocaleString('en-NG', { day: '2-digit' })
	const year = props.date.getFullYear()
	return (
		<div className='expense-date'>
			<div className='expense-date__month'>{month}</div>
			<div className='expense-date__year'>{year}</div>
			<div className='expense-date__day'>{day}</div>
		</div>
	)
}

export default ExpenseDate
