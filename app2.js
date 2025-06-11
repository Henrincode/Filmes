async function fnPegarFilmes() {
    const filmes = await fetch("dados-filmes.json")
    console.dir(filmes)
    const filmesTratados = await filmes.json()
    console.dir(filmesTratados)
}

fnPegarFilmes()