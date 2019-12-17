const APIKey = config.API_Key;
const form = document.getElementById('search-form');
const loadingImg = document.getElementById('load-img');
const searchResults = document.querySelector('.results');


  


const trendAPI = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&limit=5&rating=G`;




   const getTrendingGifs = async ()=> {
    const response = await fetch(trendAPI);
    const json = await response.json();
    
     json.data.forEach(trendGif => {
       const section = document.querySelector('.trending-wrapper');
       const image = document.createElement('img');
       image.classList.add('trending-gifs');
       image.src=trendGif.images.downsized_medium.url;
       section.appendChild(image);
      
     })
   }
    getTrendingGifs();



const showLoader = () =>{
  loadingImg.classList.add('show');

}

const hideLoader = ()=>{
  loadingImg.classList.remove('show');

}

showLoader();

const hidePrev = () => {
  searchResults.innerHTML='';
}

form.addEventListener('submit',getSearchGifs);

const getSearchGifs = (e)=>{
hidePrev();
const searchInput = document.querySelector('#search-input').value;
const searchAPI = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${searchInput}&limit=50&offset=0&rating=G&lang=en`


fetch(searchAPI)
.then(res => res.json())
.then(resp_data =>{
  
  
  let gifArray = resp_data.data;
  

  showGifs(gifArray);
});


  clearFields();

e.preventDefault();

}

const showGifs = (gifArray) =>{
  

  gifArray.forEach(gif =>{
    const searchResults = document.querySelector('.results');
       const image = document.createElement('img');
      image.className= 'result-gifs';
       image.src=gif.images.downsized_medium.url;
       searchResults.appendChild(image);
  

  })

     
  clearFields();
}

const clearFields=()=>{
  document.getElementById('search-input').value = '';
}
  






 











