class Pessoa{

    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
        Object.freeze(this);
    }

    get nome(){
        return this._nome;
    }

    get sobrenome(){
        return this._sobrenome
    }

    get nomeCompleto(){
        return this._nome + " " + this._sobrenome;
    }

}