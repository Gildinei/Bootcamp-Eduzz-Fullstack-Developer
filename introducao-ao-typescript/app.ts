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

animal.executeGrow(50);

const felino: IFelino = {
    name: 'Leão',
    type: 'terrestre',
    visaoNoturna: true,
};