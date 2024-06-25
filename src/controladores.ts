import {Request, Response} from 'express'
//CADASTRO DE DADOS PARA CONSULTA
const pessoas = [ 
    {nome: 'Bento',email: 'bento@email.com'},
    {nome: 'Mel',email: 'mel@email.com'},
    {nome: 'Emanuele',email: 'manu@email.com'},
]
export const itemProdutos = (req: Request, res:Response)=>{
//FUNÇÃO DE BUSCA DE PRODUTOS POR PARÂMETRO DE REQUISIÇÃO 
    console.log(req.params.item); 
    return res.send('Cheguei no controlador')
}
export const buscarUsuario = (req: Request,res: Response) => {
//FUNÇÃO DE BUSCA DE USUÁRIOS CADASTRADOS NO ARRAY PESSOAS ATRAVÉZ DE PARÂMETRO DE REQUISIÇÃO
    const {email} = req.params
    const pessoa = pessoas.find((item)=>{
        return item.email === email
    })
    if (!pessoa){
        return res.send('Pessoa não encontrada!')
    }
    return res.send(pessoa)
}
export const buscarUsuarioQuery = (req: Request, res: Response) => {
    //FUNÇÃO DE BUSCA DE USUÁRIOS CADASTRADOS NO ARRAY PESSOAS ATRAVÉZ DE CONSULTA DE REQUISIÇÃO
        const {email} = req.query
        if (!email){
            return res.send('parametro não informado!')
        }
        const pessoa = pessoas.find((item)=>{
            return item.email === email
        })
        if(!pessoa) {
            return res.send('Pessoa não encontrada!')
        }
        return res.send(pessoa)
    
}