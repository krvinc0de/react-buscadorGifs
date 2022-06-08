import React, { useState, useEffect } from 'react';
import obtenerImg from '../helpers/getGifs';

const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        obtenerImg(category)
            .then(gifs => {
                setState({
                    data: gifs,
                    loading: false
                })
            });
    }, [category])

    return state; 
}


export default useFetchGifs;