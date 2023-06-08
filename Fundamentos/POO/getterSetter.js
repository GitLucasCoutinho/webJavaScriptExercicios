const sequencia = {
    _valor: 1, //convencao que essa variavel e pretendida ser acessada internamente 
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia,valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
/*
[Running] node "c:\Projetos\CWM\POO\getterSetter.js"
1 2
3 4
900 901
*/