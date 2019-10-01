function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
        if (this.idade == 10){
            return
        }
    }, 1000)
}

new Pessoa