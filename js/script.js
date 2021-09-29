const nacionales = document.querySelector('#nacionales');
const internacionales = document.querySelector('#internacionales');

function renderizarItems() {
    for (let i = 0; i < noticias.length; i++) {
        if (noticias[i].tipoNacional) {
            nacionales.innerHTML += `<div class="item">
        <img src=${noticias[i].imgUrl}>
        <h2>${noticias[i].titulo}</h2>
        <p>${noticias[i].descripcion}</p>
        <p>${noticias[i].fecha}</p>
        </div>`
        } else {
            internacionales.innerHTML += `<div class="item">
        <img src=${noticias[i].imgUrl}>
        <h2>${noticias[i].titulo}</h2>
        <p>${noticias[i].descripcion}</p>
        <p>${noticias[i].fecha}</p>
        </div>`
        }
    }
}

renderizarItems()