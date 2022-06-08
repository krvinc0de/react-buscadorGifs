import React, {useState} from 'react';
import AddCategory from './AddCategory';
import GiftGrid from './GiftGrid';

const GiftExpertApp = () => {

    const [categories, setCategorie] = useState(['Gifs bonitos']);

    // const categories = [
    //     'one punch',
    //     'dragon boll',
    //     'pubg'
    // ];

    // const agregar = () =>{
    //     tocar boton y agregar elemento al arreglo con el usestate
    //     console.log('elemento agregado');
    //     setCategorie([...categories, 'sponge bob']);
    //      setCategorie(cats => [...cats, 'sponge Bob']);
    // }

    return(
        <>
            <h2>Buscador de gifs</h2>
            <AddCategory setCategories={setCategorie}/>
            <hr/>
            <ol>
                {
                    //lista desde un array
                    categories.map((category) => {
                        // return <li key={category}>{category}</li>
                        return (
                        <GiftGrid
                        key={category}
                        category={category}
                        />
                        );
                    })
                }
            </ol>

        </>
    );
}

export default GiftExpertApp;