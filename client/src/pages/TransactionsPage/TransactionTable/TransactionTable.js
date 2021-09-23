import React from 'react'
import PropTypes from 'prop-types' 
import styles from './TransactionTable.module.sass'

export const TransactionTable = props => {
    const { transactions } = props
    
    return (
        <div className={styles.transactionTableContainer}>
            <table>
                <caption>Transaction History</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Sum</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map( ({id, date, amount, type}) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{date}</td>
                            <td>{amount}</td>
                            <td>{type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

TransactionTable.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          date: PropTypes.string,
          type: PropTypes.string,
          amount: PropTypes.number
        }).isRequired
      )
}

export default TransactionTable
