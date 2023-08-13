/** @format */
import './ExpenseItem.css'
const ExpensesFilter = (props) => {
	const dropdownChangeHandler = (e) => {
		props.onChangeFilter(e.target.value)
	}

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select value={props.selected} onChange={dropdownChangeHandler}>
					<option value='2030'>2023</option>
					<option value='2029'>2023</option>
					<option value='2028'>2023</option>
					<option value='2027'>2023</option>
					<option value='2026'>2023</option>
					<option value='2025'>2023</option>
					<option value='2024'>2023</option>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
				</select>
			</div>
		</div>
	)
}
export default ExpensesFilter
