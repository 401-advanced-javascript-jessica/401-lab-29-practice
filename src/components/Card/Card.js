import React from 'react';
import PropTypes from 'prop-types';
import { If } from '../if/index';

const Card = (props) => {
  const { card } = props;
  return (
        <div>
            <div className="card">
                <If condition={card.title}>
                    <header><h3>{card.title}</h3></header>
                </If>

                <div className="content">{card.copy}</div>
                <figure>
                    <img src={card.media.href} alt={card.media.alt} />
                    <figcaption>{card.media.title}</figcaption>
                </figure>
                <nav className="links">
                    <ul>
                        {card.links.map((link, i) => (
                            <li key={i}>
                                <a className={link.type}
                                   href={link.href}
                                   title={link.title}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
