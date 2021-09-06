import React from 'react';
import styles from './FaqArticlesList.module.sass';
import CONSTANTS from '../../../constants';
import faqs from './faqs.json';

function FaqArticlesList () {
  
  return (
    <div className={styles.articlesMainContainer}>
      {faqs.map((col, i) => (
        <div key={i} className={styles.ColumnContainer}>
          {col.map((article, j) => (
            <div key={j}>
              <div className={styles.headerArticle}>{article.header}</div>
              <div className={styles.article}>{article.body}</div>
            </div>  
          ))}
          {
            i===1 && (
              <>
                <div className={styles.headerArticle}>
                  I have other questions! How can I get in touch with Squadhelp?
                </div>
                <div className={styles.article}>
                  Check out our <span className={styles.orangeSpan}>FAQs</span> or send
                  us a<span className={styles.orangeSpan}>message</span>. For assistance
                  with launching a contest, you can also call us at <a style={{ textDecoration: 'none' }} href={`tel:${CONSTANTS.CONTACTS.TEL}`}>{CONSTANTS.CONTACTS.TEL}</a> or schedule a
                  <span className={styles.orangeSpan}>Branding Consultation</span>
                </div>
              </>
            )
          }
        </div>
      ))}      
    </div>
  );
}

export default FaqArticlesList;
