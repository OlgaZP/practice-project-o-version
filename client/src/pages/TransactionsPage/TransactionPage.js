import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './TransactionPage.module.sass'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import TransactionTable from './TransactionTable/TransactionTable'
import { getTransactionsAction } from '../../actions/actionCreator'


function TransactionPage(props) {

   const { isFetching, error, transactions } = props

   useEffect(() => {
    getTransactions()    
   }, [])
   
    return (
        <>
          <Header />
          <h2>Hello,</h2>
          <section className={styles.transactionTableContainer}>
          <TransactionTable transactions={transactions} />
          </section>
          <Footer />  
        </>
    )
}

const mapStateToProps = state => state.transaction
const mapDispatchToProps = dispatch => ({
  getTransactions: () => dispatch(getTransactionsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage)
