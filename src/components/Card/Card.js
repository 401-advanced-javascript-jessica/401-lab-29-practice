import React from 'react';

const Card = (props) => {
    let card = props.card;
    return (
        <div>
            <div className="card">
                <header><h3>{card.title}</h3></header>
                <div className="content">{card.copy}</div>
                <figure>
                    <img src={card.media.href} alt={card.media.alt} />
                    <figcaption>{card.media.title}</figcaption>
                </figure>
                <nav className="links">
                    <ul>
                        {card.links.map( (link,i) => (
                            <li key={i}><a className={link.type} href={link.href} title={link.title}>{link.title}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Card;