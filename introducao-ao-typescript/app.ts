const inputElement = document.getElementById('input') as HTMLInputElement;

interface IAnimal {
    name: string;
    type: 'terrestre' | 'aquático';
    executeGrow(volume: number): void;
};

interface IFelino extends IAnimal {
    visaoNoturna: boolean,
};

const animal: IAnimal = {
    name: 'Elefante',
    type: 'terrestre',
    executeGrow: volume => `${volume}dB`,
};

type IPessoa = {
    nome: string;
    sobrenome: string;
    idade: number;
    sexo: 'Masculino' | 'Feminino';
    altura: number;
    peso: number;
    online: boolean;
};

const pessoa: IPessoa = {
    nome: 'Gildinei',
    sobrenome: 'Anunciação',
    idade: 30,
    sexo: "Masculino",
    altura: 1.83,
    peso: 110,
    online: true,

};

inputElement.addEventListener('input', (event)=> {
    const input = event.currentTarget as HTMLInputElement;
    console.log(input.value);
});