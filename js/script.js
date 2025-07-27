import { Carro } from './classes/carro.js';
import { Moto } from './classes/moto.js';

// Obtém o formulário do HTML
const formulario = document.vehicle;

// Adiciona um listener para o evento de submit do formulário
formulario.addEventListener('submit', (e) => {

    e.preventDefault();
    
    if( formulario.vehicle_type.value === 'carro' ) {

        const carro = new Carro(formulario.vehicle_name.value, formulario.engine_type.value);
        const imagem = formulario.engine_type.value === '0' ? '../assets/images/carro_eletrico.jpg' : '../assets/images/carro.png';

        exibeMensagem(carro.acelerar(true).msg_1, carro.acelerar(true).msg_2, imagem);

        // Logando a mensagem de aceleração do carro no console do navegador
        console.log(carro.acelerar());

    } else if ( formulario.vehicle_type.value === 'moto' ) {

        const moto = new Moto(formulario.vehicle_name.value, formulario.engine_type.value);
        const imagem = formulario.engine_type.value === '0' ? '../assets/images/moto_eletrica.jpg' : '../assets/images/moto.png';

        exibeMensagem(moto.acelerar(true).msg_1, moto.acelerar(true).msg_2, imagem);

        // Logando a mensagem de aceleração da moto no console do navegador
        console.log(moto.acelerar());

    } else {

        console.error("Tipo de veículo não reconhecido.");

    }

    // Limpa o formulário após o submit
    formulario.reset();
});

// Função para exibir a mensagens no HTML
const exibeMensagem = (msg_1, msg_2, imagem) => {
    const aside = document.getElementById('aside-tag');
    aside.innerHTML = `
        <div class="image-container background-image">
            <img src="${imagem}" alt="Imagem do veículo" />
        </div>

        <div class="aside-tag-msg">
            <div class="mensagens">
                <h2>Motor: </h2>
                <p>${msg_1}</p>
            </div>
            
            <div class="mensagens">
                <h2>Veículo: </h2>
                <p>${msg_2}</p>
            </div>
        </div>
    `;
}
