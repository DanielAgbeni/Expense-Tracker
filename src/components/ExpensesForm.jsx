/** @format */
import { useState } from 'react'
import './ExpenseItem.css'

const ExpensesForm = (props) => {
	const [setTitle, setNewTitle] = useState('')
	const [setAmount, setNewAmount] = useState('')
	const [enterNewDate, setNewDate] = useState('')

	const tileChange = (e) => {
		setNewTitle(e.target.value)
	}
	const amountChange = (e) => {
		setNewAmount(e.target.value)
	}
	const setDate = (e) => {
		setNewDate(e.target.value)
	}
	let submit = (e) => {
		e.preventDefault()
		const expenseData = {
			title: setTitle,
			amount: +setAmount,
			date: new Date(enterNewDate),
		}
		props.saveExpenseData(expenseData)
		setNewTitle('')
		setNewAmount('')
		setNewDate('')
	}

	const formatNumber = (setAmount) => {
		const formatter = new NumberFormat('en-NG', { style: 'currency' })
		return formatter.format(setAmount)
	}

	return (
		<div className='new-expense'>
			<form onSubmit={submit} className=''>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input
							value={setTitle}
							onChange={tileChange}
							type='text'
							required
						/>
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							value={setAmount}
							onChange={amountChange}
							type='number'
							min='0.01'
							step='0.01'
							required
						/>
					</div>
					<div className='new-expense__control'>
						<label>Date</label>
						<input
							value={enterNewDate}
							onChange={setDate}
							type='date'
							min='2020-01-01'
							max='2030-12-31'
							required
						/>
					</div>
				</div>
				<button className='new-expense__actions' type='submit'>
					Add Expense
				</button>
			</form>
		</div>
	)
}

export default ExpensesForm
