const obtenerImg = async( category ) =>{
    const query = category;
    const apiKey = 'LmB2TIZWZnWHyi8hZy2uU9NuB3UjHg33';
    //encodeURI funciona para transformar strings simples a links
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(query)}&limit=30&api_key=${apiKey}`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    // console.log(gifs);

    return gifs;
}

export default obtenerImg;