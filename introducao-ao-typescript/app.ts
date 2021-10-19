interface IUsuario {
    id: string;
    email: string;
};

interface IAdmin extends IUsuario {
    cargo: 'super' | 'master';
};

function redirect(usuario: IUsuario | IAdmin) {

};