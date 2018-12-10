import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import expensesTotal from '../selectors/expensesTotal'
import selectedExpenses from '../selectors/expenses'


export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

    return (
        <div className="page-header">
            <div className="content-container">
                <div className="page-header--justify">
                    <h1 className="page-header__title"><span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span> </h1>
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectedExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)