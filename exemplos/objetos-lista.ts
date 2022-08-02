const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao:  "desenvolvedora"
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao : string} = {
    nome: "Andre",
    idade: 25,
    profissao: "Pintor"
}

const Paula: {nome: string, idade: number, profissao : string} = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora"
}

enum Profissao{
    Professora,
    atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa{
    nome:string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 25,
    profissao : Profissao.Desenvolvedora
}

const monica: Estudante = {
    nome: "Jessica",
    idade: 29,
    materias: ["Matematica Disdcreta", "GEOGRAFIA"]
}

function listar(lista:string[]) {
    for(const item of lista ){
        console.log(' - ', item);
    }
}

listar (monica.materias)