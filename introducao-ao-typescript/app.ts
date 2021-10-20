interface IUsuario {
    id: string;
    email: string;
    cargo?: 'usuario' | 'super' | 'master';
};

function redirect(usuario: IUsuario) {
    if (usuario.cargo) {
        redirect(usuario);
    };
};