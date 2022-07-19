export const getGifs = async (category) => {
    const apiKey = '9wUvFnEcxbEUphm91lYCYlEK3GrLlJoy';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    console.log(typeof gifs);
    console.log(gifs);

    return gifs
}