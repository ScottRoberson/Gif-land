const APIKey = config.API_Key;
const results = document.querySelector('.results');
const form = document.getElementById('search-form');


const trendAPI = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&limit=5&rating=G`;
//const searchAPI = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${searchInput.value}&limit=25&offset=0&rating=G&lang=en`;

const searchHard = `https://api.giphy.com/v1/gifs/search?api_key=KNCtKIAZrRgh6wtrppvYzj6sttmmEZL9&q=three stooges&limit=25&offset=0&rating=G&lang=en`

//   async function getTrendingGifs(){
//     const response = await fetch(trendAPI);
//     const json = await response.json();
//     //console.log(json.data[0].images.downsized_medium.url);

//     json.data.forEach(trendGif => {
//       const section = document.querySelector('.trending');
//       const image = document.createElement('img');
//       image.classList.add('trending-gifs');
//       image.src=trendGif.images.downsized_medium.url;
//       section.appendChild(image);
      
//     })
//   }
// getTrendingGifs();


// async function getGifs(){
//  const response = await fetch(searchAPI);
//  const json = await response.json();
//  console.log(json);


// }

form.addEventListener('submit',getSearchGifs);

function getSearchGifs(e){
const searchInput = document.querySelector('#search-input').value;

fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${searchInput}&limit=25&offset=0&rating=G&lang=en`)
.then(res => res.json())
.then(resp_data =>{
  let gifArray = resp_data.data;
  showGifs(gifArray);
});


e.preventDefault();

}

function showGifs(gifArray){
  gifArray.forEach(img =>{
    console.log(img);
  })
}

  









