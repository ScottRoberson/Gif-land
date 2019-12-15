const APIKey = config.API_Key;
const form = document.getElementById('search-form');
const loadingImg = document.getElementById('load-img');


  


const trendAPI = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&limit=5&rating=G`;




  async function getTrendingGifs(){
    const response = await fetch(trendAPI);
    const json = await response.json();
    
     json.data.forEach(trendGif => {
       const section = document.querySelector('.trending');
       const image = document.createElement('img');
       image.classList.add('trending-gifs');
       image.src=trendGif.images.downsized_medium.url;
       section.appendChild(image);
      
     })
   }
    getTrendingGifs();


//showLoader();
const showLoader = () =>{
  loadingImg.classList.add('show');

}

const hideLoader = ()=>{
  loadingImg.classList.remove('show');

}

showLoader();

form.addEventListener('submit',getSearchGifs);

function getSearchGifs(e){
const searchInput = document.querySelector('#search-input').value;
const searchAPI = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${searchInput}&limit=50&offset=0&rating=G&lang=en`


fetch(searchAPI)
.then(res => res.json())
.then(resp_data =>{
  
  
  let gifArray = resp_data.data;

  
  showGifs(gifArray);
});


e.preventDefault();

}

function showGifs(gifArray){
  

  gifArray.forEach(gif =>{
    const searchResults = document.querySelector('.results');
       const image = document.createElement('img');
      image.className= 'result-gifs';
       image.src=gif.images.downsized_medium.url;
       searchResults.appendChild(image);

  })

  

  hideLoader();
  
     
  clearFields();
}

function clearFields(){
  document.getElementById('search-input').value = '';
}
  






 











