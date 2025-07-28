# desafio_js_oo

Praticando Orientação a Objetos com JavasCript


## :memo: Descrição:
O projeto foi desenvolvido de tal forma a interagir com o usuário. Ao acessar a página index.html, o usuário irá se deparar com um formulário que solicita dados básicos de um veículo qualquer. Os dados são:
- Tipo do veículo (se Carro ou Moto)
- O Nome e Modelo do veículo (ex: Gol G5, Lancer Evo, NSX, CG 125, Cyber Truck)
- Tipo de motor (se à Combustão ou Elétrico)

Ao submeter o formulário, será apresentado do lado do formulário as características do veículo selecionado. Se for um carro elétrico mostrará, além das mensagens padrões, a imagem de um carro elétrico... o mesmo vale para Carro e Moto à combustão ou elétrico.

Por baixo dos panos, ao submeter o formulário e conforme o tipo de veículo, se carro ou moto, será instanciada uma classe. Essa classe herda atributos e um método de sua classe pai. O objeto Carro ou Moto será criado conforme os dados do formulário, que serão passados à classe especializada, através do seu construtor. Com isso, é possível trabalhar com esse objeto no `entrypoint` da aplicação, que está servida no arquivo `js/script.js`.

## :pushpin:Objetivos:
1.
> Criar uma classe genérica chamada "Veículo", contendo os seguintes atributos:
>   - Nome (string) [Nome/modelo do veículo. Ex: Gol, BMW, Kawasaki, etc.]
>   - QuantidadeRodas (number) [indica a quantidade de rodas que o veículo possui.]
>   - TipoMotor (number) [indica o tipo de motor usado pelo veículo] sendo:
  >     - Elétrico = 0
  >     - Combustão = 1

2.
> A classe genérica terá um método comum entre os veículos que deve se chamar 'acelerar()'.
> 
> Este método deverá exibir duas mensagens, uma abaixo da outra, sendo a primeira mensagem o resultado do tipo de motor.
> 
> Se o motor for do tipo Combustão, então a mensagem aparecerá como:
>   - :fuelpump: Acelerando com motor à combustão!
> 
> Se o motor for do tipo Elétrico, então a mensagem aparecerá como:
>   - :battery: Acelerando com motor elétrico!
>
> A segunda mensagem, deverá ser uma interpolação de strings, contendo a seguinte mensagem:
>   - `Acelerando <nome> com <quantidadeRodas> rodas!`;

3.
> Criar duas classes especializadas que herdam da classe abstrata Veículo. Como Veículo possui um método em comum, `acelerar()`, não é necessário sobrescrever o método (override). As classes serão `Carro` e `Moto`, que herdam de `Veículo`;

4.
> Instancie as classes `Carro` e `Moto`.
