// Ajax request to fetch the data from JSON File

let http= new XMLHttpRequest();

http.open('get','./src/product.json',true);

http.send();

// nOw Catch the response
// check onload EventListener

http.onload =function(){
    //check the ready state and status properties
    if(this.readyState ==4 && this.status ==200){
        let products =JSON.parse(this.responseText);
        console.log(products);

        //an empty variable toadd the incoming data.
           let output = "";
            for(let item of products){
                output += `
                    <div class="product">
                    <img src="${item.image}" alt="${item.image}">
                    <p class="title">${item.title}</p>
                    <p class="description">${item.description}</p>
                    <p class="price">${item.price}</p>
                    <button class="cart" onclick="" type="submit">Add to Cart</button>
                    </div>
                `
            }
            console.log(output);
            document.querySelector(".products").innerHTML= output;
    }
}