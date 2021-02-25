fetch('http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=aa247e5f62a04dd080b74d5879f3dba9')
	.then((res)=>{
		return res.json();
	}).then((data)=>{
		for(var i in data.articles){
			document.getElementById('news').innerHTML += `<div class="card" style="width: 18rem;">
				<img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">${data.articles[i].title}</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="${data.articles[i].url}" class="btn btn-primary">Read More</a>
					</div>
			</div>`
		}
		console.log(data)
	})