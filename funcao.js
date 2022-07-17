let tagBody    = document.getElementsByTagName("body")[0];
let tagMain    = document.createElement("main");
let tagH1      = document.createElement("h1");
let tagDiv     = document.createElement("div");
let tagUl      = document.createElement("ul");
let tagUlPrice = document.createElement("ul");



tagBody.appendChild(tagMain);
tagMain.appendChild(tagH1);
tagMain.appendChild(tagDiv);
tagDiv.appendChild(tagUl);
tagDiv.appendChild(tagUlPrice);


tagH1.innerText = "Mercado Virtual"




function itens(produtos){
    let h2Name = document.createElement("h2");
    h2Name.classList.add("h2name");
    tagUl.appendChild(h2Name);
    h2Name.innerText = "Item";
    for(let i = 0; i < produtos.length; i++){
        let li  = document.createElement("li")
        tagUl.appendChild(li);
        li.innerText = produtos[i].name
        li.classList.add("li")
    }
}

itens(produtos)



function price(produtos){
    let h2Price = document.createElement("h2");
    h2Price.classList.add("h2price");
    tagUlPrice.appendChild(h2Price);
    h2Price.innerText = "Preço";
    for(let i = 0; i < produtos.length; i++){
        let li = document.createElement("li")
        tagUlPrice.appendChild(li);
        li.innerText = produtos[i].price.toLocaleString("pt-br", { style: "currency",  currency: "BRL",  })
        li.classList.add("liprice");
    }

}

price(produtos)


const button = document.createElement("button")
button.innerText = "Finalizar Compra";
button.classList.add("button");
tagMain.appendChild(button)


function soma(produtos){
    let total = 0
    for(let i = 0; i<produtos.length; i++){
        total += produtos[i].price
    }
    let h3 = document.createElement("h3");
    tagMain.appendChild(h3);
    h3.innerText = `Valor Total: ${total.toLocaleString("pt-br", { style: "currency",  currency: "BRL",  })}`;
    h3.classList.add("h3");
    
    return total ;

}
soma(produtos)