export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CWmtl1zSXKFV2C1bzDkixvFksoZF2uNM&q=${category}&limit=6`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    console.log('entropy', gifs);
    return gifs;
  };