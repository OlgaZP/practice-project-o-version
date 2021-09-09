import React from 'react'
import classNames from 'classnames'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PricesList from './PricesList/PricesList'
import styles from './PricingPage.module.sass'

const selectionProposition = ['Logo', 'Name', 'Tagline', 'Name and Logo', 'Name and Tagline']


function PricingPage() {
    return (
        <>
        <Header />
        <section className={styles.pricingForSection}>
            <h2>Pricing for</h2>
            <select name="selectPriceFor">
                {selectionProposition.map((priceFor, i) => (<option key={i} value="{priceFor}">{priceFor}</option>))}  
            </select>
            <img src="https://image.shutterstock.com/image-vector/video-button-260nw-197201618.jpg" alt="Посетить сайт MDN"></img>
        </section>
        <section className={styles.pricesSection}>
            <PricesList />
        </section>
        <Footer />
        </> 
    )   
}

export default PricingPage
