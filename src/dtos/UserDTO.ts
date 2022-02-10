import { isConstructorDeclaration } from "typescript";

export class UserDTO {
    nome: string;
    email: string;
    senha: string;

    constructor(nome?: string, email?:string, password?:string) {
        this.nome = nome;
        this.email = email;
        this.senha = password;
    }
}

