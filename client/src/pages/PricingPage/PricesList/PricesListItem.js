import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import styles from './PricesList.module.sass'

function PricesListItem(props) {
    const {priceOptions:{rateName, description, price: {amount, currency}, options}, color} = props
    return (
        <li className={styles.priceBlockContainer} style={{ borderColor: color}}>
            <div className={styles.priceBlockHeader}  style={{ borderColor: color}}>
               <h3 style={{color: color}}>{rateName}</h3>
               <p className={styles.priceDescription}>{description}</p>
               <div style={{color: color}}>{currency} {amount}</div>
            </div>
            <ul className={styles.optionsList}>{
                options.map((option, i) => (<li key={i} data-tooltip={option.popupText}>{option.optionText}</li>)
                )}
            </ul>

            <Link
                to='#'
                style={{ backgroundColor: color }}
                className={styles.startLink}
            > <i className='fas fa-check' />  Start
            </Link>

            
        </li>
    )
}

export default PricesListItem
