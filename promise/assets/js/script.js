window.onload=()=>{
    var product =document.getElementById('product');
    fetch('https://fakestoreapi.com/products',{method:'GET'})
    .then(function(response){
        return (response.json());
    })
    .then(function(data){
    //    for(var i=0;i<data.length; i++){
    //     console.log(data[i]);
    //    }
        for(var i=0;i<data.length; i++){
           let pdata= data[i];
           let pcard = `<div class="col-md-3">
                            <div class="card">
                                <img src="${pdata.image}" alt="" class="card-img-top img-fluid">
                                <div class="card-body">
                                    <h5 class="card-title">${pdata.title}</h5>
                                    <p class="card-text">${pdata.description}</p>
                                    <a href="" class="btn btn-primary">Go Somewhere</a>
                                </div>
                            </div>
                        </div>`

                product.innerHTML+=pcard;
       }
    })
    .catch(err){
            console.log(err.msg);
    }
}