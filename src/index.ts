import 'dotenv/config'
import express from 'express'

const servidor = express()

servidor.get('/produtos/:item', (req, res)=>{
    console.log(req.params); 
    return res.send('Servidor está ok! Nodemon configurado com o TypeScript')
})
const pessoas = [
    {nome: 'Bento',email: 'bento@email.com'},
    {nome: 'Mel',email: 'mel@email.com'},
    {nome: 'Emanuele',email: 'manu@email.com'},
]
servidor.get('/usuarios/:email', (req, res)=>{
    const {email} = req.params
    const pessoa = pessoas.find((item)=>{
        return item.email === email
    })
    if(!pessoa) {
        return res.send('Pessoa não encontrada!')
    }
    return res.send(pessoa)
})
servidor.listen(process.env.PORT)