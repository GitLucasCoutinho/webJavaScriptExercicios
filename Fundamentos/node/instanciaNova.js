// uma factory retorna uma nova instancia / um novo objeto -- nao fica no cache por ser um novo obj

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}