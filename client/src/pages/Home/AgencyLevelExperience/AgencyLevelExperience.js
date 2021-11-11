import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AgencyLevelExperience.module.sass';
import articles from './articles.json';

function AgencyLevelExperience () {
  const mapArticles = (article, i) => (
    <article key={i}>
      <i className={article.iconClass} />
      <h3>{article.header}</h3>
      <p>
        {article.body}
        <Link to={article.link}>Learn More.</Link>
      </p>
    </article>
  );

  return (
    <section>
      <h2> Agency Level Experience </h2>
      <div>{articles.map(mapArticles)}</div>
    </section>
  );
}

export default AgencyLevelExperience;
