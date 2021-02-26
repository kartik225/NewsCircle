// fetch('http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=546e274f94534ec8a946c7d01cf9e939')
// 	.then((res)=>{
// 		return res.json();
// 	}).then((data)=>{
// 		for(var i in data.articles){
// 			document.getElementById('news').innerHTML += `<div class="card" style="width: 18rem;">
// 				<img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
// 					<div class="card-body">
// 						<h5 class="card-title">${data.articles[i].title}</h5>
// 						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// 						<a href="${data.articles[i].url}" class="btn btn-primary">Read More</a>
// 					</div>
// 			</div>`
// 		}
// 	})

const xhr = new XMLHttpRequest();
xhr.open('GET' , 'http://newsapi.org/v2/everything?q=tesla&from=2021-01-26&sortBy=publishedAt&apiKey=015ef5c61ac74e03acb72368addc81ab' , true);
xhr.getResponseHeader('Content-type','application/json')
xhr.onload = function(){
	let a = JSON.parse(this.responseText);
	console.log(a)
}
xhr.send();
