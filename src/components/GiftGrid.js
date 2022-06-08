import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GiftGridItem from './GiftGridItem';

const GiftGrid = ({category}) => {

    //llamado a un custom hook
    const {data: images, loading} = useFetchGifs(category);
    return(
        <>
            <h3>{category}</h3>

            {loading && <p>Cargando...</p>}

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