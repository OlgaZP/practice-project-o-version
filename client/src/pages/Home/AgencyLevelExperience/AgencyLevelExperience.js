import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AgencyLevelExperience.module.sass';
import articles from './articles.json';

function AgencyLevelExperience () {
  const mapArticles = (article, i) => (
    <article className={styles.article} key={i}>
      <div
        style={{ color: article.color, backgroundColor: article.bgColor }}
        className={styles.iconContainer}
      >
        <i className={article.iconsClass} />
      </div>
      <h3>{article.header}</h3>
      <p>
        {article.body}
        <Link to={article.link}> Learn More.</Link>
      </p>
    </article>
  );

  return (
    <section className={styles.agencySection}>
      <h2> Agency Level Experience </h2>
      <div className={styles.articlesContainer}>
        {articles.map(mapArticles)}
      </div>
    </section>
  );
}

export default AgencyLevelExperience;
