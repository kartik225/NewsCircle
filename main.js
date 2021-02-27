let url = "";

fetch(url)
	.then((res)=>{
		return res.json();
	}).then((data)=>{
		for(var i in data.articles){
			if(data.articles[i].urlToImage != null)
			{
				document.getElementById('news').innerHTML += `<div class="card" style="width: 18rem;">
				<img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">${data.articles[i].title}</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="${data.articles[i].url}" class="btn btn-primary">Read More</a>
					</div>
			</div>`
		}else{
			document.getElementById('news').innerHTML += `<div class="card" style="width: 18rem;">
				<img src="data:image/jpeg;base64,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" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">${data.articles[i].title}</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="${data.articles[i].url}" class="btn btn-primary">Read More</a>
					</div>
			</div>`
		}
		console.log(data)
		}
	})



