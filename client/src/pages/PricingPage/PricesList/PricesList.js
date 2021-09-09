import React from 'react'
import PricesListItem from './PricesListItem'
import styles from './PricesList.module.sass'
import prices from './prices.json'

const colorPricesMap = [
    'rgb(226,186,151)', 
    'rgb(233,191,100)', 
    'rgb(100,100,100)', 
    'rgb(60,213,211)'
]

function PricesList() {
    return (        
            <ul className={styles.pricesContainer}>
                {prices.map((price, i) => (
                    <PricesListItem key={i} priceOptions={price} color={colorPricesMap[i]}/>
                ))}
            </ul>        
    )
}

export default PricesList
