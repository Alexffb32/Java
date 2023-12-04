function adicionarTarefa() {
    var novaTarefa = document.getElementById("nova-tarefa").value;
    if (novaTarefa !== "") {
        var lista = document.getElementById("lista-tarefas");
        var novaLi = document.createElement("li");
        novaLi.innerHTML = `<span>${novaTarefa}</span> 
                            <button onclick='marcarConcluida(this)'>Concluída</button>
                            <button onclick='excluirTarefa(this)'>Excluir</button>`;
        lista.appendChild(novaLi);
        document.getElementById("nova-tarefa").value = "";
    }
}

function marcarConcluida(botao) {
    var li = botao.parentNode;
    li.style.backgroundColor = "#d0ffd0";
    li.querySelector("span").style.textDecoration = "line-through";
    li.querySelector("button:nth-child(1)").disabled = true;
    li.querySelector("button:nth-child(2)").disabled = true;
}

function excluirTarefa(botao) {
    var li = botao.parentNode;
    li.remove();
}
