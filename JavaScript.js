const txt = document.querySelector('.txtn1')
const ListaUl = document.querySelector('.list-task')

ListaItens = []

function add() {


    if (txt.value.length == 0) {


        alert('Não há nenhum dados abaixo')

    } else {


        ListaItens.push({

            tarefa: txt.value,
            concluida: false
        })

        txt.value = ''

        mostrarTarefa()
    }

}

function mostrarTarefa() {

    let novali = ''

    ListaItens.forEach((item, pos) => {

        novali += ` <li class="task ${item.concluida && 'done'}">

                     <img src="imagem/checked.png" alt="check-na-tarefa"  onclick="concluirTarefa(${pos})">

                      <p>${item.tarefa}</p>

                      <img src="imagem/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${pos})">

                </li>`

    });

    ListaUl.innerHTML = novali

    //armazena os dados
    localStorage.setItem('lista', JSON.stringify(ListaItens))

}

function concluirTarefa(pos) {

    ListaItens[pos].concluida = !ListaItens[pos].concluida

    mostrarTarefa()

}

function deletarItem(pos) {

    ListaItens.splice(pos, 1)

    mostrarTarefa()
}


//coloca os dados armazenado de volta ao site

function recarregarTarefa() {
    const localStorageTarefa = localStorage.getItem('lista')

    if (localStorageTarefa) {
        ListaItens = JSON.parse(localStorageTarefa)
    }
    mostrarTarefa()
}

recarregarTarefa()
