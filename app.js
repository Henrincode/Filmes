// alert("")

// prompt("")

// console.error("")
// console.warn("")

// viacep.com.br/ws/13454215/json/

// api.github.com/users?since=XXX

let filmes = [{
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
}]

function fnMontarCartao(filmeAtual){
    document.querySelector(".lista-filmes").innerHTML = `
        <div class="card-filme">
            <img src="img/${filmeAtual.foto}">
            <h3>${filmeAtual.titulo}</h3>
            <span>⭐ ${filmeAtual.avaliacao}<span>
        </div>
        `
}

fnMontarCartao(filmes[0])
fnMontarCartao(filmes[1])


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