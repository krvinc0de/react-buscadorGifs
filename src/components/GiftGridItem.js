import React from 'react';
import '../index.css'

const GiftGridItem = ({title, url, id }) => {
    // console.log(title);
    return(
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
}

export default GiftGridItem;
