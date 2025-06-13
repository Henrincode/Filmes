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

// const allFilms = filmes => {
//     filmes.forEach((filmeAtual, codigo) => {
//         document.querySelector(".lista-filmes").innerHTML += `
//         <div class="card-filme">
//             <img src="img/${filmeAtual.foto}">
//             <h1>Sala ${++codigo}</h1>
//             <h3>${filmeAtual.titulo}</h3>
//             <span>⭐ ${filmeAtual.avaliacao}<span>
//         </div>
//     `})
// }
// allFilms(filmes)


async function fnPegarFilmes() {
    const filmes = await fetch("dados-filmes.json")
    const filmesTratados = await filmes.json()
    
    filmesTratados.slice(0,4).forEach((filmeAtual, codigo) => {
        document.querySelector(".lista-filmes").innerHTML += `
        <div class="card-filme">
            <img src="${filmeAtual.foto}">
            <h1>Sala ${codigo + 6}</h1>
            <h3>${filmeAtual.titulo}</h3>
            <span>⭐ ${filmeAtual.avaliacao}<span>
        </div>
    `})
}

fnPegarFilmes()