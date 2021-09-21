import React from 'react'
import PropTypes from 'prop-types' 

export const TransactionTable = props => {
    const { transactions } = props
    return (
        <div>
            <table>
                <caption>Transaction History</caption>
                <thead>
                    <th>
                        <td>ID</td>
                        <td>Date</td>
                        <td>Sum</td>
                        <td>Type</td>
                    </th>
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
