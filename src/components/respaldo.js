import React, { useEffect, useState } from 'react';
import obtenerImg from '../helpers/getGifs';
import GiftGridItem from './GiftGridItem';

const GiftGrid = ({category}) => {

    const [images, setImages] = useState([]);

        //se ejecuta solo una vez cuando el componente es renderizado 
    useEffect( () => {
        obtenerImg(category)
            .then(gifs => setImages(gifs))
    }, [category]);



// obtenerImg();
    return(
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                    {
                        images.map( img => {
                            return(
                                <GiftGridItem 
                                    key={img.id}
                                    //otra forma de enviar todo el objeto
                                    {...img}
                                />
                            )
                        })
                    }
            </div>
        </>
    );

}

export default GiftGrid;