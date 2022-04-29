// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// https://www.omdbapi.com/?s=kabhi&apikey=5e67da6

//const url =`https://www.omdbapi.com/?s=${}&apikey=5e67da6`;


let id;

async function searchMovies(){
    try{
        const input_movie=document.getElementById("search").value;

        const res=await fetch(`https://www.omdbapi.com/?s=${input_movie}&apikey=5e67da6`);
        const data=await res.json();
        movies=data.Search
        //console.log(data);
        return movies;
    }catch(err){
        console.log(err);
    }
}

function appendMovies(data){
    //let movies=read("movies");
    //movies.innerHTML="";

    data.forEach(function(ele){
        let showMovie=document.createElement("div");
        showMovie.style.border="1px solid black"
        

        let img=document.createElement("img");
        img.style.width="170px";
        img.style.height="150px";
        img.src=ele.Poster;

        let title=document.createElement("p");
        title.textContent=ele.Title;

        let btn=document.createElement("button");
        btn.innerText="Book Now";

        btn.setAttribute("class","book_now");
        
        //btn.style.href="scripts/checkout.html"
        btn.addEventListener("click",function(){
            bookNow(ele);
        });

        showMovie.append(img,title,btn);
        document.getElementById("movies").append(showMovie);

    });

}

function bookNow(ele){
    console.log(ele)
    let movieArr=JSON.parse(localStorage.getItem("movie"))||[]
    movieArr.push(ele);
    localStorage.setItem("movie",JSON.stringify(movieArr));
    window.location.href="checkout.html"

    
}

async function main(){
    let data = await searchMovies();
    console.log(data)
    if(data == undefined){
        return false;
    }
     appendMovies(data);
}

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func();
    },delay);
}