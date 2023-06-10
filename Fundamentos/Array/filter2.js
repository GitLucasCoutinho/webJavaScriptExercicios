Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
}




const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true }
    ,{ nome: 'ipad Pro', preco: 4199, fragil: true }
    ,{ nome: 'Copo de vidro', preco: 12.49, fragil: true }
    ,{ nome: 'Copo de Plastico', preco: 18.99, fragil: false}
    ]
    
    console.log(produtos.filter2(function(p){
        return false
    }))
    
    const caro = produto => produto.preco >= 500
    const fragil = produto => produto.fragil 
    
    console.log(produtos.filter2(caro).filter(fragil)) 
    
    /*
    [Running] node "c:\Users\windev\Documents\GitHub\webJavaScriptExercicios\Fundamentos\array\filter01.js"
    []
    [
      { nome: 'Notebook', preco: 2499, fragil: true },
      { nome: 'ipad Pro', preco: 4199, fragil: true }
    ]
    
    */