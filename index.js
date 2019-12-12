const APIKey = config.API_Key;
const results = document.querySelector('.results');
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




form.addEventListener('submit',getSearchGifs);

function getSearchGifs(e){
const searchInput = document.querySelector('#search-input').value;
const searchAPI = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${searchInput}&limit=50&offset=0&rating=G&lang=en`


showLoader();
fetch(searchAPI)
.then(res => res.json())
.then(resp_data =>{
  //hideLoader();
  
  let gifArray = resp_data.data;

  
  showGifs(gifArray);
});


e.preventDefault();

}

function showGifs(gifArray){
  gifArray.forEach(gif =>{
    const results = document.querySelector('.results');
       const image = document.createElement('img');
      image.classList.add('result-gifs');
       image.src=gif.images.downsized_medium.url;
       results.appendChild(image);
       
  })
  clearFields();
}

function clearFields(){
  
  
  document.getElementById('search-input').value = '';
}
  

function showLoader(){
  loadingImg.classList.add('show');
  setTimeout(() =>{
  loadingImg.classList.remove('show');

  },2000);
}

// function hideLoader(){

// }











