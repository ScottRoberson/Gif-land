const APIKey = config.API_Key;
const results = document.querySelector('.results');
const trendAPI = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&limit=5&rating=G`


let trendGifs = [];
//  fetch(trendAPI)
//   .then(res => res.json())
//   .then(data => console.log(data.data[0].url));

  async function getTrendingGifs(){
    const response = await fetch(trendAPI);
    const json = await response.json();
    console.log(json.data);

    json.data.forEach(trendGif => {
      const section = document.querySelector('.trending');
      const image = document.createElement('img');
      image.classList.add('trending-gifs');
      image.src='Mockup/test-gif.webp';
      section.appendChild(image);
    })
  }
getTrendingGifs();


  // console.log(trendGifs);

//Search End point 
//https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q${input.value}=&limit=25&offset=0&rating=G&lang=en

//Trending
//https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&limit=25&rating=G
//140 x 140


// const gifs = [];

// fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&limit=25&rating=G`)
//   .then(res => res.json())
//     .then(data => gifs.push(...data.data));

//     console.log(gifs);



