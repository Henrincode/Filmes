async function fnPegarFilmes() {
    const filmes = await fetch("dados-filmes.json")
    const filmesTratados = await filmes.json()
    filmesTratados.forEach((filmeAtual, codigo) => {
        document.querySelector(".lista-filmes").innerHTML += `
        <div class="card-filme">
            <img src="${filmeAtual.foto}">
            <h1>Sala ${++codigo}</h1>
            <h3>${filmeAtual.titulo}</h3>
            <span>⭐ ${filmeAtual.avaliacao}<span>
        </div>
    `})
}

fnPegarFilmes()