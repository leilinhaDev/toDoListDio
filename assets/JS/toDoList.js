function adicionarTarefa() {
    console.log("oi");
    let nomeTarefa = document.getElementById('nomeTarefa').value;
    
    if(nomeTarefa == ''){
        alert('Escreva o nome da tarefa');
        return;
    }
    console.log('adicionado a tarefa', nomeTarefa);

    let divLinhaTarefa = document.createElement('div');
    divLinhaTarefa.classList.add('linhaTarefa');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    console.log('teste div', divLinhaTarefa);
    console.log('teste check', checkbox);

    let spanTarefa = document.createElement('span');
    spanTarefa.innerHTML = nomeTarefa;

    console.log('teste span', spanTarefa);

    divLinhaTarefa.appendChild(checkbox);
    divLinhaTarefa.appendChild(spanTarefa);

    document.getElementById('listaTarefa').appendChild(divLinhaTarefa);
   
    document.getElementById('nomeTarefa').value = '';
}

