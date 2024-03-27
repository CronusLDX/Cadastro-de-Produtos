document.addEventListener("DOMContentLoaded", ()=>{
    const  nomeProduto = document.querySelector("#produtoNome")
    const  valorProduto = document.querySelector("#produtoValor")
    const  produtoDisponivel = document.querySelector("#produtoDisponivel")
    const ProdutoLista = document.querySelector("#produtoLista")
    const  button = document.querySelector("#button")

    button.addEventListener("click",()=>{
       let Disponivel = produtoDisponivel.value
       let Nome = nomeProduto.value
       let Valor = parseFloat(valorProduto.value.replace(',','.'))

       if(isNaN(Valor)){
        alert("Por favor, insira um valor númerico valido")
        return
       }
        if( Disponivel === 'Sim'){
         let NewElement = document.createElement('tr')
         NewElement.classList.add("NewElement")
         NewElement.innerHTML= `
         <td>${Nome}</td>
         <td> R$${Valor.toFixed(2).replace('.',',')}</td>
         <td><button class="delete">X</button></td>
         `
         ProdutoLista.appendChild(NewElement)
         let deleteBtn = NewElement.querySelector(".delete")
         deleteBtn.addEventListener("click",()=>{
                NewElement.remove()      
         })
        }
        else{
            alert("Produto não-disponível para adicionar na tabela")
        }
       
    })

 })