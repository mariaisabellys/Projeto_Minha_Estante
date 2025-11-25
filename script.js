// 1. Variável Global para armazenar nossos livros
// Usamos uma variável global para poder adicionar mais livros depois sem perder os antigos

let biblioteca = [];

// 2. Função para carregar o arquivo JSON
async function carregarLivros() {
    try {
        // O 'fetch' vai buscar o arquivo. É como pedir para um garçom buscar algo na cozinha.
        const resposta = await fetch('livros.json');
        
        // Aqui convertemos a resposta (que vem como texto) para um objeto JavaScript real
        biblioteca = await resposta.json();
        
        // Agora que temos os dados, chamamos a função que desenha os livros na tela
        mostrarLivrosNaTela();
        
    } catch (erro) {
        console.error("Erro ao carregar os livros:", erro);
    }
}
    

// 3. Função para "desenhar" (renderizar) os livros no HTML
function mostrarLivrosNaTela(){
    // Primeiro, vamos "limpar" as estantes para não duplicar livros se chamarmos a função de novo
    const estanteLendo = document.getElementById('estante-lendo');
    const estanteQuero = document.getElementById('estante-quero-ler');
    const estanteLidos = document.getElementById('estante-lidos');

    estanteLendo.innerHTML = '';
    estanteQuero.innerHTML = '';
    estanteLidos.innerHTML = '';

    biblioteca.forEach((livro) => {
        
        // Passo A: Criar o HTML do Card do Livro
        // ${livro.titulo} é como inserimos as variáveis dentro do texto.
        
        // Cálculo simples da porcentagem de leitura para a barra de progresso
        const porcentagem = (livro.pagina_atual / livro.total_paginas) * 100;

        const cardHTML = `
            <div class="livro-card">
                <img src="${livro.capa_url}" alt="Capa de ${livro.titulo}" onerror="this.src='https://via.placeholder.com/150'">
                <div class="livro-info">
                    <h3>${livro.titulo}</h3>
                    <p class="autor">${livro.autor}</p>
                    
                    ${livro.status === 'lendo' ? `
                        <div class="progresso-container">
                            <label>Progresso: ${livro.pagina_atual} de ${livro.total_paginas} pág.</label>
                            <progress value="${livro.pagina_atual}" max="${livro.total_paginas}"></progress>
                            <small>${porcentagem.toFixed(0)}% concluído</small>
                        </div>
                    ` : ''}

                    ${livro.status === 'lido' ? `<p class="concluido">✅ Leitura Concluída!</p>` : ''}
                </div>
            </div>
        `;

        // Passo B: Decidir em qual estante colocar o card
        if (livro.status === 'lendo') {
            estanteLendo.innerHTML += cardHTML;
        } else if (livro.status === 'quero_ler') {
            estanteQuero.innerHTML += cardHTML;
        } else if (livro.status === 'lido') {
            estanteLidos.innerHTML += cardHTML;
        }
    });
}

// --- NOVO CÓDIGO A PARTIR DAQUI ---

// 4. Lógica do Modal (Abrir e Fechar)
const modal = document.getElementById('modal-container');
const btnAbrir = document.getElementById('btn-abrir-modal');
const btnFechar = document.getElementById('btn-fechar-modal');
const formLivro = document.getElementById('form-livro');

// Evento de Clique para ABRIR
btnAbrir.addEventListener('click', () => {
    modal.classList.add('mostrar'); // Adiciona a classe CSS que muda o display para flex
});

// Evento de Clique para FECHAR
btnFechar.addEventListener('click', () => {
    modal.classList.remove('mostrar'); // Remove a classe, voltando a ficar invisível
});

// Fecha se clicar fora do formulário (na parte escura)
modal.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        modal.classList.remove('mostrar');
    }
});

// 5. Salvar Novo Livro
formLivro.addEventListener('submit', (evento) => {
    // PREVINE O COMPORTAMENTO PADRÃO:
    // Por padrão, um formulário recarrega a página. Não queremos isso!
    evento.preventDefault();

    // Capturar os valores digitados nos inputs
    const novoLivro = {
        id: Date.now(), // Gera um ID único baseado na data/hora atual
        titulo: document.getElementById('titulo').value,
        autor: document.getElementById('autor').value,
        total_paginas: Number(document.getElementById('total_paginas').value),
        pagina_atual: 0, // Começa do zero
        capa_url: document.getElementById('capa_url').value || 'https://via.placeholder.com/300x450?text=Sem+Capa',
        status: document.getElementById('status').value
    };

    // Adiciona o novo livro ao nosso array (lista)
    biblioteca.push(novoLivro);

    // Atualiza a tela com o novo livro
    mostrarLivrosNaTela();

    // Fecha o modal e limpa o formulário
    modal.classList.remove('mostrar');
    formLivro.reset();
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarLivros();
});