// alert("")

// prompt("")

// console.error("")
// console.warn("")

// viacep.com.br/ws/13454215/json/

// api.github.com/users?since=XXX

const filmes = [{
    titulo: "Jurassic Park",
    foto: "filme1.webp",
    avaliacao: "10/10",
    duracao: "1h50m"
},{ titulo: "Karate Kid Lendas",
    foto: "filme2.jpg",
    avaliacao: "5/10",
    duracao: "1h30m"
},{ titulo: "Lilo e Stitch",
    foto: "filme3.jpg",
    avaliacao: "7/10",
    duracao: "2h00m"
},{ titulo: "Pecadores",
    foto: "filme4.jpg",
    avaliacao: "9/10",
    duracao: "2h03m"
},{
    titulo: "Como Treinar o seu Dragão",
    foto: "filme5.jpg",
    avaliacao: "9/10",
    duracao: "2h05m"
}]

// function fnMontarCartao(filmeAtual){
//     document.querySelector(".lista-filmes").innerHTML += `
//         <div class="card-filme">
//             <img src="img/${filmeAtual.foto}">
//             <h3>${filmeAtual.titulo}</h3>
//             <span>⭐ ${filmeAtual.avaliacao}<span>
//         </div>
//         `
// }

const allFilms = filmes => {
    filmes.forEach((filmeAtual, codigo) => {
        document.querySelector(".lista-filmes").innerHTML += `
        <div class="card-filme">
            <img src="img/${filmeAtual.foto}">
            <h1>Sala ${++codigo}</h1>
            <h3>${filmeAtual.titulo}</h3>
            <span>⭐ ${filmeAtual.avaliacao}<span>
        </div>
    `})
}

// fnMontarCartao(filmes[0])
// fnMontarCartao(filmes[1])

allFilms(filmes)



// const fnCartao = (filmes) => {
//     filmes.forEach(filme => {
//         console.log(`Título: ${filme.titulo}`)
//         console.log(`Foto: ${filme.foto}`)
//         console.log(`Avaliação: ${filme.avaliacao}`)
//         console.log(`Duração: ${filme.duracao}`)
//         console.log("")
//     });
// }

// fnCartao(filmes)